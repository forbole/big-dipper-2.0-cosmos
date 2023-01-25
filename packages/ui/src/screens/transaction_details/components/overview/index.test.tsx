import renderer from 'react-test-renderer';
import Overview from '@/screens/transaction_details/components/overview';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box_details', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="BoxDetails" {...props} />
));
jest.mock('@/components/result', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Result" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview
          data={{
            hash: '',
            height: 0,
            timestamp: '',
            fee: {
              value: '5000',
              baseDenom: 'udaric',
              displayDenom: 'daric',
              exponent: 6,
            },
            gasUsed: 0,
            gasWanted: 0,
            success: false,
            memo: '',
            error: '',
          }}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
