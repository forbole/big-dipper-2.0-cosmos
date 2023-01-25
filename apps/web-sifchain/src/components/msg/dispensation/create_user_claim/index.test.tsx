import renderer from 'react-test-renderer';
import CreateUserClaim from '@/components/msg/dispensation/create_user_claim';
import MsgCreateUserClaim from '@/models/msg/dispensation/msg_create_user_claim';
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
describe('screen: TransactionDetails/CreateUserClaim', () => {
  it('matches snapshot', () => {
    const message: MsgCreateUserClaim = {
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      userClaimAddress: 'userClaimAddress',
      userClaimType: 'DISTRIBUTION_TYPE_AIRDROP',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateUserClaim message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateUserClaim'
    );
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:MsgCreateUserClaim' }).props.values
        .userClaimType
    ).toEqual('DISTRIBUTION_TYPE_AIRDROP');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
