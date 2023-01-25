import renderer from 'react-test-renderer';
import Vote from '@/components/msg/governance/vote';
import { MsgVote } from '@/models';
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
describe('screen: TransactionDetails/MsgVote', () => {
  it('matches snapshot', () => {
    const message = MsgVote.fromJson({
      category: 'governance',
      type: 'MsgVote',
      proposalId: 10,
      voter: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      option: 'VOTE_OPTION_NO',
      json: {
        content: {
          '@type': '/cosmos.gov.v1beta1.TextProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Vote message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:txVoteContent'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
