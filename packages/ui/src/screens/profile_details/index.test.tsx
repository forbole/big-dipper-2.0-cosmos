import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import ProfileDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      dtag: '@dtag',
    },
    pathname: '/@dtag',
    replace: jest.fn(() => '/'),
    push: jest.fn(() => '/@dtag'),
  }),
}));
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('@components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));
jest.mock('@components/desmos_profile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="DesmosProfile" {...props} />
));

jest.mock('./components/connections', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Connections" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails', () => {
  it('matches snapshot', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onPost('https://gql.mainnet.desmos.network/v1/graphql').reply(200, {
      data: {
        profile: [
          {
            address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
            bio: 'hungry all the time',
            dtag: 'happieSa',
            nickname: 'theHappySamoyed',
            chainLinks: [],
            applicationLinks: [],
            creationTime: '2021-10-06T00:10:45.761731',
            coverPic:
              'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            profilePic:
              'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
          },
        ],
      },
    });

    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });

    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <ProfileDetails />
          </MockTheme>
        </ApolloProvider>
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
