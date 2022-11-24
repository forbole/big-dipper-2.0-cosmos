import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import Overview from '@/screens/proposal_details/components/overview';

// ==================================
// mocks
// ==================================
jest.mock('@/components/single_proposal', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleProposal" {...props} />
));
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/markdown', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Markdown" {...props} />
));

jest.mock(
  '@/screens/proposal_details/components/overview/components/params_change',
  () => (props: JSX.IntrinsicElements['div']) => <div id="ParamsChange" {...props} />
);
jest.mock(
  '@/screens/proposal_details/components/overview/components/software_upgrade',
  () => (props: JSX.IntrinsicElements['div']) => <div id="SoftwareUpgrade" {...props} />
);
jest.mock(
  '@/screens/proposal_details/components/overview/components/community_pool_spend',
  () => (props: JSX.IntrinsicElements['div']) => <div id="CommunityPoolSpend" {...props} />
);

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview
          overview={{
            content: '',
            proposer: '',
            title: 'title',
            id: 10,
            description: 'description',
            status: 'status',
            submitTime: 'submitTime',
            proposalType: 'CommunityPoolSpend',
            depositEndTime: 'depositEndTime',
            votingEndTime: null,
            votingStartTime: null,
          }}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
