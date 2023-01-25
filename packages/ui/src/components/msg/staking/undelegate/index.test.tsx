import renderer from 'react-test-renderer';
import Undelegate from '@/components/msg/staking/undelegate';
import { MsgUndelegate } from '@/models';
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
describe('screen: TransactionDetails/Undelegate', () => {
  it('matches snapshot', () => {
    const message = MsgUndelegate.fromJson({
      category: 'staking',
      type: 'MsgEditValidator',
      delegator_address: 'delegatorAddress',
      validator_address: 'validatorAddress',
      amount: {
        denom: 'udaric',
        amount: '1000000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Undelegate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
