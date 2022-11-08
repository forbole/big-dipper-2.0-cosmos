import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import numeral from 'numeral';
import VotingPower from '.';

// ==================================
// unit tests
// ==================================
describe('screen: Validators/VotingPower', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <VotingPower
          percentage={20}
          percentDisplay={`${numeral(20).format('0.[00]')}%`}
          content=""
          topVotingPower
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with topVotingPower set to false', () => {
    const component = renderer.create(
      <MockTheme>
        <VotingPower
          percentage={0}
          percentDisplay="0%"
          content=""
          topVotingPower={false}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});