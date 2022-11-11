import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import Mobile from '.';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
jest.mock('./components', () => ({
  Menu: (props: JSX.IntrinsicElements['div']) => <div id="menu" {...props} />,
  // Network: (props: JSX.IntrinsicElements['div']) => <div id="network" {...props} />,
  Navbar: (props: JSX.IntrinsicElements['div']) => <div id="navbar" {...props} />,
  SearchBar: (props: JSX.IntrinsicElements['div']) => <div id="searchBar" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Mobile', () => {
  beforeEach(async () => {
    component = renderer.create(
      <MockTheme>
        <Mobile title="hello world" />
      </MockTheme>
    );
    await wait(renderer.act);
  });

  it('it renders', async () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
