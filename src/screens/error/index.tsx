// /* eslint-disable */
import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { HOME } from '@utils/go_to_page';
import {
  Typography,
} from '@material-ui/core';
import {
  chainConfig, githubConfig,
} from '@configs';
import { useStyles } from './styles';

const Error = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  // ============================
  // Meta Tags
  // ============================
  let baseUrl = '';
  let currentPath = '';

  if (typeof window === 'object') {
    baseUrl = window?.location?.origin || '';
    currentPath = window?.location?.href || '';
  }

  const title = `${t('common:bigDipper')} | ${chainConfig.title}`;
  return (
    <>
      <NextSeo
        title={title}
        description={t('common:description')}
        openGraph={{
          type: 'website',
          title,
          site_name: 'Big Dipper',
          url: currentPath,
          description: t('common:description'),
          images: [
            {
              url: 'https://staging.bigdipper.live/images/big-dipper-social-media.png',
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
      <div className={classes.root}>
        <div className="container">
          <Typography variant="h2">
            {t('common:errorTitle')}
          </Typography>
          <Typography className="details">
            <Trans
              i18nKey="common:errorDetails"
              components={[
                // eslint-disable-next-line
                <a target="_blank" rel="noreferrer" href={githubConfig.reportIssue} />,
              ]}
              values={{
                issue: githubConfig.reportIssue,
              }}
            />
          </Typography>
          <Link href={HOME} passHref>
            <Typography component="a">
              {t('common:errorHome')}
            </Typography>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
