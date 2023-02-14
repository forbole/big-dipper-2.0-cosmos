import renderer from 'react-test-renderer';
import Actions from '@/components/pagination/components/actions';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@mui/material/IconButton', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="iconButton" {...props} />
));
jest.mock('@mui/material/FormControl', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="formControl" {...props} />
));
jest.mock('@mui/material/Select', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="select" {...props} />
));
jest.mock('@mui/material/MenuItem', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="menuItem" {...props} />
));
jest.mock('@mui/material/InputBase', () => (props: JSX.IntrinsicElements['div']) => (
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
