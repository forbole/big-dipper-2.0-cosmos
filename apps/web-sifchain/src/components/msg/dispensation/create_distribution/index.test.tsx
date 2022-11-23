import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgCreateDistribution from '@/models/msg/dispensation/msg_create_distribution';
import CreateDistribution from '@/components/msg/dispensation/create_distribution';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateDistribution', () => {
  it('matches snapshot', () => {
    const message: MsgCreateDistribution = {
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      distributor: 'distributor',
      distributionType: 'DISTRIBUTION_TYPE_AIRDROP',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateDistribution message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateDistribution'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.distributionType).toEqual(
      'DISTRIBUTION_TYPE_AIRDROP'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
