import {
  ValidatorType as ValidatorTypeBase,
  ValidatorsState as ValidatorsStateBase,
  ItemType,
} from 'ui/src/screens/validators/components/list/types';

type ValidatorType = ValidatorTypeBase & {
  consumerOperatorAddress: string;
};

type ValidatorsState = Omit<ValidatorsStateBase, 'items'> & {
  items: ValidatorType[];
};

export type { ItemType, ValidatorType, ValidatorsState };
