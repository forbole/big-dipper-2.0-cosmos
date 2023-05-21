import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import useStyles from '@/screens/profile_details/components/connections/components/mobile/styles';
import { readDate, readTimeFormat } from '@/recoil/settings';
import chainConfig from '@/chainConfig';

const { prefix } = chainConfig();

type MobileProps = {
  className?: string;
  items?: ProfileConnectionType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
  const { classes } = useStyles();
  const { t } = useAppTranslation('accounts');
  const itemCount = items?.length;
  return (
    <div className={className}>
      {items?.map((x, i) => {
        const checkIdentifier = new RegExp(`^(${prefix.account})`).test(x.identifier);
        const isLast = !itemCount || i === itemCount - 1;
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
                  {checkIdentifier && (
                    <Link
                      shallow
                      prefetch={false}
                      href={ACCOUNT_DETAILS(x.identifier)}
                      className="value"
                    >
                      {x.identifier}
                    </Link>
                  )}
                  {new RegExp(`^(${prefix.account})`).test(x.identifier) === false && x.identifier}
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
