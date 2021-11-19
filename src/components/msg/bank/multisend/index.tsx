import React from 'react';
import * as R from 'ramda';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { Name } from '@components';
import { MsgMultiSend } from '@models';
import {
  useProfileRecoil, useProfilesRecoil,
} from '@recoil/profiles';
import { useStyles } from './styles';

const Multisend = (props: {
  message: MsgMultiSend;
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  const { message } = props;

  const sender = R.pathOr({
  }, ['inputs', 0], message);
  const senderAmount = sender?.coins?.map((x) => {
    const amount = formatToken(x.amount, x.denom);
    return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const userSend = useProfileRecoil(sender?.address);
  const validatorMoniker = userSend ? userSend?.name : sender?.address;

  const receivers = message?.outputs?.map((output) => {
    const parsedAmount = output?.coins?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

    return {
      address: output.address,
      parsedAmount,
    };
  });

  const receiverProfiles = useProfilesRecoil(receivers.map((x) => x.address));

  return (
    <div>
      <Typography>
        <Trans
          i18nKey="message_contents:txMultisendContentOne"
          components={[
            (
              <Name
                address={sender?.address}
                name={validatorMoniker}
              />
            ),
            <b />,
          ]}
          values={{
            amount: senderAmount,
          }}
        />
      </Typography>
      <div className={classes.multisend}>
        {
        receivers?.map((x, i) => {
          const recieverUser = receiverProfiles[i];
          const recieverMoniker = recieverUser ? recieverUser?.name : x?.address;
          return (
            <Typography key={`${x.address}-${i}`}>
              <Trans
                i18nKey="message_contents:txMultisendContentTwo"
                components={[
                  (
                    <Name
                      address={x?.address}
                      name={recieverMoniker}
                    />
                  ),
                  <b />,
                ]}
                values={{
                  amount: x.parsedAmount,
                }}
              />
            </Typography>
          );
        })
      }
      </div>
    </div>
  );
};

export default Multisend;
