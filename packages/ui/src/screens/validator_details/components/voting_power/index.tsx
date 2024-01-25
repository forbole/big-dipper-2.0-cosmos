import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import chainConfig from '@/chainConfig';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import useStyles from '@/screens/validator_details/components/voting_power/styles';
import Box from '@/components/box';
import { useOnlineVotingPower } from '@/screens/home/components/hero/components/online_voting_power/hooks';
import { useValidatorVotingPowerDetails } from '@/screens/validator_details/hooks';
import LoadAndExist from '@/components/load_and_exist';

type VotingPowerProps = {
  className?: string;
};

const VotingPower: FC<VotingPowerProps> = ({ className }) => {
  const { t } = useAppTranslation('validators');
  const { onlineVPstate } = useOnlineVotingPower();
  const { state, loading } = useValidatorVotingPowerDetails();
  const { validatorVPExists, votingPower } = state;

  const { chainName } = chainConfig();

  const validatorVotingPower =
    votingPower.validatorStatus === 3 ? numeral(votingPower.self).format('0,0') : '0';

  const votingPowerPercent =
    // eslint-disable-next-line no-nested-ternary
    votingPower.validatorStatus === 3
      ? chainName === 'wormhole'
        ? numeral((Number(validatorVotingPower) / onlineVPstate.activeValidators) * 100)
        : numeral((votingPower.self / (numeral(votingPower.overall.value).value() ?? 0)) * 100)
      : numeral(0);

  const { classes, cx } = useStyles({
    percentage: parseFloat(votingPowerPercent.format('0', Math.floor)),
  });
  return (
    <Box className={cx(classes.root, className)}>
      <LoadAndExist exists={validatorVPExists} loading={loading}>
        <Typography variant="h2">{t('votingPower')}</Typography>
        <div className={classes.data}>
          <Typography variant="h3" className="primary__data">
            {`${votingPowerPercent.format('0,0.00')}%`}
          </Typography>
          <Typography variant="body1">
            {chainName === 'wormhole'
              ? `${validatorVotingPower} / ${onlineVPstate.activeValidators}`
              : `${validatorVotingPower} / ${numeral(votingPower.overall.value).format('0,0')}`}
          </Typography>
        </div>
        <div className={classes.chart}>
          <div className={classes.active} />
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('block')}
          </Typography>
          <Link shallow href={BLOCK_DETAILS(votingPower.height)} className="value">
            {numeral(votingPower.height).format('0,0')}
          </Link>
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('votingPower')}
          </Typography>
          <Typography variant="body1" className="value">
            {validatorVotingPower}
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
      </LoadAndExist>
    </Box>
  );
};

export default VotingPower;
