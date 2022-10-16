import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnknown } from '@models';
import Unknown from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Unknown', () => {
  it('matches snapshot', () => {
    const message = new MsgUnknown({
      category: 'others',
      type: 'MsgUnknown',
      json: JSON.stringify({
        hello: 'world',
      }),
    });
    const component = renderer.create(
      <MockTheme>
        <Unknown
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
