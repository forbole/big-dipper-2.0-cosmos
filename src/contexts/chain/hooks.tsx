import { useState } from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { bech32 } from 'bech32';
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
        && x.validatorDescriptions[0].avatarUrl
      ) {
        validators[validatorAddress].imageUrl = x.validatorDescriptions[0].avatarUrl;
      }
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

  const validatorToDelegatorAddress = (validatorAddress:string) => {
    const decode = bech32.decode(validatorAddress).words;
    return bech32.encode(chainConfig.prefix.account, decode);
  };

  return {
    validatorsAddresses: state,
    loading: state.loading,
    findAddress,
    findOperator,
    validatorToDelegatorAddress,
  };
};

export const useMarket = (initalState: ChainState) => {
  const [state, setState] = useState(initalState.market);

  useMarketDataQuery(
    {
      variables: {
        denom: chainConfig.primaryTokenUnit,
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
    const price = data.tokenPrice[0]?.price ?? state.price;
    const marketCap = data.tokenPrice[0]?.marketCap ?? state.marketCap;
    const [communityPoolCoin] = R.pathOr([], ['communityPool', 0, 'coins'], data).filter((x) => x.denom === chainConfig.primaryTokenUnit);
    const inflation = R.pathOr(0, ['inflation', 0, 'value'], data);

    const supply = formatDenom(
      numeral(getDenom(
        R.pathOr([], ['supply', 0, 'coins'], data),
        chainConfig.primaryTokenUnit,
      ).amount).value(),
      chainConfig.primaryTokenUnit,
    );
    if (communityPoolCoin) {
      communityPool = formatDenom(communityPoolCoin.amount, communityPoolCoin.denom);
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
