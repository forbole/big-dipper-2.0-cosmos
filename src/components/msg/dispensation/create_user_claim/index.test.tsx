import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateUserClaim } from '@models';
import CreateUserClaim from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateUserClaim', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateUserClaim({
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      userClaimAddress: 'userClaimAddress',
      userClaimType: 'DISTRIBUTION_TYPE_AIRDROP',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateUserClaim
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateUserClaim');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.userClaimType).toEqual('DISTRIBUTION_TYPE_AIRDROP');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
