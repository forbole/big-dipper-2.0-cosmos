import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import { readTheme } from '@recoil/settings/selectors';
import NotFoundLight from '@assets/not-found-light.svg';
import NotFoundDark from '@assets/not-found-dark.svg';
import { useStyles } from './styles';

const NotFound: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('common');
  const theme = useRecoilValue(readTheme);

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.content}>
        {theme === 'light' ? (
          <NotFoundLight />
        ) : (
          <NotFoundDark />
        )}
        <Typography variant="body1">
          {t('notFound')}
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
