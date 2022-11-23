import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import MsgIssueDenom from '@/models/msg/nft/msg_issue_denom';
import ListNames from '@/components/msg/nft/issue_denom/components/list_names';

const IssueDenom: React.FC<{ message: MsgIssueDenom }> = (props) => {
  const { message } = props;
  const { creators } = message;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenomContent"
        components={[<ListNames creators={creators} />]}
      />
    </Typography>
  );
};

export default IssueDenom;
