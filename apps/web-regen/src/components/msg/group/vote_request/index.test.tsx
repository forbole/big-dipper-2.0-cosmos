import VoteRequest from '@/components/msg/group/vote_request';
import MsgVoteRequest from '@/models/msg/group/msg_vote_request';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgVoteRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
