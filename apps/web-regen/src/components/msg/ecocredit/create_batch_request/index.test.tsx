import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateBatchRequest } from '@models';
import CreateBatchRequest from '.';

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
describe('screen: TransactionDetails/CreateBatchRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateBatchRequest({
      category: 'ecocredit',
      type: 'MsgCreateBatchRequest',
      issuer: 'issuer',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateBatchRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateBatchRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
