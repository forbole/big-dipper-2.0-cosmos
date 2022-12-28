import Name from '@/components/name';
import useTranslation from 'next-translate/useTranslation';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { FC } from 'react';

const SignerName: FC<{ address: string; i: number; addresses: string[] }> = (props) => {
  const { address, i, addresses } = props;
  const { t } = useTranslation('transactions');
  const signer = useProfileRecoil(address);
  const signerMoniker = signer?.name || signer?.address;
  if (addresses.length === 1) {
    return <Name address={signer?.address} name={signerMoniker} />;
  }

  if (i === addresses.length - 2) {
    return (
      <>
        <Name address={signer?.address} name={signerMoniker} /> {t('and')}{' '}
      </>
    );
  }

  return (
    <>
      <Name address={signer?.address} name={signerMoniker} />
      {i !== addresses.length - 1 && <>, </>}
    </>
  );
};

const Signers = (props: { signers: string[] }) => {
  const { signers } = props;
  return (
    <>
      {signers.map((x, i) => (
        <SignerName key={x} address={x} i={i} addresses={signers} />
      ))}
    </>
  );
};

export default Signers;
