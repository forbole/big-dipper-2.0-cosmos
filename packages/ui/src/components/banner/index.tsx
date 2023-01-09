import useStyles from '@/components/banner/styles';
import Box from '@/components/box';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';

export interface BannerLink {
  url: string;
  img: string;
}

const bannersJsons = [process.env.NEXT_PUBLIC_BANNERS_JSON];

/**
 * It returns an array of objects with two properties, `title` and `url`, which are used to render the
 * banner links
 * @returns An array of objects with a string key and a string value.
 */
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
  return bannerLinks;
}

const bannersLinks = getBannersLinks();

/**
 * Props is an object with a property called index that is a number.
 * @property {number} index - The index of the item in the list.
 */
type BannerProps = {
  index?: number;
};

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

/**
 * We create a random number between 0 and 1, and then use that number to select a banner from the
 * array of banners
 * @returns A Box component with a link to the banner url and an image of the banner.
 */
const Banner: FC<BannerProps> = ({ index = Math.floor(Math.random() * bannersLinks.length) }) => {
  const timer = useRef<NodeJS.Timeout>();
  const isRotated = useRef(false);
  const [bannerIndex, setBannerIndex] = useState(Math.abs(index) % bannersLinks.length);

  const prevBannerIndex = (bannersLinks.length + bannerIndex - 1) % bannersLinks.length;
  const prevBanner = bannersLinks[prevBannerIndex];
  const banner = bannersLinks[bannerIndex];
  const { classes } = useStyles();

  useEffect(() => {
    setBannerIndex(Math.floor(Math.random() * bannersLinks.length));
    function rotateBanner() {
      isRotated.current = true;
      setBannerIndex((prev) => (prev + 1) % bannersLinks.length);
      timer.current = setTimeout(() => rotateBanner(), ROTATE_TIMER);
    }
    timer.current = setTimeout(() => rotateBanner(), ROTATE_TIMER);
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <AnimatePresence initial={false}>
      <Box className={classes.root}>
        {isRotated.current && (
          <Link href={prevBanner.url} target="_blank" rel="noreferrer" key={prevBannerIndex}>
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
        <Link href={banner.url} target="_blank" rel="noreferrer" key={bannerIndex}>
          <MotionImage
            src={banner.img}
            fill
            alt="banner"
            unoptimized
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{ duration: 1.5 }}
          />
        </Link>
      </Box>
    </AnimatePresence>
  );
};

export default Banner;
