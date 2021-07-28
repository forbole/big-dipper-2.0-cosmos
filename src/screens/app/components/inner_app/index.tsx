import React from 'react';
import { AppProps } from 'next/app';
import InitialLoad from '@screens/initial_load';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import {
  useChainContext,
  useNetworksContext,
} from '@contexts';
import { chainConfig } from '@configs';
import { useChainHealthCheck } from './hooks';

// Separated to use our useSettingsContext hook
function InnerApp({
  Component, pageProps,
}: AppProps) {
  useChainHealthCheck();
  const networksContext = useNetworksContext();
  const chainContext = useChainContext();
  const isLoading = chainContext.loading || networksContext.loading;
  const { t } = useTranslation();
  // ============================
  // Meta Tags
  // ============================
  let currentPath = '';

  if (typeof window === 'object') {
    currentPath = window?.location?.href || '';
  }

  const title = `${t('common:bigDipper')} | ${chainConfig.title}`;

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          url: currentPath,
          title,
        }}
      />
      {
      isLoading ? (
        <InitialLoad {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )
    }
    </>
  );
}

export default InnerApp;
