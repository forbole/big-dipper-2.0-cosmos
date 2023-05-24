import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateReport from '@/models/msg/reports/msg_create_report';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateReport: FC<{ message: MsgCreateReport }> = (props) => {
  const { message } = props;

  const reporter = useProfileRecoil(message.reporter);

  const reporterMoniker = reporter ? reporter?.name : message.reporter;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreateReport"
        components={[<Name address={message.reporter} name={reporterMoniker} />, <b />]}
        values={{
          reporter: reporterMoniker,
        }}
      />
    </Typography>
  );
};

export default CreateReport;
