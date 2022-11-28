import Tag from '@/components/tag';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// unit tests
// ==================================
describe('components: Tag', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Tag value="hello world" theme="one" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
