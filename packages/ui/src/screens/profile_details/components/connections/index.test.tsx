import renderer from 'react-test-renderer';
import Connections from '@/screens/profile_details/components/connections';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/pagination', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Pagination" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails/Connections', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Connections
          data={[
            {
              network: 'native',
              identifier: 'desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv',
              creationTime: '2021-08-31T17:02:28.575104',
            },
            {
              network: 'emoney',
              identifier: 'emoney1wke3ev9ja6rxsngld75r3vppcpet94xxnh63ry',
              creationTime: '2021-08-31T17:02:28.575104',
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
