import useAppTranslation from '@/hooks/useAppTranslation';
import { renderHook } from '@testing-library/react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

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
describe('hook: useAppTranslation', () => {
  it('returns default translation if app-specific translation is not available', () => {
    const { result } = renderHook(() => useAppTranslation(), {
      wrapper: ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>,
    });

    const translatedText = result.current.t('translation:testKey');
    expect(translatedText).toEqual('translation:testKey');
  });

  it('returns app-specific translation when available', () => {
    // Temporarily set the app name to `app_name`
    process.env.NEXT_PUBLIC_APP_NAME = 'app_name';

    const { result } = renderHook(() => useAppTranslation(), {
      wrapper: ({ children }) => <I18nextProvider i18n={i18n}>{children}</I18nextProvider>,
    });

    const translatedText = result.current.t('translation:testKey');
    expect(translatedText).toEqual('app_name:translation.testKey');

    // Reset the app name
    process.env.NEXT_PUBLIC_APP_NAME = '';
  });
});
