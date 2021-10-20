import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Name } from '@components';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';

const ListNames = (props: {
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

  console.log('listNames 2 methods');

  // method 1
  /// / step1: return UI, step 2: .reduce()
  const NamesUI = dataArray.map((x) => {
    return (
      <>
        <Name
          address={x.eachAddress}
          name={x.creatorMonikerResult}
        />
        <b />
      </>
    );
  });

  const NamesSentenceUI = NamesUI.reduce((element, value, i, array) => element + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  // method 2
  /// / step1: .reduce(), step 2: return UI
  const sentence = dataArray.map((name) => { return name.eachAddress; }).reduce((element, value, i, array) => element + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    NamesUI
  );
};

export default ListNames;
