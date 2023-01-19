import renderer from 'react-test-renderer';
import MenuItems from '@/components/nav/components/menu_items';
import { MockTheme } from '@/tests/utils';
// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

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
      <MockTheme>
        <MenuItems />
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
