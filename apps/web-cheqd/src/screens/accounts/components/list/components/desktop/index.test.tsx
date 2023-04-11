import React from 'react';
import renderer from 'react-test-renderer';
import MockTheme from '@/tests/mocks/MockTheme';
import Desktop from '@/screens/accounts/components/list/components/desktop';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-i18next', () => () => mockI18n);

// ==================================
// mocks
// ==================================
jest.mock('@/recoil/profiles/hooks', () => ({
  ...jest.requireActual<object>('@/recoil/profiles/hooks'),
  useProfileRecoil: jest.fn((address) => ({
    address,
    name:
      address === 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'
        ? 'AC Validator 🦦'
        : address,
    imageUrl: '',
  })),
  useProfilesRecoil: jest.fn((addresses) =>
    addresses.map((address: string) => ({
      address,
      name:
        address === 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'
          ? 'AC Validator 🦦'
          : address,
      imageUrl: '',
    }))
  ),
}));

jest.mock('@/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));

jest.mock('@/components/sort_arrows', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SortArrows" {...props} />
));

jest.mock(
  '@/screens/accounts/components/list/components/desktop/components/Header',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Header" {...props} />
);

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
          className="desktop"
        />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
