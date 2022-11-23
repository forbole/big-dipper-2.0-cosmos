import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgDeregister from '@/models/msg/tokenregistry/msg_deregister';
import Deregister from '@/components/msg/tokenregistry/deregister';

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
describe('screen: TransactionDetails/MsgBurn', () => {
  it('matches snapshot', () => {
    const message: MsgDeregister = {
      category: 'dispensation',
      type: 'MsgRegister',
      from: 'from',
      denom: 'daric',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Deregister message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgDeregister'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.denom).toEqual('DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
