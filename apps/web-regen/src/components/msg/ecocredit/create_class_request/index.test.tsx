import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCreateClassRequest } from '@models';
import CreateClassRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  ...jest.requireMock('@components'),
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateClassRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateClassRequest({
      category: 'ecocredit',
      type: 'MsgCreateClassRequest',
      designer: 'sender',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <CreateClassRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgCreateClassRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
