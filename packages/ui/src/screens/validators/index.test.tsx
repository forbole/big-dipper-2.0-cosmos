import Validators from '@/screens/validators';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/layout', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Layout" {...props} />
));

jest.mock('@/screens/validators/components/list', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="List" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Validators', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Validators />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
