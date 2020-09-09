import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import {
  Divider, Typography,
} from '@material-ui/core';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useHoldersContext } from '../../contexts/holders';
import { useStyles } from './styles';
import { StackBar } from '..';

const Mobile:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    items, page, rowsPerPage,
  } = useHoldersContext();

  const formatItems = items.map((x, i) => {
    return ({
      rank: `# ${(rowsPerPage * page) + i + 1}`,
      address: (
        <Link href={ACCOUNT_DETAILS(x.address)} passHref>
          <Typography variant="body1" className="value" component="a">
            {getMiddleEllipsis(x.address, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      quantity: x.quantity,
      percentage: (
        <StackBar percentage={x.percentage} />
      ),
      value: x.value,
    });
  });

  return (
    <div className={classnames(className)}>
      {formatItems.map((x, index) => {
        return (
          <React.Fragment key={`holders-mobile-${index}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('rank')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.rank}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('address')}
                </Typography>
                {x.address}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('quantity')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.quantity}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('percentage')}
                </Typography>
                {x.percentage}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('value')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.value}
                </Typography>
              </div>
            </div>
            {index !== formatItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
