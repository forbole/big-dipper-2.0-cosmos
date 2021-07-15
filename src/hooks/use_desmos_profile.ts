import {
  useState, useEffect,
} from 'react';
import axios from 'axios';
import {
  DesmosProfileDocument, DesmosProfileQuery,
} from '@graphql/desmos_profile';

type Options = {
  address?: string;
  onComplete: (data: DesmosProfileQuery) => void;
}

const PROFILE_API = 'https://gql.morpheus.desmos.network/v1/graphql';

export const useDesmosProfile = (options: Options) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (options.address) {
      fetchProfile(options.address);
    }
  }, [options.address]);

  const fetchProfile = async (address: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post(PROFILE_API, {
        variables: {
          address,
        },
        query: DesmosProfileDocument,
      });
      setLoading(false);
      options.onComplete(data.data);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchProfile,
  };
};
