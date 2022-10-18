import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// unit tests
// ==================================
describe('screen: DesmosProfile/Mobile', () => {
  const connection: ProfileConnectionType[] = [
    {
      network: '',
      identifier: '',
      creationTime: '',
    },
  ];
  beforeEach(() => {
    component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Mobile items={connection} />
        </MockTheme>
      </RecoilRoot>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
