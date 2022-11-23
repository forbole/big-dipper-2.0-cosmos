import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgRetireRequest from '@/models/msg/ecocredit/msg_retire_request';
import RetireRequest from '@/components/msg/ecocredit/retire_request';

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
describe('screen: TransactionDetails/RetireRequest', () => {
  it('matches snapshot', () => {
    const message: MsgRetireRequest = {
      category: 'ecocredit',
      type: 'MsgRetireRequest',
      holder: 'holder',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <RetireRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRetireRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
