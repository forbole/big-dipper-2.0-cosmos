import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import {
  useValidatorsAddressListQuery,
  ValidatorsAddressListQuery,
  useMarketDataQuery,
  MarketDataQuery,
} from '@graphql/types';
import { chainConfig } from '@src/chain_config';
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
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    } = {};

    // ===============================
    // Set up initial dictionary and axios calls
    // ===============================
    const promiseIndexTracker = {};
    const promises = [];

    data.validator.forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const selfAddress = x.validatorInfo.selfDelegateAddress;
      const { consensusAddress } = x.validatorInfo;

      validators[validatorAddress] = {
        moniker: R.pathOr('Shy Validator', ['validatorDescriptions', 0, 'moniker'], x),
      };

      selfDelegateAddresses[selfAddress] = validators[validatorAddress];
      consensusAddresses[consensusAddress] = validators[validatorAddress];

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
    };
  };

  const findAddress = (address: string) => {
    if (new RegExp(/^(desmosvaloper)/).test(address)) {
      return state.validators[address] ?? null;
    }
    if (new RegExp(/^(desmos)/).test(address)) {
      return state.selfDelegateAddresses[address] ?? null;
    }
    return null;
  };

  return {
    validatorsAddresses: state,
    loading: state.loading,
    findAddress,
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
        setState((prevState) => ({
          ...prevState,
          rawData: formatUseChainIdQuery(data),
          loading: false,
        }));
      },
    },
  );

  const formatUseChainIdQuery = (data: MarketDataQuery) => {
    // initial
    const { rawData } = initalState.market;
    const { inflation } = rawData; // update once on market
    let { communityPool } = rawData;
    // formats
    const price = data.tokenPrice[0]?.price ?? state.rawData.price;
    const marketCap = data.tokenPrice[0]?.marketCap ?? state.rawData.marketCap;
    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.base);
    if (communityPoolCoin) {
      communityPool = communityPoolCoin.amount;
    }

    return ({
      price,
      marketCap,
      inflation,
      communityPool,
    });
  };

  const formatUi = () => {
    const {
      rawData,
    } = state;
    return ({
      price: `$${numeral(state.rawData.price).format('0,0.[00]')}`,
      marketCap: `$${numeral(state.rawData.marketCap).format('0,0.[00]')}`,
      inflation: 'N/A',
      communityPool: `${numeral(formatDenom(rawData.communityPool)).format('0,0.00')} ${chainConfig.display.toUpperCase()}`,
    });
  };

  return {
    loading: state.loading,
    rawData: state.rawData,
    uiData: formatUi(),
  };
};
