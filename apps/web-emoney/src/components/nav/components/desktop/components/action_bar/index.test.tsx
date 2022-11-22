import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import ActionBar from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
let isNetwork = false;
const toggleNetwork = jest.fn();
jest.mock('./components/network', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="network" {...props} />
));
jest.mock('./components/network_list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="NetworkList" {...props} />
));
jest.mock('./components/settings_list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SettingsList" {...props} />
));
// ==================================
// unit tests
// ==================================
describe('screen: Nav/ActionBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <ActionBar isNetwork={isNetwork} toggleNetwork={toggleNetwork} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays network', () => {
    isNetwork = true;
    component.update(
      <MockTheme>
        <ActionBar isNetwork={isNetwork} toggleNetwork={toggleNetwork} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  isNetwork = false;
  jest.clearAllMocks();
});
