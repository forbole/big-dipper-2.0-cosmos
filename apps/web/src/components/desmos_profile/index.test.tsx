import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import DesmosProfile from '@components/desmos_profile';

// ==================================
// mocks
// ==================================
jest.mock('./components/connections/components', () => ({
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,}));

// ==================================
// unit tests
// ==================================
describe('component: DesmosProfile', () => {
  it('matches snapshot', () => {
    const connection: ProfileConnectionType[] = [
      {
        network: '',
        identifier: '',
        creationTime: '',
      },
    ];
    const component = renderer.create(
      <MockTheme>
        <DesmosProfile
          dtag="test"
          nickname="test_nickname"
          imageUrl="testurl.com"
          bio="test bio"
          connections={connection}
          coverUrl="testcoverurl.com"
        />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
