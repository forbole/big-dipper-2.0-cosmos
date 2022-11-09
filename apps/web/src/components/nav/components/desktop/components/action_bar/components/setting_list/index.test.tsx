import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Settings from '.';

// ==================================
// global setup
// ==================================
let component: renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('@material-ui/core/Select', () => (props: JSX.IntrinsicElements['div']) => <div id="select" {...props} />);
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('next/router', () => ({
  useRouter: () => ({
    locales: ['en', 'zh'],
    pathname: '/app/home',
    query: {
      key: 'val',
    },
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Nav/SettingList', () => {
  beforeEach(async () => {
    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <Settings />
        </MockTheme>
      );
    });
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  mockI18n.lang = 'en';
  jest.clearAllMocks();
});
