import { useEffect, useState } from 'react';
import { ValidatorType } from '@/screens/validators/components/list/types';

interface AvatarName {
  className?: string;
  imageUrl: string | '';
  address: string;
  name: string;
  href?: (address: string) => string;
  image?: React.ReactNode;
  target?: JSX.IntrinsicElements['a']['target'];
}

/**
 * Accepts a list of state items and returns the appropriate profiles
 * @param item
 * @return a loading state and a list of profiles
 */
const useCustomProfile = (item: ValidatorType[]) => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState<AvatarName[]>([]);

  useEffect(() => {
    if (item.length) {
      const data = item.map((x) => {
        const address = x.validator ?? x.moniker[0].validator_address ?? '';
        const name = x.moniker[0].moniker ?? '';
        const imageUrl = x.moniker[0].avatar_url ?? '';
        const bio = x.moniker[0].details ?? '';
        const website = x.moniker[0].website ?? '';
        return {
          address,
          name,
          imageUrl,
          bio,
          website,
        };
      });
      setProfiles(data);
      setLoading(false);
    }
  }, [item, loading]);

  return { profiles, loading };
};

export default useCustomProfile;
