import React from 'react';
import classnames from 'classnames';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { EpochDetailType } from '../../types';
import { useStyles } from './styles';

const Mobile: React.FC<{epochDetail:EpochDetailType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('epoch');
  const classes = useStyles();

  return (
    <div className={props.className}>
      {props.epochDetail.map((x, i) => {
        return (
          <React.Fragment key={`${x.name}-${i}`}>
            <div className={classnames(props.className, classes.root)}>
              <div className={classes.flex}>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('name')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {x.name}
                  </Typography>
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
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('detail')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.detail}
                </Typography>
              </div>
            </div>
            {i !== props.epochDetail.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
