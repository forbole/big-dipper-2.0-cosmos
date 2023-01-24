import renderer from 'react-test-renderer';
import type { AutoSizerProps } from 'react-virtualized-auto-sizer';
import Desktop from '@/screens/profile_details/components/connections/components/desktop';
import { MockTheme } from '@/tests/utils';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation() {
    return mockI18n;
  },
}));

jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: AutoSizerProps) =>
      children({
        height: 600,
        width: 600,
      })
);

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails/Connections/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
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
