import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateProposalRequest } from '@models';
import CreateProposalRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

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
      <RecoilRoot>
        <MockTheme>
          <CreateProposalRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateProposalRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
