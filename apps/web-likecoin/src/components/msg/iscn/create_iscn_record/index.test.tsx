import renderer from 'react-test-renderer';
import CreateIscnRecord from '@/components/msg/iscn/create_iscn_record';
import MsgCreateIscnRecord from '@/models/msg/iscn/msg_create_iscn_record';
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
describe('screen: TransactionDetails/CreateIscnRecord', () => {
  it('matches snapshot', () => {
    const message: MsgCreateIscnRecord = {
      category: 'iscn',
      type: 'MsgCreateIscnRecord',
      from: 'from',
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
        <CreateIscnRecord message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
