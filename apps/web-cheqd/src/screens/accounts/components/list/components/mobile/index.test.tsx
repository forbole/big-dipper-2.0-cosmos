import React from 'react';
import renderer from 'react-test-renderer';
import MockTheme from '@/tests/mocks/MockTheme';
import Mobile from '@/screens/accounts/components/list/components/mobile';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-i18next', () => () => mockI18n);

jest.mock(
  '@/screens/accounts/components/list/components/mobile/components/Row',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Row" {...props} />
);

jest.mock('@/recoil/profiles/hooks', () => ({
  useProfileRecoil: (address: string) => ({
    name: 'name',
    address,
    imageUrl: undefined,
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Accounts/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
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
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
