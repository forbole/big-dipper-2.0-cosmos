import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import Big from 'big.js';
import { IDENTITIES, PROVIDERS, STAKE } from '@api';
import { formatToken, formatNumber } from 'ui/utils/format_token';
import chainConfig from 'ui/chainConfig';
import type { ValidatorsState } from './types';

export const useValidators = () => {
    const [state, setState] = useState<ValidatorsState>({
    loading: true,
    exists: true,
    tab: 0,
    search: '',
    validators: [],
  });

  const handleTabChange = useCallback((_event: any, newValue: number) => {
    setState((prevState) => ({
      ...prevState,
      tab: newValue,
    }));
  }, []);

  const handleSetState = useCallback((stateChange: Partial<ValidatorsState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  const handleSearch = useCallback(
    (value: string) => {
      handleSetState({
        search: value,
      });
    },
    [handleSetState]
  );

  useEffect(() => {
    const getValidators = async () => {
      try {
        const [validatorsDataRaw, providersDataRaw, stakeDataRaw] = await Promise.allSettled([
          axios.get(IDENTITIES),
          axios.get(PROVIDERS),
          axios.get(STAKE),
        ]);

        const validatorsData = R.pathOr([], ['value', 'data'], validatorsDataRaw);
        const providersData = R.pathOr([], ['value', 'data'], providersDataRaw);
        const stakeData = R.pathOr({}, ['value', 'data'], stakeDataRaw);

        // identities
        const identities: { [key: string]: any } = {};
        validatorsData.forEach((x: any) => {
          const identity = R.pathOr('', ['identity'], x);
          const imageUrl = R.pathOr('', ['avatar'], x);
          const name = R.pathOr('', ['name'], x);

          const validator: AvatarName = {
            address: identity,
            imageUrl,
            name,
          };

          if (identity) {
            identities[identity] = validator;
          }
        });

        // get the unique keys first
        const allValidators: any = {};
        const allValidatorData: any = {};
        const allProviderData: any = {};
        const allNodes: any = {};

        validatorsData.forEach((x: any) => {
          const identity = R.pathOr(null, ['identity'], x);
          const validator = R.pathOr(
            {
              address: R.pathOr('', ['name'], x),
              imageUrl: '',
              name: R.pathOr('', ['name'], x),
            },
            [identity ?? ''],
            identities
          );
          if (!allValidators[validator.address]) {
            allValidators[validator.address] = validator;
          }
          allValidatorData[validator.address] = x;
          // node edgecase
          if (!identities[identity ?? '']) {
            allNodes[validator.address] = true;
          }
        });

        providersData.forEach((x: any) => {
          const identity = R.pathOr(null, ['identity'], x);
          const validator = R.pathOr(
            {
              address: R.pathOr('', ['provider'], x),
              imageUrl: '',
              name: R.pathOr('', ['provider'], x),
            },
            [identity ?? ''],
            identities
          );

          // validator should be unique
          if (!allValidators[validator.address]) {
            allValidators[validator.address] = validator;
          }
          // should i care about this?
          allProviderData[validator.address] = x;
        });

        const totalStaked = R.pathOr('0', ['totalStaked'], stakeData);

        const validators = R.keys(allValidators).map((x) => {
          const validator = allValidators[x];
          const validatorData = allValidatorData[x] || {};
          const providerData = allProviderData[x] || {};
          const isNode = allNodes[x] || false;
          const data = R.mergeAll([providerData, validatorData]);

          const locked = R.pathOr('0', ['locked'], data);
          const stakePercentString = Big(locked)
            .div(totalStaked === '0' ? 1 : totalStaked)
            .times(100)
            .toFixed(3);

          return {
            validator,
            stake: formatToken(R.pathOr('0', ['stake'], data), chainConfig.primaryTokenUnit),
            locked: formatToken(locked, chainConfig.primaryTokenUnit),
            nodes: R.pathOr(0, ['validators'], data),
            commission: R.pathOr(undefined, ['serviceFee'], data),
            apr: R.pathOr(undefined, ['apr'], data),
            delegators: R.pathOr(undefined, ['numUsers'], data),
            stakePercent: Number(formatNumber(stakePercentString, 2)),
            isNode,
          };
        });

        handleSetState({
          loading: false,
          validators,
        });
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.error((error as any).message);
      }
    };

    getValidators();
  }, [handleSetState]);

  return {
    state,
    handleTabChange,
    handleSearch,
  };
};
