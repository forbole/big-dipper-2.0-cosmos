import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TitleBar from '.';

// ==================================
// mocks
// ==================================
jest.mock('recoil', () => ({
  ...jest.requireActual('recoil') as any,
  useRecoilValue: jest.fn(() => ({
    marketCap: 66851913386,
    price: 218.98,
    maxSupply: {
      value: '11432342352345',
      exponent: 8,
      baseDenom: 'sol',
      displayDenom: 'sol',
    },
    inflation: 0.14,
  })),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/TitleBar', () => {
  it('hook toggles correctly', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <TitleBar title="hello world" />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const pList = component.root.findAllByType('p');
    expect(pList.some((el) => el.children.includes('14%'))).toBe(true);
    expect(pList.some((el) => el.children.includes('0.13'))).toBe(false);
    expect(pList.some((el) => el.children.includes('$66,851,913,386'))).toBe(true);
    expect(pList.some((el) => el.children.includes('common:maxSupply'))).toBe(true);
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
