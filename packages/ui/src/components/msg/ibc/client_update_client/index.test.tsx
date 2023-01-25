import renderer from 'react-test-renderer';
import UpdateClient from '@/components/msg/ibc/client_update_client';
import { MsgUpdateClient } from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IBCUpdateClient', () => {
  it('matches snapshot', () => {
    const message = MsgUpdateClient.fromJson({
      category: 'ibc',
      type: 'MsgUpdateClient',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      chain_id: 'chain-1',
      client_id: '21',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <UpdateClient message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
