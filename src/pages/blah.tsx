import { MsgSignDataRequest } from '@models';
import { SignDataRequest } from '@msg';

const Blah = () => {
  const message = new MsgSignDataRequest({
    category: 'data',
    type: 'MsgAnchorDataRequest',
    signers: [
      'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      // 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      // 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      // 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
    ],
  });
  return (
    <SignDataRequest
      message={message}
    />
  );
};

export default Blah;
