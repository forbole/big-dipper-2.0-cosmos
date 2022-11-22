import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import Box from 'ui/components/box';
import AvatarName from 'ui/components/avatar_name';
import Result from 'ui/components/result';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Blocks: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('validators');
  const { state } = useBlocks();
  const dataProfiles = useProfilesRecoil(state.map((x) => x.proposer));
  const mergedDataWithProfiles = state.map((x, i) => ({
    ...(x as object),
    proposer: dataProfiles[i],
  }));

  const classes = useStyles();
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">{t('lastBlocks')}</Typography>
      <div className={classes.blocks}>
        {mergedDataWithProfiles.map((x: any, i) => (
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
                    address={x.proposer.address}
                    imageUrl={x.proposer.imageUrl}
                    name={x.proposer.name}
                  />
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('block')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {numeral(x.height).format('0,0')}
                  </Typography>
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('txs')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {numeral(x.txs).format('0,0')}
                  </Typography>
                </div>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('signed')}
                  </Typography>
                  <Result success={x.signed} />
                </div>
              </Box>
            }
            placement="top"
          >
            <div
              key={x.txs}
              className={classnames(classes.singleBlock, {
                signed: state[i].signed,
              })}
            />
          </Tooltip>
        ))}
      </div>
    </Box>
  );
};

export default Blocks;
