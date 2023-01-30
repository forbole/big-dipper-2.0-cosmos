import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function getServerSideProps(...namespacesRequired: string[]) {
  return async ({ locale }: GetServerSidePropsContext) => ({
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', ...namespacesRequired])),
    },
  });
}

export default getServerSideProps;
