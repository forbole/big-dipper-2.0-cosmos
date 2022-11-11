import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgLock from '@models/sifchain/msg/ethbridge/msg_lock';
import Lock from '.';

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
describe('screen: TransactionDetails/MsgLock', () => {
  it('matches snapshot', () => {
    const message = new MsgLock({
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      cosmosSender: 'cosmosSender',
    });
    const component = renderer.create(
      <MockTheme>
        <Lock message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgLock'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
