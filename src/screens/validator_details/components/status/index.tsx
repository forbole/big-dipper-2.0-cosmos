import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import { useSettingsContext } from '@contexts';
import {
  Box,
  Tag,
  InfoPopover,
  ConditionExplanation,
} from '@components';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  getStatusTheme, getCondition,
} from './utils';
import { StatusType } from '../../types';
import { useStyles } from './styles';

const Status: React.FC<StatusType &{
  className?: string;
}> = ({
  className,
  ...data
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { dateFormat } = useSettingsContext();
  const statusTheme = getStatusTheme(data.status, data.jailed);
  const condition = getCondition(data.condition, data.status);

  const items = [
    // {
    //   key: (
    //     <Typography variant="h4" className="label">
    //       {t('status')}
    //     </Typography>
    //   ),
    //   value: (
    //     <Tag
    //       value={t(statusTheme.status)}
    //       theme={statusTheme.theme as any}
    //       className={classes.tag}
    //     />
    //   ),
    // },
    {
      key: (
        <Typography variant="h4" className="label">
          {t('commission')}
        </Typography>
      ),
      value: (
        <Typography
          variant="body1"
          className="value"
        >
          {`${numeral(data.commission * 100).format('0.00')}%`}
        </Typography>
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label condition">
          {t('condition')}
          <InfoPopover
            content={<ConditionExplanation />}
          />
        </Typography>
      ),
      value: (
        data.status === 3 ? (
          <div className="condition__body">
            <InfoPopover
              content={(
                <>
                  <Typography variant="body1">
                    {t('missedBlockCounter', {
                      amount: numeral(data.missedBlockCounter).format('0,0'),
                    })}
                  </Typography>
                  <Typography variant="body1">
                    {t('signedBlockWindow', {
                      amount: numeral(data.signedBlockWindow).format('0,0'),
                    })}
                  </Typography>
                </>
              )}
              display={(
                <Typography
                  variant="body1"
                  className={classnames('value', condition)}
                >
                  {t(condition)}
                </Typography>
          )}
            />
          </div>
        ) : (
          <Typography
            variant="body1"
            className={classnames('value', 'condition', condition)}
          >
            {t(condition)}
          </Typography>
        )
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label">
          {t('lastSeen')}
        </Typography>
      ),
      value: (
        <Typography
          variant="body1"
          className="value"
        >
          {data.lastSeen ? formatDayJs(dayjs.utc(data.lastSeen), dateFormat) : t('na')}
        </Typography>
      ),
    },
  ];
  return (
    <Box className={classnames(className)}>
      {
        items.map((x) => {
          return (
            <div>
              {x.key}
              {x.value}
            </div>
          );
        })
      }
    </Box>
  );
};

export default Status;
