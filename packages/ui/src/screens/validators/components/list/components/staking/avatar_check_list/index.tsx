import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AvatarName from '@/components/avatar_name';
import useShallowMemo from '@/hooks/useShallowMemo';
import { formatNumber, formatToken } from '@/utils/format_token';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useAvatarCheckListHook from '@/screens/validators/components/list/components/staking/avatar_check_list/hooks';
import type { ValidatorsAvatarNameType } from '@/screens/validators/components/list/types';

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
  classes: ReturnType<typeof useStyles>['classes'];
  selectedItems: ValidatorsAvatarNameType[];
  handleSelectAllChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectAll: boolean;
  items: ValidatorsAvatarNameType[];
  totalRewards: string;
};

const FirstRow: React.FC<FirstListItemProps> = ({
  index,
  style,
  classes,
  selectedItems,
  handleSelectAllChange,
  selectAll,
  totalRewards,
  items,
}) => {
  console.log('totalRewards', totalRewards);
  return (
    <ListItem key={index} style={style}>
      <ListItemIcon>
        <Checkbox checked={selectAll} onChange={handleSelectAllChange} />
      </ListItemIcon>
      <ListItemText primary="Select All" />
    </ListItem>
  );
};

// eslint-disable-next-line arrow-body-style
const Row: React.FC<ListItemProps> = ({
  key,
  index,
  style,
  classes,
  item,
  handleItemSelect,
  selectedItems,
}) => {
  const tokenDenomFormat = formatToken(item.coins.amount, item.coins.denom);
  const amountDisplay = `${formatNumber(tokenDenomFormat.value, tokenDenomFormat.exponent)}`;
  return (
    <ListItem key={item.validator.address} style={style} onClick={() => handleItemSelect(item)}>
      <ListItemIcon>
        <Checkbox checked={selectedItems.includes(item)} />
      </ListItemIcon>
      <div className={classes.checklistItem}>
        <AvatarName
          className={classes.avatar}
          name={item.validator.name}
          address={item.validator.address}
          imageUrl={item.validator.imageUrl || undefined}
        />
        <Typography className={classes.subtitle} align="right">
          <div className={classes.amountLabel}>{amountDisplay}</div>
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
  const { classes } = useStyles();
  const listMemo = useShallowMemo(list);
  const { selectAll, selectedItems, handleSelectAllChange, handleItemSelect } =
    useAvatarCheckListHook({ list: listMemo, setValidatorAvatarAddress, validatorAvatarAddress });
  return (
    <Box
      className={className}
      sx={{ width: '100%', height: 324, maxWidth: '100%', bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={324}
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
                selectedItems={selectedItems}
                handleSelectAllChange={handleSelectAllChange}
                selectAll={selectAll}
                items={listMemo}
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
