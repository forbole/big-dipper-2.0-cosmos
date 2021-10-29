import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSend } from '@models';
import Send from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgSend', () => {
  it('matches snapshot', () => {
    const message = new MsgSend({
      category: 'bank',
      type: 'MsgSend',
      fromAddress: 'fromAddress',
      toAddress: 'toAddress',
      amount: [{
        denom: 'udaric',
        amount: '200000000',
      }],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Send
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
