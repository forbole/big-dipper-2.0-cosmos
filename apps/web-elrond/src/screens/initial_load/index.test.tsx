import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import {
  MockTheme, wait,
} from '@tests/utils';
import InitialLoad from '.';

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <MockTheme>
            <InitialLoad />
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
