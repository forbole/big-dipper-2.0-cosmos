import React from 'react';
import * as R from 'ramda';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgDecommissionPool } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';
import { chainConfig } from '@src/configs';

const DecommissionPool = (props: {
  message: MsgDecommissionPool;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  const symbol = (R.pathOr('', ['tokenUnits', message.symbol, 'display'], chainConfig)).toUpperCase();

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgDecommissionPool"
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
          symbol,
        }}
      />
    </Typography>
  );
};

export default DecommissionPool;
