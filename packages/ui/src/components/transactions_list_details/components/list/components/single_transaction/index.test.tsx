import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import SingleTransaction from '.';

// ==================================
// unit tests
// ==================================
describe('components: SingleTransaction', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleTransaction
          block={<div>block</div>}
          hash={<div>hash</div>}
          time="2021-07-13T08:00:00"
          type={<div>type</div>}
          messageCount="1,000"
          messages={[
            {
              type: <div>type</div>,
              message: <div>message</div>,
            },
          ]}
          result={<div>result</div>}
        />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
