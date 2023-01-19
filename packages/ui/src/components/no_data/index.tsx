import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import NotFoundDark from 'shared-utils/assets/not-found-dark.svg';
import NotFoundLight from 'shared-utils/assets/not-found-light.svg';
import { readTheme } from '@/recoil/settings';
import useStyles from '@/components/no_data/styles';

const NoData: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const theme = useRecoilValue(readTheme);

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        {theme === 'light' ? <NotFoundLight /> : <NotFoundDark />}
        <Typography variant="body1">{t('nothingToShow')}</Typography>
      </div>
    </div>
  );
};

export default NoData;
