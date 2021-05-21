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
import { useProposalContext } from '../../contexts/proposal';
import { useStyles } from './styles';
import { formatGraphData } from './utils';

const VotesGraph: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    uiData,
    rawData,
  } = useProposalContext();
  const classes = useStyles();
  const { t } = useTranslation('proposals');
  const formattedData = formatGraphData({
    uiData,
    rawData,
  });

  return (
    <Box className={classnames(className)}>
      <div className={classes.pie}>
        <PieChart
          width={250}
          height={250}
        >
          <Pie
            stroke="none"
            dataKey="value"
            data={formattedData}
            fill="#8884d8"
            isAnimationActive={false}
          >
            {formattedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className={classes.legend}>
        <div className={classes.total}>
          <Typography variant="caption">
            Voted / Quorum (
            {uiData.chart.votePercent}
            {' '}
            /
            {' '}
            {uiData.chart.quorumPercent}
            )
          </Typography>
          <Typography>
            {uiData.chart.voteAmount}
            {' '}
            /
            {' '}
            {uiData.chart.quorumAmount}
          </Typography>
        </div>
        {formattedData.map((x) => {
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
