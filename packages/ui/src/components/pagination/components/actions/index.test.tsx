import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Actions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/IconButton', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="iconButton" {...props} />
));
jest.mock('@material-ui/core/FormControl', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="formControl" {...props} />
));
jest.mock('@material-ui/core/Select', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="select" {...props} />
));
jest.mock('@material-ui/core/MenuItem', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="menuItem" {...props} />
));
jest.mock('@material-ui/core/InputBase', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="inputBase" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('components: Pagination/Actions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Actions
          count={100}
          onChangePage={() => jest.fn()}
          handleChangeRowsPerPage={() => jest.fn()}
          page={0}
          rowsPerPage={5}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
