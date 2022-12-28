import AvatarName from '@/components/avatar_name';
import Box from '@/components/box';
import Result from '@/components/result';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useBlocks } from '@/screens/validator_details/components/blocks/hooks';
import { useStyles } from '@/screens/validator_details/components/blocks/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React, { FC } from 'react';

const BlockBox: FC<{
  i: number;
  item: ReturnType<typeof useBlocks>['state'][number];
  state: ReturnType<typeof useBlocks>['state'];
}> = ({ i, item, state }) => {
  const proposer = useProfileRecoil(item.proposer);
  const { t } = useTranslation('validators');
  const classes = useStyles();
  return (
    <Tooltip
      // eslint-disable-next-line react/no-array-index-key
      key={`blocks-tooltip-${i}`}
      enterTouchDelay={50}
      title={
        <Box className={classes.toolTip}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('proposer')}
            </Typography>
            <AvatarName
              address={proposer.address}
              imageUrl={proposer.imageUrl}
              name={proposer.name}
            />
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
        className={classnames(classes.singleBlock, {
          signed: state[i].signed,
        })}
      />
    </Tooltip>
  );
};

const Blocks: FC<JSX.IntrinsicElements['div']> = ({ className }) => {
  const { t } = useTranslation('validators');
  const { state } = useBlocks();
  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">{t('lastBlocks')}</Typography>
      <div className={classes.blocks}>
        {state.map((x, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <BlockBox key={i} i={i} item={x} state={state} />
        ))}
      </div>
    </Box>
  );
};

export default Blocks;
