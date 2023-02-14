import Networks from '@/components/nav/components/networks';
import { mockChainId, mockQuery } from '@/hooks/useBigDipperNetworks/mocks';
import { mockClient } from '@/tests/mocks/mockApollo';
import MockTheme from '@/tests/mocks/MockTheme';
import { ApolloProvider } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock('recoil', () => ({
  ...jest.requireActual('recoil'),
  useRecoilValue: jest.fn(),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Networks', () => {
  beforeEach(() => {
    component = renderer.create(
      <ApolloProvider client={mockClient}>
        <MockedProvider mocks={[mockQuery, mockChainId]}>
          <MockTheme>
            <Networks />
          </MockTheme>
        </MockedProvider>
      </ApolloProvider>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
