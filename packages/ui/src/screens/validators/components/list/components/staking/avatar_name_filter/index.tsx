import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@/components/avatar';
import TextField from '@mui/material/TextField';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useAvatarNameFilterHook from '@/screens/validators/components/list/components/staking/avatar_name_filter/hooks';
import { getValidatorConditionClass } from '@/utils/get_validator_condition';
import Condition from '@/screens/validators/components/list/components/condition';

interface AvatarNameFilterInputProps {
  options: (AvatarName & { condition: number; status: number })[];
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
  const { filterOptions, handleOnChange, selectedOption } =
    useAvatarNameFilterHook(setValidatorAvatarAddress);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        const condition =
          option.status === 3 ? getValidatorConditionClass(option.condition) : undefined;
        return (
          <span className={classes.validatorOptionSpan} {...props}>
            <Avatar
              className={classes.avatar}
              address={option.address}
              imageUrl={option.imageUrl || undefined}
            />
            <MiddleEllipsis className={classes.text} content={option.name} />
            <Condition className={condition} />
          </span>
        );
      }}
      filterOptions={filterOptions}
      value={options.find((option) => option.address === validatorAvatarAddress) || null}
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
                        (option) => option.name === selectedOption?.name ?? params.inputProps.value
                      )?.imageUrl || undefined
                    }
                    address={
                      options.find(
                        (option) =>
                          option.address === selectedOption?.address ?? params.inputProps.value
                      )?.address || ''
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
