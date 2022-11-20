import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgStoreRawDataRequest from '@models/regen/msg/data/msg_store_raw_data_request';
import StoreRawDataRequest from '.';

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
describe('screen: TransactionDetails/StoreRawDataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgStoreRawDataRequest = {
      category: 'data',
      type: 'MsgStoreRawDataRequest',
      sender: 'sender',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <StoreRawDataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgStoreRawDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
