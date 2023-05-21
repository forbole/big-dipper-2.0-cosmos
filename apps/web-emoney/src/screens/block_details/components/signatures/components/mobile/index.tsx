import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, LegacyRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import useStyles from '@/screens/block_details/components/signatures/components/mobile/styles';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useList, useListRow } from '@/hooks/use_react_window';
import AvatarName from '@/components/avatar_name';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  signatures: string[] | undefined;
  classes: ReturnType<typeof useStyles>['classes'];
};

const ListItem: FC<ListItemProps> = ({ index, style, setRowHeight, signatures, classes }) => {
  const { t } = useAppTranslation('blocks');
  const { rowRef } = useListRow(index, setRowHeight);
  const selectedItem = signatures?.[index];
  const { address, imageUrl, name } = useProfileRecoil(selectedItem ?? '');

  return (
    <div style={style}>
      <div ref={rowRef}>
        {/* single signature start */}
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('validator')}
            </Typography>
            <AvatarName address={address ?? ''} imageUrl={imageUrl} name={name ?? ''} />
          </div>
        </div>
        {/* single signature end */}
        {!!signatures && index !== signatures.length - 1 && <Divider />}
      </div>
    </div>
  );
};

type MobileProps = {
  className?: string;
  signatures?: string[];
};

const Mobile: FC<MobileProps> = ({ className, signatures }) => {
  const { listRef, getRowHeight, setRowHeight } = useList();
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height ?? 0}
            itemCount={signatures?.length ?? 0}
            itemSize={getRowHeight}
            ref={listRef as LegacyRef<List>}
            width={width ?? 0}
          >
            {({ index, style }) => (
              <ListItem
                key={signatures?.[index]}
                index={index}
                style={style}
                setRowHeight={setRowHeight}
                signatures={signatures}
                classes={classes}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
