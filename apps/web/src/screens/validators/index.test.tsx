import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Validators from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('./components/list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="List" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Validators', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Validators />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
