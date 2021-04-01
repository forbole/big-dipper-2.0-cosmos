import React from 'react';
import classnames from 'classnames';
import { Divider } from '@material-ui/core';
import { useTransactionsContext } from '@src/screens/home/components/transactions/contexts/transactions';
import { SingleTransactionMobile } from '@components';

const Mobile:React.FC<{
  className?: string;
}> = ({ className }) => {
  const { formatUi } = useTransactionsContext();
  const uiData = formatUi();

  return (
    <div className={classnames(className)}>
      {uiData.map((x, i) => {
        return (
          <React.Fragment key={`${x.block}-${i}`}>
            <SingleTransactionMobile {...x} />
            {i !== uiData.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
