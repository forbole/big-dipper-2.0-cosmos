import Navbar from '@/components/nav/components/mobile/components/navbar';
import { MockTheme, wait } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock(
  'shared-utils/assets/big-dipper-white.svg',
  () => (props: JSX.IntrinsicElements['div']) => <div id="WHITE" {...props} />
);
jest.mock(
  'shared-utils/assets/big-dipper-red-sifchain.svg',
  () => (props: JSX.IntrinsicElements['div']) => <div id="RED" {...props} />
);
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
const openNetwork = jest.fn();
const toggleNavMenus = jest.fn();
// ==================================
// unit tests
// ==================================
describe('screen: Nav/mobile/navbar', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <Navbar isOpen={false} openNetwork={openNetwork} toggleNavMenus={toggleNavMenus} />
      </MockTheme>
    );
    await wait(renderer.act);
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('openNetwork is called onClick', () => {
    renderer.act(() => {
      component.root.findByProps({ role: 'button', 'aria-label': 'sifchain-1' }).props.onClick();
    });
    expect(openNetwork).toBeCalled();
  });

  it('toggleNavMenus is called onClick', () => {
    renderer.act(() => {
      component.root
        .findByProps({ role: 'button', 'aria-label': 'open navigation menu' })
        .props.onClick();
    });
    expect(toggleNavMenus).toBeCalled();
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
