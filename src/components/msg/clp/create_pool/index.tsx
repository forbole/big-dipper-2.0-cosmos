import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgCreatePool } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';
import { chainConfig } from '@src/configs';

const CreatePool = (props: {
  message: MsgCreatePool;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const nativeAmount = formatDenom(message.nativeAssetAmount, chainConfig.primaryTokenUnit);
  const parsedNativeAmount = `${numeral(nativeAmount.value).format(nativeAmount.format)} ${nativeAmount.denom.toUpperCase()}`;

  const externalAmount = formatDenom(message.externalAssetAmount, message.externalAsset.symbol);
  const parsedExternalAmount = `${numeral(externalAmount.value).format(externalAmount.format)} ${externalAmount.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreatePool"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          nativeAssetAmount: parsedNativeAmount,
          externalAssetAmount: parsedExternalAmount,
        }}
      />
    </Typography>
  );
};

export default CreatePool;
