import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSignDataRequest } from '@models';
import SignDataRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('./components', () => ({
  Signers: (props) => <div id="Signers" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message = new MsgSignDataRequest({
      category: 'data',
      type: 'MsgAnchorDataRequest',
      signers: [
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      ],
    });

    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SignDataRequest
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgSignDataRequest');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
