import useStyles from '@/components/banner/styles';
import Box from '@/components/box';

import Image from 'next/future/image';
import Link from 'next/link';
import { FC, useRef } from 'react';

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

/**
 * We create a random number between 0 and 1, and then use that number to select a banner from the
 * array of banners
 * @returns A Box component with a link to the banner url and an image of the banner.
 */
const Banner: FC<BannerProps> = ({ index = Math.floor(Math.random() * bannersLinks.length) }) => {
  const bannerIndex = useRef(Math.abs(index) % bannersLinks.length);
  const banner = bannersLinks[bannerIndex.current];
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Link href={banner.url}>
        <a target="_blank" rel="noreferrer">
          <Image src={banner.img} fill alt="banner" unoptimized />
        </a>
      </Link>
    </Box>
  );
};

export default Banner;
