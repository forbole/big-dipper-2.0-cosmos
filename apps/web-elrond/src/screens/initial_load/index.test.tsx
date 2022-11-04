import React from 'react';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import { MockTheme, wait } from '@tests/utils';
import InitialLoad from '.';

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', async () => {
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer
        .create(
          <RecoilRoot>
            <MockTheme>
              <InitialLoad />
            </MockTheme>
          </RecoilRoot>
        )
        .toJSON();
    });
    await wait();

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
