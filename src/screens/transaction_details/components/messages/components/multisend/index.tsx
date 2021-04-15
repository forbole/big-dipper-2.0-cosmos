import React from 'react';
import * as R from 'ramda';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgMultiSend } from '@models';
import { chainConfig } from '@src/chain_config';
import { useGetStyles } from './styles';
import { translationFormatter } from '../../utils';

const Multisend = (props: {
  message: MsgMultiSend;
}) => {
  const { t } = useTranslation(['activities']);
  const { classes } = useGetStyles();

  const { message } = props;

  const sender = R.pathOr({
  }, ['inputs', 0], message);
  const senderAmount = sender?.coins?.map((x) => {
    return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const receivers = message?.outputs?.map((output) => {
    const parsedAmount = output?.coins?.map((x) => {
      return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
    }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

    return {
      address: output.address,
      parsedAmount,
    };
  });

  return (
    <>
      <p>
        <span className="address">
          <AddressDisplay address={sender?.address} />
        </span>
        {translationFormatter(t('txMultisendOne'))}
        <span className="amount">
          {senderAmount}
        </span>
        {translationFormatter(t('txMultisendTwo'), {
          after: false,
        })}
        :
      </p>
      <div className={classes.multisend}>
        {
        receivers?.map((x, i) => {
          return (
            <p key={`${x.address}-${i}`}>
              <span className="address">
                <AddressDisplay address={x.address} />
              </span>
              {translationFormatter(t('txMultisendThree'))}
              <span className="amount">
                {x.parsedAmount}
              </span>
            </p>
          );
        })
      }
      </div>
    </>
  );
};

export default Multisend;
