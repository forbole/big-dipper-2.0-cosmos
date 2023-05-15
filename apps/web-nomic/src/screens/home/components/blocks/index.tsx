/* eslint-disable no-nested-ternary */
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import Desktop from '@/screens/home/components/blocks/components/desktop';
import Mobile from '@/screens/home/components/blocks/components/mobile';
import { useBlocks } from '@/screens/home/components/blocks/hooks';
import useStyles from '@/screens/home/components/blocks/styles';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { BLOCKS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC } from 'react';

const Blocks: FC<ComponentDefault> = ({ className }) => {
  const { t } = useAppTranslation('home');
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { state } = useBlocks();

  return (
    <Box className={cx(classes.root, className)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestBlocks')}</Typography>
        <Link shallow href={BLOCKS} className="button" aria-label="see more blocks">
          {t('seeMore')}
        </Link>
      </div>
      {state.items.length ? (
        <>
          <Desktop className={display.hiddenUntilLg} items={state.items} />
          <Mobile className={display.hiddenWhenLg} items={state.items} />
          <Divider className={display.hiddenWhenLg} />
          <Link
            shallow
            href={BLOCKS}
            className={cx(classes.seeMoreFooter, display.hiddenWhenLg, 'button')}
            aria-label="see more blocks"
          >
            {t('seeMore')}
          </Link>
        </>
      ) : state.loading ? (
        <Loading />
      ) : (
        <NoData />
      )}
    </Box>
  );
};

export default Blocks;
