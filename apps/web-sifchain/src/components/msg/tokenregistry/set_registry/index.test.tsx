import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgSetRegistry from '@models/sifchain/msg/tokenregistry/msg_set_registry';
import SetRegistry from '.';

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
    const message = new MsgSetRegistry({
      category: 'dispensation',
      type: 'MsgRegister',
      from: 'from',
      registry: [{ denom: 'daric' }, { denom: 'bar' }, { denom: 'etg' }],
    });
    const component = renderer.create(
      <MockTheme>
        <SetRegistry message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgSetRegistry'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.denoms).toEqual(
      'DARIC, BAR and ETG'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
