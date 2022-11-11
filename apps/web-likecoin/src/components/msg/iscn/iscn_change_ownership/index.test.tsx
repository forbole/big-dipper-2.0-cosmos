import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgChangeIscnRecordOwnership from '@models/likecoin/msg/iscn/msg_change_iscn_record_ownership';
import IscnChangeOwnership from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

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
        <IscnChangeOwnership message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
