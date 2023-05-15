import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgEditValidator } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';

const EditValidator: FC<{ message: MsgEditValidator }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txEditValidatorContent"
        components={[
          <Name
            address={message.validatorAddress}
            name={validatorMoniker}
            href={VALIDATOR_DETAILS}
          />,
        ]}
      />
    </Typography>
  );
};

export default EditValidator;
