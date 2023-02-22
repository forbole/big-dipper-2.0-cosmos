import React from 'react';
import dynamic from 'next/dynamic';
// import useTranslation from 'next-translate/useTranslation';
import Box from '@/components/box';
import TitleBar from './price_chart';
import { Typography, Divider } from '@mui/material';
import { useScreenSize } from '@/hooks/use_screen_size';
import useStyles from './styles';

const PriceChart = dynamic(() => import('./price_chart'), { ssr: false });

const MainInfo: React.FC<{
  className?: string;
}> = ({ className }) => {
  // const { t } = useTranslation('home');
  const { classes, cx } = useStyles();
  const { isMobile } = useScreenSize();

  return (
    <Box className={cx(classes.root, className)}>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.label}>
          Coreum
        </Typography>
        <PriceChart />
      </div>
      <Divider
        orientation={isMobile ? 'horizontal' : 'vertical'}
        className={isMobile ? undefined : classes.divider}
      />
      <TitleBar />
    </Box>
  );
};

export default MainInfo;
