import Box from '@/components/box';
import { useEpoch } from '@/screens/home/components/epoch/hooks';
import useStyles from '@/screens/home/components/epoch/styles';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { FC } from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart, Tooltip } from 'recharts';

const DynamicRadialBarChart = dynamic(() => Promise.resolve(RadialBarChart), { ssr: false });

const Chart: FC = () => {
  const { classes, theme } = useStyles();
  const { t } = useAppTranslation('home');
  const { state } = useEpoch();

  const data = [
    {
      value: (state.roundsPassed * 100) / state.roundsPerEpoch,
      fill: theme.palette.custom.primaryData.one,
    },
  ];

  const circleSize = 200;
  return (
    <>
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
          <tspan className={classes.chartPercentLabel}>{numeral(state.epoch).format('0,0')}</tspan>
        </text>

        <text x={circleSize / 2 - 20} y={circleSize / 2 + 30}>
          <tspan className={classes.chartLabel}>{t('epoch')}</tspan>
        </text>
      </DynamicRadialBarChart>
      <Typography variant="body2" className={classes.time}>
        <AppTrans
          i18nKey="home:epochRoundsLeft"
          components={[<span />]}
          values={{
            rounds: numeral(state.roundsPerEpoch - state.roundsPassed).format('0,0'),
          }}
        />
      </Typography>
    </>
  );
};

const Epoch: FC<ComponentDefault> = (props) => {
  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('home');

  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography variant="h2" className={classes.label}>
        {t('epoch')}
      </Typography>
      <div className={classes.content}>
        <Chart />
      </div>
    </Box>
  );
};

export default Epoch;
