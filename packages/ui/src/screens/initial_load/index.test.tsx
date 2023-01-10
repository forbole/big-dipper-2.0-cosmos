import InitialLoad from '@/screens/initial_load';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@mui/material/LinearProgress', () => (props: JSX.IntrinsicElements['div']) => (
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
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
