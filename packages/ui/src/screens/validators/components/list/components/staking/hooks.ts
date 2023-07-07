import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { useAvailableBalances } from '@/screens/account_details/utils';
import { useParams } from '@/screens/params/hooks';
import { getDenom } from '@/utils/get_denom';
import * as R from 'ramda';
import {
  formatNumber,
  formatToken,
  displayToBaseUnit,
  baseToDisplayUnit,
} from '@/utils/format_token';
import { getClient } from '@/components/nav/components/connect_wallet/keplr_utils';
import {
  assertIsDeliverTxSuccess,
  MsgBeginRedelegateEncodeObject,
  StdFee,
} from '@cosmjs/stargate';
import { useEffect } from 'react';
import { coin } from '@cosmjs/proto-signing';
import { ADDRESS_KEY, CHAIN_ID } from '@/utils/localstorage';
import { readIsUserLoggedIn } from '@/recoil/user';
import type {
  ItemType,
  ValidatorsAvatarNameType,
} from '@/screens/validators/components/list/types';
import { estimateFee } from '@/screens/validators/components/list/components/staking/utils/gas';

interface UseStakingHooksOptions {
  rewards?: ValidatorsAvatarNameType[];
  validators?: ItemType[];
  delegations?: ValidatorsAvatarNameType[];
}

