import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import Box from '@/components/box';
import useStyles from '@/screens/validator_details/components/blocks/styles';

const Blocks: FC<ComponentDefault> = ({ className }) => {
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2">{t('lastBlocks')}</Typography>
      <div className={classes.content}>
        <Typography variant="h4">{t('comingSoon')}</Typography>
      </div>
    </Box>
  );
};

export default Blocks;
