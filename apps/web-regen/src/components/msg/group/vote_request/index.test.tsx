import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgVoteRequest from '@/models/msg/group/msg_vote_request';
import VoteRequest from '@/components/msg/group/vote_request';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/VoteRequest', () => {
  it('matches snapshot', () => {
    const message: MsgVoteRequest = {
      category: 'group',
      type: 'MsgVoteRequest',
      voter: 'voter',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <VoteRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgVoteRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
