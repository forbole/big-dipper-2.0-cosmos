import CreateValidator from '@/components/msg/staking/create_validator';
import { MsgCreateValidator } from '@/models';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

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
        securityContact: '',
        details: '',
      },
      commission: {
        rate: '0.1',
        maxRate: '1.00',
        maxChangeRate: '1.00',
      },
      minSelfDelegation: '1000000',
      delegatorAddress: 'delegatorAddress',
      validatorAddress: 'validatorAddress',
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
