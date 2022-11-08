import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Desktop from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('..', () => ({
  VotingPower: (props: JSX.IntrinsicElements['div']) => <div id="VotingPower" {...props} />,
  Condition: (props: JSX.IntrinsicElements['div']) => <div id="Condition" {...props} />,
}));

jest.mock('@components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));
jest.mock('@components/sort_arrows', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SortArrows" {...props} />
));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

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
            },
          ]}
        />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('matches snapshot with active validator', () => {
    const component = renderer.create(
      <MockTheme>
        <Desktop
          sortDirection="desc"
          sortKey="validator.voting_power"
          handleSort={jest.fn().mockReturnValue('votingPower')}
          items={[
            {
              validator: {
                name: 'Validator',
                address: 'desmosvaloper1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes',
                imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
              },
              votingPower: 20,
              votingPowerPercent: 20,
              commission: 30,
              condition: 1,
              jailed: false,
              status: 1,
              tombstoned: false,
            },
          ]}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
