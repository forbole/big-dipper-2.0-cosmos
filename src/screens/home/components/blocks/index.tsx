import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import {
  Typography, Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { BLOCKS } from '@utils/go_to_page';
import {
  Box, NoData,
} from '@components';
import { useScreenSize } from '@hooks';
import { useStyles } from './styles';
import { useBlocks } from './hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Blocks:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { isDesktop } = useScreenSize();
  const { t } = useTranslation('home');
  const classes = useStyles();
  const { state } = useBlocks();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.label}>
        <Typography variant="h2">
          {t('latestBlocks')}
        </Typography>
        <Link href={BLOCKS} passHref>
          <Typography variant="h4" className="button" component="a">
            {t('seeMore')}
          </Typography>
        </Link>
      </div>
      {!state.items.length ? (
        <NoData />
      ) : (
        <>
          {isDesktop ? (
            <Desktop
              className={classes.desktop}
              items={state.items}
            />
          ) : (
            <Mobile
              className={classes.mobile}
              items={state.items}
            />
          )}
          <Divider className={classes.mobile} />
          <Link href={BLOCKS} passHref>
            <Typography
              variant="h4"
              component="a"
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
