import renderer from 'react-test-renderer';
import SortArrows from '@/components/sort_arrows';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: SortArrows', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SortArrows />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
