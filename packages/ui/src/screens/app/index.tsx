import chainConfig from '@/chainConfig';
import useApollo from '@/graphql/useApollo';
import { useWindowOrigin } from '@/hooks';
import Main from '@/screens/app/components/main';
import { useApp } from '@/screens/app/hooks';
import {
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
} from '@/screens/app/utils';
import createEmotionCache from '@/styles/createEmotionCache';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps<{ initialApolloState?: NormalizedCacheObject }> {
  emotionCache?: EmotionCache;
}

const { title } = chainConfig();

function MyApp(props: MyAppProps) {
  useApp();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useTranslation();
  const { location } = useWindowOrigin();

  return (
    <CacheProvider value={emotionCache}>
      <RecoilRoot>
        <DefaultSeo
          titleTemplate={`%s | ${title}`}
          title={t('common:bigDipper')}
          description={t('common:description')}
          openGraph={{
            title: `${t('common:bigDipper')} | ${title}`,
            description: t('common:description'),
            url: location,
            ...OPEN_GRAPH_SEO,
          }}
          twitter={TWITTER_SEO}
          additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
          additionalMetaTags={ADDITIONAL_META_TAGS}
        />
        <ApolloProvider client={apolloClient}>
          <Main {...props} />
        </ApolloProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}

export default MyApp;
