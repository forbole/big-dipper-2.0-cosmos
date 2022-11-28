import CreateUserClaim from '@/components/msg/dispensation/create_user_claim';
import MsgCreateUserClaim from '@/models/msg/dispensation/msg_create_user_claim';
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateUserClaim'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.userClaimType).toEqual(
      'DISTRIBUTION_TYPE_AIRDROP'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
