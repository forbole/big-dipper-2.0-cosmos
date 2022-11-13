import React from 'react';
import { VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import Link from 'next/link';
import { NODE_DETAILS } from '@utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { useList, useListRow } from '@hooks';
import { useStyles } from './styles';
import { ConsensusType } from '../../../../types';

const Mobile: React.FC<{ items: ConsensusType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('blocks');

  const { listRef, getRowHeight, setRowHeight } = useList();
  const classes = useStyles();

  const formattedItems = props.items.map((x) => {
    return getMiddleEllipsis(x, {
      beginning: 13,
      ending: 15,
    });
  });

  return (
    <div className={classes.root}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={props.items.length}
              itemSize={getRowHeight}
              ref={listRef as React.LegacyRef<List>}
              width={width}
            >
              {({ index, style }) => {
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
                          <Link href={NODE_DETAILS(props.items[index])} passHref>
                            <Typography variant="body1" className="value" component="a">
                              {selectedItem}
                            </Typography>
                          </Link>
                        </div>
                      </div>
                      {/* single signature end */}
                      {index !== props.items.length - 1 && <Divider />}
                    </div>
                  </div>
                );
              }}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
