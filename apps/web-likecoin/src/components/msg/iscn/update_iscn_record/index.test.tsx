import renderer from 'react-test-renderer';
import UpdateIscnRecord from '@/components/msg/iscn/update_iscn_record';
import MsgUpdateIscnRecord from '@/models/msg/iscn/msg_update_iscn_record';
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
describe('screen: TransactionDetails/UpdateIscnRecord', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateIscnRecord = {
      category: 'iscn',
      type: 'MsgUpdateIscnRecord',
      from: 'from',
      iscnId: '400',
      record: {
        recordNotes: 'recordNotes',
        contentFingerprints: ['contentFingerprints'],
        stakeholders: [],
        contentMetadata: JSON.parse('{}'),
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UpdateIscnRecord message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
