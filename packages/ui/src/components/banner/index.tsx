import Box from '@/components/box';
import Image from 'next/future/image';
import Link from 'next/link';
import { FC, useRef } from 'react';
import banner1 from 'shared-utils/assets/banner/Ledger.png';
import banner2 from 'shared-utils/assets/banner/Trezor.png';
import { useStyles } from './styles';

/* An array of objects. */
const bannerLinks = [
  {
    url: 'https://shop.ledger.com/?r=176df785f6da',
    image: banner1,
  },
  {
    url: 'https://shop.trezor.io/?offer_id=10&aff_id=10966',
    image: banner2,
  },
];

/**
 * Props is an object with a property called index that is a number.
 * @property {number} index - The index of the item in the list.
 */
type Props = {
  index: number;
};

/**
 * We create a random number between 0 and 1, and then use that number to select a banner from the
 * array of banners
 * @returns A Box component with a link to the banner url and an image of the banner.
 */
const Banner: FC<Props> = ({ index = Math.floor(Math.random() * 2) }) => {
  const bannerIndex = useRef(Math.abs(index) % bannerLinks.length);
  const banner = bannerLinks[bannerIndex.current];
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Link href={banner.url}>
        <Image src={banner.image} alt="banner" />
      </Link>
    </Box>
  );
};

export default Banner;
