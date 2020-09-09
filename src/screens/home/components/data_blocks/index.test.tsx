import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import DataBlocks from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('./components', () => ({
  SingleBlock: (props) => <div id="SingleBlock" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/DataBlocks', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <DataBlocks />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
