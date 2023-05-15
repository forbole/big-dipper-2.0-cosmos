import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import type { VotingPowerType } from '@/screens/validator_details/types';
import useStyles from '@/screens/validator_details/components/voting_power/styles';
import Box from '@/components/box';

type VotingPowerProps = {
  className?: string;
  data: VotingPowerType;
  inActiveSet: string;
};

const VotingPower: FC<VotingPowerProps> = ({ className, data, inActiveSet }) => {
  const { t } = useAppTranslation('validators');
  const votingPowerPercent =
    inActiveSet === 'true'
      ? numeral((data.self / (numeral(data.overall.value).value() ?? 0)) * 100)
      : numeral(0);

  const { classes, cx } = useStyles({
    percentage: parseFloat(votingPowerPercent.format('0', Math.floor)),
  });

  const votingPower = inActiveSet === 'true' ? numeral(data.self).format('0,0') : '0';

  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2">{t('votingPower')}</Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00')}%`}
        </Typography>
        <Typography variant="body1">
          {votingPower} / {numeral(data.overall.value).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        <Link shallow href={BLOCK_DETAILS(data.height)} className="value">
          {numeral(data.height).format('0,0')}
        </Link>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        <Typography variant="body1" className="value">
          {votingPower}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPowerPercent')}
        </Typography>
        <Typography variant="body1" className="value">
          {`${votingPowerPercent.format('0,0.00')}%`}
        </Typography>
      </div>
    </Box>
  );
};

export default VotingPower;
