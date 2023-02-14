import renderer from 'react-test-renderer';
import Grant from '@/components/msg/authz/grant';
import { MsgGrant } from '@/models';
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
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = MsgGrant.fromJson({
      category: 'authz',
      type: 'MsgGrant',
      granter: 'sponderbob',
      grantee: 'grantee',
    });

    const component = renderer.create(
      <MockTheme>
        <Grant message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgGrant'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
