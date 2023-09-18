import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { FC } from 'react';
import Loading from '@/components/loading';
import AvatarName from '@/components/avatar_name';
import Box from '@/components/box';
import Result from '@/components/result';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useBlocks } from '@/screens/validator_details/components/blocks/hooks';
import useStyles from '@/screens/validator_details/components/blocks/styles';

type BlockBoxProps = {
  i: number;
  item: ReturnType<typeof useBlocks>['state'][number];
  state: ReturnType<typeof useBlocks>['state'];
};

const BlockBox: FC<BlockBoxProps> = ({ i, item, state }) => {
  const { address, imageUrl, name } = useProfileRecoil(item.proposer);
  const { t } = useAppTranslation('validators');
  const { classes, cx } = useStyles();
  return (
    <Tooltip
      key={item.height}
      enterTouchDelay={50}
      title={
        <Box className={classes.toolTip}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('proposer')}
            </Typography>
            <AvatarName address={address} imageUrl={imageUrl} name={name} />
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('block')}
            </Typography>
            <Typography variant="body1" className="value">
              {numeral(item.height).format('0,0')}
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('txs')}
            </Typography>
            <Typography variant="body1" className="value">
              {numeral(item.txs).format('0,0')}
            </Typography>
          </div>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('signed')}
            </Typography>
            <Result success={item.signed} />
          </div>
        </Box>
      }
      placement="top"
    >
      <div
        key={item.txs}
        className={cx(classes.singleBlock, {
          signed: state[i].signed,
        })}
      />
    </Tooltip>
  );
};

type BlocksProps = ComponentDefault & {
  address?: string;
};

const Blocks: FC<BlocksProps> = ({ className, address }) => {
  const { t } = useAppTranslation('validators');
  const { state, loading } = useBlocks(address);
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.root, className)}>
      <Typography variant="h2">{t('lastBlocks')}</Typography>
      {loading && <Loading />}
      <div className={classes.blocks}>
        {state.map((x, i) => (
          <BlockBox key={x.height} i={i} item={x} state={state} />
        ))}
      </div>
    </Box>
  );
};

export default Blocks;
