import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/title_bar/styles';
import { formatMarket } from '@/components/nav/components/title_bar/utils';
import { readMarket } from '@/recoil/market';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type TitleBarProps = {
  className?: string;
  title: string;
};

const TitleBar: FC<TitleBarProps> = ({ className, title }) => {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState);

  return (
    <div className={cx(className, classes.root)}>
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
