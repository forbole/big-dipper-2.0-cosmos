/* eslint-disable no-nested-ternary */
import Box from '@/components/box';
import Loading from '@/components/loading';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import { useBlocks } from '@/screens/home/components/blocks/hooks';
import { useStyles } from '@/screens/home/components/blocks/styles';
import { BLOCKS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';

const Desktop = dynamic(() => import('@/screens/home/components/blocks/components/desktop'));
const Mobile = dynamic(() => import('@/screens/home/components/blocks/components/mobile'));

const Blocks: FC<ComponentDefault> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('home');
  const { isDesktop } = useScreenSize();
  const { state } = useBlocks();
  return (
    <Box className={classnames(props.className)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestBlocks')}</Typography>
        <Link href={BLOCKS} passHref>
          <Typography variant="h4" className="button" component="a" aria-label="see more blocks">
            {t('seeMore')}
          </Typography>
        </Link>
      </div>
      {state.items.length ? (
        <>
          {isDesktop ? <Desktop items={state.items} /> : <Mobile items={state.items} />}
          <Divider className={classes.mobile} />
          <Link href={BLOCKS} passHref>
            <Typography
              variant="h4"
              component="a"
              aria-label="see more blocks"
              className={classnames(classes.seeMoreFooter, classes.mobile, 'button')}
            >
              {t('seeMore')}
            </Typography>
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
