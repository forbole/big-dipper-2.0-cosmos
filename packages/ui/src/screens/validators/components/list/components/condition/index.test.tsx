import Condition from '@/screens/validators/components/list/components/condition';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Condition', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Condition />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
