import renderer from 'react-test-renderer';
import DepositProposal from '@/components/msg/governance/deposit_proposal';
import { MsgDeposit } from '@/models';
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
describe('screen: TransactionDetails/DepositProposal', () => {
  it('matches snapshot', () => {
    const message = MsgDeposit.fromJson({
      category: 'governance',
      type: 'MsgDeposit',
      proposalId: 10,
      depositor: 'depositor',
      amount: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <DepositProposal message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
