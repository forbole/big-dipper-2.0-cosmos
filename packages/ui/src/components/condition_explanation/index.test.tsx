import renderer from 'react-test-renderer';
import ConditionExplanation from '@/components/condition_explanation';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: ConditionExplanation', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <ConditionExplanation />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
