import renderer from 'react-test-renderer';
import TabsHeader from '@/screens/validators/components/list/components/tabs';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/search', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Search" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader tab={0} handleSearch={jest.fn()} handleTabChange={jest.fn()} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
