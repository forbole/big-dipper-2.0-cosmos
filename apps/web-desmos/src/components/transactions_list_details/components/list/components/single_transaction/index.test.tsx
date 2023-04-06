import renderer from 'react-test-renderer';
import SingleTransaction from '@/components/transactions_list_details/components/list/components/single_transaction';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: SingleTransaction', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleTransaction
          block={<div>block</div>}
          hash={<div>hash</div>}
          time="2021-07-13T08:00:00"
          type={<div>type</div>}
          messageCount="1,000"
          messages={[
            {
              type: <div>type</div>,
              message: <div>message</div>,
            },
          ]}
          result={<div>result</div>}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
