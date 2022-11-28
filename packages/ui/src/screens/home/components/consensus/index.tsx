import AvatarName from '@/components/avatar_name';
import Box from '@/components/box';
import { useProfileRecoil } from '@/recoil/profiles';
import { useConsensus } from '@/screens/home/components/consensus/hooks';
import { useStyles } from '@/screens/home/components/consensus/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, Tooltip } from 'recharts';

const Consensus: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { classes, theme } = useStyles();
  const { state } = useConsensus();
  const { t } = useTranslation('home');

  const data = [
    {
      value: state.roundCompletion,
      fill: theme.palette.primary.main,
    },
  ];

  const circleSize = 200;
  const proposerProfile = useProfileRecoil(state.proposer);

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('consensus')}
      </Typography>
      <div className={classes.info}>
        <div>
          <Typography variant="caption" className="label" component="div">
            {t('height')}
          </Typography>
          <Typography variant="caption" className="label" component="div">
            {t('proposer')}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">{numeral(state.height).format('0,0')}</Typography>
          {state.proposer ? (
            <AvatarName
              address={proposerProfile.address}
              imageUrl={proposerProfile.imageUrl}
              name={proposerProfile.name}
            />
          ) : (
            '-'
          )}
        </div>
      </div>
      <div className={classes.content}>
        <RadialBarChart
          className={classes.chart}
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          innerRadius={90}
          outerRadius={90}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={circleSize / 2} />
          <Tooltip />
          <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            <tspan className={classes.chartPercentLabel}>
              {t('step', {
                step: numeral(state.step).format('0,0'),
              })}
            </tspan>
          </text>
          <text x={circleSize / 2 - 32} y={circleSize / 2 + 35} className={classes.chartExtraLabel}>
            <tspan className={classes.chartLabel}>
              {t('round', {
                round: numeral(state.round).format('0,0'),
              })}
            </tspan>
          </text>
        </RadialBarChart>
      </div>
    </Box>
  );
};

export default Consensus;
