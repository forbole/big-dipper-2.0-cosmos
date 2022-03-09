import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  BlocksListenerDocument,
  BlocksDocument,
} from '@graphql/types';
import Blocks from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
}));

const mockBlocksListenerDocument = {
  data: {
    blocks: [
      {
        height: 4564072,
        txs: 0,
        hash: '8C2B2AA3DDB5B205FCA6F113F967B7F82D88B6D1DDA4D825F3718BC85F4496D6',
        timestamp: '2022-03-09T09:57:29.899729',
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper164kcy3s0pqfall3r837n82l24alc6l36gfuw4l',
          },
          validatorDescriptions: [
            {
              moniker: 'EZStaking.io',
              avatarUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/653fb34325e4437fe3cc6f7ecb93e905_360_360.jpg',
            },
          ],
        },
      },
    ],
  },
};

const mockBlocksDocument = jest.fn().mockResolvedValue({
  data: {
    blocks: [
      {
        height: 4564071,
        txs: 0,
        hash: '8C2B2AA3DDB5B205FCA6F113F967B7F82D88B6D1DDA4D825F3718BC85F4496D6',
        timestamp: '2022-03-09T09:57:29.899729',
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper164kcy3s0pqfall3r837n82l24alc6l36gfuw4l',
          },
          validatorDescriptions: [
            {
              moniker: 'EZStaking.io',
              avatarUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/653fb34325e4437fe3cc6f7ecb93e905_360_360.jpg',
            },
          ],
        },
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      BlocksListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      BlocksDocument,
      mockBlocksDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Blocks />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });

    await wait();
    renderer.act(() => {
      mockSubscription.next(mockBlocksListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
