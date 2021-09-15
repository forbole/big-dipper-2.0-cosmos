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
describe('screen: Iscns/List', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <List
            items={[
              {
                iscnId: 'iscnId',
                ipld: 'ipld',
                height: 1,
                owner: {
                  address: 'address',
                  name: 'name',
                },
                iscnData: {
                  name: 'name',
                  publisher: 'publisher',
                  url: 'url',
                },
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
