import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import SingleProposal from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('component: SingleProposal', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleProposal id="1" title="proposal-title" status="passed" />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
