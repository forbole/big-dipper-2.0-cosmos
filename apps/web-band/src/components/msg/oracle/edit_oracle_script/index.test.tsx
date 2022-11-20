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
    const message: MsgEditOracleScript = {
      type: 'MsgEditOracleScript',
      name: 'name',
      sender: 'name',
      category: 'oracle',
      oracleScriptId: 0,
      description: '',
      schema: '',
      code: JSON.parse('{}'),
      sourceCodeUrl: '',
      owner: '',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditOracleScript message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
