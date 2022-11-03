import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import {
  MockTheme, wait,
} from '@tests/utils';
import Transactions from '.';

// ==================================
// unit tests
// ==================================
jest.mock('@components', () => ({
  Layout: (props: JSX.IntrinsicElements['div']) => <div id="Layout" {...props} />,
}));

jest.mock('./components', () => ({
  List: (props: JSX.IntrinsicElements['div']) => <div id="List" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Transactions', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <MockTheme>
            <Transactions />
          </MockTheme>
        </RecoilRoot>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
