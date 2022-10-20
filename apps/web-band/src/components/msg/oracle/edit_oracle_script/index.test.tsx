import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgEditOracleScript } from '@models';
import EditOracleScript from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

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
        <EditOracleScript
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
