import chainConfig from '@/chainConfig';
import type { useDesmosProfile } from '@/hooks';
import { useProfileDetails } from '@/screens/profile_details/hooks';
import { act, cleanup, renderHook } from '@testing-library/react-hooks';

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

jest.mock('@/hooks', () => ({
  ...jest.requireActual('@/hooks'),
  useDesmosProfile: (options: Parameters<typeof useDesmosProfile>[0]) => {
    if (options.addresses?.[0] === '@happieSa') {
      return {
        data: [
          {
            bio: 'hungry all the time',
            dtag: 'HappieSa',
            nickname: 'theHappySamoyed',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
            coverPic:
              'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            profilePic:
              'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            connections: [{ identifier: `${prefix.account}test` }],
          },
        ],
        loading: false,
      };
    }
    if (options.addresses?.[0] === '@forbole') {
      return {
        data: [
          {
            bio: 'Forbole [ˈfɔːbəl] is a well-established blockchain validator and developer since 2017.',
            dtag: 'forbole',
            nickname: 'Forbole',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
            coverPic:
              'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            profilePic:
              'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            connections: [{ identifier: `${prefix.account}test` }],
          },
        ],
        loading: false,
      };
    }

    return { data: [], loading: false };
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
