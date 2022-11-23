import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgActivate from '@/models/msg/oracle/msg_activate';
import Activate from '@/components/msg/oracle/activate';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Activate', () => {
  it('matches snapshot', () => {
    const message = MsgActivate.fromJson({
      type: 'MsgCreateDataSource',
      validator: 'validator',
    });
    const component = renderer.create(
      <MockTheme>
        <Activate message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
