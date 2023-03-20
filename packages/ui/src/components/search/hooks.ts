import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

export const useSearch = (callback: (value: string, clear?: () => void) => void) => {
  const [value, setValue] = useState('');
  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
  };

  const handleSubmitOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
    callback(newValue);
  };

  const handleOnSubmit = () => {
    callback(value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const shift = e?.shiftKey;
    const isEnter = e?.keyCode === 13 || e?.key === 'Enter';
    if (isEnter && !shift) {
      e.preventDefault();
      callback(value);
    }
  };

  const clear = () => {
    setValue('');
  };

  return {
    handleOnChange,
    handleOnSubmit,
    value,
    handleKeyDown,
    handleSubmitOnChange,
  };
};
