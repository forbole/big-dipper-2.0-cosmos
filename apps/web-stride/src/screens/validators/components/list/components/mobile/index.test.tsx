import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import TabsHeader from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('./component/single_validator', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleValidator" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader
          items={[
            {
              validator: {
                name: '',
                address: '',
                imageUrl: '',
              },
              votingPower: 0,
              votingPowerPercent: 0,
              commission: 0,
              condition: 0,
              jailed: true,
              status: 3,
              tombstoned: false,
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
