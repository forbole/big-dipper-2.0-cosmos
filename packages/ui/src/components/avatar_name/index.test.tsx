import renderer from 'react-test-renderer';
import AvatarName from '@/components/avatar_name';
import MockTheme from '@/tests/mocks/MockTheme';

jest.mock('@/components/avatar', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Avatar" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('component: AvatarName', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarName name="name" address="123" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with imageUrl', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarName
          name="name"
          address="123"
          imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
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
