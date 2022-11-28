import Footer from '@/components/footer';
import { useStyles } from '@/components/layout/styles';
import type { LayoutProps } from '@/components/layout/types';
import Nav from '@/components/nav';
import classnames from 'classnames';

const Layout = (props: LayoutProps) => {
  const classes = useStyles();

  const { children, navTitle, className } = props;

  return (
    <div className={classes.root}>
      <div className={classnames(classes.contentWrapper)}>
        <Nav title={navTitle} />
        <div className={classes.children}>
          <div className={classes.appBarPlaceholder} />
          <div className={classnames(className, 'main-content')}>{children}</div>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
};

export default Layout;
