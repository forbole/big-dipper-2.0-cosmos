import { MsgCreateDid } from '@cheqd/ts-proto/cheqd/v1/tx';
import { Typography } from '@material-ui/core';
import DID from '@src/components/did';
import Trans from 'next-translate/Trans';

const CreateDID = (props: { message: MsgCreateDid }) => {
  const { message } = props;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateDID"
        components={[<DID did={message.payload.id} />]}
      />
    </Typography>
  );
};

export default CreateDID;
