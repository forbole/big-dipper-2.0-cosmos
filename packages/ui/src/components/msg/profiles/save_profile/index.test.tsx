import SaveProfile from '@/components/msg/profiles/save_profile';
import { MsgSaveProfile } from '@/models';
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
describe('screen: TransactionDetails/SaveProfile', () => {
  it('matches snapshot', () => {
    const message = MsgSaveProfile.fromJson({
      category: 'profiles',
      type: 'MsgSaveProfile',
      creator: 'creator',
    });
    const component = renderer.create(
      <MockTheme>
        <SaveProfile message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
