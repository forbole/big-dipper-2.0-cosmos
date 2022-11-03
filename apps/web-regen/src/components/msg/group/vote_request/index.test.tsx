import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVoteRequest } from '@models';
import VoteRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/VoteRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgVoteRequest({
      category: 'group',
      type: 'MsgVoteRequest',
      voter: 'voter',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <VoteRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgVoteRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
