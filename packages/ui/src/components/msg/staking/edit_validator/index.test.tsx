import renderer from 'react-test-renderer';
import EditValidator from '@/components/msg/staking/edit_validator';
import { MsgEditValidator } from '@/models';
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
describe('screen: TransactionDetails/EditValidator', () => {
  it('matches snapshot', () => {
    const message = MsgEditValidator.fromJson({
      category: 'staking',
      type: 'MsgEditValidator',
      description: {
        moniker: 'forbole',
        identity: '',
        website: '',
        security_contact: '',
        details: '',
      },
      validator_address: 'validatorAddress',
      commission_rate: '0.1',
      min_self_delegation: '0.1',
    });
    const component = renderer.create(
      <MockTheme>
        <EditValidator message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
