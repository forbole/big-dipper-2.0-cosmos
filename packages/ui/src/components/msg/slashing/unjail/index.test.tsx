import renderer from 'react-test-renderer';
import Unjail from '@/components/msg/slashing/unjail';
import { MsgUnjail } from '@/models';
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
describe('screen: TransactionDetails/UnBlockUser', () => {
  it('matches snapshot', () => {
    const message = MsgUnjail.fromJson({
      category: 'slashing',
      type: 'MsgUnjail',
      validator_addr: 'validatorAddress',
    });
    const component = renderer.create(
      <MockTheme>
        <Unjail message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
