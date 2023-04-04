import { MsgUnknown } from '@/models';
import Messages from '@/screens/transaction_details/components/messages';
import MockTheme from '@/tests/mocks/MockTheme';
import { ComponentProps } from 'react';
import renderer from 'react-test-renderer';
import AutoSizer from 'react-virtualized-auto-sizer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/tag', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Tag" {...props} />
));
jest.mock(
  '@/components/transaction_messages_filter',
  () => (props: JSX.IntrinsicElements['div']) => <div id="TransactionMessagesFilter" {...props} />
);

jest.mock(
  'react-virtualized-auto-sizer',
  () =>
    ({ children }: ComponentProps<typeof AutoSizer>) =>
      children({
        height: 600,
        width: 600,
      })
);

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
