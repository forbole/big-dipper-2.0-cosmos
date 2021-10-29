import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgMultiSend } from '@models';
import Multisend from '.';

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgSend', () => {
  it('matches snapshot', () => {
    const message = new MsgMultiSend({
      category: 'bank',
      type: 'MsgMultiSend',
      inputs: [
        {
          address: 'address',
          coins: [
            {
              denom: 'udaric',
              amount: '20000000',
            },
          ],
        },
      ],
      outputs: [
        {
          address: 'output1',
          coins: [
            {
              denom: 'udaric',
              amount: '19000000',
            },
          ],
        },
        {
          address: 'output2',
          coins: [
            {
              denom: 'udaric',
              amount: '1000000',
            },
          ],
        },
      ],
    });
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Multisend
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
