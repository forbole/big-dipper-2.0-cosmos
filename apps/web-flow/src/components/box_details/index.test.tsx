import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import BoxDetails from '.';

// ==================================
// unit tests
// ==================================
describe('components: BoxDetails', () => {
  it('matches snapshot', () => {
    const dummyProps = {
      title: 'overview',
      details: [
        {
          label: 'slot',
          detail: '100,000,000',
        },
        {
          label: 'hash',
          detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        },
      ],
    };

    const component = renderer.create(
      <MockTheme>
        <BoxDetails {...dummyProps} />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with title actions', () => {
    const mockOnClick = jest.fn();

    const dummyProps = {
      title: 'overview',
      titleAction: <button type="button" id="titleAction" onClick={mockOnClick}>title action</button>,
      details: [
        {
          label: 'slot',
          detail: '100,000,000',
        },
        {
          label: 'hash',
          detail: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
        },
      ],
    };

    const component = renderer.create(
      <MockTheme>
        <BoxDetails {...dummyProps} />
      </MockTheme>,
    );
    const tree = component.toJSON();
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
