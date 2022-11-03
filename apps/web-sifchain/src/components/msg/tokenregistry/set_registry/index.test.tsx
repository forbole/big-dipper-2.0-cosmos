import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSetRegistry } from '@models';
import SetRegistry from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgBurn', () => {
  it('matches snapshot', () => {
    const message = new MsgSetRegistry({
      category: 'dispensation',
      type: 'MsgRegister',
      from: 'from',
      registry: [
        { denom: 'daric' },
        { denom: 'bar' },
        { denom: 'etg' },
      ],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SetRegistry
            message={message}
          />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual('message_contents:MsgSetRegistry');
    expect(component.root.findByProps({ id: 'Trans' }).props.values.denoms).toEqual('DARIC, BAR transactions:and ETG');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
