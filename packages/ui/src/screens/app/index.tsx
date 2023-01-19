import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { RecoilRoot } from 'recoil';
import chainConfig from '@/chainConfig';
import useApollo from '@/graphql/useApollo';
import { useWindowOrigin } from '@/hooks/use_window';
import Main, { MainProps } from '@/screens/app/components/main';
import { useApp } from '@/screens/app/hooks';
import {
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
} from '@/screens/app/utils';

const { title } = chainConfig();

function MyApp(props: MainProps<{ initialApolloState?: NormalizedCacheObject }>) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const { t } = useTranslation();
  const { location } = useWindowOrigin();

  return (
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
  );
}

export default MyApp;
