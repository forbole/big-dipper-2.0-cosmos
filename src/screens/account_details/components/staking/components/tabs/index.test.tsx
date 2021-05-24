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
          unbondings: Array(4).fill(null),
        },
      },
    });
  },
}));

jest.mock('../../utils', () => ({
  getTabs: jest.fn(() => ([
    {
      id: 0,
      key: 'delegations',
      component: jest.fn(() => <div id="delegations" />),
    },
    {
      id: 1,
      key: 'redelegations',
      component: jest.fn(() => <div id="delegations" />),
    },
    {
      id: 2,
      key: 'unbondings',
      component: jest.fn(() => <div id="delegations" />),
    },
  ])),
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
