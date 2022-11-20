import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Big from 'big.js';
import Box from 'ui/components/box';
import InfoPopover from 'ui/components/info_popover';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import { PieChart, Pie, Cell } from 'recharts';
import { useStyles } from './styles';
import { formatGraphData } from './utils';
import { useVotesGraph } from './hooks';
import QuorumExplanation from './components/quorum_explanation';

const VotesGraph: React.FC<ComponentDefault> = (props) => {
  const { classes, theme } = useStyles();
  const { t } = useTranslation('proposals');
  const { state } = useVotesGraph();
  const { votes } = state;
  const { quorum } = state;

  const total = Big(votes.yes.value)
    .plus(votes.no.value)
    .plus(votes.veto.value)
    .plus(votes.abstain.value);

  const formattedData = formatGraphData({
    data: votes,
    theme,
    total,
  });
  const totalVotedFormat = numeral(total.toFixed(2)).format('0,0.[00]');
  const totalBondedFormat = numeral(state.bonded.value).format('0,0.[00]');
  const totalVotedPercent = total.gt(0)
    ? `${numeral(Big(total.toFixed(2)).div(state.bonded.value).times(100).toFixed(2)).format(
        '0.[00]'
      )}%`
    : '0%';

  return (
    <Box className={classnames(props.className, classes.root)}>
      <div className={classes.pie}>
        <PieChart width={250} height={250}>
          <Pie
            cx="50%"
            cy="50%"
            stroke="none"
            dataKey="value"
            data={formattedData}
            fill="#8884d8"
            isAnimationActive={false}
          >
            {formattedData.map((entry, index) => 
              // eslint-disable-next-line react/no-array-index-key
               <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
            )}
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
            {totalVotedFormat} / {totalBondedFormat}
          </Typography>
        </div>

        {formattedData
          .filter((x) => String(x.name) !== 'empty')
          .map((x) => (
              <div key={x.name} className={classnames(classes.voteItem, x.name)}>
                <Typography variant="caption">
                  {t(x.name)} ({x.percentage})
                </Typography>
                <Typography>{x.display}</Typography>
              </div>
            ))}
      </div>
      <div className={classes.popOver}>
        <InfoPopover content={<QuorumExplanation quorum={quorum} />} />
      </div>
    </Box>
  );
};

export default VotesGraph;
