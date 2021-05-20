import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import useTranslation from 'next-translate/useTranslation';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useProposalContext } from '../../contexts/proposal';

const COLORS = [
  '#355070',
  '#6d597a',
  '#b56576',
  '#e56b6f',
];

const VotesGraph: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    rawData,
  } = useProposalContext();
  const { t } = useTranslation('proposals');
  const keys = Object.keys(rawData.voteTally);
  const formattedData = keys.map((x) => {
    return ({
      name: `tally-${x}`,
      value: rawData.voteTally[x],
    });
  });
  return (
    <Box className={classnames(className)}>
      <ResponsiveContainer width="99%">
        <PieChart>
          <Pie
            stroke="none"
            dataKey="value"
            data={formattedData}
            fill="#8884d8"
            label={(entry) => t(entry.name)}
          >
            {formattedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default VotesGraph;
