import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgChangeIscnRecordOwnership } from '@models';
import IscnChangeOwnership from '.';

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
describe('screen: TransactionDetails/IscnChangeOwnership', () => {
  it('matches snapshot', () => {
    const message = new MsgChangeIscnRecordOwnership({
      category: 'iscn',
      type: 'MsgChangeIscnRecordOwnership',
      from: 'from',
      iscnId: '300',
      newOwner: 'newOwner',
    });
    const component = renderer.create(
      <MockTheme>
        <IscnChangeOwnership
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
