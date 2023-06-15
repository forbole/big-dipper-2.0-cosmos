import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@/components/avatar';
import TextField from '@mui/material/TextField';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useValidatorFilterHook from '@/screens/validators/components/list/components/staking/validator_filter/hooks';
import type { ItemType } from '@/screens/validators/components/list/types';
import { getValidatorConditionClass } from '@/utils/get_validator_condition';
import Condition from '@/screens/validators/components/list/components/condition';

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
  const { filterOptions, handleOnChange, selectedOption } =
    useValidatorFilterHook(setValidatorAddress);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={({ validator }) => `${validator.name} (${validator.address})`}
      renderOption={(props, option) => {
        const condition =
          option.status === 3 ? getValidatorConditionClass(option.condition) : undefined;
        return (
          <span className={classes.validatorOptionSpan} key={option.validator.address} {...props}>
            <Avatar
              className={classes.avatar}
              address={option.validator.address}
              imageUrl={option.validator.imageUrl ?? undefined}
            />
            <MiddleEllipsis
              className={classes.text}
              content={option.validator.name || option.validator.address}
            />
            <Condition className={condition} />
          </span>
        );
      }}
      filterOptions={filterOptions}
      value={options.find((option) => option.validator.address === validatorAddress) || null}
      onChange={handleOnChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={!params.inputProps.value ? t('filterBarPlaceholder') : ''}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {params.InputProps.startAdornment}
                {params.inputProps.value && (
                  <Avatar
                    imageUrl={
                      options.find(
                        (option) =>
                          option.validator.name === selectedOption?.validator.name ??
                          params.inputProps.value
                      )?.validator.imageUrl ?? undefined
                    }
                    address={
                      options.find(
                        (option) =>
                          option.validator.address === selectedOption?.validator.address ??
                          params.inputProps.value
                      )?.validator.address ?? ''
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
