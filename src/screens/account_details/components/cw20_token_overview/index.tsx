import React from 'react';
import classnames from 'classnames';
import { BoxDetails } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Cw20TokenInfo } from '../../types';

const Cw20TokenOverview: React.FC<{
  tokenInfo: Cw20TokenInfo,
  loading?: boolean
} & ComponentDefault> = (props) => {
  if (props.tokenInfo.name === '') {
    return null;
  }

  const { t } = useTranslation('accounts');

  const details = [
    {
      label: t('name'),
      detail: props.tokenInfo.name,
    },
    {
      label: t('denom'),
      detail: props.tokenInfo.denom,
    },
    {
      label: t('exponent'),
      detail: props.tokenInfo.exponent,
    },
    {
      label: t('circulatingSupply'),
      detail: props.tokenInfo.circulatingSupply,
    },
  ];

  if (props.tokenInfo.minterAddress !== '') {
    details.push({
      label: t('minter'),
      detail: props.tokenInfo.minterAddress,
    });
  }

  if (props.tokenInfo.maxSupply) {
    details.push({
      label: t('maxSupply'),
      detail: props.tokenInfo.maxSupply,
    });
  }

  if (props.tokenInfo.projectUrl !== '') {
    details.push({
      label: t('projectUrl'),
      detail: props.tokenInfo.projectUrl,
    });
  }

  return (
    <BoxDetails
      className={classnames(props.className)}
      title={t('overview')}
      details={details}
    />
  );
};

export default Cw20TokenOverview;
