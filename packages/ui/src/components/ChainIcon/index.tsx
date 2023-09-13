import chainCoing from '@/chainConfig';
import useStyles from '@/components/ChainIcon/useStyles';
import Image, { type ImageProps } from 'next/image';
import agoricIconLight from 'shared-utils/assets/icons/agoric-light.svg?url';
import akashIconDark from 'shared-utils/assets/icons/akash-dark.svg?url';
import assetmantleIconDark from 'shared-utils/assets/icons/assetmantle-dark.svg?url';
import bandIconDark from 'shared-utils/assets/icons/band-dark.svg?url';
import baseIconLight from 'shared-utils/assets/icons/base-light.svg?url';
import bitsongIconDark from 'shared-utils/assets/icons/bitsong-dark.svg?url';
import comdexIconDark from 'shared-utils/assets/icons/comdex-dark.svg?url';
import comdexIconLight from 'shared-utils/assets/icons/comdex-light.svg?url';
import cheqdIconTransparent from 'shared-utils/assets/icons/cheqd-transparent.svg?url';
import cosmosIconLight from 'shared-utils/assets/icons/cosmosHub-light.svg?url';
import crescentIconDark from 'shared-utils/assets/icons/crescent-dark.svg?url';
import cryptoorgIconLight from 'shared-utils/assets/icons/cryptoorgChain-light.svg?url';
import multiversxIconLight from 'shared-utils/assets/icons/multiversx-light.svg?url';
import multiversxIconDark from 'shared-utils/assets/icons/multiversx-dark.svg?url';
import emoneyIconDark from 'shared-utils/assets/icons/emoney-dark.svg?url';
import evmosIconLight from 'shared-utils/assets/icons/evmos-light.svg?url';
import flowIconLight from 'shared-utils/assets/icons/flow-light.svg?url';
import likecoinIconLight from 'shared-utils/assets/icons/likecoin-light.svg?url';
import nomicIconDark from 'shared-utils/assets/icons/nomic-dark.svg?url';
import nymIconDark from 'shared-utils/assets/icons/nym-dark.svg?url';
import nymIconLight from 'shared-utils/assets/icons/nym-light.svg?url';
import osmosisIconDark from 'shared-utils/assets/icons/osmosis-dark.svg?url';
import osmosisIconLight from 'shared-utils/assets/icons/osmosis-light.svg?url';
import persistenceIconDark from 'shared-utils/assets/icons/persistence-dark.svg?url';
import provenanceIconDark from 'shared-utils/assets/icons/provenance-dark.svg?url';
import quasarIconDark from 'shared-utils/assets/icons/quasar-dark.png';
import quicksliverIconLight from 'shared-utils/assets/icons/quicksilver.svg?url';
import regenIconLight from 'shared-utils/assets/icons/regen-light.svg?url';
import rizonIconLight from 'shared-utils/assets/icons/rizon-dark.svg?url';
import shentuIconLight from 'shared-utils/assets/icons/shentu-light.svg?url';
import sifchainIconLight from 'shared-utils/assets/icons/sifchain-light.svg?url';
import solanaIconDark from 'shared-utils/assets/icons/solana-dark.svg?url';
import solanaIconLight from 'shared-utils/assets/icons/solana-light.svg?url';
import strideIconDark from 'shared-utils/assets/icons/stride-dark.svg?url';
import wormholeIconDark from 'shared-utils/assets/icons/wormhole.svg?url';
import celestiaIconDark from 'shared-utils/assets/icons/celestia-both.svg?url';
import coreumIconBoth from 'shared-utils/assets/icons/coreum-both.svg?url';
import kyveIconBoth from 'shared-utils/assets/icons/kyve-both.svg?url';
import humansaiIconDark from 'shared-utils/assets/icons/humansai-both.svg?url';
import gitopiaIconDark from 'shared-utils/assets/icons/gitopia-both.svg?url';
import neutronIconBoth from 'shared-utils/assets/icons/neutron-both.svg?url';
import jackalIconBoth from 'shared-utils/assets/icons/jackal-both.svg?url';
import archwayIconBoth from 'shared-utils/assets/icons/archway-both.svg?url';
import agoricLogoLight from 'shared-utils/assets/logos/agoric-light.png';
import akashLogoDark from 'shared-utils/assets/logos/akash-dark.svg?url';
import assetmantleLogoDark from 'shared-utils/assets/logos/assetmantle-dark.svg?url';
import bandLogoDark from 'shared-utils/assets/logos/band-dark.svg?url';
import baseLogoLight from 'shared-utils/assets/logos/base-light.svg?url';
import bitsongLogoDark from 'shared-utils/assets/logos/bitsong-dark.svg?url';
import comdexLogoDark from 'shared-utils/assets/logos/comdex-dark.svg?url';
import cosmosLogoDark from 'shared-utils/assets/logos/cosmos-dark.svg?url';
import cosmosLogoLight from 'shared-utils/assets/logos/cosmos-light.svg?url';
import crescentLogoDark from 'shared-utils/assets/logos/crescent-dark.svg?url';
import cheqdLogoDark from 'shared-utils/assets/logos/cheqd-dark.svg?url';
import cheqdLogoLight from 'shared-utils/assets/logos/cheqd-light.svg?url';
import emoneyLogoDark from 'shared-utils/assets/logos/emoney-dark.svg?url';
import evmosLogoLight from 'shared-utils/assets/logos/evmos-light.svg?url';
import flowLogoLight from 'shared-utils/assets/logos/flow-light.svg?url';
import likecoinLogoLight from 'shared-utils/assets/logos/likecoin-light.svg?url';
import nomicLogoDark from 'shared-utils/assets/logos/nomic-dark.svg?url';
import nymLogoDark from 'shared-utils/assets/logos/nym-dark.svg?url';
import nymLogoLight from 'shared-utils/assets/logos/nym-light.svg?url';
import osmosisLogoDark from 'shared-utils/assets/logos/osmosis-dark.svg?url';
import persistenceLogoDark from 'shared-utils/assets/logos/persistence-dark.svg?url';
import provenanceLogoDark from 'shared-utils/assets/logos/provenance-dark.svg?url';
import quasarLogoDark from 'shared-utils/assets/logos/quasar-dark.png';
import regenLogoLight from 'shared-utils/assets/logos/regen-light.png';
import rizonLogoLight from 'shared-utils/assets/logos/rizon-dark.svg?url';
import shentuLogoLight from 'shared-utils/assets/logos/shentu-light.svg?url';
import sifchainLogoLight from 'shared-utils/assets/logos/sifchain-light.png';
import solanaLogoLight from 'shared-utils/assets/logos/solana-dark.svg?url';
import strideLogoDark from 'shared-utils/assets/logos/stride-dark.svg?url';
import strideLogoLight from 'shared-utils/assets/logos/stride-light.svg?url';
import quicksilverLogoLight from 'shared-utils/assets/logos/quicksilver-light.svg?url';
import quicksilverLogoDark from 'shared-utils/assets/logos/quicksilver-dark.svg?url';
import multiversxLogoLight from 'shared-utils/assets/logos/multiversx-light.svg?url';
import multiversxLogoDark from 'shared-utils/assets/logos/multiversx-dark.svg?url';
import wormholeLogoDark from 'shared-utils/assets/logos/wormhole.svg?url';
import celestiaLogoDark from 'shared-utils/assets/logos/celestia-dark.svg?url';
import celestiaLogoLight from 'shared-utils/assets/logos/celestia-light.svg?url';
import coreumLogoDark from 'shared-utils/assets/logos/coreum-dark.svg?url';
import coreumLogoLight from 'shared-utils/assets/logos/coreum-light.svg?url';
import kyveLogoDark from 'shared-utils/assets/logos/kyve-dark.svg?url';
import kyveLogoLight from 'shared-utils/assets/logos/kyve-light.svg?url';
import humansaiLogoDark from 'shared-utils/assets/logos/humansai-dark.svg?url';
import gitopiaLogoDark from 'shared-utils/assets/logos/gitopia-dark.svg?url';
import gitopiaLogoLight from 'shared-utils/assets/logos/gitopia-light.svg?url';
import neutronLogoDark from 'shared-utils/assets/logos/neutron-dark.svg?url';
import neutronLogoLight from 'shared-utils/assets/logos/neutron-light.svg?url';
import jackalLogoDark from 'shared-utils/assets/logos/jackal-dark.svg?url';
import jackalLogoLight from 'shared-utils/assets/logos/jackal-light.svg?url';
import archwayLogoDark from 'shared-utils/assets/logos/archway-dark.svg?url';
import archwayLogoLight from 'shared-utils/assets/logos/archway-light.svg?url';

