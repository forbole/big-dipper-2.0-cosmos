import RevokeAllowance from '@/components/msg/feegrant/revoke_allowance';
import { MsgRevokeAllowance } from '@/models';
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRevokeAllowance'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
