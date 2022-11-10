import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import { MsgUnknown } from '@models';
import Unknown from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Unknown', () => {
  it('matches snapshot', () => {
    const message = new MsgUnknown({
      category: 'others',
      type: 'MsgUnknown',
      json: JSON.stringify({
        hello: 'world',
      }),
    });
    const component = renderer.create(
      <MockTheme>
        <Unknown message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
