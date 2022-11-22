import React from 'react';
import { useProfilesRecoil } from 'ui/recoil/profiles';
import Name from 'ui/components/name';
import useTranslation from 'next-translate/useTranslation';

const ListNames = (props: { creators: string[] }) => {
  const { creators } = props;

  const { t } = useTranslation('transactions');
  const dataArray = useProfilesRecoil(creators);

  return (
    <>
      {dataArray.map((x, i) => {
        let suffix = '';

        if (i === dataArray.length - 2) {
          suffix = ` ${t('and')} `;
        } else if (i !== dataArray.length - 1 && dataArray.length > 1) {
          suffix = ', ';
        }

        return (
          <React.Fragment key={x.address}>
            <Name address={x.address} name={x.name} />
            {suffix}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListNames;
