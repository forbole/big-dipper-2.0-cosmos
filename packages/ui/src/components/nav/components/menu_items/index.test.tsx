import renderer from 'react-test-renderer';
import MenuItems from '@/components/nav/components/menu_items';
import MockTheme from '@/tests/mocks/MockTheme';
import { RecoilRoot } from 'recoil';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/MenuItems', () => {
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <MenuItems />
        </MockTheme>
      </RecoilRoot>
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
