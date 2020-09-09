import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Nav, Footer,
} from '@components';
import { LayoutProps } from './types';
import { useStyles } from './styles';

const Layout = (props:LayoutProps) => {
  const { t } = useTranslation();
  const classes = useStyles();
  // ============================
  // Meta Tags
  // ============================
  let baseUrl = '';
  let currentPath = '';

  if (typeof window === 'object') {
    baseUrl = window?.location?.origin || '';
    currentPath = window?.location?.href || '';
  }

  const {
    description = 'description',
    title = t('common:bigDipper'),
    type = 'website',
    imageUrl = `${baseUrl}/icons/android-chrome-512x512.png`,
    imageAlt,
    children,
    navTitle,
    className,
  } = props;

  // ============================
  // ui
  // ============================

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type,
          title,
          site_name: 'Big Dipper',
          url: currentPath,
          description,
          images: [
            {
              url: imageUrl,
              alt: imageAlt ?? description,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#da532c',
          },
          {
            name: 'msapplication-config',
            content: `${baseUrl}/icons/browserconfig.xml`,
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ]}
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
