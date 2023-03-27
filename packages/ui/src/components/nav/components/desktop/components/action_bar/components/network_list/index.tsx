import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Box from '@/components/box';
import Typography from '@mui/material/Typography';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network_list/styles';
import Networks from '@/components/nav/components/networks';
import NetworkSarchBar from '@/components/nav/components/network_search_bar';

type NetworkListProps = {
  className?: string;
  actionHeight?: number;
};

const NetworkList: FC<NetworkListProps> = ({ className, actionHeight }) => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');

  return (
    <Box className={cx(classes.root, className)}>
      <div
        style={{
          height: actionHeight,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2">{t('select a chain')}</Typography>
        <NetworkSarchBar />
      </div>
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;
