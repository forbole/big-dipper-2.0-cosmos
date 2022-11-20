import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgEditDataSource from '@models/band/msg/oracle/msg_edit_data_source';
import CreateDataSource from '.';

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
    const message: MsgEditDataSource = {
      type: 'MsgCreateDataSource',
      name: 'name',
      sender: 'name',
      category: 'oracle',
      dataSourceId: 0,
      description: '',
      executable: JSON.parse('{}'),
      fee: [],
      treasury: '',
      owner: '',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateDataSource message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
