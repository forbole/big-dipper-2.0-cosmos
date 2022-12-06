import UpdateGroupMetadataRequest from '@/components/msg/group/update_group_metadata_request';
import MsgUpdateGroupMetadataRequest from '@/models/msg/group/msg_update_group_metadata_request';
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
describe('screen: TransactionDetails/UpdateGroupMetadataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupMetadataRequest = {
      category: 'group',
      type: 'MsgUpdateGroupMembersRequest',
      admin: 'admin',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupMetadataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupMetadataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
