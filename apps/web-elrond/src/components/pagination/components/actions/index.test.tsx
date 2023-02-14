import renderer from 'react-test-renderer';
import Actions from '@/components/pagination/components/actions';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@mui/material/IconButton', () => (props: object) => <div id="iconButton" {...props} />);
jest.mock('@mui/material/FormControl', () => (props: object) => (
  <div id="formControl" {...props} />
));
jest.mock('@mui/material/Select', () => (props: object) => <div id="select" {...props} />);
jest.mock('@mui/material/MenuItem', () => (props: object) => <div id="menuItem" {...props} />);
jest.mock('@mui/material/InputBase', () => (props: object) => <div id="inputBase" {...props} />);

// ==================================
// unit tests
// ==================================
describe('components: Pagination/Actions', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Actions
          count={100}
          onPageChange={() => jest.fn()}
          handleRowsPerPageChange={() => jest.fn()}
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
