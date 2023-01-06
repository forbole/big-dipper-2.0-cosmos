import useStyles from '@/components/not_found/styles';
import { readTheme } from '@/recoil/settings';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import NotFoundDark from 'shared-utils/assets/not-found-dark.svg';
import NotFoundLight from 'shared-utils/assets/not-found-light.svg';

type NotFoundProps = { className?: string };
const ssrMode = typeof window === 'undefined';

const NotFound: FC<NotFoundProps> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const theme = useRecoilValue(readTheme);
  const router = useRouter();

  useEffect(() => {
    if (!ssrMode && router?.asPath === '/' && /^\/.+/.test(router.basePath)) {
      window.open(router.basePath, '_self');
    }
  }, [router?.asPath, router?.basePath]);

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        {theme === 'light' ? <NotFoundLight /> : <NotFoundDark />}
        <Typography variant="body1">{t('notFound')}</Typography>
      </div>
    </div>
  );
};

export default NotFound;
