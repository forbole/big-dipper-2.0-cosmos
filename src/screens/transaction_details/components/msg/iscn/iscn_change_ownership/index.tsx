import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChangeIscnRecordOwnership } from '@models';
import { useChainContext } from '@contexts';

const IscnChangeOwnership = (props: {
  message: MsgChangeIscnRecordOwnership;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const from = findAddress(message.from);
  const fromMoniker = from ? from?.moniker : message.from;

  const to = findAddress(message.newOwner);
  const toMoniker = to ? to?.moniker : message.newOwner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChangeIscnRecordOwnershipContent"
        components={[
          (
            <Name
              address={message.from}
              name={fromMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.newOwner}
              name={toMoniker}
            />
          ),
        ]}
        values={{
          iscnId: numeral(message.iscnId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default IscnChangeOwnership;
