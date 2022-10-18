import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import {
  LoadAndExist,
} from '@components';

// ==================================
// unit tests
// ==================================
describe('components: LoadAndExist', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <LoadAndExist loading exists>
          <div>Test</div>
        </LoadAndExist>
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
