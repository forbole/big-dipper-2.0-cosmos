import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgSetRegistry from '@/models/msg/tokenregistry/msg_set_registry';
import Name from '@/components/name';

const SetRegistry: FC<{ message: MsgSetRegistry }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const from = useProfileRecoil(message.from);
  const fromMoniker = from ? from?.name : message.from;

  const parsedDenoms = message?.registry
    ?.map((x) => x.denom.toUpperCase())
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
