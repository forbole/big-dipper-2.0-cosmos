import AvatarName from '@/components/avatar_name';
import React, { ReactNode } from 'react';

export const columns: {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'validator',
    width: 100,
  },
];

export const formatRows = (data: AvatarName[]) =>
  data.map((x): { [key: string]: ReactNode } => ({
    validator: <AvatarName address={x.address} imageUrl={x.imageUrl} name={x.name} />,
  }));
