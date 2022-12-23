import chainConfig from '@/chainConfig';
import { readDate } from '@/recoil/settings';
import { useStyles } from '@/screens/profile_details/components/connections/components/mobile/styles';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';

const { prefix } = chainConfig();

const Mobile: React.FC<{
  className?: string;
  items?: ProfileConnectionType[];
}> = ({ className, items }) => {
  const dateFormat = useRecoilValue(readDate);
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {items?.map((x, i) => {
        const checkIdentifier = new RegExp(`^(${prefix.account})`).test(x.identifier);
        return (
          <React.Fragment key={`votes-mobile-${x.identifier}`}>
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
                    <Link href={ACCOUNT_DETAILS(x.identifier)} passHref>
                      <Typography variant="body1" className="value" component="a">
                        {x.identifier}
                      </Typography>
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
                  {formatDayJs(dayjs.utc(x.creationTime), dateFormat)}
                </Typography>
              </div>
            </div>
            {!!items && i !== items.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
