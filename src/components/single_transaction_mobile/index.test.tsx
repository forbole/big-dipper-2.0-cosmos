import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import {
  SingleTransactionMobile,
  Tag,
  Result,
} from '@components';
import { RecoilRoot } from 'recoil';

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
describe('component: SingleTransactionMobile', () => {
  it('matches snapshot', () => {
    const dummyItems = {
      block: (
        <div>10</div>
      ),
      hash: (
        <div>1572D5F78D0192BC59E6BD99875D7796A39B1CE0CEF2E106D586CCCEF5C75317</div>
      ),
      type: (
        <div>
          <Tag
            value="hello world"
            theme="six"
          />
        </div>
      ),
      result: (
        <Result success />
      ),
      time: '2022-02-19T19:03:14.969688',
      messages: '2',
    };
    const component = renderer.create(
      <RecoilRoot>
        <MockTheme>
          <SingleTransactionMobile {...dummyItems} />
        </MockTheme>
      </RecoilRoot>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
