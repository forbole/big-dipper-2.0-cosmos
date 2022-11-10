import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgVote } from '@models';
import Vote from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('next/link', () => ({
  Link: (props: JSX.IntrinsicElements['div']) => <div id="Link" {...props} />,
}));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVote', () => {
  it('matches snapshot', () => {
    const message = MsgVote.fromJson({
      category: 'governance',
      type: 'MsgVote',
      proposalId: 10,
      voter: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      option: 'VOTE_OPTION_NO',
      json: {
        content: {
          '@type': '/cosmos.gov.v1beta1.TextProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <Vote message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:txVoteContent'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
