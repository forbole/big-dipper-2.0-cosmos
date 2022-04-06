import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Big from 'big.js';
import {
  Box,
  InfoPopover,
  ConditionExplanation,
} from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useStyles } from './styles';
import { formatGraphData } from './utils';
import { useVotesGraph } from './hooks';

const VotesGraph: React.FC<ComponentDefault> = (props) => {
  const {
    classes, theme,
  } = useStyles();
  const { t } = useTranslation('proposals');
  const { state } = useVotesGraph();
  const { votes } = state;

  const total = Big(votes.yes.value)
    .plus(votes.no.value)
    .plus(votes.veto.value)
    .plus(votes.abstain.value);

  const formattedData = formatGraphData({
    data: votes, theme, total,
  });
  const totalVotedFormat = numeral(total.toFixed(2)).format('0,0.[00]');
  const totalBondedFormat = numeral(state.bonded.value).format('0,0.[00]');
  const totalVotedPercent = total.gt(0)
    ? `${numeral(
      Big(total.toFixed(2)).div(state.bonded.value).times(100).toFixed(2),
    ).format('0.[00]')}%` : '0%';

  return (
    <Box className={classnames(props.className, classes.root)}>
      <InfoPopover
        content={<ConditionExplanation />}
      />
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
            {t('votedTotalCaption', {
              totalVotedPercent,
            })}
          </Typography>
          <Typography variant="h2">
            {totalVotedFormat}
            {' '}
            /
            {' '}
            {totalBondedFormat}
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
