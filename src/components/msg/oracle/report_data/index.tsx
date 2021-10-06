import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgReportData } from '@models';
import { useChainContext } from '@contexts';

const ReportData = (props: {
  message: MsgReportData;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const validator = findAddress(message.validator);
  const validatorMoniker = validator ? validator?.moniker : message
    .validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txReportData"
        components={[
          (
            <Name
              address={message.validator}
              name={validatorMoniker}
            />
          ),
          (
            <b />
          ),
        ]}
        values={{
          requestId: numeral(message.requestId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default ReportData;
