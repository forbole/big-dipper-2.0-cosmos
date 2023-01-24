import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function getStaticProps(...namespacesRequired: string[]) {
  return async ({ locale, ...context }: GetStaticPropsContext) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', ...namespacesRequired])),
      ...context,
    },
  });
}

export default getStaticProps;
