import React from 'react';
import { useChainContext } from '@contexts';
import { Name } from '@components';
import useTranslation from 'next-translate/useTranslation';

const ListNames = (props: {
  creators: string[];
}) => {
  const { creators } = props;
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');

  const dataArray = creators.map((eachAddress) => {
    const creatorMoniker = findAddress(eachAddress);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : eachAddress;
    return {
      eachAddress, creatorMonikerResult,
    };
  });

  return (
    <>
      {dataArray.map((x, i) => {
        let suffix = '';

        if (i === (dataArray.length - 2)) {
          suffix = ` ${t('and')} `;
        } else if (i !== (dataArray.length - 1) && dataArray.length > 1) {
          suffix = ', ';
        }

        return (
          <React.Fragment key={x.eachAddress}>
            <Name
              address={x.eachAddress}
              name={x.creatorMonikerResult}
            />
            {suffix}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListNames;
