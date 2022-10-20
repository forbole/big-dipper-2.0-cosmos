import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@material-ui/core', () => ({
  Table: (props) => <div id="Table" {...props} />,
  TableHead: (props) => <div id="TableHead" {...props} />,
  TableRow: (props) => <div id="TableRow" {...props} />,
  TableCell: (props) => <div id="TableCell" {...props} />,
  TableBody: (props) => <div id="TableBody" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Epoch/EpochDetail/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
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
