import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgReportData from '@models/band/msg/oracle/msg_report_data';
import ReportData from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message: MsgReportData = {
      type: 'MsgBlockUser',
      validator: 'validator',
      requestId: 100,
      category: 'oracle',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <ReportData message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
