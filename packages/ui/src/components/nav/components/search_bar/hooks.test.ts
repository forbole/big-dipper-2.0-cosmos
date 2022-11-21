import { renderHook, act } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import chainConfig from 'ui/chainConfig';
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

jest.mock('ui/utils/prefix_convert', () => ({
  ...jest.requireActual('ui/utils/prefix_convert'),
  isValidAddress(address: string) {
    if (
      address === `${chainConfig.prefix.validator}1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes` ||
      address === `${chainConfig.prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
    ) {
      return true;
    }
    return jest.requireActual('ui/utils/prefix_convert').isValidAddress(address);
  },
}));

const t = jest.fn((value) => value);

describe('misc: useSearchBar', () => {
  it('use a validator address', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(
        `${chainConfig.prefix.validator}1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes`
      );
    });
    expect(mockPush).toBeCalledWith(
      `/validators/${chainConfig.prefix.validator}1jrld5g998gqm4yx26l6cvhxz7y5adgxqzfdpes`
    );
  });

  it('use a consensus address', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(
        `${chainConfig.prefix.consensus}1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467`
      );
    });
    expect(mockPush).toBeCalledTimes(0);
  });

  it('use a user address', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(
        `${chainConfig.prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
      );
    });
    expect(mockPush).toBeCalledWith(
      `/accounts/${chainConfig.prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
    );
  });

  it('use a dtag', async () => {
    if (!chainConfig.extra.profile) return;
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(
        `@${chainConfig.prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
      );
    });
    expect(mockPush).toBeCalledWith(
      `/@${chainConfig.prefix.account}1jrld5g998gqm4yx26l6cvhxz7y5adgxquy94nz`
    );
  });

  it('use a block', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit('300,000');
    });
    expect(mockPush).toBeCalledWith('/blocks/300000');
  });

  it('use a transactions', async () => {
    const { result } = renderHook(() => useSearchBar(t), {
      wrapper: RecoilRoot,
    });
    act(() => {
      result.current.handleOnSubmit(
        'FF4ED0EA688507EF3469804580136B4925116FC9B5F5658AF2B65E987A2138E0'
      );
    });
    expect(mockPush).toBeCalledWith(
      '/transactions/FF4ED0EA688507EF3469804580136B4925116FC9B5F5658AF2B65E987A2138E0'
    );
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
