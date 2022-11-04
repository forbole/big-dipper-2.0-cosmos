import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Box from '@components/box';
import NoData from '@components/no_data';
import { useStyles } from './styles';

const Signatures: React.FC<
  ComponentDefault & {
    signatures: string[];
  }
> = ({ className, signatures }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography className={classes.title} variant="h2">
        {t('signatures')}
      </Typography>
      {!signatures.length ? (
        <NoData />
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.content}>
            &#123;&quot;
            {signatures}
            &quot;&#125;
          </div>
        </div>
      )}
    </Box>
  );
};

export default Signatures;
