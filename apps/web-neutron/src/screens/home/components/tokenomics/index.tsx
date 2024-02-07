import Box from '@/components/box';
import useStyles from '@/screens/home/components/tokenomics/styles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const Tokenomics: FC<ComponentDefault> = ({ className }) => {
  const { t } = useAppTranslation('home');
  const { classes, cx } = useStyles();

  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2" className={classes.label}>
        {t('tokenomics')}
      </Typography>
      <div className={classes.content}>
        <Typography variant="h4">{t('notAvailable')}</Typography>
      </div>
    </Box>
  );
};

export default Tokenomics;
