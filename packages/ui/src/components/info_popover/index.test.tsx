import renderer from 'react-test-renderer';
import ConditionExplanation from '@/components/condition_explanation';
import InfoPopover from '@/components/info_popover';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: InfoPopover', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <InfoPopover content={<ConditionExplanation />} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
