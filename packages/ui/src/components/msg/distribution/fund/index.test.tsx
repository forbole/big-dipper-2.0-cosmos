import renderer from 'react-test-renderer';
import Fund from '@/components/msg/distribution/fund';
import { MsgFundCommunityPool } from '@/models';
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
describe('screen: TransactionDetails/Fund', () => {
  it('matches snapshot', () => {
    const message = MsgFundCommunityPool.fromJson({
      category: 'distribution',
      type: 'MsgFundCommunityPool',
      depositor: 'depositor',
      amount: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <Fund message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
