/* eslint-disable max-len */
import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgLockTokens } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { chainConfig } from '@configs';
import { secondsToDays } from '@utils/time';

const LockTokens = (props: {
    message: MsgLockTokens;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txLockTokensContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
        ]}
        values={{
          amount: message.coins.map((x) => {
            return `${numeral(parseFloat(x?.amount) / 10 ** chainConfig.tokenUnits[x?.denom]?.exponent).format('0,0.[0000]')} ${chainConfig.tokenUnits[x?.denom]?.display?.toUpperCase()}`;
          }),
          duration: secondsToDays(parseFloat(message.duration.substring(0, message.duration.length - 1))).toFixed(0),
        }}
      />
    </Typography>
  );
};

export default LockTokens;
