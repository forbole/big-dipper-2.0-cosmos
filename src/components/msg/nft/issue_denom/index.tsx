import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';
import { ListNames } from './components';
// import ListNames from './listNames';

const IssueDenom = (props: {
  message: MsgIssueDenom ;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');
  const { creators } = message;

  const dataArray = creators.map((eachAddress) => {
    const creatorMoniker = findAddress(eachAddress);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : eachAddress;
    return {
      eachAddress, creatorMonikerResult,
    };
  });

  console.log('dataArray => ', dataArray);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenomContent"
        components={[
          (
            <Name
              address={dataArray[2].eachAddress}
              name={dataArray[2].creatorMonikerResult}
            />
          ),
          <b />,
        ]}
        // components={
        //   (
        //     <ListNames />
        //   )
        // }
      />
      <ListNames creators={creators} />
      {/* <ListNames message={message} /> */}
    </Typography>
  );
};

export default IssueDenom;
