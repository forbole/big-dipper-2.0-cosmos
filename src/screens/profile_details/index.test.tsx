import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import MockAdapter from 'axios-mock-adapter';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import ProfileDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      dtag: 'dtag',
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
  DesmosProfile: (props) => <div id="DesmosProfile" {...props} />,
}));

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
            bio: 'hungry all the time',
            coverUrl: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
            dtag: 'happieSa',
            imageUrl: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            nickname: 'theHappySamoyed',
            connections: [
              {
                network: 'native',
                identifier: 'desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv',
                creationTime: '2021-08-31T17:02:28.575104',
              },
              {
                network: 'emoney',
                identifier: 'emoney1wke3ev9ja6rxsngld75r3vppcpet94xxnh63ry',
                creationTime: '2021-08-31T17:02:28.575104',
              },
            ],
          },
        ],
      },
    });
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      LatestBlockTimestampDocument,
      mockBlockTime,
    );
    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <ProfileDetails />
          </MockTheme>
        </ApolloProvider>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
