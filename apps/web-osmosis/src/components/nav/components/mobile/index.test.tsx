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
jest.mock('./components/menu', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="menu" {...props} />
));
jest.mock('./components/navbar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="navbar" {...props} />
));
jest.mock('../search_bar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="searchBar" {...props} />
));

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
