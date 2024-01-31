import renderer from 'react-test-renderer';
import Overview from '@/screens/account_details/components/overview';
import MockTheme from '@/tests/mocks/MockTheme';
import { mockClient } from '@/tests/mocks/mockApollo';
import wait from '@/tests/utils/wait';
import { ApolloProvider } from '@apollo/client';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    query: {
      address: 'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
    },
  }),
}));

jest.mock('@/components/box_details', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="BoxDetails" {...props} />
));
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));


// ==================================
// unit tests
// ==================================
describe('screen: AccountDetails/Overview', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Overview />
          </MockTheme>
        </ApolloProvider>
      );
    });
    await wait(renderer.act);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
