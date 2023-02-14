import renderer from 'react-test-renderer';
import CreateClient from '@/components/msg/ibc/client_create_client';
import { MsgCreateClient } from '@/models';
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
describe('screen: TransactionDetails/IBCCreateClient', () => {
  it('matches snapshot', () => {
    const message = MsgCreateClient.fromJson({
      category: 'ibc',
      type: 'MsgCreateClient',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      chain_id: 'chain-1',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <CreateClient message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
