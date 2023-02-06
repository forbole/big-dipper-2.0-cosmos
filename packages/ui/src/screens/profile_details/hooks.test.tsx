import { act, cleanup, renderHook } from '@testing-library/react';
import { useMemo } from 'react';
import chainConfig from '@/chainConfig';
import type { useDesmosProfile } from '@/hooks/use_desmos_profile';
import { useProfileDetails } from '@/screens/profile_details/hooks';

const { extra, prefix } = chainConfig();

const mockRouter = {
  query: {
    dtag: '@happieSa',
  },
  replace: jest.fn(() => '/'),
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockRouter,
}));

jest.mock('@/hooks/use_desmos_profile', () => ({
  ...jest.requireActual('@/hooks/use_desmos_profile'),
  useDesmosProfile: (options: Parameters<typeof useDesmosProfile>[0]) => {
    const address = options.addresses?.[0];
    return useMemo(() => {
      if (address === '@happieSa') {
        return {
          loading: false,
          data: [
            {
              dtag: 'HappieSa',
              nickname: 'theHappySamoyed',
              imageUrl:
                'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
              coverUrl:
                'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
              bio: 'hungry all the time',
              connections: [
                {
                  identifier: `${prefix.account}test`,
                  network: 'desmos',
                  creationTime: '2021-10-06T00:10:45.761731',
                },
              ],
            },
          ],
        };
      }
      if (address === '@forbole') {
        return {
          loading: false,
          data: [
            {
              dtag: 'forbole',
              nickname: 'Forbole',
              imageUrl:
                'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
              bio: 'Forbole [ˈfɔːbəl] is a well-established blockchain validator and developer since 2017.',
              coverUrl:
                'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
              connections: [
                {
                  identifier: `${prefix.account}test`,
                  network: 'desmos',
                  creationTime: '2021-10-06T00:10:45.761731',
                },
              ],
            },
          ],
        };
      }
      return { loading: false };
    }, [address]);
  },
}));

describe('hook: useProfileDetails', () => {
  it('correctly toggles profile open', async () => {
    if (!extra.profile) return;
    const { result, rerender } = renderHook(() => useProfileDetails());

    expect(result.current.state.desmosProfile?.bio).toBe('hungry all the time');
    expect(mockRouter.push).toHaveBeenCalledWith({ pathname: '/@HappieSa' }, '/@HappieSa', {
      shallow: true,
    });
    act(() => {
      mockRouter.query.dtag = '@forbole';
      rerender();
    });
    // does not call on forbole
    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(result.current.state.desmosProfile?.dtag).toBe('forbole');
  });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
