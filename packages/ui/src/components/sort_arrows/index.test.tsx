import SortArrows from '@/components/sort_arrows';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

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
