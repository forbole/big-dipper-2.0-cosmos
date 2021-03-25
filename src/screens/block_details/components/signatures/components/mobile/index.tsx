import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  Result,
  AvatarName,
} from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { useBlockContext } from '../../../../contexts/block';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const {
    item,
  } = useBlockContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();
  const classes = useStyles();

  const { signatures = [] } = item;

  const formatItems = signatures.map((x) => {
    return ({
      signed: (
        <Result success={x.signed} />
      ),
      validator: (
        <AvatarName
          address={x.validator.identity}
          imageUrl={x.validator.image}
          name={x.validator.moniker}
        />
      ),
      votingPower: x.votingPower,
    });
  });
  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={formatItems.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = formatItems[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      {/* single signature start */}
                      <div className={classes.itemWrapper}>
                        <div className={classes.item}>
                          <Typography variant="h4" className="label">
                            {t('validator')}
                          </Typography>
                          {selectedItem.validator}
                        </div>
                        <div className={classes.flex}>
                          <div className={classes.item}>
                            <Typography variant="h4" className="label">
                              {t('votingPower')}
                            </Typography>
                            <Typography variant="body1" className="value">
                              {selectedItem.votingPower}
                            </Typography>
                          </div>
                          <div className={classes.item}>
                            <Typography variant="h4" className="label">
                              {t('signed')}
                            </Typography>
                            {selectedItem.signed}
                          </div>
                        </div>
                      </div>
                      {/* single signature end */}
                      {index !== formatItems.length - 1 && <Divider />}
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
