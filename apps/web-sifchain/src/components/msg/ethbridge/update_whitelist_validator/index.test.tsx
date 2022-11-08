import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateWhitelistValidator } from '@models';
import UpdateWhiteListValidator from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgUpdateWhitelistValidator', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateWhitelistValidator({
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
    });
    const component = renderer.create(
      <MockTheme>
        <UpdateWhiteListValidator message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateWhitelistValidator'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
