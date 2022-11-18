import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateWhitelistValidator from '@models/sifchain/msg/ethbridge/msg_update_whitelist_validator';
import UpdateWhiteListValidator from '.';

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
describe('screen: TransactionDetails/MsgUpdateWhitelistValidator', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
    } as MsgUpdateWhitelistValidator;
    const component = renderer.create(
      <MockTheme>
        <UpdateWhiteListValidator message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateWhitelistValidator'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});