import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCreateIscnRecord from '@models/likecoin/msg/iscn/msg_create_iscn_record';
import CreateIscnRecord from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateIscnRecord', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateIscnRecord({
      category: 'iscn',
      type: 'MsgCreateIscnRecord',
      from: 'from',
      record: {
        recordNotes: 'recordNotes',
        contentFingerprints: ['contentFingerprints'],
        stakeholders: [],
        contentMetadata: '{}',
      },
    });
    const component = renderer.create(
      <MockTheme>
        <CreateIscnRecord message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
