import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { LogType } from '../../types';
import { formatLogs } from './utils';
import { useStyles } from './styles';

const Logs: React.FC<{ logs: LogType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('transactions');
  const {
    classes, theme,
  } = useStyles();
  const splitLogs = formatLogs(props.logs);

  return (
    <Box className={classes.root}>
      <Typography variant="h2">
        {t('logs')}
      </Typography>
      <div className={classes.logs}>
        {splitLogs.map((x, i) => {
          return (
            <div className="log" key={`log-${i}`}>
              <Typography className="log__count">
                {`#${numeral(i + 1).format('0,0')}`}
              </Typography>
              <div className="log__content">
                {x.map((y, index) => {
                  let prefix = '';

                  if (index !== 0) {
                    prefix = '>';
                  }

                  return (
                    <Typography
                      key={`content-${i}-${index}`}
                      className={classnames('content', {
                        'content--title': index === 0,
                        'content--log': y.value.includes('Program log'),
                        'content--invoke': index !== 0 && y.value.includes('invoke') && !y.value.includes('Program log'),
                        'content--success': y.value.includes('success'),
                        'content--error': y.value.includes('error'),
                      })}
                      style={{
                        marginLeft: theme.spacing(y.indent * 2),
                      }}
                    >
                      {`${prefix} ${y.value}`}
                    </Typography>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default Logs;
