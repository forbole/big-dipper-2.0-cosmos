import React from 'react';
import { useChainContext } from '@contexts';
import { Name } from '@components';

const ListNames = (props: {
  creators: string[];
}) => {
  const { creators } = props;
  const { findAddress } = useChainContext();

  const dataArray = creators.map((eachAddress) => {
    const creatorMoniker = findAddress(eachAddress);
    const creatorMonikerResult = creatorMoniker ? creatorMoniker?.moniker : eachAddress;
    return {
      eachAddress, creatorMonikerResult,
    };
  });

  // create ui based on this data
  const NamesUI = dataArray.map((x) => {
    return (
      <Name
        key={x.eachAddress}
        address={x.eachAddress}
        name={x.creatorMonikerResult}
      />
    );
  });

  return (
    <div>
      {NamesUI}
    </div>
  );
};

export default ListNames;
