import renderer from 'react-test-renderer';
import Paginate from '@/screens/proposal_details/components/votes/components/paginate';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/pagination', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Pagination" {...props} />
));

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
            handlePageChange: jest.fn(),
            handleRowsPerPageChange: jest.fn(),
          }}
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
