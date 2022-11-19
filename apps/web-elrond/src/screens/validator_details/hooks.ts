import { useCallback, useEffect, useState } from 'react';
import * as R from 'ramda';
import Big from 'big.js';
import axios from 'axios';
import chainConfig from 'ui/chainConfig';
import { useRouter } from 'next/router';
import { IDENTITY, PROVIDERS, PROVIDER_DETAILS, STAKE } from '@api';
import { isBech32 } from '@utils/bech32';
import { formatToken, formatNumber } from 'ui/utils/format_token';
import type { ValidatorDetailsState } from './types';

const defaultTokenUnit: TokenUnit = {
  value: '0',
  baseDenom: '',
  displayDenom: '',
  exponent: 0,
};

export const useValidatorDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ValidatorDetailsState>({
    loading: true,
    exists: true,
    isProvider: false,
    contract: null,
    stake: {
      totalStaked: defaultTokenUnit,
      locked: defaultTokenUnit,
      stake: defaultTokenUnit,
      topUp: defaultTokenUnit,
      stakePercent: 0,
    },
    profile: {
      name: '',
      imageUrl: '',
      description: '',
    },
    overview: {
      location: '',
      website: '',
      identity: '',
      stakeDistribution: [],
    },
  });

  const handleSetState = useCallback((stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  }, []);

  useEffect(() => {
    const getValidator = async () => {
      try {
        const identityData = await getIdentity();
        const providerData = await getProvider();
        const isProvider = !!providerData;

        const newState: any = {
          loading: false,
          isProvider,
        };

        // =====================================
        // contract
        // =====================================
        if (isProvider) {
          const getContract = () => {
            return {
              address: R.pathOr('', ['provider'], providerData),
              locked: formatToken(
                R.pathOr('0', ['locked'], providerData),
                chainConfig.primaryTokenUnit
              ),
              nodes: R.pathOr(0, ['numNodes'], providerData),
              apr: R.pathOr(0, ['apr'], providerData),
              commission: R.pathOr(0, ['serviceFee'], providerData),
              delegationCap: formatToken(
                R.pathOr('0', ['delegationCap'], providerData),
                chainConfig.primaryTokenUnit
              ),
              delegators: R.pathOr(0, ['numUsers'], providerData),
            };
          };

          newState.contract = getContract();
        }

        // =====================================
        // stake
        // =====================================
        const getStake = async () => {
          const { data: stakeData } = await axios.get(STAKE);
          let reference;
          if (identityData) {
            reference = identityData;
          } else {
            reference = providerData;
          }
          const locked = R.pathOr('0', ['locked'], reference);
          const totalStaked = R.pathOr('0', ['totalStaked'], stakeData);

          const stakePercentString = Big(locked)
            .div(totalStaked === '0' ? 1 : totalStaked)
            .times(100)
            .toFixed(3);

          return {
            locked: formatToken(locked, chainConfig.primaryTokenUnit),
            stake: formatToken(R.pathOr('0', ['stake'], reference), chainConfig.primaryTokenUnit),
            topUp: formatToken(R.pathOr('0', ['topUp'], reference), chainConfig.primaryTokenUnit),
            totalStaked: formatToken(totalStaked, chainConfig.primaryTokenUnit),
            stakePercent: Number(formatNumber(stakePercentString, 2)),
          };
        };
        newState.stake = await getStake();

        // =====================================
        // profile
        // =====================================
        const getProfile = () => {
          if (identityData) {
            return {
              name: R.pathOr('', ['name'], identityData),
              imageUrl: R.pathOr('', ['avatar'], identityData),
              description: R.pathOr('', ['description'], identityData),
            };
          }
          return {
            name: R.pathOr('', ['provider'], providerData),
            imageUrl: '',
            description: '',
          };
        };
        newState.profile = await getProfile();

        // =====================================
        // overview
        // =====================================
        const getOverview = () => {
          // distribution
          let distribution: any[] = [];
          if (identityData) {
            const keys = R.keys(R.pathOr([], ['distribution'], identityData));
            distribution = keys.map((x: any) => {
              return {
                key: x,
                value: R.pathOr(0, ['distribution', x], identityData),
              };
            });
          }

          return {
            location: R.pathOr('', ['location'], identityData),
            website: R.pathOr('', ['website'], identityData),
            identity: R.pathOr('', ['identity'], identityData),
            stakeDistribution: distribution,
          };
        };
        newState.overview = await getOverview();

        handleSetState(newState);
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.log((error as any).message);
      }
    };

    const getIdentity = async () => {
      try {
        if (isBech32(router.query.identity as string)) {
          return null;
        }
        const { data: identityData } = await axios.get(IDENTITY(router.query.identity as string));
        return identityData;
      } catch {
        return null;
      }
    };

    const getProvider = async () => {
      try {
        let providerData = null;
        if (isBech32(router.query.identity as string)) {
          const { data: providerRawData } = await axios.get(
            PROVIDER_DETAILS(router.query.identity as string)
          );
          providerData = providerRawData;
        } else {
          const { data: providerRawData } = await axios.get(PROVIDERS, {
            params: {
              size: 1,
              identity: router.query.identity,
            },
          });
          providerData = R.pathOr(null, [0], providerRawData);
        }

        return providerData;
      } catch {
        return null;
      }
    };

    getValidator();
  }, [handleSetState, router.query.identity]);

  return {
    state,
  };
};
