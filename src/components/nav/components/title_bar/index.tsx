import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useNavContext } from '@src/components/nav/contexts/nav';
import { useStyles } from './styles';
import { formatMarket } from './utils';

const TitleBar:React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const {
    title,
    marketCap,
    communityPool,
    price,
    inflation,
  } = useNavContext();

  const market = formatMarket({
    communityPool,
    marketCap,
    price,
    inflation,
  });

  return (
    <div className={classnames(className, classes.root)}>
      {
      title
        ? <Typography variant="h1">{title}</Typography>
        : <img src="/logo-desmos.png" className={classes.logo} alt="logo" />
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
