import * as React from 'react';
import type { ItemType } from '@/screens/validators/components/list/types';

const useValidatorFilterHook = (setValidatorAddress: (address: string) => void) => {
  const [selectedOption, setSelectedOption] = React.useState<ItemType | null>(null);

  const handleOnChange = (_: React.ChangeEvent<any>, value: ItemType | null) => {
    setSelectedOption(value);
    if (value) {
      setValidatorAddress(value.validator.address);
    } else {
      setValidatorAddress('');
    }
  };

  const filterOptions = (options: ItemType[], { inputValue }: { inputValue: string }) => {
    const filteredOptions = options.filter(({ validator }) => {
      const address = validator.address.toLowerCase().replace(/ /g, '');
      const name = validator.name.toLowerCase().replace(/ /g, '');
      const searchValue = inputValue.toLowerCase().replace(/ /g, '');

      return address.includes(searchValue) || name.includes(searchValue);
    });
    return filteredOptions;
  };

  return {
    filterOptions,
    handleOnChange,
    selectedOption,
  };
};

export default useValidatorFilterHook;
