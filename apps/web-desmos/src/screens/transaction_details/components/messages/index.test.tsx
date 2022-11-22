import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgUnknown } from '@models';
import Messages from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/tag', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tag" {...props} />
));
jest.mock(
  'ui/components/transaction_messages_filter',
  () => (props: JSX.IntrinsicElements['div']) => <div id="TransactionMessagesFilter" {...props} />
);

// jest.mock(
//   'react-virtualized-auto-sizer',
//   () =>
//     ({ children }: AutoSizerProps) =>
//       children({
//         height: 600,
//         width: 600,
//       })
// );

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/ Messages', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Messages
          messages={[
            MsgUnknown.fromJson({
              '@type': '/cosmos.bank.v1beta1.MsgSend',
              amount: [
                {
                  denom: 'udaric',
                  amount: '1100000',
                },
              ],
              to_address: 'desmos1srujv22zfrwyfvu2vyyaqqq3f0z7yjeaggd9n2',
              from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
            }),
          ]}
          viewRaw={false}
          toggleMessageDisplay={jest.fn()}
          onMessageFilterCallback={jest.fn()}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
