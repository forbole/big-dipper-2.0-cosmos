import Box from '@/components/box';
import CustomToolTip from '@/components/custom_tool_tip';
import useStyles from '@/screens/providers/components/storage/styles';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { FC } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), { ssr: false });
const convertBytesToTB = (bytes: number) => bytes / 10 ** 12;
const convertBytesToGB = (bytes: number) => bytes / 10 ** 9;

type StorageProps = {
  className?: string;
  storage: {
    available: number;
    used: number;
    pending: number;
  };
};

const Storage: FC<StorageProps> = ({ className, storage }) => {
  const { t } = useAppTranslation('providers');
  const { classes, cx, theme } = useStyles();

  const total = storage.available + storage.used + storage.pending;

  const usedValue = numeral(convertBytesToTB(storage.used)).format('0,0');
  const availableValue = numeral(convertBytesToTB(storage.available)).format('0,0');
  const pendingValue = numeral(convertBytesToGB(storage.pending)).format('0,0');

  const data = [
    {
      legendKey: 'used',
      percentKey: 'usedPercent',
      value: `${usedValue} TB`,
      rawValue: storage.used,
      percent: `${numeral((storage.used * 100) / total).format('0.00')}%`,
      fill: theme.palette.custom.tokenomics.one,
    },
    {
      legendKey: 'available',
      percentKey: 'availablePercent',
      value: `${availableValue} TB`,
      rawValue: storage.available,
      percent: `${numeral((storage.available * 100) / total).format('0.00')}%`,
      fill: '#4C78EA',
    },
    {
      legendKey: 'pending',
      percentKey: 'pendingPercent',
      value: `${pendingValue} GB`,
      rawValue: storage.pending,
      percent: `${numeral((storage.pending * 100) / total).format('0.0000')}%`,
      fill: '#B021F3',
    },
  ];

  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2" className={classes.label}>
        {t('storage')}
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
                      {x.value} ({x.percent})
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
              <Typography variant="caption" className="tb">
                ( {x.value} )
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

export default Storage;
