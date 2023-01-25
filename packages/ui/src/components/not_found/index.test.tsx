import renderer from 'react-test-renderer';
import NotFound from '@/components/not_found';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ==================================
// unit tests
// ==================================
describe('component: NotFound', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <NotFound />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
