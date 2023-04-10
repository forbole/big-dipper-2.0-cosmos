import React from 'react';
import renderer from 'react-test-renderer';
import MockTheme from '@/tests/mocks/MockTheme';
import Desktop from '@/screens/accounts/components/list/components/desktop';

// ==================================
// mocks
// ==================================
jest.mock('@/screens/accounts/components/list/components/desktop/components/Header', () => ({
  Header: (props: JSX.IntrinsicElements['div']) => <div id="Header" {...props} />,
}));

jest.mock('@/screens/accounts/components/list/components/desktop/components/Row', () => ({
  Row: (props: JSX.IntrinsicElements['div']) => <div id="Row" {...props} />,
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
