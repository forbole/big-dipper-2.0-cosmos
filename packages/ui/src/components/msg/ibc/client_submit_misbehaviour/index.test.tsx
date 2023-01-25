import renderer from 'react-test-renderer';
import SubmitMisbehaviour from '@/components/msg/ibc/client_submit_misbehaviour';
import { MsgSubmitMisbehaviour } from '@/models';
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
describe('screen: TransactionDetails/IBCSubmitMisbehaviour', () => {
  it('matches snapshot', () => {
    const message = MsgSubmitMisbehaviour.fromJson({
      category: 'ibc',
      type: 'MsgSubmitMisbehaviour',
      signer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      client_id: '1',
      json: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitMisbehaviour message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
