import React from 'react';
import classnames from 'classnames';
import ThemeIcon from '@assets/icon-theme.svg';
import { useSettingsContext } from '@contexts';

const ThemeList: React.FC<{
  className?: string;
}> = (props) => {
  const {
    toggleThemeMode,
  } = useSettingsContext();

  return (
    <div className={classnames(props.className)}>
      <ThemeIcon />
    </div>
  );
};

export default ThemeList;

/* <div onClick={toggleThemeMode} role="button" className={classes.theme}>
          <ThemeIcon />
        </div> */
