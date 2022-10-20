/* eslint-disable */
import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import AccountDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      address: "G16AuggViNFsds5Xesvi5F1hUPGXr5imfa71xpbLmCyd",
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  NativeAccount: (props) => <div id="NativeAccount" {...props} />,
  NonceAccount: (props) => <div id="NonceAccount" {...props} />,
  StakeAccount: (props) => <div id="StakeAccount" {...props} />,
  TokenAccount: (props) => <div id="TokenAccount" {...props} />,
  VoteAccount: (props) => <div id="VoteAccount" {...props} />,
  TokenDetailsAccount: (props) => <div id="TokenDetailsAccount" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: AccountDetails', () => {
  it('matches snapshot', async () => {
    const mockAxios = new MockAdapter(axios);
    mockAxios.onPost(process.env.NEXT_PUBLIC_GRAPHQL_URL).reply(200, {
      "data": {
        "actionsAccountInfo": {
          "parsed": {
            "type": "token_account",
            "info": {
              "amount": 0,
              "owner": "AAnwdejLwwj9jtoUbRXadji8cb8X1pTghShHvMcLxkBB",
              "mint": "FM5Wwt8ZTdeJXwnKkgGTjT8hsTqRp2MDAXmo4WsRm8SK"
            }
          },
          "programOwner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      }
    });

    let component;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <AccountDetails />
        </MockTheme>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findByProps({ id: 'TokenDetailsAccount' })).not.toBeNull();

  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
