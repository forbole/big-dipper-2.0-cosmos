import renderer from 'react-test-renderer';
import AvatarNameListMsg from '@/components/avatar_name_list_msg';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: AvatarNameListMsg', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarNameListMsg
          avatars={[
            {
              imageUrl: '',
              address: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
              name: 'name',
            },
          ]}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with empty values', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarNameListMsg avatars={[]} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with multiple values', () => {
    const component = renderer.create(
      <MockTheme>
        <AvatarNameListMsg
          avatars={[
            {
              imageUrl: '',
              address: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz',
              name: 'name-1',
            },
            {
              imageUrl: '',
              address: 'desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94xx',
              name: 'name-2',
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
