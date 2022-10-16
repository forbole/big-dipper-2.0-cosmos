import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  SingleProposal: (props) => <div id="SingleProposal" {...props} />,
  Name: (props) => <div id="Name" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  Markdown: (props) => <div id="Markdown" {...props} />,
}));

jest.mock('./components', () => ({
  ParamsChange: (props) => <div id="ParamsChange" {...props} />,
  SoftwareUpgrade: (props) => <div id="SoftwareUpgrade" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
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
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
