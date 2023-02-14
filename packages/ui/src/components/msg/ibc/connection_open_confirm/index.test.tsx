import renderer from 'react-test-renderer';
import ConnectionOpenConfirm from '@/components/msg/ibc/connection_open_confirm';
import { MsgConnectionOpenConfirm } from '@/models';
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
describe('screen: TransactionDetails/IBCConnectionOpenConfirm', () => {
  it('matches snapshot', () => {
    const message = MsgConnectionOpenConfirm.fromJson({
      category: 'ibc',
      type: 'MsgConnectionOpenConfirm',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      connection_id: '1',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <ConnectionOpenConfirm message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
