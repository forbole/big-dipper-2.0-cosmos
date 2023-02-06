import renderer from 'react-test-renderer';
import TabPanel from '@/components/tab_panel';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: TabPanel', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabPanel index={1} value={2} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
