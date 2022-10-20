import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

jest.mock('./components', () => ({
  Mobile: (props) => <div id="Mobile" {...props} />,
  Desktop: (props) => <div id="Desktop" {...props} />,
  Total: (props) => <div id="Total" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Proposals/List', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <List
            items={[
              {
                title: 'Staking Param Change Part Two',
                id: 7,
                status: 'PROPOSAL_STATUS_REJECTED',
                description: 'Update max validators',
              },
            ]}
            rawDataTotal={1}
            isItemLoaded={() => true}
            itemCount={1}
            loadMoreItems={() => null}
          />
        </MockTheme>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
