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
  console.log('MsgIssueDenom', MsgIssueDenom);
  console.log('props', props);
  console.log('props.message', props.message);

  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');

  console.log('message', message);

  const { creators } = message;
  const creatorsAddressResult = creators.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')}`) + value);

  console.log('creators', creators);
  console.log('creatorsAddressResult', creatorsAddressResult);

  const creatorsMoniker = creators.map((x) => {
    const creatorMoniker = findAddress(x);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : x;
    return creatorMonikerResult;
  });
  const creatorsMonikerResult = creatorsMoniker.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  console.log('creatorsMonikerResult', creatorsMonikerResult);

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
      />
    </Typography>
  );
};

export default IssueDenom;
