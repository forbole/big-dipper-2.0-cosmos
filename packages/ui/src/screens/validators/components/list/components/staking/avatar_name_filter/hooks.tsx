import * as React from 'react';

const useAvatarNameFilterHook = (setValidatorAvatarAddress: (address: string) => void) => {
  const [selectedOption, setSelectedOption] = React.useState<AvatarName | null>(null);

  const handleOnChange = (_: React.ChangeEvent<any>, value: AvatarName | null) => {
    setSelectedOption(value);
    if (value) {
      setValidatorAvatarAddress(value.address);
    } else {
      setValidatorAvatarAddress('');
    }
  };

  const filterOptions = (
    options: (AvatarName & { condition: number; status: number })[],
    { inputValue }: { inputValue: string }
  ) => {
    const filteredOptions = options.filter((opt) => {
      const address = opt.address.toLowerCase().replace(/ /g, '');
      const name = opt.name.toLowerCase().replace(/ /g, '');
      const searchValue = inputValue.toLowerCase().replace(/ /g, '');

      return address.includes(searchValue) || name.includes(searchValue);
    });
    return filteredOptions;
  };

  return {
    selectedOption,
    handleOnChange,
    filterOptions,
  };
};

export default useAvatarNameFilterHook;
