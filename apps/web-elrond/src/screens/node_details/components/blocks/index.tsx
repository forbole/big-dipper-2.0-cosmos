import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Box from 'ui/components/box';
import BlocksList from '@components/blocks_list';
import NoData from '@components/no_data';
import { useStyles } from './style';

const Blocks: React.FC<{ blocks: BlockType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();
  let component = null;
  if (!props.blocks.length) {
    component = <NoData />;
  } else {
    component = <BlocksList items={props.blocks} />;
  }
  return (
    <Box className={classnames(props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('blocks')}
      </Typography>
      {component}
    </Box>
  );
};

export default Blocks;
