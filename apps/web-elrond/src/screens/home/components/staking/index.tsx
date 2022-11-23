import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Box from '@/components/box';
import CustomToolTip from '@/components/custom_tool_tip';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useStyles } from '@/screens/home/components/staking/styles';
import { useStaking } from '@/screens/validator_details/components/staking/hooks';

const Staking: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const { classes, theme } = useStyles();
  const { state } = useStaking();
  const data = [
    {
      legendKey: 'staked',
      value: numeral(state.staked).format('0,0'),
      rawValue: state.staked,
      fill: theme.palette.custom.tokenomics.one,
      percent: `${state.percentStaked}%`,
      percentKey: 'stakedPercent',
    },
    {
      legendKey: 'notStaked',
      value: numeral(state.circulatingSupply - state.staked).format('0,0'),
      rawValue: state.circulatingSupply - state.staked,
      fill: theme.palette.custom.tokenomics.two,
      percent: `${100 - state.percentStaked}%`,
      percentKey: 'notStakedPercent',
    },
  ];

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('stake')}
      </Typography>
      <div className={classes.data}>
        {data.map((x) => (
          <div className="data__item" key={x.legendKey}>
            <Typography variant="h4">{x.value} </Typography>
            <Typography variant="caption">
              {x.percentKey
                ? t(x.percentKey, {
                    percent: x.percent,
                  })
                : ''}
            </Typography>
          </div>
        ))}
      </div>
      <div className={classes.content}>
        <PieChart width={200} height={100} cy={100}>
          <Pie
            stroke="none"
            cy={90}
            data={data}
            startAngle={180}
            endAngle={0}
            outerRadius={90}
            fill="#8884d8"
            dataKey="rawValue"
            isAnimationActive={false}
          >
            {data.map((entry) => (
              <Cell key={entry.legendKey} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            content={
              <CustomToolTip>
                {(x) => (
                  <>
                    <Typography variant="caption">{t(x.legendKey)}</Typography>
                    <Typography variant="body1">
                      {x.value} ({x.percent})
                    </Typography>
                  </>
                )}
              </CustomToolTip>
            }
          />
        </PieChart>

        <div className={classes.legends}>
          {data.map((x: any) => (
            <div className="legends__item" key={x.legendKey}>
              <Typography variant="caption">{t(x.legendKey)}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Staking;
