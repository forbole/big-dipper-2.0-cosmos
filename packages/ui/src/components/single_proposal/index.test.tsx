import renderer from 'react-test-renderer';
import SingleProposal from '@/components/single_proposal';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: SingleProposal', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleProposal id="1" title="proposal-title" status="passed" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