const useStakingHooks = ({
  rewards,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validators,
  delegations,
}: UseStakingHooksOptions = {}) => {
  const [amount, setAmount] = React.useState<string | number>('');
  const [userAddress, setUserAddress] = React.useState('');
  const [chainID, setChainID] = React.useState('');

  const [valAddress, setValAddress] = React.useState('');

  const [memo, setMemo] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [redelegateAnchorEl, setRedelegateAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const openStakingMenu = Boolean(anchorEl);
  const openRedelegateMenu = Boolean(redelegateAnchorEl);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [openRedelegateDialog, setOpenRedelegateDialog] = React.useState(false);
  const [openUndelegateDialog, setOpenUndelegateDialog] = React.useState(false);
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = React.useState(false);
  const [openDelegateDialog, setOpenDelegateDialog] = React.useState(false);
  const [openValidatorRedelegateMenu, setOpenValidatorRedelegateMenu] =
    React.useState(false);
  const [openWithdrawDialog, setOpenWithdrawDialog] = React.useState(false);
  const [txHash, setTxHash] = React.useState('');

  // Get mint denom
  const { state } = useParams();
  const baseDenom = state?.minting?.mintDenom;
  // const available = useAvailableBalances('comdex1hvhyunq7qvykzvrcnhjj4xnkcla58xusc65v26');
  const available = useAvailableBalances(userAddress);
  const availableForStaking = getDenom(
    R.pathOr([], ['accountBalances', 'coins'], available),
    baseDenom
  );

  const loggedIn = useRecoilValue(readIsUserLoggedIn);

  const tokenFormatDenom = React.useMemo(
    () => formatToken(availableForStaking?.amount, availableForStaking.denom),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [availableForStaking, loggedIn]
  );
  // const tokenFormatDenom = formatToken(availableForStaking?.amount, availableForStaking.denom);
  const token = `${formatNumber(
    tokenFormatDenom.value,
    tokenFormatDenom.exponent
  )}`;

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

  const handleOpenStakingMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
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

  const handleOpenWithdrawRewardsDialog = () => {
    setOpenWithdrawDialog(true);
  };

  const handleCloseWithdrawRewardsDialog = () => {
    setOpenWithdrawDialog(false);
  };

  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnackbar(false);
  };

  const resetDialogInfo = () => {
    setValAddress('');
    setAmount('');
    setMemo('');
    setErrorMsg('');
    setLoading(false);
    setFeeLoading(false);
  };

  const resetWithdrawDialogInfo = () => {
    setValidatorRewardAddress('');
    setMemo('');
  };

  const getMaxFee = (maxToken: string, txFee: StdFee) => {
    setTxAmount(0);
    let fee = 0;
    txFee.amount.forEach((a) => {
      fee += Number(a.amount);
    });
    const feeBaseFormat = baseToDisplayUnit(fee);
    const maxFee =
      typeof maxToken === 'number'
        ? maxToken - Number(feeBaseFormat)
        : Number(maxToken) - Number(feeBaseFormat);
    setTxAmount(maxFee);
  };

  // Add a new state to control the success state of the delegation action
  const [delegationSuccess, setDelegationSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [feeLoading, setFeeLoading] = React.useState(false);

  const [stakedToken, setStakedToken] = React.useState<string>('');

  const [validatorSourceAddress, setValidatorSourceAddress] =
    React.useState('');

  useEffect(() => {
    if (validatorSourceAddress !== '') {
      const coinsAmount =
        delegations?.find((d) => d.validator.address === validatorSourceAddress)
          ?.coins.amount ?? '0';
      const denom =
        delegations?.find((d) => d.validator.address === validatorSourceAddress)
          ?.coins.denom ?? baseDenom;
      const tokenDenomFormat = formatToken(coinsAmount, denom);
      const sToken = `${formatNumber(
        tokenDenomFormat.value,
        tokenDenomFormat.exponent
      )}`;
      setStakedToken(sToken);
    } else {
      setStakedToken(token);
    }
  }, [validatorSourceAddress, valAddress, delegations, baseDenom, token]);

  // Add a new state to control the success state of the withdraw rewards action
  const [withdrawSuccess, setWithdrawSuccess] = React.useState(false);

  const [rewardToken, setRewardToken] = React.useState<string>('');

  const [validatorRewardAddress, setValidatorRewardAddress] =
    React.useState('');

  useEffect(() => {
    const coinsAmount =
      rewards?.find((d) => d.validator.address === validatorRewardAddress)
        ?.coins.amount ?? '0';
    const denom =
      rewards?.find((d) => d.validator.address === validatorRewardAddress)
        ?.coins.denom ?? baseDenom;
    const tokenDenomFormat = formatToken(coinsAmount, denom);
    const rToken = `${formatNumber(
      tokenDenomFormat.value,
      tokenDenomFormat.exponent
    )} ${tokenDenomFormat.displayDenom.toUpperCase()}`;
    setRewardToken(rToken);
  }, [validatorRewardAddress, baseDenom, rewardToken, rewards]);

  useEffect(() => {
    setUserAddress(localStorage.getItem(ADDRESS_KEY) ?? '');
    setChainID(localStorage.getItem(CHAIN_ID) ?? '');
  }, [userAddress, setUserAddress]);

  const handleOpenValidatorRedelegateMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setRedelegateAnchorEl(event.currentTarget);
  };
  const handleCloseRedelegateMenu = () => {
    setOpenValidatorRedelegateMenu(false);
  };

  const defaultFee = {
    amount: [
      { amount: '0.01', denom: baseDenom ?? tokenFormatDenom.baseDenom },
    ],
    gas: '',
  };

  const handleMaxFee = async (
    maxToken: string,
    validator: string,
    action: string
  ) => {
    const stakingAddress = validator;
    type SigningStargateClient = ReturnType<typeof getClient> extends Promise<
      infer T
    >
      ? T extends string
        ? never
        : T
      : never;
    let client: SigningStargateClient;

    try {
      client = (await getClient(
        chainID,
        baseDenom ?? tokenFormatDenom.baseDenom
      )) as SigningStargateClient;
    } catch (e) {
      setErrorMsg((e as Error).message);
      return;
    }

    switch (action) {
      case 'delegate':
        try {
          setFeeLoading(true);
          const base64Amount = displayToBaseUnit(maxToken);
          const delegateMsg: TransactionMsgDelegate = {
            typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
            value: {
              delegatorAddress: userAddress,
              validatorAddress: stakingAddress,
              amount: coin(base64Amount, baseDenom ?? ''),
            },
          };
          const txFee = await estimateFee(
            client,
            userAddress,
            [delegateMsg],
            memo,
            baseDenom ?? tokenFormatDenom.baseDenom
          );
          getMaxFee(maxToken, txFee);
          setFeeLoading(false);
        } catch (e) {
          getMaxFee(maxToken, defaultFee);
          setFeeLoading(false);
        }
        break;
      case 'redelegate':
        try {
          setFeeLoading(true);
          const base64Amount = displayToBaseUnit(maxToken);
          const redelegateMsg: TransactionMsgRedelegate = {
            typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
            value: {
              delegatorAddress: userAddress,
              validatorSrcAddress: validatorSourceAddress,
              validatorDstAddress: stakingAddress,
              amount: coin(base64Amount, baseDenom ?? ''),
            },
          };
          const txFee = await estimateFee(
            client,
            userAddress,
            [redelegateMsg],
            memo,
            baseDenom ?? tokenFormatDenom.baseDenom
          );
          getMaxFee(maxToken, txFee);
          setFeeLoading(false);
        } catch (e) {
          getMaxFee(maxToken, defaultFee);
          setFeeLoading(false);
        }
        break;
      default:
    }
    client.disconnect();
  };

  const handleStakingAction = async (action: string) => {
    const stakingAddress = valAddress;
    type SigningStargateClient = ReturnType<typeof getClient> extends Promise<
      infer T
    >
      ? T extends string
        ? never
        : T
      : never;
    let client: SigningStargateClient;
    let result;

    try {
      client = (await getClient(
        chainID,
        baseDenom ?? tokenFormatDenom.baseDenom
      )) as SigningStargateClient;
    } catch (e) {
      setErrorMsg((e as Error).message);
      return;
    }

    switch (action) {
      case 'delegate':
        try {
          setLoading(true);
          const base64Amount = displayToBaseUnit(amount);
          result = await client.delegateTokens(
            userAddress,
            stakingAddress,
            coin(base64Amount, baseDenom ?? ''),
            'auto',
            memo ?? ''
          );
          setDelegationSuccess(true);
          setTxHash(result.transactionHash);
          assertIsDeliverTxSuccess(result);
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
          const base64Amount = displayToBaseUnit(amount);
          const redelegateMsg: MsgBeginRedelegateEncodeObject = {
            typeUrl: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
            value: {
              delegatorAddress: userAddress,
              validatorSrcAddress: validatorSourceAddress,
              validatorDstAddress: stakingAddress,
              amount: coin(base64Amount, baseDenom ?? ''),
            },
          };
          result = await client.signAndBroadcast(
            userAddress,
            [redelegateMsg],
            'auto',
            memo
          );
          setDelegationSuccess(true);
          setTxHash(result.transactionHash);
          assertIsDeliverTxSuccess(result);
          setLoading(false);
          setValidatorSourceAddress('');
        } catch (e) {
          handleCloseRedelegateDialog();
          setErrorMsg((e as Error).message);
          setOpenSuccessSnackbar(false);
          return;
        }
        break;
      case 'undelegate':
        try {
          setLoading(true);
          const base64Amount = displayToBaseUnit(amount);
          result = await client.undelegateTokens(
            userAddress,
            validatorSourceAddress,
            coin(base64Amount, baseDenom ?? ''),
            'auto',
            memo
          );
          setDelegationSuccess(true);
          setTxHash(result.transactionHash);
          assertIsDeliverTxSuccess(result);
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
        try {
          setLoading(true);
          result = await client.withdrawRewards(
            userAddress,
            validatorRewardAddress,
            'auto',
            memo
          );
          setWithdrawSuccess(true);
          setTxHash(result.transactionHash);
          assertIsDeliverTxSuccess(result);
          setLoading(false);
          setValidatorRewardAddress('');
        } catch (e) {
          setErrorMsg((e as Error).message);
          handleCloseWithdrawRewardsDialog();
          setOpenSuccessSnackbar(false);
          return;
        }
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
    handleOpenWithdrawRewardsDialog,
    handleOpenValidatorRedelegateMenu,
    handleCloseRedelegateMenu,
    setOpenDelegateDialog,
    setOpenRedelegateDialog,
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
    handleCloseWithdrawRewardsDialog,
    setValAddress,
    setDelegationSuccess,
    setWithdrawSuccess,
    setTxHash,
    setOpenSuccessSnackbar,
    resetDialogInfo,
    resetWithdrawDialogInfo,
    setLoading,
    setValidatorSourceAddress,
    validatorSourceAddress,
    setValidatorRewardAddress,
    validatorRewardAddress,
    stakedToken,
    delegationSuccess,
    withdrawSuccess,
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
    openWithdrawDialog,
    openRedelegateMenu,
    available,
    baseDenom,
    availableForStaking,
    tokenFormatDenom,
    token,
    rewardToken,
    txHash,
    loading,
    feeLoading,
    handleMaxFee,
  };
};

export default useStakingHooks;
