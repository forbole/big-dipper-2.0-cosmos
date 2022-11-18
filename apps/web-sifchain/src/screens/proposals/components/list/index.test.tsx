import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { MockTheme, wait } from 'ui/tests/utils';
import List from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('ui/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));

// jest.mock('./components/mobile', () => (props: JSX.IntrinsicElements['div']) => (
//   <div id="Mobile" {...props} />
// ));
// jest.mock('./components/desktop', () => (props: JSX.IntrinsicElements['div']) => (
//   <div id="Desktop" {...props} />
// ));
jest.mock('./components/total', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Total" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Proposals/List', () => {
  it('matches snapshot', async () => {
    let component: renderer.ReactTestRenderer | undefined;

    renderer.act(() => {
      component = renderer.create(
        <MockTheme>
          <List
            items={[
              {
                title: 'Staking Param Change Part Two',
                id: 7,
                status: 'PROPOSAL_STATUS_REJECTED',
                description: 'Update max validators',
              },
            ]}
            rawDataTotal={1}
            isItemLoaded={() => true}
            itemCount={1}
            loadMoreItems={() => null}
          />
        </MockTheme>
      );
    });
    await wait(renderer.act);

    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
