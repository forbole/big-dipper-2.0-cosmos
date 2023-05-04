import * as React from 'react';
import { useAvailableBalances } from '@/screens/account_details/utils';
import { useParams } from '@/screens/params/hooks';
import { getDenom } from '@/utils/get_denom';
import * as R from 'ramda';
import { formatNumber, formatToken } from '@/utils/format_token';

const useStakingHooks = () => {
  const [amount, setAmount] = React.useState('');
  const [memo, setMemo] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openStakingDialog, setOpenStakingDialog] = React.useState(false);
  const open = Boolean(anchorEl);

  // Get mint denom
  const { state } = useParams();
  const baseDenom = state?.minting?.mintDenom;
  // const available = useAvailableBalances('comdex1hvhyunq7qvykzvrcnhjj4xnkcla58xusc65v26');
  const available = useAvailableBalances(localStorage.getItem('ADDRESS_KEY') ?? '');
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

  const handleDelegateAction = () => {
    setOpenStakingDialog(false);
  };

  return {
    handleClick,
    handleClose,
    handleDelegate,
    setDelegateAmount,
    setMemoValue,
    getAmount,
    handleDelegateAction,
    amount,
    memo,
    open,
    anchorEl,
    openStakingDialog,
    available,
    baseDenom,
    availableForStaking,
    tokenFormatDenom,
    token,
  };
};

export default useStakingHooks;
