import Box from '@/components/box';
import CustomToolTip from '@/components/custom_tool_tip';
import useStyles from '@/screens/providers/components/memory/styles';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, { FC } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const convertBytesToTB = (bytes: number) => bytes / 10 ** 12;

type MemoryProps = {
  className?: string;
  memory: {
    available: number;
    used: number;
  };
};

const Memory: FC<MemoryProps> = ({ className, memory }) => {
  const { t } = useTranslation('providers');
  const { classes, cx, theme } = useStyles();

  const total = memory.available + memory.used;

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: numeral(convertBytesToTB(memory.used)).format('0,0'),
      rawValue: memory.used,
      percent: `${numeral((memory.used * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: numeral(convertBytesToTB(memory.available)).format('0,0'),
      rawValue: memory.available,
      percent: `${numeral((memory.available * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.two,
    },
  ];

  return (
    <Box className={cx(className, classes.root)}>
      <Typography variant="h2" className={classes.label}>
        {t('memory')}
      </Typography>
      <div className={classes.content}>
        <PieChart width={200} height={200}>
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
                      TB ({x.percent})
                    </Typography>
                  </>
                )}
              </CustomToolTip>
            }
          />
        </PieChart>

        <div className={classes.legends}>
          {data.map((x) => (
            <div className="legends__item" key={x.legendKey}>
              <Typography variant="caption" className="usage">
                {t(x.legendKey)}{' '}
              </Typography>
              <Typography variant="caption" className="tb">
                ( {x.value} TB )
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

export default Memory;
