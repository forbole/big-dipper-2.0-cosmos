import renderer from 'react-test-renderer';
import WithdrawCommission from '@/components/msg/distribution/withdraw_commission';
import { MsgWithdrawValidatorCommission } from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// =============================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/WithdrawCommission', () => {
  it('matches snapshot', () => {
    const message = MsgWithdrawValidatorCommission.fromJson({
      category: 'distribution',
      type: 'MsgWithdrawValidatorCommission',
      validator_address: 'validatorAddress',
      amounts: [
        {
          value: '3000000',
          displayDenom: 'udaric',
          exponent: 6,
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <WithdrawCommission message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
