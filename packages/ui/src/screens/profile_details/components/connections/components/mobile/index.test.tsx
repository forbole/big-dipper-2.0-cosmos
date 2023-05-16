import Mobile from '@/screens/profile_details/components/connections/components/mobile';
import MockTheme from '@/tests/mocks/MockTheme';
import { ComponentProps } from 'react';
import renderer from 'react-test-renderer';
import AutoSizer from 'react-virtualized-auto-sizer';

// ==================================
// mocks
// ==================================
jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: ComponentProps<typeof AutoSizer>) =>
      children({
        height: 600,
        width: 600,
      })
);

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails/Connections/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
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
