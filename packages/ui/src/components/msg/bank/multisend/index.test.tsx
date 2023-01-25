import renderer from 'react-test-renderer';
import Multisend from '@/components/msg/bank/multisend';
import { MsgMultiSend } from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgMultiSend', () => {
  it('matches snapshot', () => {
    const message = MsgMultiSend.fromJson({
      category: 'bank',
      type: 'MsgMultiSend',
      inputs: [
        {
          address: 'address',
          coins: [
            {
              denom: 'udaric',
              amount: '20000000',
            },
          ],
        },
      ],
      outputs: [
        {
          address: 'output1',
          coins: [
            {
              denom: 'udaric',
              amount: '19000000',
            },
          ],
        },
        {
          address: 'output2',
          coins: [
            {
              denom: 'udaric',
              amount: '1000000',
            },
          ],
        },
      ],
    });

    const component = renderer.create(
      <MockTheme>
        <Multisend message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(
      component.root.findByProps({ i18nKey: 'message_contents:txMultisendContentOne' }).props.values
        .amount
    ).toEqual('20 DARIC');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
