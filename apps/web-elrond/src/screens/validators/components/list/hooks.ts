import { ComponentProps, useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import axios from 'axios';
import Big from 'big.js';
import { IDENTITIES, PROVIDERS, STAKE } from '@/api';
import { formatToken, formatNumber } from '@/utils/format_token';
import chainConfig from '@/chainConfig';
import type { ValidatorsState } from '@/screens/validators/components/list/types';
import Tabs from '@material-ui/core/Tabs';

type ValidatorData = {
  identity: string;
  avatar: string;
  name: string;
  locked: string;
  validators: number;
  stake: number;
  apr: number;
  serviceFee: number;
  numUsers: number;
};
type ProviderData = { identity: string; provider: string };

export const useValidators = () => {
  const [state, setState] = useState<ValidatorsState>({
    loading: true,
    exists: true,
    tab: 0,
    search: '',
    validators: [],
  });

  const handleTabChange: ComponentProps<typeof Tabs>['onChange'] = useCallback(
    (_event, newValue) => {
      setState((prevState) => ({
        ...prevState,
        tab: newValue,
      }));
    },
    []
  );

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

        if (validatorsDataRaw.status !== 'fulfilled') throw validatorsDataRaw.reason;
        if (providersDataRaw.status !== 'fulfilled') throw providersDataRaw.reason;
        if (stakeDataRaw.status !== 'fulfilled') throw stakeDataRaw.reason;

        const validatorsData: Array<ValidatorData> = validatorsDataRaw?.value?.data ?? [];
        const providersData: Array<ProviderData> = providersDataRaw?.value?.data ?? [];
        const stakeData: { totalStaked: string } = stakeDataRaw?.value?.data ?? {};

        // identities
        const identities: { [key: string]: AvatarName } = {};
        validatorsData.forEach((x) => {
          const identity = x?.identity ?? '';
          const imageUrl = x?.avatar ?? '';
          const name = x?.name ?? '';

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
        const allValidators: { [k: string]: AvatarName } = {};
        const allValidatorData: { [k: string]: ValidatorData } = {};
        const allProviderData: { [k: string]: ProviderData } = {};
        const allNodes: { [k: string]: boolean } = {};

        validatorsData.forEach((x) => {
          const identity = x?.identity ?? null;
          const validator = identities?.[identity ?? ''] ?? {
            address: x?.name ?? '',
            imageUrl: '',
            name: x?.name ?? '',
          };
          if (!allValidators[validator.address]) {
            allValidators[validator.address] = validator;
          }
          allValidatorData[validator.address] = x;
          // node edgecase
          if (!identities[identity ?? '']) {
            allNodes[validator.address] = true;
          }
        });

        providersData.forEach((x) => {
          const identity = x?.identity ?? null;
          const validator = identities?.[identity ?? ''] ?? {
            address: x?.provider ?? '',
            imageUrl: '',
            name: x?.provider ?? '',
          };

          // validator should be unique
          if (!allValidators[validator.address]) {
            allValidators[validator.address] = validator;
          }
          // should i care about this?
          allProviderData[validator.address] = x;
        });

        const totalStaked = Big(stakeData?.totalStaked || 0);

        const validators = R.keys(allValidators).map((x) => {
          const validator = allValidators[x];
          const validatorData = allValidatorData[x] || {};
          const providerData = allProviderData[x] || {};
          const isNode = allNodes[x] || false;
          const data = R.mergeAll([providerData, validatorData]) as ValidatorData & ProviderData;

          const locked = data?.locked ?? '0';
          const stakePercentString = !totalStaked.eq(0)
            ? Big(locked).div(totalStaked)?.times(100).toFixed(3) ?? ''
            : '';

          return {
            validator,
            stake: formatToken(data?.stake ?? '0', chainConfig().primaryTokenUnit),
            locked: formatToken(locked, chainConfig().primaryTokenUnit),
            nodes: data?.validators ?? 0,
            commission: data?.serviceFee,
            apr: data?.apr,
            delegators: data?.numUsers,
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
        console.error((error as Error).message);
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
