import Overview from '@/screens/proposal_details/components/overview';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/single_proposal', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleProposal" {...props} />
));
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));
jest.mock('@/components/box', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Box" {...props} />
));
jest.mock('@/components/markdown', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Markdown" {...props} />
));

jest.mock(
  '@/screens/proposal_details/components/overview/components/params_change',
  () => (props: JSX.IntrinsicElements['div']) => <div id="ParamsChange" {...props} />
);
jest.mock(
  '@/screens/proposal_details/components/overview/components/software_upgrade',
  () => (props: JSX.IntrinsicElements['div']) => <div id="SoftwareUpgrade" {...props} />
);

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview
          overview={{
            content: '',
            proposer: '',
            title: 'title',
            id: 10,
            description: 'description',
            status: 'status',
            submitTime: 'submitTime',
            depositEndTime: 'depositEndTime',
            votingEndTime: null,
            votingStartTime: null,
          }}
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
