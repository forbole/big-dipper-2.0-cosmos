import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SingleSlotMobile from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('component: SingleSlotMobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleSlotMobile
          slot={<div>slot</div>}
          txs="100,000"
          leader={<div>leader</div>}
          hash="hash"
          time="time"
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
