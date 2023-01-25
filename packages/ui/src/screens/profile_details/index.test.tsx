import { useMemo } from 'react';
import renderer from 'react-test-renderer';
import chainConfig from '@/chainConfig';
import ProfileDetails from '@/screens/profile_details';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';

const { prefix } = chainConfig();

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      dtag: '@dtag',
    },
    pathname: '/@dtag',
    replace: jest.fn(() => '/'),
    push: jest.fn(() => '/@dtag'),
  }),
}));
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('@/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));
jest.mock('@/components/desmos_profile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="DesmosProfile" {...props} />
));

jest.mock(
  '@/screens/profile_details/components/connections',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Connections" {...props} />
);

jest.mock('@/hooks/use_desmos_profile', () => ({
  ...jest.requireActual('@/hooks/use_desmos_profile'),
  useDesmosProfile: () =>
    useMemo(
      () => ({
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
      }),
      []
    ),
}));

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <ProfileDetails />
        </MockTheme>
      );
    });
    await wait(renderer.act);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
