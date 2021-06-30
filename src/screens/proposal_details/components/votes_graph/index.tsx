import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { Box } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { replaceNaN } from '@utils/replace_nan';
import { useStyles } from './styles';
import { formatGraphData } from './utils';
import { TallyType } from '../../types';

const VotesGraph: React.FC<{
  className?: string;
  data: TallyType;
}> = ({
  className, data,
}) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('proposals');
  let formattedData = formatGraphData(data, theme);

  const empty = {
    name: 'empty',
    value: 2400,
    color: theme.palette.custom.charts.zero,
    percentage: '0%',
    display: '',
  };
  const notEmpty = formattedData.some((x) => x.value > 0);
  formattedData = notEmpty ? formattedData : [...formattedData, empty];

  const quorumPercent = `${numeral(data.quorum * 100).value()}%`; // correct
  const votePercent = replaceNaN(`${numeral((data.total / data.bondedTokens) * 100).format('0.[00]')}%`);
  const voteAmount = numeral(data.total).format('0,0.[00]');
  const quorumAmount = numeral((data.bondedTokens * (data.quorum * 100)) / 100).format('0,0.[00]');

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.pie}>
        <PieChart
          width={250}
          height={250}
        >
          <Pie
            cx="50%"
            cy="50%"
            stroke="none"
            dataKey="value"
            data={formattedData}
            fill="#8884d8"
            isAnimationActive={false}
          >
            {formattedData.map((entry, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={entry.color}
                />
              );
            })}
          </Pie>
        </PieChart>
      </div>
      <div className={classes.legend}>
        <div className={classes.total}>
          <Typography variant="caption">
            Voted / Quorum (
            {votePercent}
            {' '}
            /
            {' '}
            {quorumPercent}
            )
          </Typography>
          <Typography variant="h2">
            {voteAmount}
            {' '}
            /
            {' '}
            {quorumAmount}
          </Typography>
        </div>
        {formattedData.filter((x) => x.name !== 'empty').map((x) => {
          return (
            <div key={x.name} className={classnames(classes.voteItem, x.name)}>
              <Typography variant="caption">
                {t(x.name)}
                {' '}
                (
                {x.percentage}
                )
              </Typography>
              <Typography>
                {x.display}
              </Typography>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default VotesGraph;
