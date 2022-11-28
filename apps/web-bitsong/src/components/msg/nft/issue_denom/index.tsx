import ListNames from '@/components/msg/nft/issue_denom/components/list_names';
import MsgIssueDenom from '@/models/msg/nft/msg_issue_denom';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

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
