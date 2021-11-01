import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgVerifyInvariant } from '@models';
import VerifyInvariant from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgVerifyInvariant', () => {
  it('matches snapshot', () => {
    const message = new MsgVerifyInvariant({
      category: 'crisis',
      type: 'MsgVerifyInvariant',
      sender: 'sender',
      invariantModuleName: 'invariantModuleName',
      invariantRoute: 'invariantRoute',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <VerifyInvariant
            message={message}
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
