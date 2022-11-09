import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import InitialLoad from '.';

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/LinearProgress', () => (props) => (
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
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
