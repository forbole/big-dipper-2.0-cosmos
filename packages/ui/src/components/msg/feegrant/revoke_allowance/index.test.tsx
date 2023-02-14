import renderer from 'react-test-renderer';
import RevokeAllowance from '@/components/msg/feegrant/revoke_allowance';
import { MsgRevokeAllowance } from '@/models';
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
describe('screen: TransactionDetails/Revoke', () => {
  it('matches snapshot', () => {
    const message = MsgRevokeAllowance.fromJson({
      category: 'authz',
      type: 'MsgRevokeAllowance',
      granter: 'sponderbob',
      grantee: 'grantee',
    });
    const component = renderer.create(
      <MockTheme>
        <RevokeAllowance message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRevokeAllowance'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
