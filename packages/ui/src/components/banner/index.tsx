import useStyles from '@/components/banner/styles';
import Box from '@/components/box';
import CoinzillaBanner from '@/components/CoinzillaBanner';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

export interface BannerLink {
  url: string;
  img: string;
}

const bannersJsons = [process.env.NEXT_PUBLIC_BANNERS_JSON];

export function getBannersLinks() {
  const bannersJson = bannersJsons.find((b) => b);
  let bannerLinks: BannerLink[] = [];

  if (bannersJson) {
    try {
      const bannersArray = JSON.parse(bannersJson);
      if (Array.isArray(bannersArray)) bannerLinks = bannersArray;
    } catch (e) {
      // ignore
    }
  }
  if (process.env.NEXT_PUBLIC_COINZILLA_ZONE) {
    bannerLinks.push({ url: process.env.NEXT_PUBLIC_COINZILLA_ZONE, img: '' });
  }
  return bannerLinks;
}

const bannersLinks = getBannersLinks();

interface BannerProps {
  index?: number;
}

const MotionImage = motion(Image);
const ROTATE_TIMER = 6 * 1000;
const variants: Variants = {
  prevInitial: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
  prevAnimate: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  },
  initial: {
    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
  },
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  },
};

function isZone(url: string) {
  return process.env.NEXT_PUBLIC_COINZILLA_ZONE && url === process.env.NEXT_PUBLIC_COINZILLA_ZONE;
}

const Banner: FC<BannerProps> = ({ index = Math.floor(Math.random() * bannersLinks.length) }) => {
  const timer = useRef<NodeJS.Timeout>();
  const isRotated = useRef(false);
  const isMouseOver = useRef(false);
  const [bannerIndex, setBannerIndex] = useState(Math.abs(index) % bannersLinks.length);

  const prevBannerIndex = (bannersLinks.length + bannerIndex - 1) % bannersLinks.length;
  const prevBanner = bannersLinks[prevBannerIndex];
  const banner = bannersLinks[bannerIndex];
  const { classes } = useStyles();

  useEffect(() => {
    function rotateBanner() {
      isRotated.current = true;
      if (!isMouseOver.current) setBannerIndex((prev) => (prev + 1) % bannersLinks.length);
      timer.current = setTimeout(() => rotateBanner(), ROTATE_TIMER);
    }
    timer.current = setTimeout(() => rotateBanner(), ROTATE_TIMER);
    return () => clearTimeout(timer.current);
  }, []);

  const handlerMouseOver = useCallback(() => {
    isMouseOver.current = true;
  }, []);
  const handleMouseOut = useCallback(() => {
    isMouseOver.current = false;
  }, []);

  return (
    <div>
      <AnimatePresence initial={false}>
        <Box className={classes.root}>
          {!isZone(prevBanner.url) && isRotated.current && (
            <Link
              prefetch={false}
              href={prevBanner.url}
              target="_blank"
              rel="noreferrer"
              key={prevBannerIndex}
            >
              <MotionImage
                src={prevBanner.img}
                fill
                alt="prev-banner"
                unoptimized
                initial="prevInitial"
                animate="prevAnimate"
                variants={variants}
                transition={{ duration: 1.5 }}
              />
            </Link>
          )}
          {!isZone(banner.url) && (
            <Link
              prefetch={false}
              href={banner.url}
              target="_blank"
              rel="noreferrer"
              key={bannerIndex}
            >
              <MotionImage
                src={banner.img}
                fill
                alt="banner"
                unoptimized
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{ duration: 1.5 }}
                onMouseOver={handlerMouseOver}
                onMouseOut={handleMouseOut}
              />
            </Link>
          )}
          <CoinzillaBanner
            zone={banner.url}
            onMouseOver={handlerMouseOver}
            onMouseOut={handleMouseOut}
          />
        </Box>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
