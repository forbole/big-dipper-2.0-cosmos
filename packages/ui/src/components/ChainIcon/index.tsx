import React from 'react';
import classnames from 'classnames';
import Image, { type ImageProps } from 'next/future/image';
import agoricIconLight from 'shared-utils/assets/icons/agoric-light.svg?url';
import agoricLogoLight from 'shared-utils/assets/logos/agoric-light.png';
import akashIconDark from 'shared-utils/assets/icons/akash-dark.svg?url';
import akashLogoDark from 'shared-utils/assets/logos/akash-dark.svg?url';
import assetmantleIconDark from 'shared-utils/assets/icons/assetmantle-dark.svg?url';
import assetmantleLogoDark from 'shared-utils/assets/logos/assetmantle-dark.svg?url';
import bandIconDark from 'shared-utils/assets/icons/band-dark.svg?url';
import bandLogoDark from 'shared-utils/assets/logos/band-dark.svg?url';
import bitsongIconDark from 'shared-utils/assets/icons/bitsong-dark.svg?url';
import bitsongLogoDark from 'shared-utils/assets/logos/bitsong-dark.svg?url';
import comdexIconDark from 'shared-utils/assets/icons/comdex-dark.svg?url';
import comdexIconLight from 'shared-utils/assets/icons/comdex-light.svg?url';
import comdexLogoDark from 'shared-utils/assets/logos/comdex-dark.svg?url';
import cosmosIconLight from 'shared-utils/assets/icons/cosmosHub-light.svg?url';
import cosmosLogoDark from 'shared-utils/assets/logos/cosmos-dark.svg?url';
import cosmosLogoLight from 'shared-utils/assets/logos/cosmos-light.svg?url';
import crescentIconDark from 'shared-utils/assets/icons/crescent-dark.svg?url';
import crescentLogoDark from 'shared-utils/assets/logos/crescent-dark.svg?url';
import cryptoorgIconLight from 'shared-utils/assets/icons/cryptoorgChain-light.svg?url';
import desmosIconLight from 'shared-utils/assets/icons/desmos-light.svg?url';
import desmosLogoLight from 'shared-utils/assets/logos/desmos-light.svg?url';
import elrondIconLight from 'shared-utils/assets/icons/elrond-light.svg?url';
import elrondLogoLight from 'shared-utils/assets/logos/elrond-light.svg?url';
import emoneyIconDark from 'shared-utils/assets/icons/emoney-dark.svg?url';
import emoneyLogoDark from 'shared-utils/assets/logos/emoney-dark.svg?url';
import evmosIconLight from 'shared-utils/assets/icons/evmos-light.svg?url';
import evmosLogoLight from 'shared-utils/assets/logos/evmos-light.svg?url';
import flowIconLight from 'shared-utils/assets/icons/flow-light.svg?url';
import flowLogoLight from 'shared-utils/assets/logos/flow-light.svg?url';
import likecoinIconLight from 'shared-utils/assets/icons/likecoin-light.svg?url';
import likecoinLogoLight from 'shared-utils/assets/logos/likecoin-light.svg?url';
import nomicIconDark from 'shared-utils/assets/icons/nomic-dark.svg?url';
import nomicLogoDark from 'shared-utils/assets/logos/nomic-dark.svg?url';
import nymIconDark from 'shared-utils/assets/icons/nym-dark.svg?url';
import nymIconLight from 'shared-utils/assets/icons/nym-light.svg?url';
import nymLogoDark from 'shared-utils/assets/logos/nym-dark.svg?url';
import nymLogoLight from 'shared-utils/assets/logos/nym-light.svg?url';
import osmosisIconDark from 'shared-utils/assets/icons/osmosis-dark.svg?url';
import osmosisIconLight from 'shared-utils/assets/icons/osmosis-light.svg?url';
import osmosisLogoDark from 'shared-utils/assets/logos/osmosis-dark.svg?url';
import persistenceIconDark from 'shared-utils/assets/icons/persistence-dark.svg?url';
import persistenceLogoDark from 'shared-utils/assets/logos/persistence-dark.svg?url';
import provenanceIconDark from 'shared-utils/assets/icons/provenance-dark.svg?url';
import provenanceLogoDark from 'shared-utils/assets/logos/provenance-dark.svg?url';
import quicksliverIconLight from 'shared-utils/assets/icons/quicksilver-light.svg?url';
import regenIconLight from 'shared-utils/assets/icons/regen-light.svg?url';
import regenLogoLight from 'shared-utils/assets/logos/regen-light.png';
import rizonIconLight from 'shared-utils/assets/icons/rizon-dark.svg?url';
import rizonLogoLight from 'shared-utils/assets/logos/rizon-dark.svg?url';
import shentuIconLight from 'shared-utils/assets/icons/shentu-light.svg?url';
import shentuLogoLight from 'shared-utils/assets/logos/shentu-light.svg?url';
import sifchainIconLight from 'shared-utils/assets/icons/sifchain-light.svg?url';
import sifchainLogoLight from 'shared-utils/assets/logos/sifchain-light.png';
import solanaIconDark from 'shared-utils/assets/icons/solana-dark.svg?url';
import solanaIconLight from 'shared-utils/assets/icons/solana-light.svg?url';
import solanaLogoLight from 'shared-utils/assets/logos/solana-dark.svg?url';
import strideIconDark from 'shared-utils/assets/icons/stride-dark.svg?url';
import strideLogoDark from 'shared-utils/assets/logos/stride-dark.svg?url';
import strideLogoLight from 'shared-utils/assets/logos/stride-light.svg?url';
import chainCoing from 'ui/chainConfig';
import { useStyles } from './useStyles';

