import renderer from 'react-test-renderer';
import Result from '@/components/result';
import { MockTheme } from '@/tests/utils';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return mockI18n;
  },
}));

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
