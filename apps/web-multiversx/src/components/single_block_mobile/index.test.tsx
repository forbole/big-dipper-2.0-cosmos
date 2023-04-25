import renderer from 'react-test-renderer';
import SingleSlotMobile from '@/components/single_block_mobile';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('component: SingleSlotMobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleSlotMobile
          hash="hash"
          // parentHash="parentHash"
          txs="txs"
          time="time"
          // proposer={<div id="proposer" />}
          // height={<div id="height" />}
          block="block"
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
