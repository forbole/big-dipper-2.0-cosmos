import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('../condition', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Condition" {...props} />
));
jest.mock('../voting_power', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="VotingPower" {...props} />
));

jest.mock('ui/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));
jest.mock(
  './single_validator',
  () => (props: JSX.IntrinsicElements['div']) => <div id="SingleValidator" {...props} />,
  { virtual: true }
);

// jest.mock(
//   'react-virtualized-auto-sizer',
//   () =>
//     ({ children }: AutoSizerProps) =>
//       children({
//         height: 600,
//         width: 600,
//       })
// );

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              validator: {
                name: '',
                address: '',
                imageUrl: '',
              },
              votingPower: 0,
              votingPowerPercent: 0,
              commission: 0,
              condition: 0,
              jailed: true,
              status: 3,
              tombstoned: false,
            },
          ]}
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
