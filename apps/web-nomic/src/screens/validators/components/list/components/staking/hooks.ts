import * as React from 'react';
import { useAvailableBalances } from '@/screens/account_details/utils';
// import { useParams } from '@/screens/params/hooks';
// import { getDenom } from '@/utils/get_denom';
// import * as R from 'ramda';
// import { formatNumber, formatToken, displayToBaseUnit } from '@/utils/format_token';
import { getClient } from '@/components/nav/components/connect_wallet/keplr_utils';
// import { assertIsDeliverTxSuccess, MsgBeginRedelegateEncodeObject } from '@cosmjs/stargate';
import { useEffect } from 'react';
// import { coin } from '@cosmjs/proto-signing';
import { ADDRESS_KEY, CHAIN_ID } from '@/utils/localstorage';
import type {
  ItemType,
  ValidatorsAvatarNameType,
} from '@/screens/validators/components/list/types';

const useStakingHooks = (_validators?: ItemType[], _delegations?: ValidatorsAvatarNameType[]) => {
  const [amount, setAmount] = React.useState<string | number>('');
  const [userAddress, setUserAddress] = React.useState('');
  const [chainID, setChainID] = React.useState('');

  const [valAddress, setValAddress] = React.useState('');

  const [memo, setMemo] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [redelegateAnchorEl, setRedelegateAnchorEl] = React.useState<null | HTMLElement>(null);

  const openStakingMenu = Boolean(anchorEl);
  const openRedelegateMenu = Boolean(redelegateAnchorEl);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [openRedelegateDialog, setOpenRedelegateDialog] = React.useState(false);
  const [openUndelegateDialog, setOpenUndelegateDialog] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);
  const [openDelegateDialog, setOpenDelegateDialog] = React.useState(false);
  const [openValidatorRedelegateMenu, setOpenValidatorRedelegateMenu] = React.useState(false);
  const [txHash, setTxHash] = React.useState('');

  // Get mint denom
  //   const { state } = useParams();
  //   const baseDenom = state?.minting?.mintDenom;
  // const available = useAvailableBalances('comdex1hvhyunq7qvykzvrcnhjj4xnkcla58xusc65v26');
  const available = useAvailableBalances(userAddress);
  //   const availableForStaking = getDenom(
  //     R.pathOr([], ['accountBalances', 'coins'], available),
  //     baseDenom
  //   );
  //   const tokenFormatDenom = formatToken(availableForStaking?.amount, availableForStaking.denom);
  //   const token = `${formatNumber(
  //     tokenFormatDenom.value,
  //     tokenFormatDenom.exponent
  //   )} ${tokenFormatDenom.displayDenom.toUpperCase()}`;

  const setDelegateAmount = (value: string) => {
    setAmount(value);
  };

  const setTxAmount = (value: number) => {
    setAmount(value);
  };

  const setMemoValue = (value: string) => {
    setMemo(value);
  };
  const getAmount = () => amount;

  const handleOpenStakingMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseStakingMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDelegateDialog = () => {
    setOpenDelegateDialog(true);
  };

  const handleCloseDelegateDialog = () => {
    setOpenDelegateDialog(false);
  };

  const handleCloseRedelegateDialog = () => {
    setOpenRedelegateDialog(false);
  };

  const handleCloseUndelegateDialog = () => {
    setOpenUndelegateDialog(false);
  };

  const handleOpenRedelegateDialog = () => {
    setOpenRedelegateDialog(true);
  };

  const handleOpenUndelegateDialog = () => {
    setOpenUndelegateDialog(true);
  };

  const handleCloseSnackBar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnackbar(false);
  };

  const resetDialogInfo = () => {
    setValAddress('');
    setAmount('');
    setMemo('');
  };

  // Add a new state to control the success state of the delegation action
  const [delegationSuccess, setDelegationSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  //   const [stakedToken, setStakedToken] = React.useState<string>('');
  const [stakedToken] = React.useState<string>('');

  const [validatorSourceAddress, setValidatorSourceAddress] = React.useState('');

  //   useEffect(() => {
  //     if (validatorSourceAddress !== '') {
  //       const coinsAmount =
  //         delegations?.find((d) => d.validator.address === validatorSourceAddress)?.coins.amount ??
  //         '';
  //       const denom =
  //         delegations?.find((d) => d.validator.address === validatorSourceAddress)?.coins.denom ??
  //         baseDenom;
  //       const tokenDenomFormat = formatToken(coinsAmount, denom);
  //       const sToken = `${formatNumber(
  //         tokenDenomFormat.value,
  //         tokenDenomFormat.exponent
  //       )} ${tokenDenomFormat.displayDenom.toUpperCase()}`;
  //       setStakedToken(sToken);
  //     } else {
  //       setStakedToken(token);
  //     }
  //   }, [validatorSourceAddress, valAddress, delegations, baseDenom, token]);

  useEffect(() => {
    setUserAddress(localStorage.getItem(ADDRESS_KEY) ?? '');
    setChainID(localStorage.getItem(CHAIN_ID) ?? '');
  }, []);

  const handleOpenValidatorRedelegateMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setRedelegateAnchorEl(event.currentTarget);
  };
  const handleCloseRedelegateMenu = () => {
    setOpenValidatorRedelegateMenu(false);
  };

  const handleStakingAction = async (validator: string, action: string) => {
    // const stakingAddress = validators ? valAddress : validator;
    type SigningStargateClient = ReturnType<typeof getClient> extends Promise<infer T>
      ? T extends string
        ? never
        : T
      : never;
    let client: SigningStargateClient;
    // let result;

    try {
      client = (await getClient(chainID, 'unom')) as SigningStargateClient; //TODO pass mint denom from config
    } catch (e) {
      setErrorMsg((e as Error).message);
      return;
    }

    switch (action) {
      case 'delegate':
        try {
          setLoading(true);
          //   const base64Amount = displayToBaseUnit(amount);
          //   result = await client.delegateTokens(
          //     userAddress,
          //     stakingAddress,
          //     coin(base64Amount, baseDenom ?? ''),
          //     'auto',
          //     memo ?? ''
          //   );
          setDelegationSuccess(true);
          //   setTxHash(result.transactionHash);
          //   assertIsDeliverTxSuccess(result);
          setLoading(false);
        } catch (e) {
          setErrorMsg((e as Error).message);
          handleCloseDelegateDialog();
          setOpenSuccessSnackbar(false);
          return;
        }
        break;
      case 'redelegate':
        try {
          setLoading(true);
          //   const base64Amount = displayToBaseUnit(amount);
          //   const redelegateMsg: MsgBeginRedelegateEncodeObject = {
          //     typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
          //     value: {
          //       delegatorAddress: userAddress,
          //       validatorSrcAddress: validatorSourceAddress,
          //       validatorDstAddress: stakingAddress, // to set
          //       amount: coin(base64Amount, baseDenom ?? ''),
          //     },
          //   };
          //   result = await client.signAndBroadcast(userAddress, [redelegateMsg], 'auto', memo);
          setDelegationSuccess(true);
          //   setTxHash(result.transactionHash);
          //   assertIsDeliverTxSuccess(result);
          setLoading(false);
          setValidatorSourceAddress('');
        } catch (e) {
          setErrorMsg((e as Error).message);
          handleCloseRedelegateDialog();
          setOpenSuccessSnackbar(false);
          return;
        }
        break;
      case 'undelegate':
        try {
          setLoading(true);
          //   const base64Amount = displayToBaseUnit(amount);
          //   result = await client.undelegateTokens(
          //     userAddress,
          //     validatorSourceAddress,
          //     coin(base64Amount, baseDenom ?? ''),
          //     'auto',
          //     memo
          //   );
          setDelegationSuccess(true);
          //   setTxHash(result.transactionHash);
          //   assertIsDeliverTxSuccess(result);
          setLoading(false);
          setValidatorSourceAddress('');
        } catch (e) {
          setErrorMsg((e as Error).message);
          handleCloseRedelegateDialog();
          setOpenSuccessSnackbar(false);
          return;
        }
        break;
      case 'claim rewards':
        // try {
        //   result = await client.withdrawRewards(userAddress, stakingAddress, 'auto', memo);
        // } catch (e) {
        //   setErrorMsg((e as Error).message);
        //   return;
        // }
        break;
      default:
        return;
    }
    client.disconnect();
  };

  return {
    handleOpenStakingMenu,
    handleCloseStakingMenu,
    handleOpenDelegateDialog,
    handleOpenRedelegateDialog,
    handleOpenUndelegateDialog,
    handleOpenValidatorRedelegateMenu,
    handleCloseRedelegateMenu,
    openValidatorRedelegateMenu,
    redelegateAnchorEl,
    handleStakingAction,
    setDelegateAmount,
    setTxAmount,
    setMemoValue,
    getAmount,
    handleCloseSnackBar,
    handleCloseDelegateDialog,
    handleCloseRedelegateDialog,
    handleCloseUndelegateDialog,
    setOpenDelegateDialog,
    setValAddress,
    setDelegationSuccess,
    setTxHash,
    setOpenSuccessSnackbar,
    resetDialogInfo,
    setLoading,
    setValidatorSourceAddress,
    validatorSourceAddress,
    stakedToken,
    delegationSuccess,
    valAddress,
    amount,
    errorMsg,
    memo,
    openStakingMenu,
    anchorEl,
    openDelegateDialog,
    openSuccessSnackbar,
    openRedelegateDialog,
    openUndelegateDialog,
    openRedelegateMenu,
    available,
    baseDenom: '',
    availableForStaking: 0,
    tokenFormatDenom: { displayDenom: '', exponent: 0, value: 0 },
    token: 0,
    txHash,
    loading,
  };
};

export default useStakingHooks;
