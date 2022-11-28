import LinearLoading from '@/components/linear_loading';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

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
