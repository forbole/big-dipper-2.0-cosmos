import React from 'react';
import * as R from 'ramda';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';
import { readMarket } from '@recoil/market';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { chainConfig } from '@configs';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';
import { formatMarket } from './utils';

const LogoContainer: React.FC = () => {
  const classes = useStyles();

  const theme = useRecoilValue(readTheme);
  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  return (
    <div className={classes.logoContainer}>
      <img src={chainConfig.icon} className={classes.icon} alt="logo" />
      <img src={logoUrl} className={classes.logo} alt="logo" />
    </div>
  );
};

const TitleBar:React.FC<{
  className?: string;
  title: string;
}> = ({
  className, title,
}) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState);

  return (
    <div className={classnames(className, classes.root)}>
      {
      title
        ? <Typography variant="h1">{title}</Typography>
        : <LogoContainer />
      }
      <div className={classes.content}>
        {market.map((x) => (
          <div key={x.key} className={classes.item}>
            <Typography variant="body1" className="label">
              {t(x.key)}
            </Typography>
            <Typography variant="body1">
              {x.data}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
