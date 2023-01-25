import renderer from 'react-test-renderer';
import VerifyInvariant from '@/components/msg/crisis/verify_invariant';
import { MsgVerifyInvariant } from '@/models';
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
describe('screen: TransactionDetails/MsgVerifyInvariant', () => {
  it('matches snapshot', () => {
    const message = MsgVerifyInvariant.fromJson({
      category: 'crisis',
      type: 'MsgVerifyInvariant',
      sender: 'sender',
      invariant_module_name: 'invariantModuleName',
      invariant_route: 'invariantRoute',
    });
    const component = renderer.create(
      <MockTheme>
        <VerifyInvariant message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
