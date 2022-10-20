import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Pagination from '.';

// ==================================
// mocks
// ==================================
jest.mock('./components', () => ({
  Actions: (props) => <div id="Actions" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('components: Pagination', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Pagination
          total={100}
          handleChangePage={jest.fn()}
          handleChangeRowsPerPage={jest.fn()}
          page={0}
          rowsPerPage={5}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
