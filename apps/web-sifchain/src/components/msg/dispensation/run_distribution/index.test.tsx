import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgRunDistribution from '@models/sifchain/msg/dispensation/msg_run_distribution';
import RunDistribution from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/RunDistribution', () => {
  it('matches snapshot', () => {
    const message: MsgRunDistribution = {
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      authorizedRunner: 'userClaimAddress',
      distributionType: 'DISTRIBUTION_TYPE_AIRDROP',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RunDistribution message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRunDistribution'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.distributionType).toEqual(
      'DISTRIBUTION_TYPE_AIRDROP'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
