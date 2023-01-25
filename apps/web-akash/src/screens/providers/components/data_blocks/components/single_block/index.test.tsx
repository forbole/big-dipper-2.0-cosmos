import renderer from 'react-test-renderer';
import SingleBlock from '@/screens/providers/components/data_blocks/components/single_block';
import MockTheme from '@/tests/mocks/MockTheme';
// ==================================
// unit tests
// ==================================
describe('screen: Home/SingleBlock', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleBlock label="Price" value="$4.40" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
