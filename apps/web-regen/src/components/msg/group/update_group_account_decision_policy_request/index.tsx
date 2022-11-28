import Name from '@/components/name';
import MsgUpdateGroupAccountDecisionPolicyRequest from '@/models/msg/group/msg_update_group_account_decision_policy_request';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';

const UpdateGroupAccountDecisionPolicyRequest = (props: {
  message: MsgUpdateGroupAccountDecisionPolicyRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupAccountDecisionPolicyRequest"
        components={[
          <Name address={message.admin} name={adminMoniker} />,
          <Name address={message.address} name={addressMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAccountDecisionPolicyRequest;
