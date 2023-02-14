import renderer from 'react-test-renderer';
import Redelegate from '@/components/msg/staking/redelegate';
import { MsgRedelegate } from '@/models';
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
describe('screen: TransactionDetails/Redelegate', () => {
  it('matches snapshot', () => {
    const message = MsgRedelegate.fromJson({
      category: 'staking',
      type: 'MsgEditValidator',
      delegator_address: 'delegatorAddress',
      validator_src_address: 'validatorSrcAddress',
      validator_dst_address: 'validatorDstAddress',
      amount: {
        denom: 'udaric',
        amount: '1000000000',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Redelegate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
