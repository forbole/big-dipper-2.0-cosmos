import {
  useState, useEffect,
} from 'react';
import * as R from 'ramda';
import axios from 'axios';

type Options = {
  selfDelegateAddress?: string;
  onComplete: (data: any) => void;
}

const PROFILE_API = 'https://gql.morpheus.desmos.network/v1/graphql';

export const useDesmosProfile = (options: Options) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (options.selfDelegateAddress) {
      fetchProfile(options.selfDelegateAddress);
    }
  }, [options.selfDelegateAddress]);

  const fetchProfile = async (selfDelegateAddress: string) => {
    try {
      setLoading(true);
      const { data } = await axios.post(PROFILE_API, {
        variables: {
          address: selfDelegateAddress,
        },
        query: `
        query DesmosProfile ($address: String){
          profile (where: {address: {_eq: $address}}, limit: 1) {
            address
            bio
          }
        }
        `,
      });
      console.log(data, 'data');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return {
    loading,
    fetchProfile,
  };
};
