import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useTranslation } from 'next-i18next';
import { FC, ReactNode, RefObject, useEffect, useState } from 'react';
import useStyles from '@/components/transactions_list_details/components/list/components/single_transaction/styles';
import { useGetComponentDimension } from '@/hooks/use_get_component_dimension';
import HashIcon from 'shared-utils/assets/icon-hash.svg';
import ExpandIcon from 'shared-utils/assets/icon-expand.svg';
import MessageIcon from 'shared-utils/assets/icon-message.svg';
import { formatNumber } from '@/utils/format_token';

export type SingleTransactionProps = {
  className?: string;
  block: ReactNode;
  hash: ReactNode;
  type: ReactNode;
  time: string;
  messageCount: string;
  messages: Array<
    {
      type: ReactNode;
      message: ReactNode;
    } & JSX.IntrinsicAttributes
  >;
  result?: ReactNode;
  amount: number;
  rowRef: RefObject<HTMLDivElement>;
  expandedAccordionID: number[];
  index: number;
  handleExpandID: (id: number) => void;
};

const SingleTransaction: FC<SingleTransactionProps> = ({
  className,
  block,
  hash,
  type,
  time,
  messages,
  result,
  messageCount,
  amount,
  rowRef,
  expandedAccordionID,
  handleExpandID,
  index,
}) => {
  const { ref: heightRef, height } = useGetComponentDimension();
  const { t } = useTranslation('transactions');
  const { classes, cx } = useStyles();

  return (
    <div ref={rowRef}>
      <div className={classes.infoDiv}>
        <div className={classes.innerDiv}>
          <div>{type}</div>
          <div className={classes.iconFlexDiv}>
            {hash}
            <HashIcon className={classes.icon} />
          </div>
          <div>{time}</div>
        </div>
        <div className={classes.endDiv}>
          {Number.isInteger(amount) ? (
            <div className={classes.dsmDiv}>+ {formatNumber(amount.toString())} DSM</div>
          ) : (
            <div className={classes.dsmDiv}>+ {formatNumber(amount.toString(), 6)} DSM</div>
          )}
          <div>{result}</div>
        </div>
      </div>
      <div className={cx(classes.root, className)}>
        {/* <div className={classes.itemContainer}>
          <Divider />
          <div className={classes.item}>
            <div className={classes.msgListContainer}>
              {messages.map((x, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${x.key}-${i}`} className={classes.msg}>
                  <div className={classes.tags}>{x.type}</div>
                  {x.message}
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <Accordion
          className={classes.accordion}
          ref={heightRef}
          expanded={expandedAccordionID ? !!expandedAccordionID.includes(index) : false}
          onChange={() => handleExpandID(index)}
        >
          <AccordionSummary expandIcon={<ExpandIcon />} aria-controls="messages">
            <MessageIcon />
            <Typography variant="body1">{t('messagesNumber', { number: messageCount })}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <div>{type}</div> */}
            {messages.map((x, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={`${x.key}-${i}`} className={classes.msg}>
                <div className={classes.tags}>{x.type}</div>
                {x.message}
              </div>
            ))}
          </AccordionDetails>
          {/* <div style={{ height }} /> */}
        </Accordion>
      </div>
    </div>
  );
};

export default SingleTransaction;
