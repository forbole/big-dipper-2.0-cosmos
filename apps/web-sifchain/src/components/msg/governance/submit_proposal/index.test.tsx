import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSubmitProposal } from '@models';
import SubmitProposal from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SubmitProposal', () => {
  it('matches snapshot', () => {
    const message = new MsgSubmitProposal({
      category: 'governance',
      type: 'MsgSubmitProposal',
      content: 'content',
      proposer: 'proposer',
      initialDeposit: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitProposal message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
