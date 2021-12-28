import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Name } from '@components';

const Signers = (props: {
  signers: AvatarName[];
}) => {
  const { t } = useTranslation('transactions');
  const { signers } = props;
  return (
    <>
      {signers.map((x, i) => {
        const signerMoniker = x ? x?.name : x?.address;
        if (i !== signers.length - 1) {
          return (
            <Name
              address={x?.address}
              name={signerMoniker}
            />
          );
        }
        return (
          <>
            <Name
              address={x?.address}
              name={signerMoniker}
            />
            {t('and')}
          </>
        );
      })}
    </>
  );
};

export default Signers;
