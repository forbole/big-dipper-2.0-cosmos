import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Avatar from '.';

jest.mock('jdenticon', () => ({
  update: jest.fn(),
}));
// ==================================
// unit tests
// ==================================
describe('component: Avatar', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Avatar
          address="123"
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with imageUrl', () => {
    const component = renderer.create(
      <MockTheme>
        <Avatar
          address="123"
          imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
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
