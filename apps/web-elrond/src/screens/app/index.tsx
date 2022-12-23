import chainConfig from '@/chainConfig';
import { useWindowOrigin } from '@/hooks';
import Main from '@/screens/app/components/main';
import { useApp } from '@/screens/app/hooks';
import {
  ADDITIONAL_LINK_TAGS_SEO,
  ADDITIONAL_META_TAGS,
  OPEN_GRAPH_SEO,
  TWITTER_SEO,
} from '@/screens/app/utils';
import { NormalizedCacheObject } from '@apollo/client';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const { title } = chainConfig();

function App(props: AppProps<{ initialApolloState?: NormalizedCacheObject }>) {
  useApp();
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
          url: location,
          description: t('common:description'),
          ...OPEN_GRAPH_SEO,
        }}
        twitter={TWITTER_SEO}
        additionalLinkTags={ADDITIONAL_LINK_TAGS_SEO}
        additionalMetaTags={ADDITIONAL_META_TAGS}
      />
      <Main {...props} />
    </RecoilRoot>
  );
}

export default App;
