import chainConfig from '@/chainConfig';
import { useDesmosProfile } from '@/hooks';
import type { ProfileDetailState } from '@/screens/profile_details/types';
import { useRouter } from 'next/router';
import * as R from 'ramda';
import { useCallback, useEffect, useState } from 'react';

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

  // ==========================
  // Desmos Profile
  // ==========================
  const { fetchDesmosProfile, formatDesmosProfile } = useDesmosProfile({
    onComplete: (data) => {
      const desmosProfile = formatDesmosProfile(data);
      handleSetState((prevState) => ({
        ...prevState,
        loading: false,
        exists: !!data?.profile?.length,
        desmosProfile,
      }));
      return desmosProfile;
    },
  });

  const shouldShowProfile = useCallback(() => {
    const dtagConnections = state.desmosProfile?.connections ?? [];
    const dtagConnectionsNetwork = dtagConnections.map((x) => x.identifier);
    const chainPrefix = prefix.account;
    const containNetwork = dtagConnectionsNetwork.some((x) => x.startsWith(chainPrefix));
    return !!containNetwork;
  }, [state.desmosProfile?.connections]);

  const profileDtag: string = (router?.query?.dtag as string) ?? '';

  useEffect(() => {
    const regex = /^@/;
    const regexCheck = regex.test(profileDtag);
    const configProfile = extra.profile;
    handleSetState((prevState) => ({ ...prevState, ...initialState }));

    if (!regexCheck || !configProfile) {
      router.replace('/');
    }
    if (configProfile) {
      fetchDesmosProfile(profileDtag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDtag]);

  useEffect(() => {
    if (state.desmosProfile) {
      const showProfile = shouldShowProfile();

      if (showProfile) {
        const dtagInput = router.query.dtag as string;
        if (
          `@${state.desmosProfile.dtag}` !== dtagInput &&
          `@${state.desmosProfile.dtag.toUpperCase()}` === dtagInput.toUpperCase()
        ) {
          router.push(
            { pathname: `/@${state.desmosProfile.dtag}` },
            `/@${state.desmosProfile.dtag}`,
            { shallow: true }
          );
        }
      } else {
        handleSetState((prevState) => ({ ...prevState, exists: false }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.desmosProfile]);

  return {
    state,
    shouldShowProfile,
  };
};
