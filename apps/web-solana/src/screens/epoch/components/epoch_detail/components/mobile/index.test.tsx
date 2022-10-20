import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@material-ui/core', () => ({
  Typography: (props) => <div id="Typography" {...props} />,
  Divider: (props) => <div id="Divider" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Epoch/EpochDetail/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          epochDetail={[
            {
              name: 'Foundation',
              value: 0,
              detail: 'Percentage of total inflation allocated to the foundation',
            },
            {
              name: 'FoundationTerm',
              value: 0,
              detail: 'Duration of foundation pool inflation in years',
            },
            {
              name: 'Initial',
              value: 0.08,
              detail: 'The initial inflation percentage from time 0',
            },
            {
              name: 'tTaper',
              value: 0.15,
              detail: 'Rate per year at which inflation is lowered. Rate reduction is derived using the target slot time in genesis config',
            },
            {
              name: 'Terminal',
              value: 0.015,
              detail: 'Terminal inflation percentage',
            },
          ]}
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
