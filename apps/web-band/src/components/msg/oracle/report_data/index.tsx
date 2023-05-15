import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import numeral from 'numeral';
import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import MsgReportData from '@/models/msg/oracle/msg_report_data';
import Name from '@/components/name';

const ReportData: FC<{ message: MsgReportData }> = (props) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validator);
  const validatorMoniker = validator ? validator?.name : message.validator;

  return (
    <Typography>
      <AppTrans
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
