import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('..', () => ({
  StackBar: (props) => <div id="StackBar" {...props} />,
}));

jest.mock('../../contexts/holders', () => ({
  useHoldersContext: () => ({
    rowsPerPage: 10,
    page: 0,
    items: Array(40).fill({
      address: '6gfi6GSjrhqc5xDLtDkVrTR61Hi7GMNPmJknxvbqzb1x',
      quantity: '430,012,872.844027',
      percentage: 3.1754,
      value: '$429,656,822.19',
    }),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: TokenDetails/Holders/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
