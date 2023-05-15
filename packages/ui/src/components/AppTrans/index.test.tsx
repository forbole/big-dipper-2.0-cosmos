import AppTrans from '@/components/AppTrans';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import renderer from 'react-test-renderer';

// Sample translation data
const translations = {
  en: {
    translation: {
      testKey: 'translation:testKey',
    },
    app_name: {
      'translation.testKey': 'app_name:translation.testKey',
    },
  },
};

// Initialize i18next with mock translation data
i18n.use(initReactI18next).init({
  resources: translations,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translation', 'app_name'],
  defaultNS: 'translation',
});

// ==================================
// unit tests
// ==================================
describe('component: AppTrans', () => {
  it('renders default translation if app-specific translation is not available', () => {
    const component = renderer.create(
      <I18nextProvider i18n={i18n}>
        <AppTrans i18nKey="translation:testKey" />
      </I18nextProvider>
    );

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'translation:testKey'
    );

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders app-specific translation when available', () => {
    // Temporarily set the app name to `app_name`
    process.env.NEXT_PUBLIC_APP_NAME = 'app_name';

    const component = renderer.create(
      <I18nextProvider i18n={i18n}>
        <AppTrans i18nKey="translation:testKey" />
      </I18nextProvider>
    );

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual([
      'app_name:translation.testKey',
      'translation:testKey',
    ]);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    // Reset the app name
    process.env.NEXT_PUBLIC_APP_NAME = '';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
