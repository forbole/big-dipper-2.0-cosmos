import RunDistribution from '@/components/msg/dispensation/run_distribution';
import MsgRunDistribution from '@/models/msg/dispensation/msg_run_distribution';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/RunDistribution', () => {
  it('matches snapshot', () => {
    const message: MsgRunDistribution = {
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      authorizedRunner: 'userClaimAddress',
      distributionType: 'DISTRIBUTION_TYPE_AIRDROP',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RunDistribution message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRunDistribution'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.distributionType).toEqual(
      'DISTRIBUTION_TYPE_AIRDROP'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
