import {
  useState, useEffect,
} from 'react';
import axios from 'axios';
import { DesmosProfileQuery } from '@graphql/desmos_profile';
import {
  DesmosProfileDocument, DesmosProfileLinkDocument,
} from '@graphql/desmos_profile_graphql';

type Options = {
  address?: string;
  onComplete: (data: DesmosProfileQuery) => any;
}

const PROFILE_API = 'https://gql.mainnet.desmos.network/v1/graphql';

export const useDesmosProfile = (options: Options) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (options.address) {
      fetchDesmosProfile(options.address);
    }
  }, [options.address]);

  const fetchDesmos = async (address: string) => {
    try {
      const { data } = await axios.post(PROFILE_API, {
        variables: {
          address,
        },
        query: DesmosProfileDocument,
      });
      return data.data;
    } catch (error) {
      return null;
    }
  };

  const fetchLink = async (address: string) => {
    try {
      const { data } = await axios.post(PROFILE_API, {
        variables: {
          address,
        },
        query: DesmosProfileLinkDocument,
      });
      return data.data;
    } catch (error) {
      return null;
    }
  };

  const fetchDesmosProfile = async (address: string) => {
    let data:DesmosProfileQuery = {
      profile: [],
    };
    try {
      setLoading(true);
      if (address.includes('desmos')) {
        data = await fetchDesmos(address);
      }

      // if the address is a link instead
      if (!data.profile.length) {
        data = await fetchLink(address);
      }
      setLoading(false);
      return options.onComplete(data);
    } catch (error) {
      setLoading(false);
      return options.onComplete(data);
    }
  };

  const formatDesmosProfile = (data:DesmosProfileQuery): DesmosProfile => {
    if (!data.profile.length) {
      return null;
    }

    const profile = data.profile[0];

    const nativeData = {
      network: 'native',
      identifier: profile.address,
      creationTime: profile.creationTime,
    };

    const applications = profile.applicationLinks.map((x) => {
      return ({
        network: x.application,
        identifier: x.username,
        creationTime: x.creationTime,
      });
    });

    const chains = profile.chainLinks.map((x) => {
      return ({
        network: x.chainConfig.name,
        identifier: x.externalAddress,
        creationTime: x.creationTime,
      });
    });

    const connectionsWithoutNativeSorted = [...applications, ...chains].sort((a, b) => (
      (a.network.toLowerCase() > b.network.toLowerCase()) ? 1 : -1
    ));

    return ({
      dtag: profile.dtag,
      nickname: profile.nickname,
      imageUrl: profile.profilePic,
      coverUrl: profile.coverPic,
      bio: profile.bio,
      connections: [nativeData, ...connectionsWithoutNativeSorted],
    });
  };

  return {
    loading,
    fetchDesmosProfile,
    formatDesmosProfile,
  };
};
