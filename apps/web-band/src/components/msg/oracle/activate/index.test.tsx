import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgActivate } from '@models';
import Activate from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Activate', () => {
  it('matches snapshot', () => {
    const message = new MsgActivate({
      type: 'MsgCreateDataSource',
      validator: 'validator',
    });
    const component = renderer.create(
      <MockTheme>
        <Activate message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
