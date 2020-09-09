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
jest.mock('..', () => ({
  SkipRate: (props) => <div id="SkipRate" {...props} />,
}));

jest.mock('./component', () => ({
  SingleValidator: (props) => <div id="SingleValidator" {...props} />,
}));

jest.mock('@components', () => ({
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('../../contexts/validators', () => ({
  useValidatorsContext: () => ({
    items: [],
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
