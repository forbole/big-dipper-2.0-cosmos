export const useSearchBar = () => {
  const handleOnSubmit = (value: string) => {
    console.log(value, 'value on submit');
  };

  return {
    handleOnSubmit,
  };
};
