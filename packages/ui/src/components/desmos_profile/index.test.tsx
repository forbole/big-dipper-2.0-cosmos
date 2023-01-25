import renderer from 'react-test-renderer';
import DesmosProfile from '@/components/desmos_profile';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock(
  '@/components/desmos_profile/components/connections/components/desktop',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />
);
jest.mock(
  '@/components/desmos_profile/components/connections/components/mobile',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />
);

// ==================================
// unit tests
// ==================================
describe('component: DesmosProfile', () => {
  it('matches snapshot', () => {
    const connection: ProfileConnectionType[] = [
      {
        network: '',
        identifier: '',
        creationTime: '',
      },
    ];
    const component = renderer.create(
      <MockTheme>
        <DesmosProfile
          dtag="test"
          nickname="test_nickname"
          imageUrl="testurl.com"
          bio="test bio"
          connections={connection}
          coverUrl="testcoverurl.com"
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
