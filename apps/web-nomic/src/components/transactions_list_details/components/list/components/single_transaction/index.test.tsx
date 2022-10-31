import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
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
