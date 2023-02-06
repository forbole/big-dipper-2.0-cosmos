import { motion, Transition, Variants } from 'framer-motion';
import Banner, { getBannersLinks } from '@/components/banner';
import Footer from '@/components/footer';
import useStyles from '@/components/layout/styles';
import type { LayoutProps } from '@/components/layout/types';
import Nav from '@/components/nav';

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
          <div className={cx(className, 'main-content')}>{children}</div>
        </div>
      </div>
      <Footer className={classes.footer} />
    </motion.div>
  );
};

export default Layout;
