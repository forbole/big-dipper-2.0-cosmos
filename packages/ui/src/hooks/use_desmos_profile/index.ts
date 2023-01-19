/* eslint-disable no-nested-ternary */
import { useApolloClient } from '@apollo/client';
import * as R from 'ramda';
import { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import chainConfig from '@/chainConfig';
import {
  DesmosProfileDocument,
  DesmosProfileDtagDocument,
  DesmosProfileLinkDocument,
  DesmosProfileQuery,
} from '@/graphql/types/profile_types';
import useShallowMemo from '@/hooks/useShallowMemo';
import type { Options } from '@/hooks/use_desmos_profile/types';
import { readDelegatorAddresses, writeProfile } from '@/recoil/profiles/selectors';
import { isValidAddress } from '@/utils/prefix_convert';

const { prefix } = chainConfig();
const userRegex = new RegExp(`^(${prefix.account})`);

/**
 * It takes an array of addresses and returns a formatted profile object
 * @param {Options} options - Options
 * @returns The return value is an object with the following properties:
 */

const LIMIT = 20;

export const useDesmosProfile = (options: Options) => {
  const { addresses, skip } = options;
  const addressesMemo = useShallowMemo(addresses);
  const delegatorAddresses = useRecoilValue(readDelegatorAddresses(addressesMemo));
  const delegatorAddressesMemo = useShallowMemo(
    delegatorAddresses.map((a, i) => a || addresses[i])
  );
  const setAvatarName = useRecoilCallback(
    ({ set }) =>
      (address: string, avatarName: AvatarName | null) =>
        set(writeProfile(address), (prevState) =>
          R.equals(prevState, avatarName) ? prevState : avatarName
        ),
    []
  );
  const client = useApolloClient();
  const [data, setData] = useState<DesmosProfile[]>([]);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    if (skip || !addressesMemo?.[0]) {
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const isAddress =
          addressesMemo[0]?.startsWith('desmos') && isValidAddress(addressesMemo[0]);
        const isDTag = !isAddress && addressesMemo[0]?.startsWith('@');
        const query =
          (isAddress && DesmosProfileDocument) ||
          (isDTag && DesmosProfileDtagDocument) ||
          DesmosProfileLinkDocument;
        const batches = R.splitEvery(isDTag ? 1 : LIMIT, delegatorAddressesMemo);
        const promises = batches.reduce(
          (promise, batch) =>
            promise.then((prevAll) =>
              client
                .query<DesmosProfileQuery>({
                  query,
                  variables: isDTag
                    ? {
                        dtag: batch[0].replace(/^@/, ''),
                      }
                    : {
                        addresses: batch,
                      },
                })
                .then((cur) => {
                  const profiles = formatDesmosProfile(cur.data);
                  profiles.forEach((profile) => {
                    profile.connections.forEach((connection) => {
                      const { identifier } = connection;
                      if (userRegex.test(identifier)) {
                        setAvatarName(identifier, {
                          name: profile.nickname,
                          address: identifier,
                          imageUrl: profile.imageUrl,
                        });
                      }
                    });
                  });
                  return [...prevAll, ...profiles];
                })
            ),
          Promise.resolve<DesmosProfile[]>([])
        );
        const newState = (await promises) ?? [];
        setData((prevState) => (R.equals(prevState, newState) ? prevState : newState));
      } catch (e) {
        console.error(e);
        setError(e);
      }

      setLoading(false);
    })();
  }, [client, addressesMemo, skip, setAvatarName, delegatorAddressesMemo]);

  return { data, loading, error };
};

/**
 * It takes a DesmosProfileQuery object and returns a DesmosProfile object
 * @param {DesmosProfileQuery | undefined} data - DesmosProfileQuery | undefined
 * @returns A DesmosProfile object
 */
function formatDesmosProfile(data: DesmosProfileQuery | undefined): DesmosProfile[] {
  if (!data?.profile?.length) {
    return [];
  }

  return data.profile.map((profile) => {
    const nativeData = {
      network: 'native',
      identifier: profile.address,
      creationTime: profile.creationTime,
    };

    const applications = profile.applicationLinks.map((x) => ({
      network: x.application,
      identifier: x.username,
      creationTime: x.creationTime,
    }));

    const chains = profile.chainLinks.map((x) => ({
      network: x.chainConfig.name,
      identifier: x.externalAddress,
      creationTime: x.creationTime,
    }));

    const connectionsWithoutNativeSorted = [...applications, ...chains].sort(
      R.comparator((a, b) => a.network.toLowerCase() < b.network.toLowerCase())
    );

    return {
      dtag: profile.dtag,
      nickname: profile.nickname,
      imageUrl: profile.profilePic,
      coverUrl: profile.coverPic,
      bio: profile.bio,
      connections: [nativeData, ...connectionsWithoutNativeSorted],
    };
  });
}
