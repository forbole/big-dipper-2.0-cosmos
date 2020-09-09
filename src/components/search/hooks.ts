import { useState } from 'react';

export const useSearch = (callback: (value: string) => void) => {
  const [value, setValue] = useState('');
  const handleOnChange = (e:any) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
  };

  const handleOnSubmit = () => {
    callback(value);
  };

  const handleKeyDown = (e:any) => {
    const shift = e?.shiftKey;
    const isEnter = e?.keyCode === 13 || e?.key === 'Enter';
    if (isEnter && !shift) {
      e.preventDefault();
      callback(value);
    }
  };

  return {
    handleOnChange,
    handleOnSubmit,
    value,
    handleKeyDown,
  };
};
