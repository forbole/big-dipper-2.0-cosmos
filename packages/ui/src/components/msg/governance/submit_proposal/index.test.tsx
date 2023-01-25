import renderer from 'react-test-renderer';
import SubmitProposal from '@/components/msg/governance/submit_proposal';
import {
  MsgCommunityPoolSpendProposal,
  MsgParameterChangeProposal,
  MsgSoftwareUpgradeProposal,
  MsgSubmitProposal,
  MsgTextProposal,
} from '@/models';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SubmitProposal', () => {
  // it('matches snapshot', () => {
  //   const message = MsgSubmitProposal.fromJson({
  //     type: {
  //       '@type': '/cosmos.gov.v1beta1.MsgSubmitProposal',
  //     },
  //     content: 'content',
  //     proposer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
  //     initial_deposit: [
  //       {
  //         denom: 'udaric',
  //         amount: '2000000',
  //       },
  //     ],
  //   });
  // });

  it('matches snapshot with Text Proposal', () => {
    const messageTextProposal = MsgTextProposal.fromJson({
      title: 'Dummy Text Proposal',
      type: '/cosmos.gov.v1beta1.TextProposal',
      description: 'Text Proposal Desription',
    });

    const message = MsgSubmitProposal.fromJson({
      category: 'governance',
      type: '/cosmos.gov.v1beta1.MsgSubmitProposal',
      content: messageTextProposal,
      proposer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      initial_deposit: [
        {
          denom: 'udaric',
          amount: '1000000',
        },
      ],
      json: {
        content: {
          '@type': '/cosmos.gov.v1beta1.TextProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitProposal message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with Software Upgrade Proposal', () => {
    const msgSoftwareUpgradeProposal = MsgSoftwareUpgradeProposal.fromJson({
      title: 'Dummy Software Upgrade Proposal',
      type: '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
      description: '',
      plan: {
        name: 'v2.2.0',
        time: '2021-10-06T00:10:45.761731',
        height: '21332321',
        info: 'https://raw.githubusercontent.com/desmos-labs/morpheus/master/morpheus-apollo-2/upgrades/v2.2.0.json?checksum=sha256:6b0b4e97d8c40c8b7ed5193653dd096f84d6a5a627c13a692288dc98f1a97dd4',
        upgradedClientState: null,
      },
    });

    const message = MsgSubmitProposal.fromJson({
      category: 'governance',
      type: '/cosmos.gov.v1beta1.MsgSubmitProposal',
      content: msgSoftwareUpgradeProposal,
      proposer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      initial_deposit: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
      json: {
        content: {
          '@type': '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitProposal message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with Parameter Change Proposal', () => {
    const msgParameterChangeProposal = MsgParameterChangeProposal.fromJson({
      title: 'Dummy Parameter Change Proposal',
      type: '/cosmos.params.v1beta1.ParameterChangeProposal',
      description: '',
      changes: [
        {
          subspace: 'baseapp',
          key: 'BlockParams',
          value: '{\n "max_gas": "120000000"\n }',
        },
      ],
    });

    const message = MsgSubmitProposal.fromJson({
      category: 'governance',
      type: '/cosmos.gov.v1beta1.MsgSubmitProposal',
      content: msgParameterChangeProposal,
      proposer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      initial_deposit: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
      json: {
        content: {
          '@type': '/cosmos.params.v1beta1.ParameterChangeProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitProposal message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with Community Pool Spend Proposal', () => {
    const msgCommunityPoolSpendProposal = MsgCommunityPoolSpendProposal.fromJson({
      title: 'Dummy Community Pool Spend Proposal',
      type: '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
      description: '',
      recipient: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      amount: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
    });

    const message = MsgSubmitProposal.fromJson({
      category: 'governance',
      type: '/cosmos.gov.v1beta1.MsgSubmitProposal',
      content: msgCommunityPoolSpendProposal,
      proposer: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
      initial_deposit: [
        {
          denom: 'udaric',
          amount: '2000000',
        },
      ],
      json: {
        content: {
          '@type': '/cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
        },
      },
    });
    const component = renderer.create(
      <MockTheme>
        <SubmitProposal message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
