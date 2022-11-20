import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/box_details', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="BoxDetails" {...props} />
));
jest.mock('@components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="BoxDetailAvatarName" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview height={300} hash="hash" proposer="proposer" txs={0} timestamp="" />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
