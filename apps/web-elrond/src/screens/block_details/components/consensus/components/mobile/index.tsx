import React, { FC } from 'react';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import Link from 'next/link';
import { NODE_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { useList, useListRow } from '@/hooks';
import type { ConsensusType } from '@/screens/block_details/types';
import { useStyles } from '@/screens/block_details/components/consensus/components/mobile/styles';

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    classes: ReturnType<typeof useStyles>;
    formattedItems: unknown[];
    items: string[];
  }
> = ({ index, style, setRowHeight, classes, formattedItems, items }) => {
  const { t } = useTranslation('blocks');
  const { rowRef } = useListRow(index, setRowHeight);
  const selectedItem = formattedItems[index];
  return (
    <div style={style}>
      <div ref={rowRef}>
        {/* single signature start */}
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('validator')}
            </Typography>
            <Link href={NODE_DETAILS(items[index])} passHref>
              <Typography variant="body1" className="value" component="a">
                {selectedItem}
              </Typography>
            </Link>
          </div>
        </div>
        {/* single signature end */}
        {index !== items.length - 1 && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<{ items: ConsensusType[] } & ComponentDefault> = (props) => {
  const { listRef, getRowHeight, setRowHeight } = useList();
  const classes = useStyles();

  const formattedItems = props.items.map((x) =>
    getMiddleEllipsis(x, {
      beginning: 13,
      ending: 15,
    })
  );

  return (
    <div className={classes.root}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={props.items.length}
            itemSize={getRowHeight}
            ref={listRef as React.LegacyRef<List>}
            width={width}
          >
            {({ index, style }) => (
              <ListItem
                key={props.items[index]}
                index={index}
                style={style}
                setRowHeight={setRowHeight}
                classes={classes}
                formattedItems={formattedItems}
                items={props.items}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
