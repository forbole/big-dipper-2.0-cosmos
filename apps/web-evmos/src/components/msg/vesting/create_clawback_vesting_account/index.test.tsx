import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import MsgCreateClawbackVestingAccount from '@models/evmos/msg/vesting/msg_create_clawback_vesting_account';
import CreateClawbackVestingAccount from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateClawbackVestingAccount({
      category: 'vesting',
      type: 'MsgGrant',
      toAddress: 'toAddress',
      fromAddress: 'fromAddress',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateClawbackVestingAccount message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateClawbackVestingAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
