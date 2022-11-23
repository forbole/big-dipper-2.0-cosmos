import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgUpdateIscnRecord from '@/models/msg/iscn/msg_update_iscn_record';
import UpdateIscnRecord from '@/components/msg/iscn/update_iscn_record';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateIscnRecord', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateIscnRecord = {
      category: 'iscn',
      type: 'MsgUpdateIscnRecord',
      from: 'from',
      iscnId: '400',
      record: {
        recordNotes: 'recordNotes',
        contentFingerprints: ['contentFingerprints'],
        stakeholders: [],
        contentMetadata: JSON.parse('{}'),
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UpdateIscnRecord message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
