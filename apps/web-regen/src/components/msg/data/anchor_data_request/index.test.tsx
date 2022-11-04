import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgAnchorDataRequest } from '@models';
import AnchorDataRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AnchorDataRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgAnchorDataRequest({
      category: 'data',
      type: 'MsgAnchorDataRequest',
      sender: 'sender',
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <AnchorDataRequest message={message} />
        </MockTheme>
      </RecoilRoot>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAnchorDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
