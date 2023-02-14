import renderer from 'react-test-renderer';
import AnswerPoll from '@/components/msg/posts/answer_poll';
import MsgAnswerPoll from '@/models/msg/posts/msg_answer_poll';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AnswerPoll', () => {
  it('matches snapshot', () => {
    const message: MsgAnswerPoll = {
      category: 'posts',
      type: 'MsgAnswerPoll',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AnswerPoll message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
