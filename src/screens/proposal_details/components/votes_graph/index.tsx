import React from 'react';
import classnames from 'classnames';
import { Box } from '@components';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data01 = [
  {
    name: 'Yes', value: 400,
  },
  {
    name: 'No', value: 300,
  },
  {
    name: 'No With Veto', value: 300,
  },
  {
    name: 'Abstain', value: 200,
  },
];

const COLORS = [
  '#355070',
  '#6d597a',
  '#b56576',
  '#e56b6f',
];

const VotesGraph: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <Box className={classnames(className)}>
      <ResponsiveContainer width="99%">
        <PieChart>
          <Pie
            stroke="none"
            dataKey="value"
            data={data01}
            fill="#8884d8"
            label={(entry) => `${entry.name}`}
          >
            {data01.map((entry, index) => (
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
