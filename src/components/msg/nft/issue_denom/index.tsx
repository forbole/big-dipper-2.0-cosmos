import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';

const IssueDenom = (props: {
  message: MsgIssueDenom ;
}) => {
  console.log('props', props);

  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');
  const { creators } = message;
  const creatorsAddressResult = creators.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')}`) + value);

  console.log('creatorsAddressResult => ', creatorsAddressResult);

  const creatorsMoniker = creators.map((x) => {
    const creatorMoniker = findAddress(x);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : x;
    return creatorMonikerResult;
  });
  const creatorsMonikerResult = creatorsMoniker.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  console.log('creatorsMonikerResult => ', creatorsMonikerResult);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenomContent"
        components={[
          (
            <Name
              address={creatorsAddressResult}
              name={creatorsMonikerResult}
            />
          ),
          <b />,
        ]}
      />
    </Typography>
  );
};

export default IssueDenom;
