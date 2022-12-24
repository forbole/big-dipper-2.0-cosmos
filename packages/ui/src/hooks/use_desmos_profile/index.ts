import {
  DesmosProfileQuery,
  useDesmosProfileDtagQuery,
  useDesmosProfileLinkQuery,
  useDesmosProfileQuery,
} from '@/graphql/types/profile_types';
import { isValidAddress } from '@/utils/prefix_convert';
import * as R from 'ramda';
import type { Options } from './types';

/**
 * It takes an array of addresses and returns a formatted profile object
 * @param {Options} options - Options
 * @returns The return value is an object with the following properties:
 */
export const useDesmosProfile = (options: Options) => {
  const addresses = options.addresses ?? [];

  const isAddress = addresses[0]?.startsWith('desmos') && isValidAddress(addresses[0]);
  const { data, loading, error } = useDesmosProfileQuery({
    variables: {
      addresses,
    },
    skip: options.skip || !isAddress,
  });

  const isDTag = !isAddress && addresses[0]?.startsWith('@');
  const {
    data: dataDTag,
    error: errorDTag,
    loading: loadingDTag,
  } = useDesmosProfileDtagQuery({
    variables: {
      dtag: addresses[0]?.substring(1),
    },
    skip: options.skip || !isDTag,
  });

  const isLink = !isAddress && !isDTag && !!addresses.length;
  const {
    data: dataLink,
    error: errorLink,
    loading: loadingLink,
  } = useDesmosProfileLinkQuery({
    variables: {
      addresses,
    },
    skip: options.skip || !isLink,
  });

  if (isAddress) return { data: formatDesmosProfile(data), loading, error };
  if (isDTag)
    return { data: formatDesmosProfile(dataDTag), loading: loadingDTag, error: errorDTag };
  return { data: formatDesmosProfile(dataLink), loading: loadingLink, error: errorLink };
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
      address: profile.address,
      dtag: profile.dtag,
      nickname: profile.nickname,
      imageUrl: profile.profilePic,
      coverUrl: profile.coverPic,
      bio: profile.bio,
      connections: [nativeData, ...connectionsWithoutNativeSorted],
    };
  });
}
