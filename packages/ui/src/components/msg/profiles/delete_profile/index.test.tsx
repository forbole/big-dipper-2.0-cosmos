import DeleteProfile from '@/components/msg/profiles/delete_profile';
import { MsgDeleteProfile } from '@/models';
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
describe('screen: TransactionDetails/DeleteProfile', () => {
  it('matches snapshot', () => {
    const message = MsgDeleteProfile.fromJson({
      category: 'profiles',
      type: 'MsgDeleteProfile',
      creator: 'creator',
    });
    const component = renderer.create(
      <MockTheme>
        <DeleteProfile message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
