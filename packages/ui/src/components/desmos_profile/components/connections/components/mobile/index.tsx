import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { readDate, readTimeFormat } from '@/recoil/settings';
import useStyles from '@/components/desmos_profile/components/connections/components/mobile/styles';

type MobileProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const { classes } = useStyles();
  const { t } = useAppTranslation('accounts');

  return (
    <div className={className}>
      {items?.map((x, i) => {
        const isLast = !items || i === items.length - 1;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`votes-mobile-${x.identifier}-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('network')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.network.toUpperCase()}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('identifier')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.identifier}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('creationTime')}
                </Typography>
                <Typography variant="body1" className="value">
                  {formatDayJs(dayjs.utc(x.creationTime), dateFormat, timeFormat)}
                </Typography>
              </div>
            </div>
            {!isLast && <Divider />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
