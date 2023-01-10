import useStyles from '@/components/no_data/styles';
import Typography from '@mui/material/Typography';
import { Face } from '@mui/icons-material';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const NoData: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        <Face />
        <Typography variant="body1">{t('nothingToShow')}</Typography>
      </div>
    </div>
  );
};

export default NoData;
