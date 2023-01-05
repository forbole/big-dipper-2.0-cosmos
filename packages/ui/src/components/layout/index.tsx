import Banner, { getBannersLinks } from '@/components/banner';
import Footer from '@/components/footer';
import useStyles from '@/components/layout/styles';
import type { LayoutProps } from '@/components/layout/types';
import Nav from '@/components/nav';

const bannerLinks = getBannersLinks();

const Layout = (props: LayoutProps) => {
  const { classes, cx } = useStyles();

  const { children, navTitle, className } = props;

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <Nav title={navTitle} />
        <div className={classes.children}>
          <div className={classes.appBarPlaceholder} />
          {!!bannerLinks.length && <Banner />}
          <div className={cx(className, 'main-content')}>{children}</div>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default Layout;
