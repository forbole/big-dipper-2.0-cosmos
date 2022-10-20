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
          {...{
            tab: 0,
            handleTabChange: jest.fn(),
            data: {
              yes: 10,
              no: 4,
              abstain: 0,
              veto: 10,
              notVoted: 0,
            },
          }}
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
