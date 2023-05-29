import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useValidatorFilterHook from '@/screens/validators/components/list/components/staking/validator_filter/hooks';

const ValidatorFilterInput: FC<any> = ({ options }) => {
  const { classes } = useStyles();
  const { t } = useAppTranslation('validators');
  const { filterOptions } = useValidatorFilterHook();

  return (
    <Autocomplete
      options={options}
      getOptionLabel={({ validator }) => validator.name}
      filterOptions={filterOptions}
      className={classes.validatorFilter}
      renderInput={(params) => <TextField {...params} label={t('validators filter label')} />}
    />
  );
};

export default ValidatorFilterInput;
