import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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
      filterOptions={filterOptions}
      className={classes.validatorFilter}
      value={options.find((option) => option.validator.address === validatorAddress) || null}
      onChange={handleOnChange}
      renderInput={(params) => <TextField {...params} label={t('validators filter label')} />}
    />
  );
};

export default ValidatorFilterInput;
