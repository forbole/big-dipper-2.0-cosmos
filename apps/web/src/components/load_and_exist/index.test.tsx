import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import {
  LoadAndExist,
} from '@components';
import { RecoilRoot } from 'recoil';

// ==================================
// unit tests
// ==================================
describe('components: LoadAndExist', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <LoadAndExist loading exists>
            <div>Test 1</div>
          </LoadAndExist>
          ,
          <LoadAndExist loading={false} exists={false}>
            <div>Test 2</div>
          </LoadAndExist>
          ,
          <LoadAndExist loading={false} exists>
            <div>Test 3</div>
          </LoadAndExist>
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