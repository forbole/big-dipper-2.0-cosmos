import renderer from 'react-test-renderer';
import CreateProposalRequest from '@/components/msg/group/create_proposal_request';
import MsgCreateProposalRequest from '@/models/msg/group/msg_create_proposal_request';
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
describe('screen: TransactionDetails/CreateProposalRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateProposalRequest = {
      category: 'group',
      type: 'MsgCreateProposalRequest',
      address: 'address',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <CreateProposalRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateProposalRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
