import React from 'react';
import { useMain } from './hooks';

const Main = ({
  Component, pageProps,
}) => {
  useMain();
  return (
    <div>main</div>
  );
};

export default Main;
