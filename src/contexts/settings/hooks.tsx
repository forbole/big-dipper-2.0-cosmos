import {
  useEffect,
  useState,
} from 'react';
import * as R from 'ramda';
import axios from 'axios';
import {
  darkTheme,
  lightTheme,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  useValidatorsAddressListQuery,
  ValidatorsAddressListQuery,
} from '@graphql/types';
import { SettingsState } from './types';

/**
 *
 * @param initialState
 */
export const useTheme = (initialState:SettingsState) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [themeSelection, setThemeSelection] = usePersistedState('themeSelection', initialState.themeSelection);

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (themeSelection === 'device') {
      if (
        isClient
        && window?.matchMedia('(prefers-color-scheme: dark)')?.matches
      ) {
        setTheme('dark');
      }
    } else if (themeSelection === 'dark') {
      setTheme('dark');
    } else if (themeSelection === 'light') {
      setTheme('light');
    }
  }, [themeSelection]);

  const toggleThemeMode = () => {
    const value = theme === 'light' ? 'dark' : 'light';
    setThemeSelection(value);
  };

  return {
    theme,
    muiTheme: theme === 'dark' ? darkTheme : lightTheme,
    toggleThemeMode,
    themeSelection,
  };
};

export const useValidatorsAddress = (initialstate:SettingsState) => {
  const [state, setState] = useState<{
    validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
    selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    };
  }>(initialstate.validatorsAddresses);

  useValidatorsAddressListQuery({
    onCompleted: async (data) => {
      const formattedList = await formatValidatorsAddressList(data);
      setState(formattedList);
    },
  });

  const formatValidatorsAddressList = (data: ValidatorsAddressListQuery) => {
    const validators: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    } = {};
    const selfDelegateAddresses: {
      [key: string]: {
        moniker: string;
        imageUrl?: string;
      }
    } = {};

    // ===============================
    // Set up initial dictionary and axios calls
    // ===============================
    const promiseIndexTracker = {};
    const promises = [];

    data.validator.forEach((x, i) => {
      const validatorAddress = x.validatorInfo.operatorAddress;
      const selfAddress = x.validatorInfo.selfDelegateAddress;

      validators[validatorAddress] = {
        moniker: R.pathOr(['Shy Validator', ['validatorDescriptions', 0, 'moniker'], x]),
      };
      selfDelegateAddresses[selfAddress] = validators[validatorAddress];

      if (
        x.validatorDescriptions.length
        && x.validatorDescriptions[0].identity
        && x.validatorDescriptions[0].identity.length === 16
      ) {
        const keyBaseIdentity = x.validatorDescriptions[0].identity;
        // batch promises and index
        const promise = axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${keyBaseIdentity}&fields=basics&fields=pictures`);

        promises.push(promise);
        promiseIndexTracker[i] = validatorAddress;
      }
    });

    // ===============================
    // Set imageUrl in to the dictionary
    // ===============================
    return Promise.allSettled(promises)
      .then((results) => {
        results.forEach((result, index) => {
          const keybaseStatus = R.pathOr(null, ['value', 'data', 'status', 'code'], result);
          const keybaseData = R.pathOr(null, ['value', 'data', 'them', 0], result);
          if (
            result.status === 'fulfilled'
            && keybaseStatus === 0
            && keybaseData
          ) {
            const validator = promiseIndexTracker[index];
            const imageUrl = R.pathOr(null, ['pictures', 'primary', 'url'], keybaseData);
            validators[validator].imageUrl = imageUrl;
          }
        });

        return {
          validators,
          selfDelegateAddresses,
        };
      });
  };

  return {
    validatorsAddresses: state,
  };
};
