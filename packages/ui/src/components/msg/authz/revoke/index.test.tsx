import Revoke from '@/components/msg/authz/revoke';
import { MsgRevoke } from '@/models';
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRevoke'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
