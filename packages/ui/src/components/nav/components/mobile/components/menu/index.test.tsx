import renderer from 'react-test-renderer';
import Menu from '@/components/nav/components/mobile/components/menu';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';
// ==================================
// globals
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const toggleNavMenus = jest.fn();
jest.mock('@mui/material/Drawer', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="drawer" {...props} />
));
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    locales: ['en', 'zh'],
    pathname: '/app/home',
    query: {
      key: 'val',
    },
  }),
}));
// ==================================
// unit tests
// ==================================
describe('screen: Nav/Menu', () => {
  beforeEach(async () => {
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <Menu toggleNavMenus={toggleNavMenus} />
        </MockTheme>
      );
    });
    await wait(renderer.act);
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleDrawer is not called in first render', async () => {
    expect(toggleNavMenus).toBeCalledTimes(0);

    component.update(
      <MockTheme>
        <Menu toggleNavMenus={toggleNavMenus} />
      </MockTheme>
    );
    await wait(renderer.act);
    expect(toggleNavMenus).toBeCalledTimes(0);
  });

  it('drawer displays on click', () => {
    expect(component.root.findByProps({ 'aria-label': 'lang-drawer' }).props.open).toEqual(false);

    renderer.act(() => {
      component.root
        .findByProps({ role: 'button', 'aria-label': 'toggle language' })
        .props.onClick();
    });
    expect(component.root.findByProps({ 'aria-label': 'lang-drawer' }).props.open).toEqual(true);
  });
});

afterEach(() => {
  jest.clearAllMocks();
  component.unmount();
});
