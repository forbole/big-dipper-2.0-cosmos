import renderer from 'react-test-renderer';
import VoteRequest from '@/components/msg/group/vote_request';
import MsgVoteRequest from '@/models/msg/group/msg_vote_request';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/VoteRequest', () => {
  it('matches snapshot', () => {
    const message: MsgVoteRequest = {
      category: 'group',
      type: 'MsgVoteRequest',
      voter: 'voter',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <VoteRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgVoteRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
