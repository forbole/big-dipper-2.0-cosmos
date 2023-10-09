import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, LegacyRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import useStyles from '@/screens/block_details/components/signatures/components/mobile/styles';
import { useList, useListRow } from '@/hooks/use_react_window';
import AvatarName from '@/components/avatar_name';
import useValidatorConsensusAddressesList from '@/hooks/useValidatorConsensusAddressesList';
import { VALIDATOR_DETAILS } from '@/utils/go_to_page';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  signatures: string[] | undefined;
};

const ListItem: FC<ListItemProps> = ({ index, style, setRowHeight, signatures }) => {
  const { t } = useAppTranslation('blocks');
  const { classes } = useStyles();
  const { rowRef } = useListRow(index, setRowHeight);
  const selectedItem = signatures?.[index];
  const { profile } = useValidatorConsensusAddressesList(selectedItem ?? '');

  return (
    <div style={style}>
      <div ref={rowRef}>
        {/* single signature start */}
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('validator')}
            </Typography>
            <AvatarName
              address={profile?.address ?? ''}
              imageUrl={profile?.imageUrl}
              name={profile?.name ?? ''}
              href={VALIDATOR_DETAILS}
            />
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
                key={index}
                index={index}
                style={style}
                setRowHeight={setRowHeight}
                signatures={signatures}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
