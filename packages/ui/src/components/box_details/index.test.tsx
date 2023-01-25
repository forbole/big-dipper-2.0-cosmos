import renderer from 'react-test-renderer';
import BoxDetails from '@/components/box_details';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// unit tests
// ==================================
describe('components: BoxDetails', () => {
  it('matches snapshot', () => {
    const dummyProps = {
      title: 'overview',
      details: [
        {
          key: 'slot',
          label: 'slot',
          detail: '100,000,000',
        },
        {
          key: 'hash',
          label: 'hash',
          detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        },
      ],
    };

    const component = renderer.create(
      <MockTheme>
        <BoxDetails {...dummyProps} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with title actions', () => {
    const mockOnClick = jest.fn();

    const dummyProps = {
      title: 'overview',
      titleAction: (
        <button type="button" id="titleAction" onClick={mockOnClick}>
          title action
        </button>
      ),
      details: [
        {
          key: 'slot',
          label: 'slot',
          detail: '100,000,000',
        },
        {
          key: 'hash',
          label: 'hash',
          detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        },
      ],
    };

    const component = renderer.create(
      <MockTheme>
        <BoxDetails {...dummyProps} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
      component.root.findByProps({ id: 'titleAction' }).props.onClick();
    });

    expect(mockOnClick).toBeCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
