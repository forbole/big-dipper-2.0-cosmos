import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import numeral from 'numeral';
import {
  useValidatorsAddressListQuery,
  ValidatorsAddressListQuery,
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types';
import { chainConfig } from '@configs';
import { formatDenom } from '@utils/format_denom';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { getDenom } from '@utils/get_denom';
import { ChainState } from './types';

export const useValidatorsAddress = (initialstate:ChainState) => {
  const [state, setState] = useState(initialstate.validatorsAddresses);

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  useValidatorsAddressListQuery({
    onError: () => {
      handleSetState({
        loading: false,
      });
    },
    onCompleted: async (data) => {
      const formattedList = await formatValidatorsAddressList(data);
      handleSetState({
        ...formattedList,
        loading: false,
      });
    },
  });

  const formatValidatorsAddressList = async (data: ValidatorsAddressListQuery) => {
    const validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    } = {};
    const selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    } = {};
    const consensusAddresses: {
      [key: string]: string;
    } = {};

    // ===============================
    // Set up initial dictionary and axios calls
    // ===============================
    const promiseIndexTracker = {};
    const promises = [];

    data?.validator?.forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const selfAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;
      const defaultMoniker = getMiddleEllipsis(validatorAddress, {
        beginning: 6, ending: 10,
      });
      const defaultSelfDelegateMoniker = getMiddleEllipsis(selfAddress, {
        beginning: 6, ending: 10,
      });

      validators[validatorAddress] = {
        moniker: R.pathOr(defaultMoniker, ['validatorDescriptions', 0, 'moniker'], x),
      };

      selfDelegateAddresses[selfAddress] = validators[validatorAddress];
      // edge case if validator has no moniker
      // we need to display the self delegation address accordingly
      if (validators[validatorAddress].moniker === defaultMoniker) {
        selfDelegateAddresses[selfAddress] = R.clone(validators[validatorAddress]);
        selfDelegateAddresses[selfAddress].moniker = defaultSelfDelegateMoniker;
      }

      consensusAddresses[consensusAddress] = validatorAddress;

      if (
        x.validatorDescriptions.length
        && x.validatorDescriptions[0].identity
        && x.validatorDescriptions[0].identity.length === 16
      ) {
        const keyBaseIdentity = x.validatorDescriptions[0].identity;
        // batch promises and index
        const promise = axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${keyBaseIdentity}&fields=basics&fields=pictures`);

        promises.push(promise);
        promiseIndexTracker[promises.length - 1] = validatorAddress;
      }
    });

    // ===============================
    // Set imageUrl in to the dictionary
    // ===============================
    await Promise.allSettled(promises)
      .then((results) => {
        results.forEach((result, index) => {
          const keybaseStatus = R.pathOr(null, ['value', 'data', 'status', 'code'], result);
          const keybaseData = R.pathOr(null, ['value', 'data', 'them', 0], result);
          if (
            result.status === 'fulfilled'
            && keybaseStatus === 0
            && keybaseData
          ) {
            const validator = promiseIndexTracker[index];
            const imageUrl = R.pathOr(null, ['pictures', 'primary', 'url'], keybaseData);

            if (validator) {
              validators[validator].imageUrl = imageUrl;
            }
          }
        });
      });

    return {
      validators,
      selfDelegateAddresses,
      consensusAddresses,
    };
  };

  const findAddress = (address: string): {
    imageUrl: string | null;
    moniker: string;
  } => {
    const validatorRegex = `^(${chainConfig.prefix.validator})`;
    const userRegex = `^(${chainConfig.prefix.account})`;
    let results = {
      imageUrl: null,
      moniker: address,
    };
    if (new RegExp(validatorRegex).test(address)) {
      if (state.validators[address]) {
        results = state.validators[address];
      }
    }
    if (new RegExp(userRegex).test(address)) {
      if (state.selfDelegateAddresses[address]) {
        results = state.selfDelegateAddresses[address];
      }
    }
    return results;
  };

  const findOperator = (consensusAddress: string) => {
    return state.consensusAddresses[consensusAddress] ?? null;
  };

  return {
    validatorsAddresses: state,
    loading: state.loading,
    findAddress,
    findOperator,
  };
};

export const useMarket = (initalState: ChainState) => {
  const [state, setState] = useState(initalState.market);

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig.display,
      },
      onError: () => {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      },
      onCompleted: (data) => {
        if (data) {
          setState((prevState) => ({
            ...prevState,
            ...formatUseChainIdQuery(data),
            loading: false,
          }));
        }
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery) => {
    // initial
    let { communityPool } = initalState.market;

    // formats
    const price = formatDenom(data.tokenPrice[0]?.price ?? state.price);
    const marketCap = data.tokenPrice[0]?.marketCap ?? state.marketCap;
    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.base);
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);
    const supply = formatDenom(
      numeral(getDenom(R.pathOr([], ['supply', 0, 'coins'], data)).amount).value(),
    );
    if (communityPoolCoin) {
      communityPool = formatDenom(communityPoolCoin.amount);
    }

    return ({
      price,
      supply,
      marketCap,
      inflation,
      communityPool,
    });
  };

  return {
    state,
  };
};
