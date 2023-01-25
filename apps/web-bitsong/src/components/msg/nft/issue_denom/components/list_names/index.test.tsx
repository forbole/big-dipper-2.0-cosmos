import { ComponentProps } from 'react';
import renderer from 'react-test-renderer';
import ListNames from '@/components/msg/nft/issue_denom/components/list_names';
import type Name from '@/components/name';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/recoil/profiles/hooks', () => ({
  ...jest.requireActual<object>('@/recoil/profiles/hooks'),
  useProfileRecoil: jest.fn((address) => ({
    address,
    name:
      address === 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'
        ? 'AC Validator 🦦'
        : address,
    imageUrl: '',
  })),
  useProfilesRecoil: jest.fn((addresses) =>
    addresses.map((address: string) => ({
      address,
      name:
        address === 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7'
          ? 'AC Validator 🦦'
          : address,
      imageUrl: '',
    }))
  ),
}));

jest.mock('@/components/name', () => (props: ComponentProps<typeof Name>) => (
  <div id={props.address} {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/IssueDenom', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <ListNames
          creators={[
            'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
            'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
            'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4',
            'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
          ]}
        />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.findAllByType('div').length).toBeGreaterThan(2);
    expect(
      component.root.findByProps({ id: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7' })
        .props.name
    ).toBe('AC Validator 🦦');
    expect(
      component.root.findByProps({ id: 'desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4' })
        .props.id
    ).toBe('desmosvaloper1jh753mzjy358jf86cfqqzkrrtqqefhjxctcre4');
    expect(
      component.root.findByProps({ id: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467' })
        .props.id
    ).not.toBe('desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7');
    expect(component.root.findAllByProps({ name: 'moniker' }).length).not.toBe(4);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
