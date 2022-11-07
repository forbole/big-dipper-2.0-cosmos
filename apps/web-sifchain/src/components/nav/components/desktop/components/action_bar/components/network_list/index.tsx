import React from 'react';
import classnames from 'classnames';
import Box from 'ui/components/Box';
import BigDipperLogoWhite from 'shared-utils/assets/big-dipper-white.svg';
import BigDipperLogoRed from 'shared-utils/assets/big-dipper-red-sifchain.svg';
import { Networks } from '@src/components/nav/components';
import { useRecoilValue } from 'recoil';
import { readTheme } from '@recoil/settings/selectors';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  className?: string;
  actionHeight?: number;
}> = ({ className, actionHeight }) => {
  const classes = useStyles();
  const theme = useRecoilValue(readTheme);

  return (
    <Box boxShadow={3} className={classnames(className, classes.root)}>
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
