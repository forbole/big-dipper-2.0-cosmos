import renderer from 'react-test-renderer';
import GrantAllowance from '@/components/msg/feegrant/grant_allowance';
import { MsgGrantAllowance } from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';
import wait from '@/tests/utils/wait';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', async () => {
    const message = MsgGrantAllowance.fromJson({
      category: 'feegrant',
      type: 'MsgGrant',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    await wait(renderer.act);
    const component = renderer.create(
      <MockTheme>
        <GrantAllowance message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgGrantAllowance'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
