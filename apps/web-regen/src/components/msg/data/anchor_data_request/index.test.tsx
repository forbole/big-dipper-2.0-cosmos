import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgAnchorDataRequest from '@models/regen/msg/data/msg_anchor_data_request';
import AnchorDataRequest from '.';

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
describe('screen: TransactionDetails/AnchorDataRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgAnchorDataRequest({
      category: 'data',
      type: 'MsgAnchorDataRequest',
      sender: 'sender',
    });

    const component = renderer.create(
      <MockTheme>
        <AnchorDataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAnchorDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
