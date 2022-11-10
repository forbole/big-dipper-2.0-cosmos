import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgBurn from '@models/sifchain/msg/ethbridge/msg_burn';
import Burn from '.';

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
describe('screen: TransactionDetails/MsgBurn', () => {
  it('matches snapshot', () => {
    const message = new MsgBurn({
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
    });
    const component = renderer.create(
      <MockTheme>
        <Burn message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgBurn'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
