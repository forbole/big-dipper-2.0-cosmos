import Banner, { getBannersLinks } from '@/components/banner';
import Footer from '@/components/footer';
import useStyles from '@/components/layout/styles';
import type { LayoutProps } from '@/components/layout/types';
import Nav from '@/components/nav';
import { motion, Transition, Variants } from 'framer-motion';

const bannerLinks = getBannersLinks();

const variants: Variants = {
  initial: {
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  animate: { clipPath: 'inset(0% 0% 0% 0%)' },
};

const transition: Transition = {
  duration: 0.3,
};

const Layout = (props: LayoutProps) => {
  const { classes, cx } = useStyles();
  const { children, navTitle, className } = props;

  return (
    <motion.div
      initial="initial"
      animate="animate"
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
