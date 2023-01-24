import renderer from 'react-test-renderer';
import Settings from '@/components/nav/components/desktop/components/action_bar/components/settings_list';
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
jest.mock('@mui/material/Select', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="select" {...props} />
));
jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return mockI18n;
  },
}));
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    locales: ['en', 'zh'],
    pathname: '/app/home',
    query: {
      key: 'val',
    },
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SettingList', () => {
  beforeEach(async () => {
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <Settings />
        </MockTheme>
      );
    });
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  mockI18n.lang = 'en';
  jest.clearAllMocks();
});
