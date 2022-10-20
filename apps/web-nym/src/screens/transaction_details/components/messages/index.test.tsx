import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnknown } from '@models';
import Messages from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  Tag: (props) => <div id="Tag" {...props} />,
  TransactionMessagesFilter: (props) => <div id="TransactionMessagesFilter" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/ Messages', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Messages
            messages={[MsgUnknown.fromJson({
              '@type': '/cosmos.bank.v1beta1.MsgSend',
              amount: [
                {
                  denom: 'udaric',
                  amount: '1100000',
                },
              ],
              to_address: 'desmos1srujv22zfrwyfvu2vyyaqqq3f0z7yjeaggd9n2',
              from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
            })]}
            viewRaw={false}
            toggleMessageDisplay={jest.fn()}
            onMessageFilterCallback={jest.fn()}
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
