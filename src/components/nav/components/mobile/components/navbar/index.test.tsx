import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme,
} from '@tests/utils';
import Navbar from '.';

// ==================================
// mocks
// ==================================
jest.mock('@src/contexts', () => ({
  useNetworksContext: () => ({
    selected: 'selected',
  }),
  useSettingsContext: () => ({
    theme: 'light',
  }),
}));

jest.mock('@assets/big-dipper-white.svg', () => (props) => <div id="WHITE" {...props} />);
jest.mock('@assets/big-dipper-red.svg', () => (props) => <div id="RED" {...props} />);
// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
const openNetwork = jest.fn();
const toggleNavMenus = jest.fn();
// ==================================
// unit tests
// ==================================
describe('screen: Nav/mobile/navbar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Navbar
          isOpen={false}
          openNetwork={openNetwork}
          toggleNavMenus={toggleNavMenus}
        />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('openNetwork is called onClick', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-network' }).props.onClick();
    });
    expect(openNetwork).toBeCalled();
  });

  it('toggleNavMenus is called onClick', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-hamburger' }).props.onClick();
    });
    expect(toggleNavMenus).toBeCalled();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
