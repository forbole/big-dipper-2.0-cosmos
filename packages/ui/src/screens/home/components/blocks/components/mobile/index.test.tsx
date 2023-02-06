import renderer from 'react-test-renderer';
import Mobile from '@/screens/home/components/blocks/components/mobile';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/single_block_mobile', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="SingleBlockMobile" {...props} />
));
jest.mock('@/components/avatar_name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="AvatarName" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              height: 4000,
              txs: 12,
              timestamp: '2021-02-18T09:02:28.668623',
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              proposer: 'desmosvalcons1why72hjk945yhckcy5hzk2z2w9d5h65t9am0kd',
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
