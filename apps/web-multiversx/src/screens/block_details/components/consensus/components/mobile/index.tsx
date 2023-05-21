import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, LegacyRef, ReactNode, useMemo } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import { NODE_DETAILS } from '@/utils/go_to_page';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import type { ConsensusType } from '@/screens/block_details/types';
import useStyles from '@/screens/block_details/components/consensus/components/mobile/styles';
import { useList, useListRow } from '@/hooks/use_react_window';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  classes: ReturnType<typeof useStyles>['classes'];
  formattedItem: ReactNode;
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
  const { t } = useAppTranslation('blocks');
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
            <Link shallow prefetch={false} href={NODE_DETAILS(item)} className="value">
              {formattedItem}
            </Link>
          </div>
        </div>
        {/* single signature end */}
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<{ items: ConsensusType[]; className?: string }> = (props) => {
  const { listRef, getRowHeight, setRowHeight } = useList();
  const { classes, cx } = useStyles();

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
    <div className={cx(classes.root, props.className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height ?? 0}
            itemCount={props.items.length}
            itemSize={getRowHeight}
            ref={listRef as LegacyRef<List>}
            width={width ?? 0}
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
