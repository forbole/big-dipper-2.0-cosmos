import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { useStyles } from './styles';
import { getVoteKey } from '../../utils';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items?: ItemType[];
}> = ({
  className, items,
}) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();

  const formattedItems = items.map((x) => {
    return ({
      voter: (
        <AvatarName
          address={x.user.address}
          imageUrl={x.user.imageUrl}
          name={x.user.name}
        />
      ),
      vote: t(getVoteKey(x.vote)),
    });
  });

  return (
    <div className={classnames(className)}>
      {formattedItems.map((x, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('voter')}
                </Typography>
                {x.voter}
              </div>
              {/* <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('votingPower')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.votingPower}
                </Typography>
              </div> */}
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('vote')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.vote}
                </Typography>
              </div>
            </div>
            {i !== formattedItems.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
