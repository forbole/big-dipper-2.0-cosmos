import React from 'react';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';
import { readMarket } from '@recoil/market';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import ChainIcon from 'ui/components/ChainIcon';
import { useStyles } from './styles';
import { formatMarket } from './utils';

const TitleBar: React.FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState as any);

  return (
    <div className={classnames(className, classes.root)}>
      {title ? (
        <Typography variant="h1">{title}</Typography>
      ) : (
        <ChainIcon type="logo" className={classes.logo} />
      )}
      <div className={classes.content}>
        {market.map((x) => (
          <div key={x.key} className={classes.item}>
            <Typography variant="body1" className="label">
              {t(x.key)}
            </Typography>
            <Typography variant="body1">{x.data}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
