import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import SearchBar from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/search', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Search" {...props} />
));
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SearchBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <SearchBar />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
