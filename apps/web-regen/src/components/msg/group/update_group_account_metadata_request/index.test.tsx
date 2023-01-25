import renderer from 'react-test-renderer';
import UpdateGroupAccountMetadataRequest from '@/components/msg/group/update_group_account_metadata_request';
import MsgUpdateGroupAccountMetadataRequest from '@/models/msg/group/msg_update_group_account_metadata_request';
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
describe('screen: TransactionDetails/UpdateGroupAccountMetadataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupAccountMetadataRequest = {
      category: 'group',
      type: 'MsgUpdateGroupAccountMetadataRequest',
      admin: 'admin',
      address: 'address',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountMetadataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountMetadataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
