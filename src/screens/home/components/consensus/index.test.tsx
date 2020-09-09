import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Consensus from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('recharts', () => ({
  RadialBarChart: (props) => <div id="RadialBarChart" {...props} />,
  PolarAngleAxis: (props) => <div id="PolarAngleAxis" {...props} />,
  RadialBar: (props) => <div id="RadialBar" {...props} />,
  Tooltip: (props) => <div id="Tooltip" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('screen: Home/Consensus', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Consensus />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
