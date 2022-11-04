import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgCreateClassRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const CreateClassRequest = (props: {
  message: MsgCreateClassRequest;
}) => {
  const { message } = props;

  const designer = useProfileRecoil(message.designer);
  const designerMoniker = designer ? designer?.name : message.designer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateClassRequest"
        components={[
          (
            <Name
              address={message.designer}
              name={designerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateClassRequest;
