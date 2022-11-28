import DtagAcceptTransfer from '@/components/msg/profiles/dtag_accept_transfer';
import { MsgDtagAcceptTransfer } from '@/models';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/DtagAcceptTransfer', () => {
  it('matches snapshot', () => {
    const message = MsgDtagAcceptTransfer.fromJson({
      category: 'profiles',
      type: 'MsgDtagAcceptTransfer',
      sender: 'sender',
      receiver: 'receiver',
      newDtag: 'newDtag',
    });
    const component = renderer.create(
      <MockTheme>
        <DtagAcceptTransfer message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
