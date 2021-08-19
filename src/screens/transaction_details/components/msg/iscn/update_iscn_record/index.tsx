import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateIscnRecord } from '@models';
import { useChainContext } from '@contexts';

const UpdateIscnRecord = (props: {
  message: MsgUpdateIscnRecord;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const from = findAddress(message.from);
  const fromMoniker = from ? from?.moniker : message.from;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateIscnRecordContent"
        components={[
          (
            <Name
              address={message.from}
              name={fromMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          iscnId: numeral(message.iscnId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default UpdateIscnRecord;
