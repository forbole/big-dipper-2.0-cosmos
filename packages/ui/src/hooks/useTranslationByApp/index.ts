import { useTranslation } from 'next-i18next';
import { useCallback, useMemo } from 'react';
import { UseTranslationOptions } from 'react-i18next';

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? '';

/**
 * The `useTranslationByApp` function is a custom hook that extends the `useTranslation` hook from the
 * `react-i18next` library to include the app name as a namespace and handle key formatting.
 */
const useTranslationByApp = (ns?: string | string[], options?: UseTranslationOptions) => {
  // The `nsArray` variable is the original namespace(s) to be used when `useTranslation` is called.
  // If not defined, it will be an empty array and all namespaces will be loaded by default.
  const nsArray = useMemo(() => {
    if (!appName) {
      return ns;
    }
    if (Array.isArray(ns)) {
      return ns;
    }
    if (typeof ns === 'string') {
      return [ns];
    }
    return undefined;
  }, [ns]);

  // The `nsArrayWithApp` variable will be the parameters to be used
  // for `useTransaction` with namespace `appName` appended
  // If `ns` is not specified, all namespaces will be loaded.];
  const nsArrayWithApp = useMemo(() => {
    if (!appName) {
      return nsArray;
    }
    if (nsArray?.length) {
      return [...nsArray, appName];
    }
    return undefined;
  }, [nsArray]);

  // The `t` function is the translation function to be used when `useTranslation` is called.
  const { t, ...tRest } = useTranslation(nsArrayWithApp, options);

  // The `tApp` function is the translation function to be used when `useTranslationByApp` is called.
  const tApp = useCallback(
    (key: string[] | string, tOptions?: object): string => {
      if (!appName) {
        if (tOptions) {
          t(key, tOptions);
        }
        return t(key);
      }

      // If `key` is a string, it will be converted to an array.
      if (typeof key === 'string') {
        key = [key];
      }

      // If `key` is an array
      if (Array.isArray(key)) {
        const keysForApp = key
          .filter(Boolean) // Remove empty strings
          .flatMap((k) => {
            // If `k` contains a colon, which means a namespace had been specific, it will be converted to a dot.
            if (/:/.test(k)) {
              return [`${appName}:${k.replace(/:/, '.')}`];
            }

            // If `nsArray` is defined, it will be used to generate the keys.
            // Otherwise, the key will be generated with the default namespace.
            if (Array.isArray(nsArray)) {
              return nsArray.map((n) => `${appName}:${n}.${k}`);
            }
            return [`${appName}:common.${k}`];
          });

        // If `tOptions` is defined, it will be used to translate the key.
        if (tOptions) {
          return t([...keysForApp, ...key], tOptions);
        }
        return t([...keysForApp, ...key]);
      }

      // If `tOptions` is defined, it will be used to translate the key.
      if (tOptions) {
        return t(key, tOptions);
      }
      return t(key);
    },
    [nsArray, t]
  );

  return { t: tApp, ...tRest };
};

// The `TFunction` type is the return type of the `useTranslationByApp` hook.
export type TFunction = ReturnType<typeof useTranslationByApp>['t'];

// The `useTranslationByApp` hook is exported as the default export.
export default useTranslationByApp;