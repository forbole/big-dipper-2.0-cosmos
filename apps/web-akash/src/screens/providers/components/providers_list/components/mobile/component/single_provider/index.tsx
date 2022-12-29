import { useStyles } from '@/screens/providers/components/providers_list/components/mobile/component/single_provider/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, ReactNode } from 'react';

type SingleProviderProps = {
  className?: string;
  // idx: string;
  // validator: ReactNode;
  // ownerAddress: string;
  // hostUri: string;
  // region: string;
  // organization: string;
  // email: string;
  // website: string;
  ownerAddress: ReactNode;
  hostUri: ReactNode;
  region: ReactNode;
  organization: ReactNode;
  email: ReactNode;
  website: ReactNode;
};

const SingleProvider: FC<SingleProviderProps> = ({
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
        <Typography variant="h4" className="content">
          {ownerAddress}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('hostUri')}
        </Typography>
        <Typography variant="h4" className="content">
          {hostUri}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('region')}
        </Typography>
        <Typography variant="h4" className="content">
          {region}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('organization')}
        </Typography>
        <Typography variant="h4" className="content">
          {organization}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('email')}
        </Typography>
        <Typography variant="h4" className="content">
          {email}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('website')}
        </Typography>
        <Typography variant="h4" className="content">
          {website}
        </Typography>
      </div>
    </div>
  );
};

export default SingleProvider;
