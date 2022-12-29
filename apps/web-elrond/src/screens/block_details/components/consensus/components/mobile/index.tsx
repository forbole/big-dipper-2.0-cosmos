import React, { FC, LegacyRef, useMemo } from 'react';
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

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  classes: ReturnType<typeof useStyles>;
  formattedItem: unknown;
  item: string;
  isLast: boolean;
};

const ListItem: FC<ListItemProps> = ({
  index,
  style,
  setRowHeight,
  classes,
  formattedItem,
  item,
  isLast,
}) => {
  const { t } = useTranslation('blocks');
  const { rowRef } = useListRow(index, setRowHeight);
  return (
    <div style={style}>
      <div ref={rowRef}>
        {/* single signature start */}
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('validator')}
            </Typography>
            <Link href={NODE_DETAILS(item)} passHref>
              <Typography variant="body1" className="value" component="a">
                {formattedItem}
              </Typography>
            </Link>
          </div>
        </div>
        {/* single signature end */}
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<{ items: ConsensusType[] }> = (props) => {
  const { listRef, getRowHeight, setRowHeight } = useList();
  const classes = useStyles();

  const formattedItems = useMemo(
    () =>
      props.items.map((x) =>
        getMiddleEllipsis(x, {
          beginning: 13,
          ending: 15,
        })
      ),
    [props.items]
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
            ref={listRef as LegacyRef<List>}
            width={width}
          >
            {({ index, style }) => (
              <ListItem
                key={props.items[index]}
                index={index}
                style={style}
                setRowHeight={setRowHeight}
                classes={classes}
                formattedItem={formattedItems[index]}
                item={props.items[index]}
                isLast={index === props.items.length - 1}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
