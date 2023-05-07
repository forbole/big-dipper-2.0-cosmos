import renderer from 'react-test-renderer';
import ActionBar from '@/components/nav/components/desktop/components/action_bar';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
let isNetwork = false;
const toggleNetwork = jest.fn();
jest.mock(
  '@/components/nav/components/desktop/components/action_bar/components/network',
  () => (props: JSX.IntrinsicElements['div']) => <div id="network" {...props} />
);
jest.mock(
  '@/components/nav/components/desktop/components/action_bar/components/network_list',
  () => (props: JSX.IntrinsicElements['div']) => <div id="NetworkList" {...props} />
);
jest.mock(
  '@/components/nav/components/desktop/components/action_bar/components/settings_list',
  () => (props: JSX.IntrinsicElements['div']) => <div id="SettingsList" {...props} />
);
jest.mock(
  '@/components/nav/components/connect_wallet',
  () => (props: JSX.IntrinsicElements['div']) => <div id="connect_wallet" {...props} />
);
jest.mock(
  '@/components/nav/components/wallet_details',
  () => (props: JSX.IntrinsicElements['div']) => <div id="wallet_details" {...props} />
);

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    locales: ['en', 'zh'],
    pathname: '/app/home',
    query: {
      key: 'val',
    },
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/ActionBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <ActionBar isNetwork={isNetwork} toggleNetwork={toggleNetwork} />
      </MockTheme>
    );
  });

  it('it renders', () => {
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays network', () => {
    isNetwork = true;
    component.update(
      <MockTheme>
        <ActionBar isNetwork={isNetwork} toggleNetwork={toggleNetwork} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  isNetwork = false;
  jest.clearAllMocks();
});
