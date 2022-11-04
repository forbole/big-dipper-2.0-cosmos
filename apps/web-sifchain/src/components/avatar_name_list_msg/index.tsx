import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Name from '@components/name';

/**
 * Used for msg when you have to list multiple users
 * using AvatarNames
 */
const AvatarNameListMsg = (props: { avatars: AvatarName[] }) => {
  const { t } = useTranslation('transactions');
  const { avatars } = props;
  return (
    <>
      {avatars.map((x, i) => {
        const signerMoniker = x ? x?.name : x?.address;
        if (avatars.length === 1) {
          return <Name address={x?.address} name={signerMoniker} />;
        }

        if (i === avatars.length - 2) {
          return (
            <>
              <Name address={x?.address} name={signerMoniker} /> {t('and')}{' '}
            </>
          );
        }

        return (
          <>
            <Name address={x?.address} name={signerMoniker} />
            {i !== avatars.length - 1 && <>, </>}
          </>
        );
      })}
    </>
  );
};

export default AvatarNameListMsg;
