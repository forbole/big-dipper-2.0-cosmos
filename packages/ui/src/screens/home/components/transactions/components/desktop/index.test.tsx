import renderer from 'react-test-renderer';
import Desktop from '@/screens/home/components/transactions/components/desktop';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/result', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Result" {...props} />
));
jest.mock('@/components/tag', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tag" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Transactions/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              height: 2000,
              timestamp: '2021-02-18T09:02:28.668623',
              type: ['Delegate'],
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              messages: 12,
              success: true,
            },
          ]}
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
