import renderer from 'react-test-renderer';
import NoData from '@/components/no_data';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: NoData', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <NoData />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
