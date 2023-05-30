import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@/components/avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useValidatorFilterHook from '@/screens/validators/components/list/components/staking/validator_filter/hooks';
import type { ItemType } from '@/screens/validators/components/list/types';

interface ValidatorFilterInputProps {
  options: ItemType[];
  setValidatorAddress: (address: string) => void;
  validatorAddress: string;
}

const ValidatorFilterInput: FC<ValidatorFilterInputProps> = ({
  options,
  setValidatorAddress,
  validatorAddress,
}) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('validators');
  const { filterOptions } = useValidatorFilterHook();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnChange = (_: React.ChangeEvent<any>, value: ItemType | null) => {
    if (value) {
      setValidatorAddress(value.validator.address);
    } else {
      setValidatorAddress('');
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={({ validator }) => validator.name}
      renderOption={(props, option) => (
        <Box className={classes.validatorOption}>
          <span className={classes.validatorOptionSpan} {...props}>
            <Avatar
              className={classes.avatar}
              address={option.validator.address}
              imageUrl={option.validator.imageUrl ?? undefined}
            />
            <MiddleEllipsis className={classes.text} content={option.validator.name} />
          </span>
        </Box>
      )}
      filterOptions={filterOptions}
      className={classes.validatorFilter}
      value={options.find((option) => option.validator.address === validatorAddress) || null}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!params.inputProps.value ? t('validators filter label') : ''}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {params.InputProps.startAdornment}
                {params.inputProps.value && (
                  <Avatar
                    imageUrl={
                      options.find((option) => option.validator.name === params.inputProps.value)
                        ?.validator.imageUrl ?? undefined
                    }
                    address={
                      options.find((option) => option.validator.address === params.inputProps.value)
                        ?.validator.address ?? ''
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

export default ValidatorFilterInput;
