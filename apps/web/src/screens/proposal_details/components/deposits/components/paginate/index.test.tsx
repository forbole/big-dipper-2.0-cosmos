import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Paginate from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Pagination: (props) => <div id="Pagination" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TokenDetails/Paginate', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Paginate
          {...{
            rowsPerPage: 10,
            page: 0,
            total: 100,
            handleChangePage: jest.fn(),
            handleChangeRowsPerPage: jest.fn(),
          }}
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
