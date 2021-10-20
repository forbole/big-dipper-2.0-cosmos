import { IssueDenom } from '@msg';
import { MsgIssueDenom } from '@src/models';

const TestNFTtx = () => {
  const message = new MsgIssueDenom({
    category: 'nft',
    type: 'nnfftt',
    creators: [
      'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4',
      'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
    ],
  });
  return (
    <IssueDenom message={message} />
  );
};

export default TestNFTtx;
