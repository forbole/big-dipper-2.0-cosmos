import { BlocksListenerDocument } from '@/graphql/types/general_types';
import Blocks from '@/screens/home/components/blocks';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/no_data', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NoData" {...props} />
));

jest.mock(
  '@/screens/home/components/blocks/components/mobile',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />
);
jest.mock(
  '@/screens/home/components/blocks/components/desktop',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />
);

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

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockedProvider
            mocks={[
              {
                request: { query: BlocksListenerDocument, variables: { limit: 7, offset: 0 } },
                result: mockBlocksListenerDocument,
              },
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
