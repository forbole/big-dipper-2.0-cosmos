import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
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
const mockToggleNetwork = jest.fn();

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Network', () => {
  beforeEach(() => {
    component = renderer.create(
      <ApolloProvider client={mockClient}>
        <MockedProvider mocks={[mockQuery, mockChainId]}>
          <MockTheme>
            <Network toggleNetwork={mockToggleNetwork} />
          </MockTheme>
        </MockedProvider>
      </ApolloProvider>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it calls toggle on click', () => {
    renderer.act(() => {
      component.root
        .findByProps({ role: 'button', 'aria-label': 'desmos-mainnet' })
        .props.onClick();
    });
    expect(mockToggleNetwork).toHaveBeenCalledTimes(1);
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
