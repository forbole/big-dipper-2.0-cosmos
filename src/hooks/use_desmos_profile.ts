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
  onComplete: (data: DesmosProfileQuery) => void;
}

const PROFILE_API = 'https://gql.morpheus.desmos.network/v1/graphql';

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
      console.log(data, 'data 34');
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
      options.onComplete(data);
    } catch (error) {
      setLoading(false);
      // options.onComplete(data);
    }
  };

  return {
    loading,
    fetchDesmosProfile,
  };
};
