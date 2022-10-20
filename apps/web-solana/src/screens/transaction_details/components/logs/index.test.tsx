import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Logs from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Logs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <Logs
            logs={[
              'Program 11111111111111111111111111111111 invoke [1]',
              'Program 11111111111111111111111111111111 success',
              'Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr invoke [1]',
              'Program log: Memo (len 39): "2EE2Hhoe8fVAYn7J5qwuayNmrEgmTPskLyszojv"',
              'Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr consumed 15555 of 200000 compute units',
              'Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr success',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]',
              'Program log: Instruction: InitializeMint',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2457 of 200000 compute units',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
              'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [1]',
              'Program log: Transfer 2039280 lamports to the associated token account',
              'Program 11111111111111111111111111111111 invoke [2]',
              'Program 11111111111111111111111111111111 success',
              'Program log: Allocate space for the associated token account',
              'Program 11111111111111111111111111111111 invoke [2]',
              'Program 11111111111111111111111111111111 success',
              'Program log: Assign the associated token account to the SPL Token program',
              'Program 11111111111111111111111111111111 invoke [2]',
              'Program 11111111111111111111111111111111 success',
              'Program log: Initialize the associated token account',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]',
              'Program log: Instruction: InitializeAccount',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3297 of 179576 compute units',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
              'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24370 of 200000 compute units',
              'Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]',
              'Program log: Instruction: MintTo',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2611 of 200000 compute units',
              'Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success',
              'Program CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb invoke [1]',
              'Program log: Instruction: MintNft',
              'Program 11111111111111111111111111111111 invoke [2]',
              'Program 11111111111111111111111111111111 success',
              'Program log: Custom program error: 0x177b',
              'Program CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb consumed 35244 of 200000 compute units',
              'Program CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb failed: custom program error: 0x177b',
            ]}
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
