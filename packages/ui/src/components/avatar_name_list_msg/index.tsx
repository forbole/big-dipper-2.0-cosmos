import useAppTranslation from '@/hooks/useAppTranslation';
import { Fragment } from 'react';
import Name from '@/components/name';

/**
 * Used for msg when you have to list multiple users
 * using AvatarNames
 */
const AvatarNameListMsg = (props: { avatars: AvatarName[] }) => {
  const { t } = useAppTranslation('transactions');
  const { avatars } = props;
  return (
    <>
      {avatars.map((x, i) => {
        const signerMoniker = x?.name ?? x?.address;
        if (avatars.length === 1) {
          return <Name key={signerMoniker} address={x?.address} name={signerMoniker} />;
        }

        if (i === avatars.length - 2) {
          return (
            <Fragment key={signerMoniker}>
              <Name address={x?.address} name={signerMoniker} /> {t('and')}{' '}
            </Fragment>
          );
        }

        return (
          <Fragment key={signerMoniker}>
            <Name address={x?.address} name={signerMoniker} />
            {i !== avatars.length - 1 && <>, </>}
          </Fragment>
        );
      })}
    </>
  );
};

export default AvatarNameListMsg;
