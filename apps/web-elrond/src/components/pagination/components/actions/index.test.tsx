import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import Actions from '@/components/pagination/components/actions';

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/IconButton', () => (props) => <div id="iconButton" {...props} />);
jest.mock('@material-ui/core/FormControl', () => (props) => <div id="formControl" {...props} />);
jest.mock('@material-ui/core/Select', () => (props) => <div id="select" {...props} />);
jest.mock('@material-ui/core/MenuItem', () => (props) => <div id="menuItem" {...props} />);
jest.mock('@material-ui/core/InputBase', () => (props) => <div id="inputBase" {...props} />);

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
