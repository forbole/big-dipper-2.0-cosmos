import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import InitialLoad from '@/screens/initial_load';

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/LinearProgress', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="LinearProgress" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <InitialLoad />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
