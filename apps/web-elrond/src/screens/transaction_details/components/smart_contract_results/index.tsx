import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography, Divider } from '@material-ui/core';
import NoData from 'ui/components/no_data';
import Box from 'ui/components/box';
import AvatarName from 'ui/components/avatar_name';
import { formatNumber } from 'ui/utils/format_token';
import { decodeBase64 } from '@utils/base64';
import { ResultType } from '../../types';
import { CodeBlock } from '..';
import { useStyles } from './styles';

const SmartContractResults: React.FC<{ results: ResultType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  if (!props.results.length) {
    return <NoData />;
  }

  const formattedItems = props.results.map((x) => {
    return {
      hash: x.hash,
      sender: <AvatarName address={x.sender} name={x.sender} />,
      receiver: <AvatarName address={x.receiver} name={x.receiver} />,
      value: `${formatNumber(
        x.value.value,
        x.value.exponent
      )} ${x.value.displayDenom.toUpperCase()}`,
      data: decodeBase64(x.data),
    };
  });

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2">
        {t('smartContractResults')}
      </Typography>
      <div>
        {formattedItems.map((x, i) => {
          return (
            <React.Fragment key={`${x.data}-${i}`}>
              <div className={classes.itemWrap}>
                <div className={classes.desktopFlex}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('hash')}
                    </Typography>
                    {x.hash}
                  </div>
                  <div className={classnames(classes.item, classes.desktop)}>
                    <Typography variant="h4" className="label">
                      {t('value')}
                    </Typography>
                    <Typography variant="body1" className="value">
                      {x.value}
                    </Typography>
                  </div>
                </div>
                <div className={classes.desktopFlex}>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('sender')}
                    </Typography>
                    {x.sender}
                  </div>
                  <div className={classes.item}>
                    <Typography variant="h4" className="label">
                      {t('receiver')}
                    </Typography>
                    {x.receiver}
                  </div>
                </div>
                <div className={classnames(classes.item, classes.mobile)}>
                  <Typography variant="h4" className="label">
                    {t('value')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {x.value}
                  </Typography>
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('data')}
                  </Typography>
                  <CodeBlock message={x.data} />
                </div>
              </div>
              {i !== formattedItems.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </div>
    </Box>
  );
};

export default SmartContractResults;
