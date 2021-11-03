import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnjail } from '@models';
import Unjail from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UnBlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgUnjail({
      category: 'slashing',
      type: 'MsgUnjail',
      validatorAddress: 'validatorAddress',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Unjail
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
