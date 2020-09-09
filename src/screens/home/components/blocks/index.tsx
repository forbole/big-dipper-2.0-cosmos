import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import {
  Typography, Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { BLOCKS } from '@utils/go_to_page';
import { Box } from '@components';
import {
  Mobile,
  Desktop,
} from './components';
import { BlocksProvider } from './contexts/blocks';
import { useStyles } from './styles';

const Blocks:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  return (
    <BlocksProvider>
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
        <Mobile className={classes.mobile} />
        <Desktop className={classes.desktop} />
        <Divider className={classes.mobile} />
        <Link href={BLOCKS} passHref>
          <Typography variant="h4" component="a" className={classnames(classes.seeMoreFooter, classes.mobile, 'button')}>
            {t('seeMore')}
          </Typography>
        </Link>
      </Box>
    </BlocksProvider>
  );
};

export default Blocks;
