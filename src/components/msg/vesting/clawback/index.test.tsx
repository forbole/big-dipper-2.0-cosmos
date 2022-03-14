import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgClawback } from '@models';
import Clawback from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Clawback', () => {
  it('matches snapshot', () => {
    const message = new MsgClawback({
      category: 'vesting',
      type: 'MsgClawback',
      accountAddress: 'accountAddress',
      destAddress: 'destAddress',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Clawback
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgClawback');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
