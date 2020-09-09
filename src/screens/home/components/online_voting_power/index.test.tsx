import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import OnlineVotingPower from '.';

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
jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/OnlineVotingPower', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <OnlineVotingPower />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
