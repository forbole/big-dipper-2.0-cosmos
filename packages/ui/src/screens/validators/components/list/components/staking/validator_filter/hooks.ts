import type { ItemType } from '@/screens/validators/components/list/types';

const useValidatorFilterHook = () => {
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
  };
};

export default useValidatorFilterHook;
