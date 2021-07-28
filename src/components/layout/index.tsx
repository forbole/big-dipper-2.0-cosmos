import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Nav, Footer,
} from '@components';
import { chainConfig } from '@configs';
import { LayoutProps } from './types';
import { useStyles } from './styles';

const Layout = (props:LayoutProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const {
    title = t('common:bigDipper'),
    children,
    navTitle,
    className,
  } = props;

  // ============================
  // ui
  // ============================
  const formattedTitle = `${title} | ${chainConfig.title}`;

  return (
    <>
      <NextSeo
        title={formattedTitle}
        openGraph={{
          title: formattedTitle,
        }}
      />
      {/* ========================== */}
      {/* body */}
      {/* ========================== */}
      <div className={classes.root}>
        <div className={classnames(classes.contentWrapper)}>
          <Nav title={navTitle} />
          <div className={classes.children}>
            <div className={classes.appBarPlaceholder} />
            <div className={classnames(className, 'main-content')}>
              {children}
            </div>
          </div>
        </div>
        <Footer className={classes.footer} />
      </div>
    </>
  );
};

export default Layout;
