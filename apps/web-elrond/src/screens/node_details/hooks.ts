import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { ROUNDS, STATS, NODE_DETAILS, IDENTITY, BLOCKS } from '@/api';
import type { NodeDetailsState } from '@/screens/node_details/types';

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

  const handleSetState = useCallback(
    (stateChange: (prevState: NodeDetailsState) => NodeDetailsState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  useEffect(() => {
    const getData = async () => {
      await getNodeDetails();
    };

    const getNodeDetails = async () => {
      try {
        const { data: nodeData } = await axios.get(NODE_DETAILS(router.query.hash as string));

        const newState: Partial<NodeDetailsState> = {
          loading: false,
        };

        // =============================================
        // Profile
        // =============================================

        const formatProfile = async () => {
          let validator = '';
          const nodeDataIdentity = nodeData?.identity ?? '';
          if (nodeDataIdentity) {
            const identity = await getIdentity(nodeDataIdentity);
            const nodeDataProvider = nodeData?.provider ?? '';
            validator = identity || nodeDataProvider;
          }

          return {
            name: nodeData?.name ?? '',
            version: nodeData?.version ?? '',
            pubkey: nodeData?.bls ?? '',
            rating: nodeData?.rating ?? 0,
            identity: nodeDataIdentity,
            validator,
          };
        };

        newState.profile = await formatProfile();

        // =============================================
        // Overview
        // =============================================

        const formatOverview = () => ({
          shard: nodeData?.shard ?? 0,
          type: nodeData?.type ?? '',
          status: nodeData?.status ?? '',
          online: nodeData?.oneline ?? false,
          instances: nodeData?.instances ?? 0,
        });

        newState.overview = formatOverview();

        // =============================================
        // Epoch
        // =============================================
        let epoch = 0;
        if (nodeData?.type ?? ''.toLowerCase() === 'validator') {
          const getEpoch = async () => {
            const { data: statsData } = await axios.get(STATS);
            return statsData?.epoch ?? 0;
          };

          epoch = await getEpoch();
        }
        // =============================================
        // Stats
        // =============================================

        if (nodeData?.type ?? ''.toLowerCase() === 'validator') {
          const formatStats = () => ({
            ignoredSignatures: nodeData?.validatorIgnoredSignatures ?? 0,
            leaderSuccess: nodeData?.leaderSuccess ?? 0,
            leaderFailure: nodeData?.leaderFailure ?? 0,
            validatorSuccess: nodeData?.validatorSuccess ?? 0,
            validatorFailure: nodeData?.validatorFailure ?? 0,
          });
          newState.stats = formatStats();
        }

        // =============================================
        // Consensus
        // =============================================

        if (nodeData?.type ?? ''.toLowerCase() === 'validator') {
          const formatConsensus = async () => {
            const validator = nodeData?.bls ?? '';
            const shard = nodeData?.shard ?? '';
            const consensusData = await getConsensus({
              validator,
              shard,
              epoch,
            });
            return consensusData.map((x) => ({
              round: x.round,
              proposed: x.blockWasProposed,
            }));
          };
          newState.consensus = await formatConsensus();
        }

        // =============================================
        // Blocks
        // =============================================

        if (nodeData?.type ?? ''.toLowerCase() === 'validator') {
          const formatBlocks = async () => {
            const validator = nodeData?.bls ?? '';
            const shard = nodeData?.shard ?? '';
            const blocksData = await getBlocks({
              validator,
              shard,
              epoch,
            });

            return blocksData.map((x) => ({
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

        handleSetState((prevState) => ({ ...prevState, ...newState }));
      } catch (error) {
        handleSetState((prevState) => ({
          ...prevState,
          loading: false,
          exists: false,
        }));
        console.error((error as Error).message);
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

    const getConsensus = async ({
      validator,
      shard,
      epoch,
    }: {
      validator: string;
      shard: number;
      epoch: number;
    }) => {
      const { data: roundsData } = await axios.get<
        Array<{
          round: number;
          blockWasProposed: boolean;
        }>
      >(ROUNDS, {
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

    const getBlocks = async ({
      validator,
      shard,
      epoch,
    }: {
      validator: string;
      shard: number;
      epoch: number;
    }) => {
      const { data: blocksData } = await axios.get<
        Array<{
          round: number;
          timestamp: number;
          hash: string;
          txCount: number;
          shard: number;
          sizeTxs: number;
        }>
      >(BLOCKS, {
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
