import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Tag: (props) => <div id="Tag" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

const mockUseContext = jest.fn(() => ({
  items: [{
    slot: '812,768,640',
    signature: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
    type: [
      'System Program',
      'Transfer',
    ],
    amount: 123,
    success: true,
    time: 1615187146246,
  }],
  hasNextPage: false,
  isNextPageLoading: true,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop useContext={mockUseContext} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
