import CreateRelationship from '@/components/msg/profiles/create_relationship';
import { MsgCreateRelationship } from '@/models';
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
describe('screen: TransactionDetails/CreateRelationship', () => {
  it('matches snapshot', () => {
    const message = MsgCreateRelationship.fromJson({
      category: 'profiles',
      type: 'MsgCreateRelationship',
      sender: 'sender',
      receiver: 'receiver',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateRelationship message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
