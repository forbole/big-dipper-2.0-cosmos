/* eslint-disable */
import chainConfig from '@/chainConfig';
import { useSearchBar } from '@/components/nav/components/search_bar/hooks';
import { act, renderHook } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

// const { extra } = chainConfig();
const { prefix } = chainConfig();

const mockPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

xdescribe('misc: useSearchBar', () => {
  xit('use a validator address', async () => {
    const { result } = renderHook(() => useSearchBar(), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(`${prefix.validator}1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes`);
    });
    expect(mockPush).toBeCalledWith(
      `/validators/${prefix.validator}1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes`
    );
  });

  // it('use a consensus address', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit(`${prefix.consensus}1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467`);
  //   });
  //   expect(mockPush).toBeCalledTimes(0);
  // });

  // it('use a user address', async () => {
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit(`${prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`);
  //   });
  //   expect(mockPush).toBeCalledWith(
  //     `/accounts/${prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
  //   );
  // });

  // it('use a dtag', async () => {
  //   if (!extra.profile) return;
  //   const { result } = renderHook(() => useSearchBar(t), {
  //     wrapper: RecoilRoot,
  //   });
  //   act(() => {
  //     result.current.handleOnSubmit(
  //       `@${prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
  //     );
  //   });
  //   expect(mockPush).toBeCalledWith(
  //     `/@${prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
  //   );
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
