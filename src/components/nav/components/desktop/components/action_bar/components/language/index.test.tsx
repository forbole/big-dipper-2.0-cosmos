import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Language from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('@material-ui/core/Menu', () => (props) => <div id="menu" {...props} />);
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
describe('screen: Nav/Language', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Language />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays menu on click', () => {
    renderer.act(() => {
      component.root.findByProps({ className: 'makeStyles-selected' }).props.onClick({
        currentTarget: 'button',
      });
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
