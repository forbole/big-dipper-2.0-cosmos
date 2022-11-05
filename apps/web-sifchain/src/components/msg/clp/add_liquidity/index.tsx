import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatToken, formatNumber } from '@utils/format_token';
import Name from '@components/name';
import { MsgAddLiquidity } from '@models';
import { useProfileRecoil } from '@recoil/profiles';
import chainConfig from 'ui/chainConfig';

const AddLiquidity = (props: { message: MsgAddLiquidity }) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const nativeAmount = formatToken(message.nativeAssetAmount, chainConfig.primaryTokenUnit);

  const parsedNativeAmount = `${formatNumber(
    nativeAmount.value,
    nativeAmount.exponent
  )} ${nativeAmount.displayDenom.toUpperCase()}`;

  const externalAmount = formatToken(message.externalAssetAmount, message.externalAsset.symbol);
  const parsedExternalAmount = `${formatNumber(
    externalAmount.value,
    externalAmount.exponent
  )} ${externalAmount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgAddLiquidity"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          nativeAssetAmount: parsedNativeAmount,
          externalAssetAmount: parsedExternalAmount,
        }}
      />
    </Typography>
  );
};

export default AddLiquidity;
