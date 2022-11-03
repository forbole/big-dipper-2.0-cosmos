import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgReportData } from '@models';
import ReportData from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgReportData({
      type: 'MsgBlockUser',
      validator: 'validator',
      requestId: 100,
    });
    const component = renderer.create(
      <MockTheme>
        <ReportData
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
