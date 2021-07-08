import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';

const Params = () => {
  const { t } = useTranslation('params');

  return (
    <Layout
      title={t('params')}
      navTitle={t('params')}
      // className={classes.root}
    >
      PARAMS
    </Layout>
  );
};

export default Params;
