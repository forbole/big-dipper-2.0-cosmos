import renderer from 'react-test-renderer';
import CreateValidator from '@/components/msg/staking/create_validator';
import { MsgCreateValidator } from '@/models';
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
describe('screen: TransactionDetails/CreateValidator', () => {
  it('matches snapshot', () => {
    const message = MsgCreateValidator.fromJson({
      category: 'staking',
      type: 'MsgCreateValidator',
      description: {
        moniker: 'forbole',
        identity: '123123ASD',
        website: 'https://forbole.com',
        security_contact: '',
        details: '',
      },
      commission: {
        rate: '0.1',
        max_rate: '1.00',
        max_change_rate: '1.00',
      },
      min_self_delegation: '1000000',
      delegator_address: 'delegatorAddress',
      validator_address: 'validatorAddress',
      pubkey: {
        type: 'pubkey',
        key: 'key',
      },
      value: {
        denom: 'udaric',
        amount: '10000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <CreateValidator message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
