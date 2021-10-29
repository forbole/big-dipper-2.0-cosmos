import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateRelationship } from '@models';
import CreateRelationship from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateRelationship', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateRelationship({
      category: 'profiles',
      type: 'MsgCreateRelationship',
      sender: 'sender',
      receiver: 'receiver',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateRelationship
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
