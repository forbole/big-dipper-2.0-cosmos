import renderer from 'react-test-renderer';
import Revoke from '@/components/msg/authz/revoke';
import { MsgRevoke } from '@/models';
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
    const message = MsgRevoke.fromJson({
      category: 'authz',
      type: 'MsgRevoke',
      granter: 'sponderbob',
      grantee: 'grantee',
    });

    const component = renderer.create(
      <MockTheme>
        <Revoke message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRevoke'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
