import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { useChainContext } from '@contexts';
import {
  VALIDATOR_DETAILS, ACCOUNT_DETAILS,
} from '@utils/go_to_page';

const Delegate = (props: {
  message: MsgDelegate;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;
  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;
  const delegatorHref = delegator ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message
    .validatorAddress;
  const validatorHref = validator ? ACCOUNT_DETAILS : VALIDATOR_DETAILS;

  const parsedAmount = formatDenom(message.amount.amount);

  return (
    <p>
      <Trans
        i18nKey="transactions:txDelegateContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
              href={delegatorHref}
            />
          ),
          <b />,
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
              href={validatorHref}
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
