const useAvatarNameFilterHook = () => {
  const filterOptions = (options: AvatarName[], { inputValue }: { inputValue: string }) => {
    const filteredOptions = options.filter((opt) => {
      const address = opt.address.toLowerCase().replace(/ /g, '');
      const name = opt.name.toLowerCase().replace(/ /g, '');
      const searchValue = inputValue.toLowerCase().replace(/ /g, '');

      return address.includes(searchValue) || name.includes(searchValue);
    });
    return filteredOptions;
  };

  return {
    filterOptions,
  };
};

export default useAvatarNameFilterHook;
