import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/single_proposal', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleProposal" {...props} />
));
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('ui/components/markdown', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Markdown" {...props} />
));

jest.mock('./components', () => ({
  ParamsChange: (props: JSX.IntrinsicElements['div']) => <div id="ParamsChange" {...props} />,
  SoftwareUpgrade: (props: JSX.IntrinsicElements['div']) => <div id="SoftwareUpgrade" {...props} />,
}));

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
