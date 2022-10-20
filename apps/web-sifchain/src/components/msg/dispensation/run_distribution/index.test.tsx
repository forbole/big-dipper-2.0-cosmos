import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgRunDistribution } from '@models';
import RunDistribution from '.';

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
describe('screen: TransactionDetails/RunDistribution', () => {
  it('matches snapshot', () => {
    const message = new MsgRunDistribution({
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      authorizedRunner: 'userClaimAddress',
      distributionType: 'DISTRIBUTION_TYPE_AIRDROP',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <RunDistribution
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgRunDistribution');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.distributionType).toEqual('DISTRIBUTION_TYPE_AIRDROP');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
