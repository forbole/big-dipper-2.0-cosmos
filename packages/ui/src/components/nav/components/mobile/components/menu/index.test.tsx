import Menu from '@/components/nav/components/mobile/components/menu';
import { MockTheme, wait } from '@/tests/utils';
import renderer from 'react-test-renderer';
// ==================================
// globals
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const toggleNavMenus = jest.fn();
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('@mui/material/Drawer', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="drawer" {...props} />
));
jest.mock('next-translate/useTranslation', () => () => mockI18n);
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

    mockI18n.lang = 'zht';
    component.update(
      <MockTheme>
        <Menu toggleNavMenus={toggleNavMenus} />
      </MockTheme>
    );
    await wait(renderer.act);
    expect(toggleNavMenus).toBeCalledTimes(1);
  });

  it('drawer displays on click', () => {
    expect(
      component.root.findByProps({ className: 'makeStyles-drawer lang-drawer' }).props.open
    ).toEqual(false);

    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-language' }).props.onClick();
    });
    expect(
      component.root.findByProps({ className: 'makeStyles-drawer lang-drawer' }).props.open
    ).toEqual(true);
  });
});

afterEach(() => {
  mockI18n.lang = 'en';
  jest.clearAllMocks();
  component.unmount();
});
