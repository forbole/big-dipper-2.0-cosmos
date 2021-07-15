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
      return data;
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
      return data;
    } catch (error) {
      return null;
    }
  };

  const fetchDesmosProfile = async (address: string) => {
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
      let data = null;
      if (address.includes('desmos')) {
        data = await fetchDesmos(address);
        // edge case if desmos profile is a link
        // and not the owner
        if (!data) {
          data = await fetchLink(address);
        }
      } else {
        data = await fetchLink(address);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    fetchDesmosProfile,
  };
};
