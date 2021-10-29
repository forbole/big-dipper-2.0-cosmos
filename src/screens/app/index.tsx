import React from 'react';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@src/graphql/client';
import { chainConfig } from '@configs';
import { Main } from './components';
import {
  useApp,
} from './hooks';
import {
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
} from './utils';

function App(props: AppProps) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useTranslation();

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${chainConfig.title}`}
        title={t('common:bigDipper')}
        description={t('common:description')}
        openGraph={{
          title: `${t('common:bigDipper')} | ${chainConfig.title}`,
          url: process.env.NEXT_PUBLIC_URL,
          description: t('common:description'),
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <ApolloProvider
        client={apolloClient}
      >
        <RecoilRoot>
          <Main {...props} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}

export default App;
