import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgClawback from '@models/evmos/msg/vesting/msg_clawback';
import Clawback from '.';

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
describe('screen: TransactionDetails/Clawback', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'vesting',
      type: 'MsgClawback',
      accountAddress: 'accountAddress',
      destAddress: 'destAddress',
    } as MsgClawback;
    const component = renderer.create(
      <MockTheme>
        <Clawback message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgClawback'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
