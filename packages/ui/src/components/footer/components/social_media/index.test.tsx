import SocialMedia from '@/components/footer/components/social_media';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// unit tests
// ==================================
describe('component: layout/footer', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SocialMedia />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
