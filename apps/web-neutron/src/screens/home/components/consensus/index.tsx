import AvatarName from '@/components/avatar_name';
import Box from '@/components/box';
import Loading from '@/components/loading';
import { useConsensus } from '@/screens/home/components/consensus/hooks';
import useStyles from '@/screens/home/components/consensus/styles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { FC } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import useValidatorConsensusAddressesList from '@/hooks/useValidatorConsensusAddressesList';

const DynamicRadialBarChart = dynamic(() => Promise.resolve(RadialBarChart), { ssr: false });

const Consensus: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx, theme } = useStyles();
  const { state } = useConsensus();
  const { t } = useAppTranslation('home');

  const data = [
    {
      value: state.roundCompletion,
      fill: theme.palette.primary.main,
    },
  ];

  const circleSize = 200;
  const { profile } = useValidatorConsensusAddressesList(state?.proposer);

  return (
    <Box className={cx(classes.root, className)}>
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
          <Typography variant="h4">
            {state.loadingNewRound ? '-' : numeral(state.height).format('0,0')}
          </Typography>
          {!state.loadingNewStep && state.proposer ? (
            <AvatarName
              address={profile?.address ?? ''}
              imageUrl={profile?.imageUrl ?? ''}
              name={profile?.name ?? ''}
            />
          ) : (
            '-'
          )}
        </div>
      </div>
      <div className={classes.content}>
        {state.loadingNewStep ? (
          <Loading />
        ) : (
          <DynamicRadialBarChart
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
            <text
              x={circleSize / 2 - 32}
              y={circleSize / 2 + 35}
              className={classes.chartExtraLabel}
            >
              <tspan className={classes.chartLabel}>
                {t('round', {
                  round: numeral(state.round).format('0,0'),
                })}
              </tspan>
            </text>
          </DynamicRadialBarChart>
        )}
      </div>
    </Box>
  );
};

export default Consensus;
