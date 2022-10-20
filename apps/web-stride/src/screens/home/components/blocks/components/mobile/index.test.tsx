import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  SingleBlockMobile: (props) => <div id="SingleBlockMobile" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              height: 4000,
              txs: 12,
              timestamp: '2021-02-18T09:02:28.668623',
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              proposer: {
                address: 'desmosvalcons1why72hjk945yhckcy5hzk2z2w9d5h65t9am0kd',
                imageUrl: '',
                name: 'name',
              },
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
