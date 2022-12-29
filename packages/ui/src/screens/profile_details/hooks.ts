import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type { ProfileDetailState } from '@/screens/profile_details/types';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

const { extra, prefix } = chainConfig();

const initialState: ProfileDetailState = {
  exists: true,
  desmosProfile: null,
};

export const useProfileDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProfileDetailState>(initialState);
  const handleSetState = useCallback(
    (stateChange: (prevState: ProfileDetailState) => ProfileDetailState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const profileDtag: string =
    (Array.isArray(router?.query?.dtag) ? router?.query?.dtag[0] : router?.query?.dtag) ?? '';

  // ==========================
  // Desmos Profile
  // ==========================
  const { data, loading } = useDesmosProfile({
    addresses: [profileDtag],
    skip: !extra.profile || !/^@/.test(profileDtag),
  });
  useEffect(() => {
    if (!data[0]) return;

    const dtagConnections = data[0].connections ?? [];
    const dtagConnectionsNetwork = dtagConnections.map((x) => x.identifier);
    const chainPrefix = prefix.account;
    const containNetwork = dtagConnectionsNetwork.some((x) => x.startsWith(chainPrefix));
    const showProfile = !!containNetwork;

    if (showProfile) {
      const dtagInput =
        (Array.isArray(router.query.dtag) ? router.query.dtag[0] : router.query.dtag) ?? '';
      if (
        `@${data[0].dtag}` !== dtagInput &&
        `@${data[0].dtag.toUpperCase()}` === dtagInput.toUpperCase()
      ) {
        router.push({ pathname: `/@${data[0].dtag}` }, `/@${data[0].dtag}`, {
          shallow: true,
        });
      }
    }
    handleSetState((prevState) => ({ ...prevState, desmosProfile: data[0], exists: false }));
  }, [data, handleSetState, router]);

  return { state, loading };
};
