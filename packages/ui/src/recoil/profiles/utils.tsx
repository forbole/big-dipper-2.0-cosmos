import axios from 'axios';
import { DesmosProfileQuery } from '../../graphql/types/profile_types';
import {
  DesmosProfileDocument,
  DesmosProfileLinkDocument,
} from '../../graphql/profiles/desmos_profile_graphql';

const PROFILE_API = 'https://gql.mainnet.desmos.network/v1/graphql';

async function fetchDesmos(address: string) {
  const { data } = await axios.post(PROFILE_API, {
    variables: {
      address,
    },
    query: DesmosProfileDocument,
  });
  return data.data;
}

async function fetchLink(address: string) {
  const { data } = await axios.post(PROFILE_API, {
    variables: {
      address,
    },
    query: DesmosProfileLinkDocument,
  });
  return data.data;
}

async function fetchDesmosProfile(address: string) {
  let data: DesmosProfileQuery = {
    profile: [],
  };
  try {
    if (address.includes('desmos')) {
      data = await fetchDesmos(address);
    }

    // if the address is a link instead
    if (!data.profile.length) {
      data = await fetchLink(address);
    }

    const formattedData = formatDesmosProfile(data);
    return formattedData;
  } catch (error) {
    return null;
  }
}

function formatDesmosProfile(data: DesmosProfileQuery) {
  if (!data.profile.length) {
    return null;
  }

  const profile = data.profile[0];

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

  const connectionsWithoutNativeSorted = [...applications, ...chains].sort((a, b) =>
    a.network.toLowerCase() > b.network.toLowerCase() ? 1 : -1
  );

  return {
    dtag: profile.dtag,
    nickname: profile.nickname,
    imageUrl: profile.profilePic,
    coverUrl: profile.coverPic,
    bio: profile.bio,
    connections: [nativeData, ...connectionsWithoutNativeSorted],
  };
}

export const getProfile = async (delegatorAddress: string): Promise<DesmosProfile | null> => {
  const profile = await fetchDesmosProfile(delegatorAddress);
  return profile;
};
