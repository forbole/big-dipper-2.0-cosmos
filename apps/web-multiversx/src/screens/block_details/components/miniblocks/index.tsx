import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';
import Box from '@/components/box';
import useStyles from '@/screens/block_details/components/miniblocks/styles';
import type { MiniBlockType } from '@/screens/block_details/types';
import { MINIBLOCK_DETAILS } from '@/utils/go_to_page';

const MiniBlocks: FC<{ className?: string; miniBlocks: MiniBlockType[] }> = (props) => {
  const { t } = useAppTranslation('blocks');
  const { classes, cx } = useStyles();
  return (
    <Box className={cx(classes.root, props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('miniBlocks')}
      </Typography>
      <div className={classes.listContainer}>
        {props.miniBlocks.map((x) => (
          <div key={x} className={classes.item}>
            <div className={classes.hash}>
              <div className={classes.bullet} />
              <Link shallow prefetch={false} href={MINIBLOCK_DETAILS(x)} className={classes.block}>
                {x}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default MiniBlocks;
