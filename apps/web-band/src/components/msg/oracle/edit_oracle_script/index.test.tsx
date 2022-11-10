import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgEditOracleScript from '@models/band/msg/oracle/msg_edit_oracle_script';
import EditOracleScript from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateDataSource', () => {
  it('matches snapshot', () => {
    const message = new MsgEditOracleScript({
      type: 'MsgEditOracleScript',
      name: 'name',
      sender: 'name',
    });
    const component = renderer.create(
      <MockTheme>
        <EditOracleScript message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
