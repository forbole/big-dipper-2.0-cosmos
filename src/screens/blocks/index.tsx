import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';
import { useStyles } from './styles';
import { List } from './components';

const Blocks = () => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  return (
    <Layout
      title={t('blocks')}
      navTitle={t('blocks')}
      className={classes.root}
    >
      <Box className={classnames(className, classes.root)}>
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
      </Box>
    </Layout>
  );
};

export default Blocks;
