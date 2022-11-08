import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgReportData from '@models/band/msg/oracle/msg_report_data';
import { useProfileRecoil } from '@recoil/profiles';

const ReportData = (props: { message: MsgReportData }) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validator);
  const validatorMoniker = validator ? validator?.name : message.validator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txReportData"
        components={[<Name address={message.validator} name={validatorMoniker} />, <b />]}
        values={{
          requestId: numeral(message.requestId).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default ReportData;
