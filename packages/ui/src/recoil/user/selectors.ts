import { atomState } from '@/recoil/user/atom';
import { mergeStateChange } from '@/utils/merge_state_change';
import { DefaultValue, ReadOnlySelectorOptions, selector } from 'recoil';

const getUserAddress: ReadOnlySelectorOptions<string>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.address;
};

export const writeUserAddress = selector({
  key: 'user.write.address',
  get: getUserAddress,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { address: value });
    set(atomState, newState);
  },
});

export const readUserAddress = selector({
  key: 'user.read.address',
  get: getUserAddress,
});

const getIsUserLoggedIn: ReadOnlySelectorOptions<boolean>['get'] = ({ get }) => {
  const state = get(atomState);
  return state.loggedIn;
};

export const writeIsUserLoggedIn = selector({
  key: 'user.write.loggedIn',
  get: getIsUserLoggedIn,
  set: ({ get, set }, value) => {
    if (value instanceof DefaultValue) return;
    const prevState = get(atomState);
    const newState = mergeStateChange(prevState, { loggedIn: value });
    set(atomState, newState);
  },
});

export const readIsUserLoggedIn = selector({
  key: 'user.read.loggedIn',
  get: getIsUserLoggedIn,
});
