import renderer from 'react-test-renderer';
import LinearLoading from '@/components/linear_loading';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: LinearLoading', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LinearLoading />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
