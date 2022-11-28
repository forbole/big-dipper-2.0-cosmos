import EditValidator from '@/components/msg/staking/edit_validator';
import { MsgEditValidator } from '@/models';
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
describe('screen: TransactionDetails/EditValidator', () => {
  it('matches snapshot', () => {
    const message = MsgEditValidator.fromJson({
      category: 'staking',
      type: 'MsgEditValidator',
      description: {
        moniker: 'forbole',
        identity: '',
        website: '',
        securityContact: '',
        details: '',
      },
      validatorAddress: 'validatorAddress',
      commissionRate: '0.1',
      minSelfDelegation: '0.1',
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
