import { AvatarName } from '@components';
import { Signatures } from '../../types';

export const columns:{
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
}[] = [
  {
    key: 'validator',
    width: 100,
  },
];

export const formatRows = (data: Signatures[]) => {
  return data.map((x) => {
    return (
      {
        validator: (
          <AvatarName
            address={x.address}
            imageUrl={x.imageUrl}
            name={x.moniker}
          />
        ),
      }
    );
  });
};
