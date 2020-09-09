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
          slot={<div id="slot" />}
          hash="hash"
          parentHash="parentHash"
          txs="txs"
          time="time"
          leader={<div id="leader" />}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot without parentHash', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleSlotMobile
          slot={<div id="slot" />}
          hash="hash"
          txs="txs"
          time="time"
          leader={<div id="leader" />}
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
