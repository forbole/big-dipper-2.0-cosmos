import renderer from 'react-test-renderer';
import TabsHeader from '@/screens/proposal_details/components/votes/components/tabs';
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
        <TabsHeader
          {...{
            tab: 0,
            handleTabChange: jest.fn(),
            data: {
              yes: 10,
              no: 4,
              abstain: 0,
              veto: 10,
              notVoted: 0,
            },
          }}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
