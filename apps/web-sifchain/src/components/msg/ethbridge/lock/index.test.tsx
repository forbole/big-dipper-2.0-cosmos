import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgLock } from '@models';
import Lock from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />);

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgLock', () => {
  it('matches snapshot', () => {
    const message = new MsgLock({
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      cosmosSender: 'cosmosSender',
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Lock
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgLock');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
