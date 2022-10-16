import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Search from '.';

// ==================================
// global setup
// ==================================
let component:renderer.ReactTestRenderer;
const callback = jest.fn();
// ==================================
// unit tests
// ==================================
describe('screen: Nav/SearchBar', () => {
  beforeEach(() => {
    component = renderer.create(
      <MockTheme>
        <Search
          placeholder="placeholder"
          callback={callback}
        />
      </MockTheme>,
    );
  });

  it('it renders', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onChange', () => {
    renderer.act(() => {
      component.root.findByType('input').props.onChange({
        target: {
          value: 'wallet',
        },
      });
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles on key down', () => {
    renderer.act(() => {
      component.root.findByType('input').props.onKeyDown({
        key: 'Enter',
        preventDefault: jest.fn(),
      });
    });
    expect(callback).toBeCalledTimes(1);
  });

  it('handles onSubmit', () => {
    renderer.act(() => {
      component.root.findByType('form').props.onSubmit();
    });

    expect(callback).toBeCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
