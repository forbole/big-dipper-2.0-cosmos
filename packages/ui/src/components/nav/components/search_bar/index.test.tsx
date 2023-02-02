import renderer from 'react-test-renderer';
import SearchBar from '@/components/nav/components/search_bar';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/search', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Search" {...props} />
));

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SearchBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <SearchBar />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
