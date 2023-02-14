/* eslint-disable no-nested-ternary, react/no-array-index-key */
import { jest } from '@jest/globals';
import type { Trans as TransType } from 'next-i18next';
import { ComponentProps, createElement, Fragment, isValidElement } from 'react';

function mockI18Next() {
  const t = jest.fn((key: string) => key);
  const i18n = { language: 'en' };
  const changeLanguage = jest.fn((language: string) => {
    i18n.language = language;
  });
  const Trans = ({ components, i18nKey, values }: ComponentProps<typeof TransType>) =>
    createElement(
      'span',
      { 'data-testid': 'Trans', i18nKey },
      [
        ...(!components
          ? []
          : Array.isArray(components)
          ? components
          : [Object.entries(components).flatMap(([key, value]) => [key, value])]),
        ...(values ? [JSON.stringify(values)] : []),
      ].map((component, key) =>
        typeof component === 'string'
          ? component
          : isValidElement(component)
          ? createElement(Fragment, { key }, component)
          : JSON.stringify(component)
      )
    );
  const mockI18n = { t, i18n: { ...i18n, changeLanguage }, Trans };
  const useTranslation = jest.fn(() => mockI18n);
  jest.mock('next-i18next', () => ({
    ...jest.requireActual<object>('next-i18next'),
    useTranslation,
    Trans,
  }));
}

export default mockI18Next;
