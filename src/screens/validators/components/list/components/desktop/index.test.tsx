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
  Condition: (props) => <div id="Condition" {...props} />,
}));

jest.mock('@components', () => ({
  AvatarName: (props) => <div id="AvatarName" {...props} />,
  SortArrows: (props) => <div id="SortArrows" {...props} />,
}));

jest.mock('../../contexts/validators', () => ({
  useValidatorsContext: () => ({
    items: [],
    sortDirection: 'asc',
    sortKey: '',
    handleSort: jest.fn(),
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
