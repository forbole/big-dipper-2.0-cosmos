import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import ChainIcon from '@/components/ChainIcon';
import useStyles from '@/components/nav/components/title_bar/styles';
import { formatMarket } from '@/components/nav/components/title_bar/utils';
import { readMarket } from '@/recoil/market';

type TitleBarProps = {
  className?: string;
  title: string;
};

const TitleBar: FC<TitleBarProps> = ({ className, title }) => {
  const { t } = useAppTranslation('common');
  const { classes, cx } = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState);

  return (
    <div className={cx(classes.root, className)}>
      {!title && <ChainIcon type="logo" className={classes.logo} alt="logo" />}
      {!!title && <Typography variant="h1">{title}</Typography>}
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
