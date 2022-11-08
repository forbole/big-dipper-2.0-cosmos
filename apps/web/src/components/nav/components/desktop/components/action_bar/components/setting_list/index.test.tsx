import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
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
jest.mock('@material-ui/core/Select', () => (props) => <div id="select" {...props} />);
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
        <RecoilRoot>
          <MockTheme>
            <Settings />
          </MockTheme>
        </RecoilRoot>,
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