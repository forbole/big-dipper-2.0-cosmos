import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Footer from '.';

// ==================================
// unit tests
// ==================================
describe('component: layout/footer', () => {
  it('matches snapshot', () => {
    const mockDate = new Date(2017, 11, 10);
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as any);

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Footer />
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
