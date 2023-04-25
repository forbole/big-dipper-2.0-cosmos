import renderer from 'react-test-renderer';
import Result from '@/components/result';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: Result', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Result status="test" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot success', () => {
    const component = renderer.create(
      <MockTheme>
        <Result status="success" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
