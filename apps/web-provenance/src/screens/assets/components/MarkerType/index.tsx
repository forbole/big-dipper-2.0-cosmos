import ChainIcon from '@/components/ChainIcon';
import { MarkerProps } from '@/screens/assets/types';
import Chip from '@mui/material/Chip';
import { memo } from 'react';

const MarketType = memo(({ markerType }: MarkerProps) => {
  if (markerType === 'MARKER_TYPE_COIN') {
    return (
      <Chip
        icon={<ChainIcon type="icon" alt="" />}
        label="Coin"
        title="Coin - A marker with a type of coin represents a standard fungible token with zero or more coins in circulation"
        aria-label="Coin - A marker with a type of coin represents a standard fungible token with zero or more coins in circulation"
        variant="outlined"
      />
    );
  }
  if (markerType === 'MARKER_TYPE_RESTRICTED') {
    return (
      <Chip
        icon={<ChainIcon type="icon" alt="" />}
        label="Restricted Coin"
        title='Restricted Coin - Restricted Coins work just like a regular coin with one important difference--the bank module "send_enabled" status for the coin is set to false. This means that a user account that holds the coin can not send it to another account directly using the bank module. In order to facilitate exchange there must be an address set on the marker with the "Transfer" permission grant. This address must sign calls to the marker module to move these coins between accounts using the transfer method on the api.'
        aria-label='Restricted Coin - Restricted Coins work just like a regular coin with one important difference--the bank module "send_enabled" status for the coin is set to false. This means that a user account that holds the coin can not send it to another account directly using the bank module. In order to facilitate exchange there must be an address set on the marker with the "Transfer" permission grant. This address must sign calls to the marker module to move these coins between accounts using the transfer method on the api.'
        variant="outlined"
      />
    );
  }
  return (
    <Chip
      icon={<ChainIcon type="icon" alt="" />}
      label="Unspecifed"
      title="Unspecifed - Invalid/unknown marker type."
      aria-label="Unspecifed - Invalid/unknown marker type."
      variant="outlined"
    />
  );
});

export default MarketType;
