import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import {
  AvatarNameListMsg,
} from '@components';

// ==================================
// unit tests
// ==================================
describe('components: AvatarNameListMsg', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarNameListMsg
          avatars={[
            {
              imageUrl: '',
              address: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
              name: 'name',
            },
            {
              imageUrl: '',
              address: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94xx',
              name: 'name-2',
            },
          ]}
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
