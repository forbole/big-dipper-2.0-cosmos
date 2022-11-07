import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateProposalRequest } from '@models';
import CreateProposalRequest from '.';

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
describe('screen: TransactionDetails/CreateProposalRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateProposalRequest({
      category: 'group',
      type: 'MsgCreateProposalRequest',
      address: 'address',
    });

    const component = renderer.create(
      <MockTheme>
        <CreateProposalRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateProposalRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});