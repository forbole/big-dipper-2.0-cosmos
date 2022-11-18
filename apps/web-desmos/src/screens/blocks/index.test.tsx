import React from 'react';
import { ApolloClient, ApolloProvider, from, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import { BlocksListenerDocument, BlocksDocument } from '@graphql/types/general_types';
import Blocks from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/load_and_exist', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LoadAndExist" {...props} />
));
jest.mock('ui/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

const mockBlocksListenerDocument = jest.fn().mockReturnValue({
  data: {
    blocks: [
      {
        height: 379643,
        txs: 2,
        hash: 'D0243447726B8BD7AE94BF4F98E536A647959194E870AB8566CB833A3CC847F6',
        timestamp: '2021-05-24T05:28:05.839448',
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper1h5f3dywec65v9qulxkmcv3e6yujyh3zm0ghhl3',
          },
        },
      },
    ],
  },
});

const mockBlocksDocument = jest.fn().mockReturnValue({
  data: {
    blocks: [
      {
        height: 379634,
        txs: 2,
        hash: '017E26F5C11E4C140AA1836E40315C00253EDBC9D69A475A4ABEDDD1FF0FE967',
        timestamp: '2021-05-24T05:27:11.092332',
        validator: {
          validatorInfo: {
            operatorAddress: 'desmosvaloper1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3chg77a',
            self_delegate_address: 'desmos1zm3l7p8n5dxqeadsfxy3rd0j3c2knnx3x6q250',
          },
          validatorDescriptions: [
            {
              moniker: 'Simply Staking',
              identity: null,
            },
          ],
        },
      },
    ],
    total: {
      aggregate: {
        count: 379619,
      },
    },
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = new ApolloClient({ link: from([]), cache: new InMemoryCache() });
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              { request: { query: BlocksListenerDocument }, result: mockBlocksListenerDocument },
              { request: { query: BlocksDocument }, result: mockBlocksDocument },
            ]}
          >
            <MockTheme>
              <Blocks />
            </MockTheme>
          </MockedProvider>
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
