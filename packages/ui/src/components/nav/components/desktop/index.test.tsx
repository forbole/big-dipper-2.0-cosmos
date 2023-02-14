import renderer from 'react-test-renderer';
import Desktop from '@/components/nav/components/desktop';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
jest.mock(
  '@/components/nav/components/desktop/components/action_bar',
  () => (props: JSX.IntrinsicElements['div']) => <div id="actionBar" {...props} />
);

jest.mock('@/components/nav/components/menu_items', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="MenuItems" {...props} />
));
jest.mock('@/components/nav/components/title_bar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="TitleBar" {...props} />
));
// ==================================
// unit tests
// ==================================
describe('screen: Nav/Desktop', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Desktop title="hello world" />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hook toggles correctly', () => {
    renderer.act(() => {
      component.root.findByProps({ role: 'button', 'aria-label': 'toggle menu' }).props.onClick();
    });
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
