import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import useAppTranslation, { TFunction } from '@/hooks/useAppTranslation';
import AvatarName from '@/components/avatar_name';
import useShallowMemo from '@/hooks/useShallowMemo';
import { formatNumber, formatToken } from '@/utils/format_token';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useAvatarCheckListHook from '@/screens/validators/components/list/components/staking/avatar_check_list/hooks';
import type { ValidatorsAvatarNameType } from '@/screens/validators/components/list/types';
import AllValIcon from 'shared-utils/assets/icon-all-validator.svg';

export interface AvatarCheckListProps {
  list: ValidatorsAvatarNameType[];
  setValidatorAvatarAddress: (addresses: string[]) => void;
  validatorAvatarAddress: string[];
  totalRewards?: string;
  className?: string;
}

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  classes: ReturnType<typeof useStyles>['classes'];
  item: ValidatorsAvatarNameType;
  handleItemSelect: (item: ValidatorsAvatarNameType) => void;
  selectedItems: ValidatorsAvatarNameType[];
};

type FirstListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  t: TFunction;
  classes: ReturnType<typeof useStyles>['classes'];
  handleSelectAllChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectAll: boolean;
  totalRewards: string;
};

const FirstRow: React.FC<FirstListItemProps> = ({
  t,
  index,
  style,
  classes,
  handleSelectAllChange,
  selectAll,
  totalRewards,
}) => (
  <ListItem key={index} style={style}>
    <ListItemIcon>
      <Checkbox className={classes.checkbox} checked={selectAll} onChange={handleSelectAllChange} />
    </ListItemIcon>
    <div className={classes.checklistItem}>
      <AllValIcon />
      <ListItemText primary={t('allValidators')} />
      <Typography align="right">
        <div className={classes.amountSubLabel}>{totalRewards}</div>
      </Typography>
    </div>
  </ListItem>
);

// eslint-disable-next-line arrow-body-style
const Row: React.FC<ListItemProps> = ({
  style,
  classes,
  item,
  handleItemSelect,
  selectedItems,
}) => {
  const tokenDenomFormat = formatToken(item.coins.amount, item.coins.denom);
  const amountDisplay = `${formatNumber(
    tokenDenomFormat.value,
    tokenDenomFormat.exponent
  )} ${tokenDenomFormat.displayDenom.toUpperCase()}`;
  return (
    <ListItem key={item.validator.address} style={style} onClick={() => handleItemSelect(item)}>
      <ListItemIcon>
        <Checkbox className={classes.checkbox} checked={selectedItems.includes(item)} />
      </ListItemIcon>
      <div className={classes.checklistItem}>
        <AvatarName
          className={classes.avatar}
          name={item.validator.name}
          address={item.validator.address}
          imageUrl={item.validator.imageUrl || undefined}
          omitEnd
        />
        <Typography align="right">
          <div className={classes.amountSubLabel}>{amountDisplay}</div>
        </Typography>
      </div>
    </ListItem>
  );
};

const AvatarCheckList: React.FC<AvatarCheckListProps> = ({
  list,
  className,
  setValidatorAvatarAddress,
  validatorAvatarAddress,
  totalRewards,
}) => {
  const { t } = useAppTranslation('validators');
  const { classes } = useStyles();
  const listMemo = useShallowMemo(list);
  const { selectAll, selectedItems, handleSelectAllChange, handleItemSelect } =
    useAvatarCheckListHook({ list: listMemo, setValidatorAvatarAddress, validatorAvatarAddress });
  return (
    <Box
      className={className}
      sx={{ width: '100%', height: 280, maxWidth: '100%', bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={280}
        width="100%"
        itemSize={46}
        itemCount={listMemo.length + 1}
        overscanCount={5}
      >
        {({ index, style }) => {
          if (index === 0) {
            return (
              <FirstRow
                index={index}
                style={style}
                classes={classes}
                handleSelectAllChange={handleSelectAllChange}
                selectAll={selectAll}
                t={t}
                totalRewards={totalRewards ?? '0'}
              />
            );
          }
          return (
            <Row
              key={listMemo[index - 1].validator.address}
              index={index}
              style={style}
              item={listMemo[index - 1]}
              classes={classes}
              handleItemSelect={handleItemSelect}
              selectedItems={selectedItems}
            />
          );
        }}
      </FixedSizeList>
    </Box>
  );
};

export default AvatarCheckList;
