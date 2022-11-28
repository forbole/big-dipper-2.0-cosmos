import Box from '@/components/box';
import { useStyles } from '@/components/nav/components/desktop/components/action_bar/components/network_list/styles';
import Networks from '@/components/nav/components/networks';
import { readTheme } from '@/recoil/settings';
import classnames from 'classnames';
import React from 'react';
import { useRecoilValue } from 'recoil';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red.svg';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';

const NetworkList: React.FC<{
  className?: string;
  actionHeight?: number;
}> = ({ className, actionHeight }) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);

  return (
    <Box className={classnames(className, classes.root)}>
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
