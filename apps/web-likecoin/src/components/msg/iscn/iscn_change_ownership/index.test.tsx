import renderer from 'react-test-renderer';
import IscnChangeOwnership from '@/components/msg/iscn/iscn_change_ownership';
import MsgChangeIscnRecordOwnership from '@/models/msg/iscn/msg_change_iscn_record_ownership';
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
describe('screen: TransactionDetails/IscnChangeOwnership', () => {
  it('matches snapshot', () => {
    const message: MsgChangeIscnRecordOwnership = {
      category: 'iscn',
      type: 'MsgChangeIscnRecordOwnership',
      from: 'from',
      iscnId: '300',
      newOwner: 'newOwner',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <IscnChangeOwnership message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
