import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles';

const SingleProvider: React.FC<{
  className?: string;
  // idx: string;
  // validator: React.ReactNode;
  // ownerAddress: string;
  // hostUri: string;
  // region: string;
  // organization: string;
  // email: string;
  // website: string;
  ownerAddress;
  hostUri;
  region;
  organization;
  email;
  website;
}> = ({
  className,
  ownerAddress,
  hostUri,
  region,
  organization,
  email,
  website,
}) => {
  const { t } = useTranslation('providers');
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('ownerAddress')}
        </Typography>
        {ownerAddress}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hostUri')}
        </Typography>
        {hostUri}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('region')}
        </Typography>
        {region}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('organization')}
        </Typography>
        {organization}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('oemail')}
        </Typography>
        {email}
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('website')}
        </Typography>
        {website}
      </div>
    </div>

  );
};

export default SingleProvider;
