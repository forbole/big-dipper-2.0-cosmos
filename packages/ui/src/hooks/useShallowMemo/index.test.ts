import { renderHook } from '@testing-library/react';
import useShallowMemo from '@/hooks/useShallowMemo';

describe('hooks: useShallowMemo (no key)', () => {
  it('given the same props when render 10 times then return the same result', async () => {
    const initialProps = ['a', 'b', 'c'];
    const { rerender, result } = renderHook((props) => useShallowMemo(props), { initialProps });
    expect(result.current).toStrictEqual(initialProps);
    for (let i = 0; i < 10; i += 1) {
      rerender(initialProps);
      expect(result.current).toStrictEqual(initialProps);
    }
  });
  it('given diff props when rerender then return a new result', async () => {
    const initialProps = ['a', 'b', 'c'];
    const { rerender, result } = renderHook((props) => useShallowMemo(props), { initialProps });
    expect(result.current).toStrictEqual(initialProps);
    rerender(['d', 'e', 'f']);
    expect(result.current).not.toEqual(initialProps);
  });
  it('given new props with same values when rerender then return the same result', async () => {
    const initialProps = ['a', 'b', 'c'];
    const { rerender, result } = renderHook((props) => useShallowMemo(props), { initialProps });
    expect(result.current).toStrictEqual(initialProps);
    rerender(['a', 'b', 'c']);
    expect(result.current).toStrictEqual(initialProps);
    expect(result.current).toEqual(['a', 'b', 'c']);
  });
});

describe('hooks: useShallowMemo (with key)', () => {
  it('given the same props when render 10 times then return the same result', async () => {
    const initialProps = { value: ['a', 'b', 'c'], key: 'k1' };
    const initialProps2 = { value: ['a2', 'b2', 'c2'], key: 'k2' };
    const { rerender, result } = renderHook((props) => useShallowMemo(props.value, props.key), {
      initialProps,
    });
    expect(result.current).toStrictEqual(initialProps.value);
    for (let i = 0; i < 10; i += 1) {
      rerender(initialProps);
      expect(result.current).toStrictEqual(initialProps.value);
      rerender(initialProps2);
      expect(result.current).toStrictEqual(initialProps2.value);
    }
  });
  it('given diff props when rerender then return a new result', async () => {
    const initialProps = { value: ['a', 'b', 'c'], key: 'k1' };
    const initialProps2 = { value: ['a2', 'b2', 'c2'], key: 'k2' };
    const { rerender, result } = renderHook((props) => useShallowMemo(props.value, props.key), {
      initialProps,
    });
    rerender({ value: ['d', 'e', 'f'], key: 'k1' });
    expect(result.current).not.toEqual(initialProps.value);
    rerender({ value: ['d2', 'e2', 'f2'], key: 'k2' });
    expect(result.current).not.toEqual(initialProps2.value);
  });
  it('given new props with same values when rerender then return the same result', async () => {
    const initialProps = { value: ['a', 'b', 'c'], key: 'k1' };
    const initialProps2 = { value: ['a2', 'b2', 'c2'], key: 'k2' };
    const { rerender, result } = renderHook((props) => useShallowMemo(props.value, props.key), {
      initialProps,
    });
    rerender({ value: ['a', 'b', 'c'], key: 'k1' });
    expect(result.current).toStrictEqual(initialProps.value);
    expect(result.current).toEqual(['a', 'b', 'c']);
    rerender({ value: ['a2', 'b2', 'c2'], key: 'k2' });
    expect(result.current).toStrictEqual(initialProps2.value);
    expect(result.current).toEqual(['a2', 'b2', 'c2']);
  });
});
