import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Nav from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================

jest.mock('./components/desktop', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Desktop" {...props} />
));
jest.mock('./components/mobile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Mobile" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('Component: Nav', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Nav />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
