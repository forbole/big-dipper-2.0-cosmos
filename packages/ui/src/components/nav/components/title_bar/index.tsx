import ChainIcon from '@/components/ChainIcon';
import { useStyles } from '@/components/nav/components/title_bar/styles';
import { formatMarket } from '@/components/nav/components/title_bar/utils';
import { readMarket } from '@/recoil/market';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';

const TitleBar: React.FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState);

  return (
    <div className={classnames(className, classes.root)}>
      {title ? (
        <Typography variant="h1">{title}</Typography>
      ) : (
        <ChainIcon type="logo" className={classes.logo} alt="logo" />
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
