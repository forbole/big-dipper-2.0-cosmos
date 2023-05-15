import { Trans } from 'next-i18next';
import { ComponentProps, useMemo } from 'react';

/**
 * This component is used to translate the i18nKey with the app name prefix.
 */
const AppTrans = (props: ComponentProps<typeof Trans>) => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME ?? '';
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
  const i18nKeysForApp = useMemo(
    () =>
      i18nKeys.filter(Boolean).flatMap((key) => {
        if (/:/.test(key)) return `${appName}:${key.replace(/:/, '.')}`;
        return `${appName}:common.${key}`;
      }),
    [i18nKeys, appName]
  );

  // merge `i18nKeys` and `i18nKeysForApp` to `i18nKeysMerged` variable.
  const i18nKeysMerged = useMemo(
    () => [...i18nKeysForApp, ...i18nKeys],
    [i18nKeysForApp, i18nKeys]
  );

  // return `Trans` component if `appName` is empty. i.e. for jest test.
  if (!appName) {
    return <Trans {...propsRest} i18nKey={i18nKey} />;
  }

  // return `Trans` component with `i18nKeysMerged` as `i18nKey` prop.
  return <Trans {...propsRest} i18nKey={i18nKeysMerged} />;
};

export default AppTrans;
