import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { BLOCKS } from 'ui/utils/go_to_page';
import Box from 'ui/components/box';
import NoData from 'ui/components/no_data';
import { useScreenSize } from 'ui/hooks';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import { useStyles } from './styles';
import { useBlocks } from './hooks';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const Blocks: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('home');
  const classes = useStyles();
  const { state } = useBlocks();

  const proposerProfiles = useProfilesRecoil(state.items.map((x) => x.proposer));
  const mergedDataWithProfiles = state.items.map((x, i) => ({
    ...(x as object),
    proposer: proposerProfiles[i],
  }));

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.label}>
        <Typography variant="h2">{t('latestBlocks')}</Typography>
        <Link href={BLOCKS} passHref>
          <Typography variant="h4" className="button" component="a" aria-label="see more blocks">
            {t('seeMore')}
          </Typography>
        </Link>
      </div>
      {!state.items.length ? (
        <NoData />
      ) : (
        <>
          {isDesktop ? (
            <Desktop className={classes.desktop} items={mergedDataWithProfiles as any} />
          ) : (
            <Mobile className={classes.mobile} items={mergedDataWithProfiles as any} />
          )}
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
      )}
    </Box>
  );
};

export default Blocks;
