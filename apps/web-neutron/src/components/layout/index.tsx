import { motion, Transition, Variants } from 'framer-motion';
import Banner, { getBannersLinks } from '@/components/banner';
import Footer from '@/components/footer';
import useStyles from '@/components/layout/styles';
import type { LayoutProps } from '@/components/layout/types';
import Nav from '@/components/nav';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';

const bannerLinks = getBannersLinks();

const variants: Variants = {
  initial: { filter: 'blur(4px)' },
  animate: { filter: 'blur(0px)' },
  exit: { filter: 'blur(4px)' },
};

const transition: Transition = {
  duration: 1,
};

const Layout = (props: LayoutProps) => {
  const { classes, cx } = useStyles();
  const { children, navTitle, className } = props;
  const { t } = useAppTranslation('validators');

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      className={classes.root}
    >
      <div className={classes.contentWrapper}>
        <Nav title={navTitle} />
        <div className={classes.children}>
          <div className={classes.appBarPlaceholder} />
          {!!bannerLinks.length && <Banner />}
          {navTitle === 'Validators' ? (
            <div className={classes.content}>
              <Typography variant="h4"> {t('stakingDataIsSourcedFromCosmoshub')}</Typography>
            </div>
          ) : null}
          <div className={cx(className, 'main-content')}>{children}</div>
        </div>
      </div>
      <Footer className={classes.footer} />
    </motion.div>
  );
};

export default Layout;
