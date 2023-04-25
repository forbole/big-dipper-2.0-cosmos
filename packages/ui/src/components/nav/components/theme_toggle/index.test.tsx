import renderer from 'react-test-renderer';
import MockTheme from '@/tests/mocks/MockTheme';
import ThemeToggle from '@/components/nav/components/theme_toggle/index';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: Nav/ThemeToggle', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <ThemeToggle />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