type IconProps = Omit<ImageProps, 'id' | 'src'> & {
  type: 'icon' | 'logo';
};

const ChainIcon = ({ className, type, ...props }: IconProps) => {
  const classes = useStyles();
  const { chainName } = chainCoing;

  let [iconDark, iconLight] =
    type === 'icon' ? [desmosIconLight, desmosIconLight] : [desmosLogoLight, desmosLogoLight];
  switch (chainName) {
    case 'agoric':
      [iconDark, iconLight] =
        type === 'icon'
          ? [agoricIconLight, agoricIconLight]
          : [agoricLogoLight.src, agoricLogoLight.src];
      break;
    case 'assetmantle':
      [iconDark, iconLight] =
        type === 'icon'
          ? [assetmantleIconDark, assetmantleIconDark]
          : [assetmantleLogoDark, assetmantleLogoDark];
      break;
    case 'akash':
      [iconDark, iconLight] =
        type === 'icon' ? [akashIconDark, akashIconDark] : [akashLogoDark, akashLogoDark];
      break;
    case 'band':
      [iconDark, iconLight] =
        type === 'icon' ? [bandIconDark, bandIconDark] : [bandLogoDark, bandLogoDark];
      break;
    case 'base':
      break;
    case 'bitsong':
      [iconDark, iconLight] =
        type === 'icon' ? [bitsongIconDark, bitsongIconDark] : [bitsongLogoDark, bitsongLogoDark];
      break;
    case 'cosmos':
      [iconDark, iconLight] =
        type === 'icon' ? [cosmosIconLight, cosmosIconLight] : [cosmosLogoDark, cosmosLogoLight];
      break;
    case 'comdex':
      [iconDark, iconLight] =
        type === 'icon' ? [comdexIconDark, comdexIconLight] : [comdexLogoDark, comdexLogoDark];
      break;
    case 'crescent':
      [iconDark, iconLight] =
        type === 'icon'
          ? [crescentIconDark, crescentIconDark]
          : [crescentLogoDark, crescentLogoDark];
      break;
    case 'cryptoorg':
      [iconDark, iconLight] = [cryptoorgIconLight, cryptoorgIconLight];
      break;
    case 'desmos':
      break;
    case 'elrond':
      [iconDark, iconLight] =
        type === 'icon' ? [elrondIconLight, elrondIconLight] : [elrondLogoLight, elrondLogoLight];
      break;
    case 'emoney':
      [iconDark, iconLight] =
        type === 'icon' ? [emoneyIconDark, emoneyIconDark] : [emoneyLogoDark, emoneyLogoDark];
      break;
    case 'evmos':
      [iconDark, iconLight] =
        type === 'icon' ? [evmosIconLight, evmosIconLight] : [evmosLogoLight, evmosLogoLight];
      break;
    case 'flow':
      [iconDark, iconLight] =
        type === 'icon' ? [flowIconLight, flowIconLight] : [flowLogoLight, flowLogoLight];
      break;
    case 'likecoin':
      [iconDark, iconLight] =
        type === 'icon'
          ? [likecoinIconLight, likecoinIconLight]
          : [likecoinLogoLight, likecoinLogoLight];
      break;
    case 'nomic':
      [iconDark, iconLight] =
        type === 'icon' ? [nomicIconDark, nomicIconDark] : [nomicLogoDark, nomicLogoDark];
      break;
    case 'nym':
      [iconDark, iconLight] =
        type === 'icon' ? [nymIconDark, nymIconLight] : [nymLogoDark, nymLogoLight];
      break;
    case 'osmosis':
      [iconDark, iconLight] =
        type === 'icon' ? [osmosisIconDark, osmosisIconLight] : [osmosisLogoDark, osmosisLogoDark];
      break;
    case 'persistence':
      [iconDark, iconLight] =
        type === 'icon'
          ? [persistenceIconDark, persistenceIconDark]
          : [persistenceLogoDark, persistenceLogoDark];
      break;
    case 'provenance':
      [iconDark, iconLight] =
        type === 'icon'
          ? [provenanceIconDark, provenanceIconDark]
          : [provenanceLogoDark, provenanceLogoDark];
      break;
    case 'quicksliver':
      [iconDark, iconLight] = [quicksliverIconLight, quicksliverIconLight];
      break;
    case 'regen':
      [iconDark, iconLight] =
        type === 'icon'
          ? [regenIconLight, regenIconLight]
          : [regenLogoLight.src, regenLogoLight.src];
      break;
    case 'rizon':
      [iconDark, iconLight] =
        type === 'icon' ? [rizonIconLight, rizonIconLight] : [rizonLogoLight, rizonLogoLight];
      break;
    case 'shentu':
      [iconDark, iconLight] =
        type === 'icon' ? [shentuIconLight, shentuIconLight] : [shentuLogoLight, shentuLogoLight];
      break;
    case 'sifchain':
      [iconDark, iconLight] =
        type === 'icon'
          ? [sifchainIconLight, sifchainIconLight]
          : [sifchainLogoLight.src, sifchainLogoLight.src];
      break;
    case 'solana':
      [iconDark, iconLight] =
        type === 'icon' ? [solanaIconDark, solanaIconLight] : [solanaLogoLight, solanaLogoLight];
      break;
    case 'stride':
      [iconDark, iconLight] =
        type === 'icon' ? [strideIconDark, strideIconDark] : [strideLogoDark, strideLogoLight];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={classnames(className, classes.container)}>
      <Image width={0} height={0} src={iconDark} {...props} className={classes.dark} unoptimized />
      <Image
        width={0}
        height={0}
        src={iconLight}
        {...props}
        className={classes.light}
        unoptimized
      />
    </span>
  );
};

export default ChainIcon;
