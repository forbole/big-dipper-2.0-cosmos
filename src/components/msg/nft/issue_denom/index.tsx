import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';

const IssueDenom = (props: {
  message: MsgIssueDenom ;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');

  const { creators } = message;
  const creator = creators.map((x) => {
    return x.toUpperCase();
  });
  const creatorsResult = creator.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);
  
  const { splitShares } = message;
  const splitShare = splitShares.map((y) => {
    return numeral(y);
  });
  const splitShareResult = splitShare.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  const royaltyShare = findAddress(message.royaltyShare);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenom"
        components={[
          (
            <Name
              address={message.liquidityProvider}
              name={liqdPvdMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          splitShares: splitShareResult,
          royaltyShare: 
        }}
      />
    </Typography>
  );
};

export default IssueDenom;
