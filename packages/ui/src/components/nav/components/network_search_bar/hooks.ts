import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';
import { TFunction } from 'next-i18next';
import { useRouter } from 'next/router';

export const useSearch = (callback: (value: string, clear?: () => void) => void) => {
  const [value, setValue] = useState('');
  const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e?.target?.value ?? '';
    setValue(newValue);
  };

  const handleOnSubmit = () => {
    callback(value, clear);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const shift = e?.shiftKey;
    const isEnter = e?.keyCode === 13 || e?.key === 'Enter';
    if (isEnter && !shift) {
      e.preventDefault();
      callback(value, clear);
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
  };
};

export const useSearchBar = (t: TFunction, networks: any) => {
  const router = useRouter();

  const handleOnSubmit = () => {
    //do something
  };

  return {
    handleOnSubmit,
  };
};
