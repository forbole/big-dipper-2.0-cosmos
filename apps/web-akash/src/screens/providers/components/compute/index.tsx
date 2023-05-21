import Box from '@/components/box';
import CustomToolTip from '@/components/custom_tool_tip';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/providers/components/compute/styles';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { FC } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), { ssr: false });

type ComputeProps = {
  className?: string;
  compute: {
    available: number;
    used: number;
  };
};

const Compute: FC<ComputeProps> = ({ className, compute }) => {
  const { t } = useAppTranslation('providers');
  const { classes, cx, theme } = useStyles();

  const total = compute.available + compute.used;

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: numeral(compute.used / 1000).format('0,0.00'),
      rawValue: compute.used,
      percent: `${numeral((compute.used * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: numeral(compute.available / 1000).format('0,0.00'),
      rawValue: compute.available,
      percent: `${numeral((compute.available * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.three,
    },
  ];

  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2" className={classes.label}>
        {t('compute')}
      </Typography>
      <div className={classes.content}>
        <DynamicPieChart width={200} height={200}>
          <Pie
            stroke="none"
            cornerRadius={100}
            cy={90}
            data={data}
            innerRadius={80}
            outerRadius={90}
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
                      {x.value}
                      vCPUs ({x.percent})
                    </Typography>
                  </>
                )}
              </CustomToolTip>
            }
          />
        </DynamicPieChart>

        <div className={classes.legends}>
          {data.map((x) => (
            <div className="legends__item" key={x.legendKey}>
              <Typography variant="caption" className="usage">
                {t(x.legendKey)}{' '}
              </Typography>
              <Typography variant="caption" className="vCPUs">
                ( {x.value} vCPUs )
              </Typography>
              <Typography variant="caption" className="percent">
                {' '}
                {x.percent}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Compute;
