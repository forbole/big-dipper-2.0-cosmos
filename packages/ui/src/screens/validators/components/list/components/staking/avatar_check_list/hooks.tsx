import * as React from 'react';
import type { ValidatorsAvatarNameType } from '@/screens/validators/components/list/types';
import type { AvatarCheckListProps } from '@/screens/validators/components/list/components/staking/avatar_check_list';

const useAvatarCheckListHook = ({
  list,
  setValidatorAvatarAddress,
  validatorAvatarAddress,
}: AvatarCheckListProps) => {
  const [selectAll, setSelectAll] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<ValidatorsAvatarNameType[]>([]);

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(event.target.checked);
    if (event.target.checked) {
      // Select all items
      setSelectedItems(list.map((item) => item));
      setValidatorAvatarAddress(list.map((item) => item.validator.address));
    } else {
      // Deselect all items
      setSelectAll(event.target.checked);
      setSelectedItems([]);
      setValidatorAvatarAddress([]);
    }
  };

  const handleItemSelect = (item: ValidatorsAvatarNameType) => {
    setSelectAll((prev) => prev);
    if (selectedItems.includes(item)) {
      // Item is already selected, remove it from selectedItems
      setSelectedItems(selectedItems.filter((i) => i.validator.address !== item.validator.address));
      setValidatorAvatarAddress(validatorAvatarAddress.filter((i) => i !== item.validator.address));
    } else {
      // Item is not selected, add it to selectedItems
      setSelectedItems([...selectedItems, item]);
      setValidatorAvatarAddress([...validatorAvatarAddress, item.validator.address]);
    }
  };

  return {
    selectAll,
    selectedItems,
    handleSelectAllChange,
    handleItemSelect,
  };
};

export default useAvatarCheckListHook;
