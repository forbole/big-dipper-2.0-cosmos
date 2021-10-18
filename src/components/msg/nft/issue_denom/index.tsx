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
    return x;
  });
  const creatorsAddressResult = creator.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  const creatorsMoniker = creators.map((y) => {
    const creatorMoniker = findAddress(y);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : message.creators;
    return creatorMonikerResult;
  });
  const creatorsMonikerResult = creatorsMoniker.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  const { splitShares } = message;
  const splitShare = splitShares.map((y) => {
    return numeral(y);
  });
  const splitShareResult = splitShare.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenom"
        components={[
          (
            <Name
              address={creatorsAddressResult}
              name={creatorsMonikerResult}
            />
          ),
          <b />,
        ]}
        values={{
          splitShares: splitShareResult,
          royaltyShare: message.royaltyShare,
        }}
      />
    </Typography>
  );
};

export default IssueDenom;
