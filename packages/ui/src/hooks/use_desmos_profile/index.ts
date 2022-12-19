import chainConfig from '@/chainConfig';
import {
  DesmosProfileDocument,
  DesmosProfileDtagDocument,
  DesmosProfileLinkDocument,
} from '@/graphql/profiles/desmos_profile_graphql';
import { DesmosProfileQuery } from '@/graphql/types/profile_types';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

type Options = {
  address?: string;
  onComplete: (data: DesmosProfileQuery) => DesmosProfile | null;
};

function profileApi() {
  if (/^testnet/i.test(chainConfig().chainType)) {
    return 'https://gql.morpheus.desmos.network/v1/graphql';
  }
  return 'https://gql.mainnet.desmos.network/v1/graphql';
}

export const useDesmosProfile = (options: Options) => {
  const [loading, setLoading] = useState(false);
  const { onComplete } = options;

  const fetchDesmosProfile = useCallback(
    async (input: string) => {
      let data: DesmosProfileQuery = {
        profile: [],
      };

      try {
        setLoading(true);
        if (input.startsWith('@')) {
          data = await fetchDtag(input.substring(1));
        }

        if (input.startsWith('desmos')) {
          data = await fetchDesmos(input);
        }

        // if the address is a link instead
        if (!data.profile?.length) {
          data = await fetchLink(input);
        }
        setLoading(false);
        return onComplete(data);
      } catch (error) {
        setLoading(false);
        return onComplete(data);
      }
    },
    [onComplete]
  );

  useEffect(() => {
    if (options.address) {
      fetchDesmosProfile(options.address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.address]);

  return {
    loading,
    fetchDesmosProfile,
    formatDesmosProfile,
  };
};

async function fetchLink(address: string) {
  try {
    const { data } = await axios.post(profileApi(), {
      variables: {
        address,
      },
      query: DesmosProfileLinkDocument,
    });
    return data.data;
  } catch (error) {
    return null;
  }
}

async function fetchDesmos(address: string) {
  try {
    const { data } = await axios.post(profileApi(), {
      variables: {
        address,
      },
      query: DesmosProfileDocument,
    });
    return data.data;
  } catch (error) {
    return null;
  }
}

async function fetchDtag(dtag: string) {
  try {
    const { data } = await axios.post(profileApi(), {
      variables: {
        dtag,
      },
      query: DesmosProfileDtagDocument,
    });

    return data.data;
  } catch (error) {
    return null;
  }
}

function formatDesmosProfile(data: DesmosProfileQuery | null): DesmosProfile | null {
  if (!data?.profile?.length) {
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
