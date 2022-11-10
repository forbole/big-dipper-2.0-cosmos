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

jest.mock('./components', () => ({
  Mobile: (props: JSX.IntrinsicElements['div']) => <div id="Mobile" {...props} />,
  Desktop: (props: JSX.IntrinsicElements['div']) => <div id="Desktop" {...props} />,
  Total: (props: JSX.IntrinsicElements['div']) => <div id="Total" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Proposals/List', () => {
  it('matches snapshot', async () => {
    let tree: ReactTestRendererJSON | ReactTestRendererJSON[] | null = null;

    renderer.act(() => {
      tree = renderer
        .create(
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
        )
        .toJSON();
    });
    await wait(renderer.act);

    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
