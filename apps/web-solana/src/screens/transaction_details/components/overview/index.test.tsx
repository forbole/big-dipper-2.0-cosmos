import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props) => <div id="BoxDetails" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Overview
            data={
          {
            slot: 2343354,
            success: true,
            fee: {
              displayDenom: 'sol',
              baseDenom: 'sol',
              exponent: 6,
              value: '0.0004',
            },
            signature: '2mGBpvVcxhLXpnTEeDj4aV1SvVCnXcPKroj3idjnri7TwcR4W2UVUkjEUAHk5fL4Wh3EXiwXLw3cDBe6Rbn8sjUU',
            timestamp: '2021-09-13T20:06:17.363145',
          }
        }
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
