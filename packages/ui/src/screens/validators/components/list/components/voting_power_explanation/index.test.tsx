import VotingPowerExplanation from '@/screens/validators/components/list/components/voting_power_explanation';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// unit tests
// ==================================
describe('screen: Validators/VotingPowerExplanation', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <VotingPowerExplanation />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
