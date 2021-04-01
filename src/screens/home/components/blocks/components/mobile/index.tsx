import React from 'react';
import classnames from 'classnames';
import { useBlocksContext } from '@src/screens/home/components/blocks/contexts/blocks';
import { Divider } from '@material-ui/core';
import { SingleBlockMobile } from '@components';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { formatUi } = useBlocksContext();
  const uiData = formatUi();
  return (
    <div className={classnames(className)}>
      {uiData.map((x, i) => {
        return (
          <React.Fragment key={`${x.height}-${i}`}>
            <SingleBlockMobile {...x} />
            {i !== uiData.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
