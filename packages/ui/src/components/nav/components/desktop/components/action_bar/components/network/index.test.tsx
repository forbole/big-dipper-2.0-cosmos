import renderer from 'react-test-renderer';
import Network from '@/components/nav/components/desktop/components/action_bar/components/network';
import MockTheme from '@/tests/mocks/MockTheme';

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
      <MockTheme>
        <Network toggleNetwork={mockToggleNetwork} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('it calls toggle on click', () => {
  //   renderer.act(() => {
  //     component.root
  //       .findByProps({ role: 'button', 'aria-label': 'desmos-mainnet' })
  //       .props.onClick();
  //   });
  //   expect(mockToggleNetwork).toHaveBeenCalledTimes(1);
  // });
});

afterEach(() => {
  jest.clearAllMocks();
});
