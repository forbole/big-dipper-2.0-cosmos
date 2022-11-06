import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVote } from '@models';
import Vote from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVote', () => {
  it('matches snapshot', () => {
    const message = new MsgVote({
      category: 'governance',
      type: 'MsgVote',
      proposalId: 10,
      voter: 'voter',
      option: 'VOTE_OPTION_NO',
    });
    const component = renderer.create(
      <MockTheme>
        <Vote message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
