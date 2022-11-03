import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Connections from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Box: (props: JSX.IntrinsicElements['div']) => <div id="Box" {...props} />,
  Pagination: (props: JSX.IntrinsicElements['div']) => <div id="Pagination" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: ProfileDetails/Connections', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Connections
          data={[
            {
              network: 'native',
              identifier: 'desmos1rzhewpmmdl72lhnxj6zmxr4v94f522s4ff2psv',
              creationTime: '2021-08-31T17:02:28.575104',
            },
            {
              network: 'emoney',
              identifier: 'emoney1wke3ev9ja6rxsngld75r3vppcpet94xxnh63ry',
              creationTime: '2021-08-31T17:02:28.575104',
            }]}
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
