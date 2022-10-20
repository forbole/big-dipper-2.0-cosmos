import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import {
  MockTheme, wait,
} from '@tests/utils';
import Navbar from '.';

// ==================================
// mocks
// ==================================
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
  beforeEach(async () => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Navbar
            isOpen={false}
            openNetwork={openNetwork}
            toggleNavMenus={toggleNavMenus}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    await wait();
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
