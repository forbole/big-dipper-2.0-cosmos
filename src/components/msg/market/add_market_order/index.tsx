import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgAddMarketOrder } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const AddMarketOrder = (props: {
  message: MsgAddMarketOrder;
}) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;
  const destination = formatDenom(message.destination.amount, message.destination.denom);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txAddMarketOrderContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          <b />,
          <b />,
          <b />,
        ]}
        values={{
          clientOrderId: message.clientOrderId,
          source: message.source,
          destination: `${numeral(destination.value).format('0,0.[000000]')} ${destination.denom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default AddMarketOrder;
