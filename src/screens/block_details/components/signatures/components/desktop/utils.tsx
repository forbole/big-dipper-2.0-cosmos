import { AvatarName } from '@components';
import { useProfileRecoil } from '@recoil/profiles';

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

export const formatRows = (data: string[]) => {
  return data.map((x) => {
    // const signature = useProfileRecoil(x);

    return (
      {
        validator: (
          <AvatarName
            address={x}
            imageUrl=""
            name=""
            // imageUrl={signature.imageUrl}
            // name={signature.moniker}
          />
        ),
      }
    );
  });
};
