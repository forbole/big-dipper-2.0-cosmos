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

jest.mock('../../contexts/holders', () => ({
  useHoldersContext: () => ({
    rowsPerPage: 10,
    page: 0,
    total: 100,
    handleChangePage: jest.fn(),
    handleChangeRowsPerPage: jest.fn(),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: TokenDetails/Paginate', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Paginate />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
