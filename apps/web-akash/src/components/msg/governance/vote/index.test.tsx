import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVote } from '@models';
import Vote from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

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
      <RecoilRoot>
        <MockTheme>
          <Vote
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
