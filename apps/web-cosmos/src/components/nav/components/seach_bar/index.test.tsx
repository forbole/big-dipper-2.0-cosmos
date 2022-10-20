import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SearchBar from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Search: (props) => <div id="Search" {...props} />,
}));
// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SearchBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <SearchBar />
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
