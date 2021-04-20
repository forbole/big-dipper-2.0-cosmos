import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TabsHeader from '.';

jest.mock('../../../../contexts/account', () => ({
  useAccountContext: () => {
    return ({
      uiData: {
        staking: {
          delegations: Array(4).fill(null),
          redelegations: Array(14).fill(null),
          unbonding: Array(4).fill(null),
        },
      },
    });
  },
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader tab={0} handleTabChange={jest.fn()} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
