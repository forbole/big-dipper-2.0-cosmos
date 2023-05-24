import Typography from '@mui/material/Typography';
import FaceIcon from '@mui/icons-material/Face';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import useStyles from '@/components/no_data/styles';

const NoData: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('common');
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        <FaceIcon />
        <Typography variant="body1">{t('nothingToShow')}</Typography>
      </div>
    </div>
  );
};

export default NoData;
