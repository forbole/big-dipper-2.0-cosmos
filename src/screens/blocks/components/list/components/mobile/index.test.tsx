import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  SingleBlockMobile: (props) => <div id="SingleBlockMobile" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

jest.mock('@src/screens/blocks/components/list/contexts/blocks', () => ({
  useBlocksContext: () => ({
    items: [{
      height: '812,768,640',
      proposer: {
        image: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
        moniker: 'Forbole',
        identity: 'FKsC411dik9ktS6xPADxs4Fk2SCENvAiuccQHLAPndvk',
      },
      hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
      tx: 2,
      time: 1615187146246,
    }],
    itemsCount: 2,
    loadMoreItems: jest.fn(),
    isItemLoaded: jest.fn(),
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
