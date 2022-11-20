import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgVerifyInvariant } from '@models';
import VerifyInvariant from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVerifyInvariant', () => {
  it('matches snapshot', () => {
    const message = MsgVerifyInvariant.fromJson({
      category: 'crisis',
      type: 'MsgVerifyInvariant',
      sender: 'sender',
      invariantModuleName: 'invariantModuleName',
      invariantRoute: 'invariantRoute',
    });
    const component = renderer.create(
      <MockTheme>
        <VerifyInvariant message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
