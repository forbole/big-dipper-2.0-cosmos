import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import Box from '@/components/box';
import useStyles from '@/components/nav/components/desktop/components/action_bar/components/network_list/styles';
import Networks from '@/components/nav/components/networks';
import { readTheme } from '@/recoil/settings';

type NetworkListProps = {
  className?: string;
  actionHeight?: number;
};

const NetworkList: FC<NetworkListProps> = ({ className, actionHeight }) => {
  const { classes, cx } = useStyles();
  const theme = useRecoilValue(readTheme);

  return (
    <Box className={cx(classes.root, className)}>
      <div
        style={{
          height: actionHeight,
        }}
      >
        {theme === 'light' ? <BigDipperLogoRed /> : <BigDipperLogoWhite />}
      </div>
      <Networks className={classes.content} />
    </Box>
  );
};

export default NetworkList;
