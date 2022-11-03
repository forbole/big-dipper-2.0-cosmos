import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props: JSX.IntrinsicElements['div']) => <div id="BoxDetails" {...props} />,
  Result: (props: JSX.IntrinsicElements['div']) => <div id="Result" {...props} />,
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
            hash: '',
            height: 0,
            timestamp: '',
            fee: {
              value: '5000',
              baseDenom: 'udaric',
              displayDenom: 'daric',
              exponent: 6,
            },
            gasUsed: 0,
            gasWanted: 0,
            success: false,
            memo: '',
            error: '',
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
