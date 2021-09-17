import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import MsgCreateIssuer from '.';

// ==================================
// mocks
// ==================================
jest.mock();

const mockIssuer = jest.fn().mockResolvedValue({
  data: {
    authority:'',
    issuer:'',
    denominations:'',
  }
});

// ==================================
// unit tests
// ==================================

describe('model: MsgCreateIssuer', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateIssuer({
      authority: 'authority',
      issuer: 'issuer',
      denominations: 'denominations',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateIssuer
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

//test if data from static json is equal to screenshot
