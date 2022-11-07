import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgExecRequest } from '@models';
import ExecRequest from '.';

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
describe('screen: TransactionDetails/ExecRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgExecRequest({
      category: 'group',
      type: 'MsgExecRequest',
      signer: 'signer',
    });

    const component = renderer.create(
      <MockTheme>
        <ExecRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgExecRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});