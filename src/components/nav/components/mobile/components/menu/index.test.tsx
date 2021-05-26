import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Menu from '.';
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
jest.mock('@material-ui/core/Drawer', () => (props) => <div id="drawer" {...props} />);
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('next/router', () => ({
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
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Menu
          toggleNavMenus={toggleNavMenus}
        />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleDrawer is not called in first render', () => {
    expect(toggleNavMenus).toBeCalledTimes(0);

    mockI18n.lang = 'zht';
    component.update(
      <MockTheme>
        <Menu
          toggleNavMenus={toggleNavMenus}
        />
      </MockTheme>,
    );

    expect(toggleNavMenus).toBeCalledTimes(1);
  });

  it('drawer displays on click', () => {
    expect(component.root.findByProps({ className: 'makeStyles-drawer lang-drawer' }).props.open).toEqual(false);

    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-language' }).props.onClick();
    });
    expect(component.root.findByProps({ className: 'makeStyles-drawer lang-drawer' }).props.open).toEqual(true);
  });
});

afterEach(() => {
  mockI18n.lang = 'en';
  jest.clearAllMocks();
  component.unmount();
});
