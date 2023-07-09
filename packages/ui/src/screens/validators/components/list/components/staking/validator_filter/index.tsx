import { FC, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@/components/avatar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import MiddleEllipsis from '@/components/MiddleEllipsis';
import useAppTranslation from '@/hooks/useAppTranslation';
import useStyles from '@/screens/validators/components/list/components/staking/styles';
import useValidatorFilterHook from '@/screens/validators/components/list/components/staking/validator_filter/hooks';
import type { ItemType } from '@/screens/validators/components/list/types';
import { getValidatorConditionClass } from '@/utils/get_validator_condition';
import ContributionIcon from 'shared-utils/assets/icon-contribution.svg';
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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <Autocomplete
      options={options}
      getOptionLabel={({ validator }) => `${validator.name} (${validator.address})`}
      renderOption={(props, option) => {
        const condition =
          option.status === 3 ? getValidatorConditionClass(option.condition) : undefined;
        return (
          <span
            className={classes.validatorOptionSpan}
            key={option.validator.address}
            {...props}
            onMouseEnter={() => setIsTooltipOpen(true)}
            onMouseLeave={() => setIsTooltipOpen(false)}
          >
            <div className={classes.dropdownListItem}>
              <Avatar
                className={classes.avatar}
                address={option.validator.address}
                imageUrl={option.validator.imageUrl ?? undefined}
              />
              <MiddleEllipsis
                className={classes.text}
                content={option.validator.name || option.validator.address}
              />
              {option.validator.name.toLowerCase() === 'forbole' && (
                <Tooltip
                  TransitionComponent={Zoom}
                  title={<pre>Frobole is the main contributor of Big Dipper</pre>}
                  placement="bottom"
                  arrow
                  PopperProps={{ className: classes.popper }}
                  slotProps={{ tooltip: { className: classes.tooltip } }}
                  open={isTooltipOpen}
                  className={classes.tooltipIcon}
                >
                  <ContributionIcon />
                </Tooltip>
              )}
            </div>
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
