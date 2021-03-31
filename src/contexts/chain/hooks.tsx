import { useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import {
  useValidatorsAddressListQuery,
  ValidatorsAddressListQuery,
} from '@graphql/types';
import { ChainState } from './types';

export const useValidatorsAddress = (initialstate:ChainState) => {
  const [state, setState] = useState<{
    validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
    selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
  }>(initialstate.validatorsAddresses);

  useValidatorsAddressListQuery({
    onCompleted: async (data) => {
      const formattedList = await formatValidatorsAddressList(data);
      setState(formattedList);
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

    // ===============================
    // Set up initial dictionary and axios calls
    // ===============================
    const promiseIndexTracker = {};
    const promises = [];

    data.validator.forEach((x) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const selfAddress = x.validatorInfo.selfDelegateAddress;

      validators[validatorAddress] = {
        moniker: R.pathOr('Shy Validator', ['validatorDescriptions', 0, 'moniker'], x),
      };
      selfDelegateAddresses[selfAddress] = validators[validatorAddress];

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
    findAddress,
  };
};
