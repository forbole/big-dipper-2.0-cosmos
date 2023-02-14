import renderer from 'react-test-renderer';
import Loading from '@/components/loading';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: Loading', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Loading />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
