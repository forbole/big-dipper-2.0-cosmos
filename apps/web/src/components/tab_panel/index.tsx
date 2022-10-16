import React from 'react';
import classnames from 'classnames';

const TabPanel: React.FC<{
  children?: React.ReactNode;
  index: any;
  value: any;
  className?: string;
}> = (props) => {
  const {
    children, value, index, className,
  } = props;
  return (
    <div
      className={classnames(className)}
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <>
          {children}
        </>
      )}
    </div>
  );
};

export default TabPanel;
