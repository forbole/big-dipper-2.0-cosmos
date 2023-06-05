import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@/components/avatar';
import TextField from '@mui/material/TextField';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useAvatarNameFilterHook from '@/screens/validators/components/list/components/staking/avatar_name_filter/hooks';

interface AvatarNameFilterInputProps {
  options: AvatarName[];
  setValidatorAvatarAddress: (address: string) => void;
  validatorAvatarAddress: string;
}

const AvatarNameFilterInput: FC<AvatarNameFilterInputProps> = ({
  options,
  setValidatorAvatarAddress,
  validatorAvatarAddress,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('validators');
  const { filterOptions } = useAvatarNameFilterHook();

  const handleOnChange = (_: React.ChangeEvent<any>, value: AvatarName | null) => {
    if (value) {
      setValidatorAvatarAddress(value.address);
    } else {
      setValidatorAvatarAddress('');
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <span className={classes.validatorOptionSpan} {...props}>
          <Avatar
            className={classes.avatar}
            address={option.address}
            imageUrl={option.imageUrl || undefined}
          />
          <MiddleEllipsis className={classes.text} content={option.name} />
        </span>
      )}
      filterOptions={filterOptions}
      value={options.find((option) => option.address === validatorAvatarAddress) || null}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!params.inputProps.value ? t('validators') : ''}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {params.InputProps.startAdornment}
                {params.inputProps.value && (
                  <Avatar
                    imageUrl={
                      options.find((option) => option.name === params.inputProps.value)?.imageUrl ||
                      undefined
                    }
                    address={
                      options.find((option) => option.address === params.inputProps.value)
                        ?.address || ''
                    }
                  />
                )}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default AvatarNameFilterInput;
