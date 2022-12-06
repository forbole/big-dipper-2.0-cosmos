import ExecRequest from '@/components/msg/group/exec_request';
import MsgExecRequest from '@/models/msg/group/msg_exec_request';
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
describe('screen: TransactionDetails/ExecRequest', () => {
  it('matches snapshot', () => {
    const message: MsgExecRequest = {
      category: 'group',
      type: 'MsgExecRequest',
      signer: 'signer',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <ExecRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgExecRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
