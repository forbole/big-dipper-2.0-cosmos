import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type { ProfileDetailState } from '@/screens/profile_details/types';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useMemo, useState } from 'react';

const { extra, prefix } = chainConfig();

const initialState: ProfileDetailState = {
  loading: true,
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
  const { data: desmosProfile, loading: loadingDesmosProfile } = useDesmosProfile({
    addresses: [profileDtag],
    skip: !extra.profile || !/^@/.test(profileDtag),
  });

  const shouldShowProfile = useCallback(() => {
    const dtagConnections = desmosProfile?.[0].connections ?? [];
    const dtagConnectionsNetwork = dtagConnections.map((x) => x.identifier);
    const chainPrefix = prefix.account;
    const containNetwork = dtagConnectionsNetwork.some((x) => x.startsWith(chainPrefix));
    return !!containNetwork;
  }, [desmosProfile]);

  useEffect(() => {
    const regex = /^@/;
    const regexCheck = regex.test(profileDtag);
    const configProfile = extra.profile;
    handleSetState((prevState) => ({ ...prevState, ...initialState }));

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDtag]);

  useEffect(() => {
    if (!desmosProfile?.[0]) return;
    const showProfile = shouldShowProfile();

    if (showProfile) {
      const dtagInput =
        (Array.isArray(router.query.dtag) ? router.query.dtag[0] : router.query.dtag) ?? '';
      if (
        `@${desmosProfile[0].dtag}` !== dtagInput &&
        `@${desmosProfile[0].dtag.toUpperCase()}` === dtagInput.toUpperCase()
      ) {
        router.push({ pathname: `/@${desmosProfile[0].dtag}` }, `/@${desmosProfile[0].dtag}`, {
          shallow: true,
        });
      }
    } else {
      handleSetState((prevState) => ({ ...prevState, exists: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desmosProfile]);

  return {
    state: useMemo(
      () => ({
        ...state,
        desmosProfile: desmosProfile?.[0],
        loading: loadingDesmosProfile,
        exists: loadingDesmosProfile ? !!desmosProfile.length : true,
      }),
      [state, desmosProfile, loadingDesmosProfile]
    ),
    shouldShowProfile,
  };
};
