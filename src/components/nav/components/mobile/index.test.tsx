import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';
// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// global setup
// ==================================
jest.mock('./components', () => ({
  Menu: (props) => <div id="menu" {...props} />,
  Network: (props) => <div id="network" {...props} />,
  Navbar: (props) => <div id="navbar" {...props} />,
  SearchBar: (props) => <div id="searchBar" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/Mobile', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Mobile />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
