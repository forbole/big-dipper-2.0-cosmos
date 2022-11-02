/* eslint-disable */
import { RecoilRoot } from 'recoil';
import {
  renderHook, act,
} from '@testing-library/react-hooks';
import { useSearchBar } from './hooks';

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

const t = jest.fn((value) => value);

xdescribe('misc: useSearchBar', () => {
  xit('use a validator address', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit('desmosvaloper1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes');
    });
    expect(mockPush).toBeCalledWith('/validators/desmosvaloper1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes');
  });

  // it('use a consensus address', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit('desmosvalcons1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467');
  //   });
  //   expect(mockPush).toBeCalledTimes(0);
  // });

  // it('use a user address', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit('desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz');
  //   });
  //   expect(mockPush).toBeCalledWith('/accounts/desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz');
  // });

  // it('use a dtag', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit('@desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz');
  //   });
  //   expect(mockPush).toBeCalledWith('/@desmos1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz');
  // });

  // it('use a block', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit('300,000');
  //   });
  //   expect(mockPush).toBeCalledWith('/blocks/300000');
  // });

  // it('use a transactions', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit('FF4ED0EA688507EF3469804580136B4925116FC9B5F5658AF2B65E987A2138E0');
  //   });
  //   expect(mockPush).toBeCalledWith('/transactions/FF4ED0EA688507EF3469804580136B4925116FC9B5F5658AF2B65E987A2138E0');
  // });
});

afterEach(() => {
  jest.clearAllMocks();
});
