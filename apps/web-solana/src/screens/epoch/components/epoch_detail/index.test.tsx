/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import EpochDetail from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
}));

jest.mock('./components', () => ({
  Desktop: (props) => <div id="Desktop" {...props} />,
  Mobile: (props) => <div id="Mobile" {...props} />,
}));

jest.mock('@material-ui/core', () => ({
  Typography: (props) => <div id="Typography" {...props} />,
}));


// ==================================
// unit tests
// ==================================
describe('screen: Epoch/EpochDetail', () => {
  it('matches snapshot', async () => {
    let component;
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <EpochDetail
            title = "inflationGovernor"
            epochDetail = {[
                {
                    name: "Foundation",
                    value: 0,
                    detail: "Percentage of total inflation allocated to the foundation",
                },
                {
                    name: "FoundationTerm",
                    value: 0,
                    detail: "Duration of foundation pool inflation in years",
                },
                {
                    name: "Initial",
                    value: 0.08,
                    detail: "The initial inflation percentage from time 0",
                },
                {
                    name: "tTaper",
                    value: 0.15,
                    detail: "Rate per year at which inflation is lowered. Rate reduction is derived using the target slot time in genesis config",
                },
                {
                    name: "Terminal",
                    value: 0.015,
                    detail: "Terminal inflation percentage",
                },
            ]}
          />
        </MockTheme>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});

