import { GetServerSidePropsContext } from 'next';
import { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function getServerSideProps(nextI18NextConfig: UserConfig, ...namespacesRequired: string[]) {
  return async ({ locale }: GetServerSidePropsContext) => ({
    props: {
      ...(await serverSideTranslations(
        locale || 'en',
        ['common', ...namespacesRequired],
        nextI18NextConfig
      )),
    },
  });
}

export default getServerSideProps;
