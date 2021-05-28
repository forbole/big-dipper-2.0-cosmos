import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TabsHeader from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('./component', () => ({
  SingleValidator: (props) => <div id="SingleValidator" {...props} />,
}));

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
              selfPercent: 0,
              condition: 0,
              jailed: true,
              delegators: 4,
              status: 3,
            },
          ]}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
