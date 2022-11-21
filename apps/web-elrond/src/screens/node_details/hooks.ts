import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { ROUNDS, STATS, NODE_DETAILS, IDENTITY, BLOCKS } from '@api';
import type { NodeDetailsState } from './types';

export const useNodeDetails = () => {
  const router = useRouter();
    const [state, setState] = useState<NodeDetailsState>({
    loading: true,
    exists: true,
    profile: {
      name: '',
      version: '',
      pubkey: '',
      validator: '',
      identity: '',
      rating: 0,
    },
    overview: {
      shard: 0,
      type: '',
      status: '',
      online: false,
      instances: 0,
    },
    stats: {
      ignoredSignatures: 0,
      leaderSuccess: 0,
      leaderFailure: 0,
      validatorSuccess: 0,
      validatorFailure: 0,
    },
    consensus: [],
    blocks: [],
  });

  const handleSetState = useCallback((stateChange: Partial<NodeDetailsState>) => {
    setState((prevState) => {
      const newState = { ...prevState, ...stateChange };
      return R.equals(prevState, newState) ? prevState : newState;
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      await getNodeDetails();
    };

    const getNodeDetails = async () => {
      try {
        const { data: nodeData } = await axios.get(NODE_DETAILS(router.query.hash as string));

        const newState: any = {
          loading: false,
        };

        // =============================================
        // Profile
        // =============================================

        const formatProfile = async () => {
          let validator = '';
          const nodeDataIdentity = R.pathOr('', ['identity'], nodeData);
          if (nodeDataIdentity) {
            const identity = await getIdentity(nodeDataIdentity);
            const nodeDataProvider = R.pathOr('', ['provider'], nodeData);
            validator = identity || nodeDataProvider;
          }

          return {
            name: R.pathOr('', ['name'], nodeData),
            version: R.pathOr('', ['version'], nodeData),
            pubkey: R.pathOr('', ['bls'], nodeData),
            rating: R.pathOr(0, ['rating'], nodeData),
            identity: nodeDataIdentity,
            validator,
          };
        };

        newState.profile = await formatProfile();

        // =============================================
        // Overview
        // =============================================

        const formatOverview = () => ({
          shard: R.pathOr(0, ['shard'], nodeData),
          type: R.pathOr('', ['type'], nodeData),
          status: R.pathOr('', ['status'], nodeData),
          online: R.pathOr(false, ['online'], nodeData),
          instances: R.pathOr(0, ['instances'], nodeData),
        });

        newState.overview = formatOverview();

        // =============================================
        // Epoch
        // =============================================
        let epoch = 0;
        if (R.pathOr('', ['type'], nodeData).toLowerCase() === 'validator') {
          const getEpoch = async () => {
            const { data: statsData } = await axios.get(STATS);
            return R.pathOr(0, ['epoch'], statsData);
          };

          epoch = await getEpoch();
        }
        // =============================================
        // Stats
        // =============================================

        if (R.pathOr('', ['type'], nodeData).toLowerCase() === 'validator') {
          const formatStats = () => ({
            ignoredSignatures: R.pathOr(0, ['validatorIgnoredSignatures'], nodeData),
            leaderSuccess: R.pathOr(0, ['leaderSuccess'], nodeData),
            leaderFailure: R.pathOr(0, ['leaderFailure'], nodeData),
            validatorSuccess: R.pathOr(0, ['validatorSuccess'], nodeData),
            validatorFailure: R.pathOr(0, ['validatorFailure'], nodeData),
          });
          newState.stats = formatStats();
        }

        // =============================================
        // Consensus
        // =============================================

        if (R.pathOr('', ['type'], nodeData).toLowerCase() === 'validator') {
          const formatConsensus = async () => {
            const validator = R.pathOr('', ['bls'], nodeData);
            const shard = R.pathOr('', ['shard'], nodeData);
            const consensusData = await getConsensus({
              validator,
              shard,
              epoch,
            });
            return consensusData.map((x: any) => ({
              round: x.round,
              proposed: x.blockWasProposed,
            }));
          };
          newState.consensus = await formatConsensus();
        }

        // =============================================
        // Blocks
        // =============================================

        if (R.pathOr('', ['type'], nodeData).toLowerCase() === 'validator') {
          const formatBlocks = async () => {
            const validator = R.pathOr('', ['bls'], nodeData);
            const shard = R.pathOr('', ['shard'], nodeData);
            const blocksData = await getBlocks({
              validator,
              shard,
              epoch,
            });

            return blocksData.map((x: any) => ({
              block: x.round,
              timestamp: x.timestamp,
              hash: x.hash,
              txs: x.txCount,
              shard: x.shard,
              size: x.sizeTxs,
            }));
          };
          newState.blocks = await formatBlocks();
        }

        handleSetState(newState);
      } catch (error) {
        handleSetState({
          loading: false,
          exists: false,
        });
        console.error((error as any).message);
      }
    };

    const getIdentity = async (identity: string) => {
      try {
        const { data: identityData } = await axios.get(IDENTITY(identity));
        return identityData.name;
      } catch (error) {
        return null;
      }
    };

    const getConsensus = async ({ validator, shard, epoch }: any) => {
      const { data: roundsData } = await axios.get(ROUNDS, {
        params: {
          size: 138,
          from: 0,
          validator,
          shard,
          epoch,
        },
      });

      return roundsData || [];
    };

    const getBlocks = async ({ validator, shard, epoch }: any) => {
      const { data: blocksData } = await axios.get(BLOCKS, {
        params: {
          // size: 25,
          size: 15,
          from: 0,
          validator,
          shard,
          epoch,
        },
      });
      return blocksData || [];
    };

    getData();
  }, [handleSetState, router.query.hash]);

  return {
    state,
  };
};
