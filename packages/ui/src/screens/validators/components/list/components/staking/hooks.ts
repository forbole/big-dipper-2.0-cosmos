import * as React from 'react';
import { useAvailableBalances } from '@/screens/account_details/utils';
import { useParams } from '@/screens/params/hooks';
import { getDenom } from '@/utils/get_denom';
import * as R from 'ramda';
import { formatNumber, formatToken } from '@/utils/format_token';
import { getClient } from '@/components/nav/components/connect_wallet/keplr_utils';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';
import { useEffect } from 'react';
import { coin } from '@cosmjs/proto-signing';
import { ADDRESS_KEY, CHAIN_ID } from '@/utils/localstorage';

const useStakingHooks = () => {
  const [amount, setAmount] = React.useState('');
  const [userAddress, setUserAddress] = React.useState('');
  const [chainID, setChainID] = React.useState('');

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

  const setTxAmount = (value: string) => {
    const regex = /^[0-9\b]+$/;
    if (value === '' || regex.test(value)) {
      setAmount(value);
    }
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

  const handleSuccessSnackbar = () => {
    setOpenSuccessSnackbar(true);
  };

  const handleCloseSnackBar = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessSnackbar(false);
  };

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
    type SigningStargateClient = ReturnType<typeof getClient> extends Promise<infer T>
      ? T extends string
        ? never
        : T
      : never;
    let client: SigningStargateClient;
    let result;

    try {
      client = (await getClient(chainID)) as SigningStargateClient;
    } catch (e) {
      setErrorMsg((e as Error).message);
      return;
    }

    switch (action) {
      case 'delegate':
        try {
          result = await client.delegateTokens(
            userAddress,
            validator,
            coin(amount, baseDenom ?? ''),
            'auto',
            memo
          );
        } catch (e) {
          setErrorMsg((e as Error).message);
          return;
        }
        break;
      case 'redelegate':
        try {
          result = await client.redelegateTokens(
            userAddress,
            validator,
            coin(amount, baseDenom ?? ''),
            'auto',
            memo
          );
        } catch (e) {
          setErrorMsg((e as Error).message);
          return;
        }
        break;
      case 'undelegate':
        try {
          result = await client.undelegateTokens(
            userAddress,
            validator,
            coin(amount, baseDenom ?? ''),
            'auto',
            memo
          );
        } catch (e) {
          setErrorMsg((e as Error).message);
          return;
        }
        break;
      case 'claim rewards':
        try {
          result = await client.withdrawRewards(userAddress, validator, 'auto', memo);
        } catch (e) {
          setErrorMsg((e as Error).message);
          return;
        }
        break;
      default:
        return;
    }

    // eslint-disable-next-line no-console
    console.log(result);
    try {
      assertIsBroadcastTxSuccess(result);
    } catch (e) {
      setErrorMsg((e as Error).message);
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
    handleSuccessSnackbar,
    setDelegateAmount,
    setTxAmount,
    setMemoValue,
    getAmount,
    handleCloseSnackBar,
    handleCloseDelegateDialog,
    handleCloseRedelegateDialog,
    handleCloseUndelegateDialog,
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
    baseDenom,
    availableForStaking,
    tokenFormatDenom,
    token,
  };
};

export default useStakingHooks;
