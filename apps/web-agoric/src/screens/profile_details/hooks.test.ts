import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import chainConfig from 'ui/dist/chainConfig';
import { useProfileDetails } from './hooks';

const mockRouter = {
  query: {
    dtag: '@happieSa',
  },
  replace: jest.fn(() => '/'),
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

jest.mock('@hooks', () => ({
  useDesmosProfile: (options) => {
    return {
      fetchDesmosProfile: jest.fn((dtag) => {
        let results;
        if (dtag === '@happieSa') {
          results = {
            address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
            bio: 'hungry all the time',
            dtag: 'HappieSa',
            nickname: 'theHappySamoyed',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
            coverPic: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            profilePic: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
          };
        }
        if (dtag === '@forbole') {
          results = {
            address: 'desmos1pm6pmpsdw8kd5g6jneyq8rl3qw6tukcp7g57w3',
            bio: 'Forbole [ˈfɔːbəl] is a well-established blockchain validator and developer since 2017.',
            dtag: 'forbole',
            nickname: 'Forbole',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
            coverPic: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            profilePic: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
          };
        }

        return options.onComplete({
          profile: [results],
        });
      }),
      formatDesmosProfile: jest.fn((data) => {
        let results;
        if (data.profile[0].dtag === 'HappieSa') {
          results = {
            dtag: 'HappieSa',
            nickname: 'theHappySamoyed',
            imageUrl: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            coverUrl: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            bio: 'hungry all the time',
            connections: [
              {
                network: 'native',
                identifier: `${chainConfig.prefix.account}1kmw9et4e99ascgdw0mmkt63mggjuu0xuqjx30w`,
              },
            ],
          };
        }

        if (data.profile[0].dtag === 'forbole') {
          results = {
            dtag: 'forbole',
            nickname: 'Forbole',
            imageUrl: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            coverUrl: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            bio: 'Forbole [ˈfɔːbəl] is a well-established blockchain validator and developer since 2017.',
            connections: [
              {
                network: 'native',
                identifier: `${chainConfig.prefix.account}1pm6pmpsdw8kd5g6jneyq8rl3qw6tukcp7g57w3`,
              },
            ],
          };
        }
        return results;
      }),
    };
  },
}));

describe('hook: useProfileDetails', () => {
  it('correctly toggles profile open', async () => {
    if (!chainConfig.extra.profile) return;
    const { result, rerender } = renderHook(() => useProfileDetails());

    expect(result.current.state.desmosProfile?.bio).toBe('hungry all the time');
    expect(mockRouter.push).toHaveBeenCalledWith({ pathname: '/@HappieSa' }, '/@HappieSa', { shallow: true });
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
