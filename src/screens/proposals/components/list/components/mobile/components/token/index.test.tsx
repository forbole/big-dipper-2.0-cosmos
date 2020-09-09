import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Token from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('screen: Tokens/Token', () => {
  it('matches snapshot', () => {
    const fakeData = {
      token: (
        <div>token</div>
      ),
      price: 'price',
      change: (
        <div>change</div>
      ),
      volume: 'volume',
      marketCap: 'marketCap',
      holders: 'holders',
    };

    const component = renderer.create(
      <MockTheme>
        <Token {...fakeData} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
