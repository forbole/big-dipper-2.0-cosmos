import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));
// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          items={[
            {
              slot: 812768640,
              leader: {
                address: 'AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE',
                name: 'tundrman',
                imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/9e5781946a0748087fe366f6f4189805_360_36',
              },
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              txs: 2,
              timestamp: '2021-09-13T20:06:17.363145',
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
