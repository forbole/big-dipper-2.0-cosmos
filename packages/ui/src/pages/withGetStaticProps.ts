import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function getStaticProps(...namespacesRequired: string[]) {
  return async ({ locale }: GetStaticPropsContext) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', ...namespacesRequired])),
    },
  });
}

export default getStaticProps;
