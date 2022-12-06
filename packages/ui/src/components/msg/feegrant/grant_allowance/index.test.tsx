import GrantAllowance from '@/components/msg/feegrant/grant_allowance';
import { MsgGrantAllowance } from '@/models';
import { MockTheme, wait } from '@/tests/utils';
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgGrantAllowance'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
