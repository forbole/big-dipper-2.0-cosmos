import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('../condition', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Condition" {...props} />
));
jest.mock('../voting_power', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="VotingPower" {...props} />
));

jest.mock('ui/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));
jest.mock('ui/components/sort_arrows', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SortArrows" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Desktop', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          sortDirection="asc"
          sortKey="validator.name"
          handleSort={jest.fn()}
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
              liquidStaking: '',
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
