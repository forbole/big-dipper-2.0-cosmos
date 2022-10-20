import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateDistribution } from '@models';
import CreateDistribution from '.';

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
describe('screen: TransactionDetails/CreateDistribution', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateDistribution({
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      distributor: 'distributor',
      distributionType: 'DISTRIBUTION_TYPE_AIRDROP',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateDistribution
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateDistribution');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.distributionType).toEqual('DISTRIBUTION_TYPE_AIRDROP');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
