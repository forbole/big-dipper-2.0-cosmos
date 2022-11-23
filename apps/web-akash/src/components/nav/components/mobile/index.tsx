import React from 'react';
import classnames from 'classnames';
import { useGetComponentDimension } from '@/hooks';
import Networks from '@/components/nav/components/networks';
import TitleBar from '@/components/nav/components/title_bar';
import { useStyles } from '@/components/nav/components/mobile/styles';
import { useMobile } from '@/components/nav/components/mobile/hooks';
import Menu from '@/components/nav/components/mobile/components/menu';
import Navbar from '@/components/nav/components/mobile/components/navbar';
import SearchBar from '@/components/nav/components/search_bar';

const Mobile: React.FC<{
  className?: string;
  title: string;
}> = ({ className, title }) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const { isMenu, isNetwork, isOpen, openNetwork, toggleNavMenus } = useMobile();
  const classes = useStyles();

  return (
    <div className={className}>
      <div ref={heightRef} className={classes.root}>
        <Menu
          toggleNavMenus={toggleNavMenus}
          className={classnames(classes.screens, {
            open: isMenu,
            menu: isMenu,
          })}
        />
        <span
          className={classnames(classes.screens, {
            open: isNetwork,
            network: isNetwork,
          })}
        >
          <Networks className={classes.networks} />
        </span>
        <Navbar isOpen={isOpen} openNetwork={openNetwork} toggleNavMenus={toggleNavMenus} />
        <SearchBar className={classes.searchBar} />
      </div>
      {/* ============================== */}
      {/* Height placeholder */}
      {/* ============================== */}
      <div style={{ height }} />
      <TitleBar title={title} />
    </div>
  );
};

export default Mobile;
