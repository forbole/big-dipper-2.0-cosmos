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

jest.mock('../../contexts/validators', () => ({
  useValidatorsContext: () => ({
    sortDirection: 'asc',
    sortKey: '',
    handleSort: jest.fn(),
    uiData: [{
      idx: 'idx',
      validator: <div>validator</div>,
      votingPower: <div>votingpower</div>,
      self: 'self',
      commission: <div>commission</div>,
    }],
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
