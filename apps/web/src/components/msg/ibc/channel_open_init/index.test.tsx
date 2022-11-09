import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgChannelOpenInit } from '@models';
import ChannelOpenInit from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCChannelOpenInit', () => {
  it('matches snapshot', () => {
    const message = MsgChannelOpenInit.fromJson({
      category: 'ibc',
      type: 'MsgChannelOpenInit',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      channelId: '1',
      portId: '21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ChannelOpenInit message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
