/* eslint-disable */
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { useInterval } from '@hooks';
import dayjs from '@utils/dayjs';
import { chainConfig } from '@src/chain_config';
import { useStyles } from './styles';
import { Loading } from '@components';

const Countdown: React.FC<{
  startGenesis: () => void;
}> = ({ startGenesis }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const genesisTime = dayjs.utc(chainConfig.genesis.time);
  const [state, setState] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    interval: 1000,
    loading: false,
  });

  const intervalCallback = () => {
    const timeNow = dayjs.utc();
    const difference = genesisTime.diff(timeNow);
    if (difference > 0) {
      setState((prevState) => ({
        ...prevState,
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60)
      }))
    } else {
      setState((prevState) => ({
        ...prevState,
        interval: null,
        loading: true,
      }));
      startGenesis();
    }
  };

  useInterval(intervalCallback, state.interval);

  // ============================
  // Meta Tags
  // ============================
  let baseUrl = '';
  let currentPath = '';

  if (typeof window === 'object') {
    baseUrl = window?.location?.origin || '';
    currentPath = window?.location?.href || '';
  }


  return (
    <>
    <NextSeo
        title={t('common:bigDipper')}
        description={t('common:description')}
        openGraph={{
          type: 'website',
          title: t('common:bigDipper'),
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
      <img src="/logo-desmos.png" className={classes.logo} alt="logo" />
      <div className={classes.timeContainer}>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.day}
          </Typography>
          <Typography variant="h3">
            Day
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.hour}
          </Typography>
          <Typography variant="h3">
            Hour
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.minute}
          </Typography>
          <Typography variant="h3">
            Min
          </Typography>
        </div>
        <div className={classes.item}>
          <Typography variant="h1">
            {state.second}
          </Typography>
          <Typography variant="h3">
            Sec
          </Typography>
        </div>
      </div>
      <Typography variant="h2" className={classes.chain}>
      {chainConfig.network}
      </Typography>
      {state.loading && <Loading />}
    </div>
    </>
  );
};

export default Countdown;
