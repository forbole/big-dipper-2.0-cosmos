import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { RecoilRoot } from 'recoil';
import InitialLoad from '.';

// ==================================
// mocks
// ==================================
jest.mock('@material-ui/core/LinearProgress', () => (props) => <div id="LinearProgress" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: InitialLoad', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <InitialLoad />
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