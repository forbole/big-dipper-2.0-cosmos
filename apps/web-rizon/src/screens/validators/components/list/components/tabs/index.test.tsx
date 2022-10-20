import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TabsHeader from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Search: (props) => <div id="Search" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader
          tab={0}
          handleSearch={jest.fn()}
          handleTabChange={jest.fn()}
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
