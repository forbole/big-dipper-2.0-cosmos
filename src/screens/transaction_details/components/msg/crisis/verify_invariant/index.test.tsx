import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVerifyInvariant } from '@models';
import VerifyInvariant from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVerifyInvariant', () => {
  it('matches snapshot', () => {
    const message = new MsgVerifyInvariant({
      category: 'crisis',
      type: 'MsgVerifyInvariant',
      sender: 'sender',
      invariantModuleName: 'invariantModuleName',
      invariantRoute: 'invariantRoute',
    });
    const component = renderer.create(
      <MockTheme>
        <VerifyInvariant
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
