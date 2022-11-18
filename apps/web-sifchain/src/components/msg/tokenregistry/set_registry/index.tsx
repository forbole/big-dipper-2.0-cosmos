import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgSetRegistry from '@models/sifchain/msg/tokenregistry/msg_set_registry';
import { useProfileRecoil } from 'ui/recoil/profiles';

const SetRegistry: React.FC<{ message: MsgSetRegistry }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  const parsedDenoms = message?.registry
    ?.map((x) => {
      return x.denom.toUpperCase();
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSetRegistry"
        components={[<Name address={message.from} name={fromMoniker} />, <b />]}
        values={{
          denoms: parsedDenoms,
        }}
      />
    </Typography>
  );
};

export default SetRegistry;
