import * as React from 'react';
import { useAvailableBalances } from '@/screens/account_details/utils';
import { useParams } from '@/screens/params/hooks';
import { getDenom } from '@/utils/get_denom';
import * as R from 'ramda';
import { formatNumber, formatToken } from '@/utils/format_token';
import {
  isKeplrAvailable,
  enableChain,
  getAccountKey,
  getOfflineSigner,
  getOfflineSignerAddress,
  getOfflineSignerPubKey,
  getCosmosClient,
  getChainID,
} from '@/components/nav/components/connect_wallet/keplr_utils';
// import { MsgDelegate } from '@cosmjs/stargate/build/codec/cosmos/staking/v1beta1/tx';
import {
  SigningCosmosClient,
  MsgDelegate,
  MsgRedelegate,
  msgDelegateTypeUrl,
  assertIsDeliverTxSuccess,
  SigningStargateClient,
  StdFee,
  calculateFee,
  GasPrice,
  // coins,
  // coin,
  assertIsBroadcastTxSuccess,
} from '@cosmjs/stargate';
import { useEffect } from 'react';

// import { MsgDelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
// import {
//   coin,
//   coins,
//   decodeTxRaw,
//   DirectSecp256k1HdWallet,
//   makeCosmoshubPath,
//   Registry,
// } from '@cosmjs/proto-signing';
// import { EncodeObject, GeneratedType } from '@cosmjs/proto-signing';
// import {
//   MsgBeginRedelegate,
//   MsgCreateValidator,
//   MsgDelegate,
//   MsgEditValidator,
//   MsgUndelegate,
// } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
import { coin, coins, decodeTxRaw, DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import { ADDRESS_KEY, CHAIN_ID } from '@/utils/localstorage';

const useStakingHooks = () => {
  const [amount, setAmount] = React.useState('');
  const [userAddress, setUserAddress] = React.useState('');
  const [chainID, setChainID] = React.useState('');

  const [memo, setMemo] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openStakingDialog, setOpenStakingDialog] = React.useState(false);

  const [openRedelegateDialog, setOpenRedelegateDialog] = React.useState(false);
  const [openUndelegateDialog, setOpenUndelegateDialog] = React.useState(false);

  const open = Boolean(anchorEl);

  // Get mint denom
  const { state } = useParams();
  const baseDenom = state?.minting?.mintDenom;
  // const available = useAvailableBalances('comdex1hvhyunq7qvykzvrcnhjj4xnkcla58xusc65v26');
  const available = useAvailableBalances(userAddress);
  const availableForStaking = getDenom(
    R.pathOr([], ['accountBalances', 'coins'], available),
    baseDenom
  );
  const tokenFormatDenom = formatToken(availableForStaking?.amount, availableForStaking.denom);
  const token = `${formatNumber(
    tokenFormatDenom.value,
    tokenFormatDenom.exponent
  )} ${tokenFormatDenom.displayDenom.toUpperCase()}`;

  const setDelegateAmount = (value: string) => {
    setAmount(value);
  };

  const setMemoValue = (value: string) => {
    setMemo(value);
  };
  const getAmount = () => amount;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelegate = () => {
    setOpenStakingDialog(true);
  };

  const handleRedelegate = () => {
    setOpenRedelegateDialog(true);
  };

  const handleUndelegate = () => {
    setOpenUndelegateDialog(true);
  };

  useEffect(() => {
    setUserAddress(localStorage.getItem(ADDRESS_KEY));
    setChainID(localStorage.getItem(CHAIN_ID));
  }, []);

  const getFee = async (
    chosenNetwork: string,
    address: string,
    ledgerType: SUPPORTED_WALLET,
    message: any[],
    memo: string
  ) => {
    const client = await signingClient(chosenNetwork, ledgerType);
    const gasUsed = await client.simulate(address, message, memo);

    const gasLimit = Math.round(gasUsed * DEFAULT_GAS_MULTIPLIER);

    const fee = calculateFee(gasLimit, gasPrice);

    return fee;
  };

  const handleDelegateAction = async (
    delegateAmount: string,
    delegateDenom: string,
    validator: string
  ) => {
    setOpenStakingDialog(false);

    console.log(chainID);
    let offlineSigner;
    try {
      offlineSigner = getOfflineSigner(chainID);
    } catch (e) {
      console.log(e);
    }

    // get offline signer address
    let offlineSignerAddress;
    try {
      if (!offlineSigner) throw new Error('offline signer is undefined');
      offlineSignerAddress = await getOfflineSignerAddress(offlineSigner);
    } catch (e) {
      console.log(e);
      return;
    }

    const client = getCosmosClient(offlineSignerAddress, offlineSigner);
    // const stk_balance = await client.getBalance(userAddress, baseDenom);
    // console.log(stk_balance);
    // const gasUsed = await client.simulate(userAddress, message, memo);
    const gasPrice = GasPrice.fromString(`0.002${baseDenom}`);
    const txFee = calculateFee(300000, gasPrice);
    const result = await client.delegateTokens(
      userAddress,
      validator,
      coin(amount, baseDenom),
      txFee,
      // 'auto',
      // {
      //   amount: coins(2000, 'ucmdx'),
      //   gas: '200000',
      // },
      memo
    );
    console.log(result);
    assertIsBroadcastTxSuccess(result);

    client.disconnect();
  };

  return {
    handleClick,
    handleClose,
    handleDelegate,
    handleRedelegate,
    handleUndelegate,
    setDelegateAmount,
    setMemoValue,
    getAmount,
    handleDelegateAction,
    amount,
    memo,
    open,
    anchorEl,
    openStakingDialog,
    openRedelegateDialog,
    openUndelegateDialog,
    available,
    baseDenom,
    availableForStaking,
    tokenFormatDenom,
    token,
  };
};

export default useStakingHooks;
