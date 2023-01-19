import renderer from 'react-test-renderer';
import SingleSlotMobile from '@/components/single_block_mobile';
import { MockTheme } from '@/tests/utils';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

// ==================================
// unit tests
// ==================================
describe('component: SingleSlotMobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleSlotMobile
          hash="hash"
          parentHash="parentHash"
          txs="txs"
          time="time"
          height={<div id="height" />}
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
