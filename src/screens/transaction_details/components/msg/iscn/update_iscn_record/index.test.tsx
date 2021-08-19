import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateIscnRecord } from '@models';
import UpdateIscnRecord from '.';

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
describe('screen: TransactionDetails/UpdateIscnRecord', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateIscnRecord({
      category: 'iscn',
      type: 'MsgUpdateIscnRecord',
      from: 'from',
      iscnId: '400',
      record: {
        recordNotes: 'recordNotes',
        contentFingerprints: ['contentFingerprints'],
        stakeholders: [],
        contentMetadata: '{}',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <UpdateIscnRecord
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