interface IconProps extends Omit<ImageProps, 'id' | 'src'> {
  type: 'icon' | 'logo';
  chainName?: string;
}

const ChainIcon = ({
  className,
  type,
  chainName = chainCoing().chainName,
  ...props
}: IconProps) => {
  const { classes, cx } = useStyles();

  let [iconDark, iconLight] =
    type === 'icon' ? [baseIconLight, baseIconLight] : [baseLogoLight, baseLogoLight];
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
    case 'cheqd':
      [iconDark, iconLight] =
        type === 'icon'
          ? [cheqdIconTransparent, cheqdIconTransparent]
          : [cheqdLogoDark, cheqdLogoLight];
      break;
    case 'desmos':
      break;
    case 'multiversx':
      [iconDark, iconLight] =
        type === 'icon'
          ? [multiversxIconDark, multiversxIconLight]
          : [multiversxLogoDark, multiversxLogoLight];
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
      [iconDark, iconLight] =
        type === 'icon'
          ? [quicksilverLogoLight, quicksilverLogoLight]
          : [quicksilverLogoDark, quicksilverLogoDark];
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
    case 'quasar':
      [iconDark, iconLight] =
        type === 'icon' ? [quasarIconDark, quasarIconDark] : [quasarLogoDark, quasarLogoDark];
      break;
    case 'quicksilver':
      [iconDark, iconLight] =
        type === 'icon'
          ? [quicksliverIconLight, quicksliverIconLight]
          : [quicksilverLogoDark, quicksilverLogoLight];
      break;
    case 'wormhole':
      [iconDark, iconLight] =
        type === 'icon'
          ? [wormholeIconDark, wormholeIconDark]
          : [wormholeLogoDark, wormholeLogoDark];
      break;
    case 'celestia':
      [iconDark, iconLight] =
        type === 'icon'
          ? [celestiaIconDark, celestiaIconDark]
          : [celestiaLogoDark, celestiaLogoLight];
      break;
    case 'coreum':
      [iconDark, iconLight] =
        type === 'icon' ? [coreumIconBoth, coreumIconBoth] : [coreumLogoDark, coreumLogoLight];
      break;
    case 'kyve':
      [iconDark, iconLight] =
        type === 'icon' ? [kyveIconBoth, kyveIconBoth] : [kyveLogoDark, kyveLogoLight];
      break;
    case 'humansai':
      [iconDark, iconLight] =
        type === 'icon'
          ? [humansaiIconDark, humansaiIconDark]
          : [humansaiLogoDark, humansaiLogoDark];
      break;
    case 'gitopia':
      [iconDark, iconLight] =
        type === 'icon' ? [gitopiaIconDark, gitopiaIconDark] : [gitopiaLogoDark, gitopiaLogoLight];
      break;
    case 'neutron':
      [iconDark, iconLight] =
        type === 'icon' ? [neutronIconBoth, neutronIconBoth] : [neutronLogoDark, neutronLogoLight];
      break;
    case 'jackal':
      [iconDark, iconLight] =
        type === 'icon' ? [jackalIconBoth, jackalIconBoth] : [jackalLogoDark, jackalLogoLight];
      break;
    case 'archway':
      [iconDark, iconLight] =
        type === 'icon' ? [archwayIconBoth, archwayIconBoth] : [archwayLogoDark, archwayLogoLight];
      break;
    default:
      throw new Error(`chain ${chainName} not supported`);
  }
  return (
    <span className={cx(className, classes.container)}>
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
