import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@hooks';
import ThemeIcon from '@assets/icon-theme.svg';
import { useSettingsContext } from '@contexts';
import { useStyles } from './styles';
import {
  Language,
  Network,
  NetworkList,
} from './components';
import { SearchBar } from '../../..';

const ActionBar: React.FC<{
  isNetwork: boolean;
  className?: string;
  toggleNetwork: () => void;
}> = ({
  toggleNetwork,
  className,
  isNetwork,
}) => {
  const {
    toggleThemeMode,
  } = useSettingsContext();

  const {
    ref: heightRef,
    height,
  } = useGetComponentDimension();
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)} ref={heightRef}>
      <div className={classes.actions}>
        <SearchBar className={classnames(classes.searchBar, { open: isNetwork })} />
        <Network
          className={classnames(classes.network, { open: isNetwork })}
          toggleNetwork={toggleNetwork}
        />
        <div onClick={toggleThemeMode} role="button" className={classes.theme}>
          <ThemeIcon />
        </div>
        <Language />
      </div>
      <NetworkList
        actionHeight={height}
        className={classnames(classes.networkList, {
          open: isNetwork,
        })}
      />
    </div>
  );
};

export default ActionBar;
