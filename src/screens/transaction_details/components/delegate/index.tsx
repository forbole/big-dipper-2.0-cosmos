import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { formatDenom } from '@utils/format_denom';
import { AvatarName } from '@components';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';

const Delegate = (props: {
  message: MsgDelegate;
}) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = formatDenom(message.amount.amount);

  return (
    <p>
      <Trans
        i18nKey="transactions:txDelegateContent"
        components={[
          (
            <AvatarName
              address={message.delegatorAddress}
              name={message.delegatorAddress}
            />
          ),
          <b />,
          (
            <AvatarName
              address={message.delegatorAddress}
              name={message.delegatorAddress}
            />
          ),
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
      {/* {t('txDelegateContent')} */}
      {/* <span className="address"> */}
      {/* another address */}
      {/* <AddressDisplay address={message.delegatorAddress} /> */}
      {/* </span> */}
      {/* {t('txDelegateOne')} */}
      {/* <span className="amount"> */}
      {/* {parsedAmount} */}
      {/* </span> */}
      {/* {translationFormatter(t('txDelegateTwo'))} */}
      {/* <span className="address"> */}
      {/* something else first */}
      {/* <AddressDisplay address={message.validatorAddress} /> */}
      {/* </span> */}
    </p>
  );
};

export default Delegate;
