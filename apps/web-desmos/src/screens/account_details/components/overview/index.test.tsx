import renderer from 'react-test-renderer';
import Overview from '@/screens/account_details/components/overview';
import MockTheme from '@/tests/mocks/MockTheme';

let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
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
  it('matches snapshot', () => {
    component = renderer.create(
      <MockTheme>
        <Overview
          withdrawalAddress="desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz"
          address="desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz"
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
