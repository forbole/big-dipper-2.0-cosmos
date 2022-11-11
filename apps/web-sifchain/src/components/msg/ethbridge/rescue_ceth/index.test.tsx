import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgRescueCeth from '@models/sifchain/msg/ethbridge/msg_rescue_ceth';
import RescueCeth from '.';

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
describe('screen: TransactionDetails/MsgRescueCeth', () => {
  it('matches snapshot', () => {
    const message = new MsgRescueCeth({
      category: 'dispensation',
      type: 'MsgRescueCeth',
      cosmosSender: 'cosmosSender',
    });
    const component = renderer.create(
      <MockTheme>
        <RescueCeth message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRescueCeth'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
