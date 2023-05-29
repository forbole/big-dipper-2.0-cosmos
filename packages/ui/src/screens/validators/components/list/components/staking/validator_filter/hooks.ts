import type { ItemType } from '@/screens/validators/components/list/types';

const useValidatorFilterHook = () => {
  const filterOptions = (options: ItemType[], { inputValue }: { inputValue: string }) => {
    const filteredOptions = options.filter(({ validator }) => {
      const address = validator.address.toLowerCase();
      const name = validator.name.toLowerCase();
      const searchValue = inputValue.toLowerCase();

      return address.includes(searchValue) || name.includes(searchValue);
    });
    return filteredOptions;
  };

  return {
    filterOptions,
  };
};

export default useValidatorFilterHook;
