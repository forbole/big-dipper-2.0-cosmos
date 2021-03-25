import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider, Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  items?: any[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const formatItems = items.map((x) => {
    return ({
      voter: (
        <AvatarName
          address={x?.voter?.identity}
          imageUrl={x?.voter?.image}
          name={x?.voter?.moniker}
        />
      ),
      votingPower: x.votingPower,
      vote: x.vote,
    });
  });
  return (
    <div className={classnames(className)}>
      {formatItems.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('voter')}
                </Typography>
                {x.voter}
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('votingPower')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.votingPower}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('vote')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.vote}
                </Typography>
              </div>
            </div>
            {i !== formatItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
