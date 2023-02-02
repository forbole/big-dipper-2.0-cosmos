import renderer from 'react-test-renderer';
import Unknown from '@/components/msg/unknown';
import { MsgUnknown } from '@/models';
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
describe('screen: TransactionDetails/Unknown', () => {
  it('matches snapshot', () => {
    const message = MsgUnknown.fromJson({
      category: 'others',
      type: 'MsgUnknown',
      json: JSON.stringify({
        hello: 'world',
      }),
    });
    const component = renderer.create(
      <MockTheme>
        <Unknown message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
