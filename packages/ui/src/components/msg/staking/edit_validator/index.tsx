import Name from '@/components/name';
import { MsgEditValidator } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const EditValidator: React.FC<{ message: MsgEditValidator }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  return (
    <Typography>
      <Trans
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
