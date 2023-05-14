import { Trans } from 'next-i18next';
import { ComponentProps, useMemo } from 'react';

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? '';

/**
 * This component is used to translate the i18nKey with the app name prefix.
 */
const TransByApp = (props: ComponentProps<typeof Trans>) => {
  const { i18nKey, ...propsRest } = props;

  // convert `i18nKey` to array of strings as store in `i18nKeys` variable.
  const i18nKeys = useMemo(() => {
    if (Array.isArray(i18nKey)) {
      return i18nKey;
    }
    if (i18nKey) {
      return [i18nKey];
    }
    return [];
  }, [i18nKey]);

  // convert `i18nKey` to array of strings as store in `i18nKeysForApp` variable.
  const i18nKeysForApp = useMemo(() => {
    if (!appName) {
      return [];
    }
    return i18nKeys.filter(Boolean).flatMap((key) => {
      if (/:/.test(key)) return `${appName}:${key.replace(/:/, '.')}`;
      return `${appName}:common.${key}`;
    });
  }, [i18nKeys]);

  // merge `i18nKeys` and `i18nKeysForApp` to `i18nKeysMerged` variable.
  const i18nKeysMerged = useMemo(
    () => [...i18nKeys, ...i18nKeysForApp],
    [i18nKeys, i18nKeysForApp]
  );

  // return `Trans` component with `i18nKeysMerged` as `i18nKey` prop.
  return <TransByApp {...propsRest} i18nKey={i18nKeysMerged} />;
};

export default TransByApp;
