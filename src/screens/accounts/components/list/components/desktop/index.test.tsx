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

jest.mock('@src/recoil/profiles/hooks', () => ({
  useProfileRecoil: (address: string) => ({
    name: 'name',
    address,
    imageUrl: undefined,
  }),
}));

jest.mock('@components', () => ({
  AvatarName: (props) => <div id="AvatarName" {...props} />,
  SortArrows: (props) => <div id="SortArrows" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Accounts/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              rank: 1,
              address: 'cheqvalcon10000000000000000050',
              balance: 5100000000,
              percentage: 51,
            },
            {
              rank: 2,
              address: 'cheqvalcon10000000000000000049',
              balance: 4900000000,
              percentage: 49,
            },
          ]}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
