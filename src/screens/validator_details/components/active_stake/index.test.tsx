import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import ActiveStake from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  ResponsiveContainer: (props) => <div id="ResponsiveContainer" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/ActiveStake', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <ActiveStake />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
