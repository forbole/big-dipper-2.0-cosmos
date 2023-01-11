import Name from '@/components/name';
import MsgReportData from '@/models/msg/oracle/msg_report_data';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import React, { FC } from 'react';

const ReportData: FC<{ message: MsgReportData }> = (props) => {
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
