import Pagination from '@/components/pagination';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock(
  '@/components/pagination/components/actions',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Actions" {...props} />
);

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
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
