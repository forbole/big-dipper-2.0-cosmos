import renderer from 'react-test-renderer';
import Result from '@/components/result';
import SingleTransactionMobile from '@/components/single_transaction_mobile';
import Tag from '@/components/tag';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: SingleTransactionMobile', () => {
  it('matches snapshot', () => {
    const dummyItems = {
      block: <div>10</div>,
      hash: <div>1572D5F78D0192BC59E6BD99875D7796A39B1CE0CEF2E106D586CCCEF5C75317</div>,
      type: (
        <div>
          <Tag value="hello world" theme="six" />
        </div>
      ),
      result: <Result success />,
      time: '2022-02-19T19:03:14.969688',
      messages: '2',
    };
    const component = renderer.create(
      <MockTheme>
        <SingleTransactionMobile {...dummyItems} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
