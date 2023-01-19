import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import MsgIssueDenom from '@/models/msg/nft/msg_issue_denom';
import ListNames from '@/components/msg/nft/issue_denom/components/list_names';

const IssueDenom: FC<{ message: MsgIssueDenom }> = (props) => {
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
