/* eslint-disable no-nested-ternary */
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useBlocks } from '@/screens/home/components/blocks/hooks';
import useStyles from '@/screens/home/components/blocks/styles';
import { BLOCKS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';

const Desktop = dynamic(() => import('@/screens/home/components/blocks/components/desktop'));
const Mobile = dynamic(() => import('@/screens/home/components/blocks/components/mobile'));

const Blocks: FC<ComponentDefault> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('home');
  const { classes, cx } = useStyles();
  const { state } = useBlocks();

  return (
    <Box className={cx(classes.root, className)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestBlocks')}</Typography>
        <Link href={BLOCKS} className="button" aria-label="see more blocks">
          {t('seeMore')}
        </Link>
      </div>
      {state.items.length ? (
        <>
          {isDesktop ? (
            <Desktop className={classes.desktop} items={state.items} />
          ) : (
            <Mobile className={classes.mobile} items={state.items} />
          )}
          <Divider className={classes.mobile} />
          <Link
            href={BLOCKS}
            className={cx(classes.seeMoreFooter, classes.mobile, 'button')}
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
