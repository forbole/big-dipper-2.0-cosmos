import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _int8: any;
  _text: any;
  account_balance_scalar: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_int8". All fields are combined with logical 'AND'. */
export type _Int8_Comparison_Exp = {
  _eq?: Maybe<Scalars['_int8']>;
  _gt?: Maybe<Scalars['_int8']>;
  _gte?: Maybe<Scalars['_int8']>;
  _in?: Maybe<Array<Scalars['_int8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_int8']>;
  _lte?: Maybe<Scalars['_int8']>;
  _neq?: Maybe<Scalars['_int8']>;
  _nin?: Maybe<Array<Scalars['_int8']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  /** An object relationship */
  account_balance: Account_Balance;
  /** An array relationship */
  account_key_lists: Array<Account_Key_List>;
  /** An aggregate relationship */
  account_key_lists_aggregate: Account_Key_List_Aggregate;
  address: Scalars['String'];
  /** An array relationship */
  delegator_accounts: Array<Delegator_Account>;
  /** An aggregate relationship */
  delegator_accounts_aggregate: Delegator_Account_Aggregate;
  /** An object relationship */
  locked_account: Locked_Account;
  /** An array relationship */
  staker_node_ids: Array<Staker_Node_Id>;
  /** An aggregate relationship */
  staker_node_ids_aggregate: Staker_Node_Id_Aggregate;
};

/** columns and relationships of "account" */
export type AccountAccount_Key_ListsArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountAccount_Key_Lists_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountDelegator_AccountsArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountDelegator_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountStaker_Node_IdsArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

/** columns and relationships of "account" */
export type AccountStaker_Node_Ids_AggregateArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "account_balance" */
export type Account_Balance = {
  __typename?: 'account_balance';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  balance: Scalars['bigint'];
  code: Scalars['String'];
  contract_map?: Maybe<Scalars['jsonb']>;
  height: Scalars['bigint'];
};

/** columns and relationships of "account_balance" */
export type Account_BalanceContract_MapArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "account_balance" */
export type Account_Balance_Aggregate = {
  __typename?: 'account_balance_aggregate';
  aggregate?: Maybe<Account_Balance_Aggregate_Fields>;
  nodes: Array<Account_Balance>;
};

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_Fields = {
  __typename?: 'account_balance_aggregate_fields';
  avg?: Maybe<Account_Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Balance_Max_Fields>;
  min?: Maybe<Account_Balance_Min_Fields>;
  stddev?: Maybe<Account_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Balance_Sum_Fields>;
  var_pop?: Maybe<Account_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Balance_Var_Samp_Fields>;
  variance?: Maybe<Account_Balance_Variance_Fields>;
};

/** aggregate fields of "account_balance" */
export type Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Balance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Balance_Avg_Fields = {
  __typename?: 'account_balance_avg_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Account_Balance_Bool_Exp>>;
  _not?: Maybe<Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Account_Balance_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Bigint_Comparison_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contract_map?: Maybe<Jsonb_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Balance_Max_Fields = {
  __typename?: 'account_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
  code?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Account_Balance_Min_Fields = {
  __typename?: 'account_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
  code?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
  account?: Maybe<Account_Order_By>;
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  code?: Maybe<Order_By>;
  contract_map?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Code = 'code',
  /** column name */
  ContractMap = 'contract_map',
  /** column name */
  Height = 'height',
}

/** aggregate stddev on columns */
export type Account_Balance_Stddev_Fields = {
  __typename?: 'account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Balance_Sum_Fields = {
  __typename?: 'account_balance_sum_fields';
  balance?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

export type Account_Balance_Tokens_Prices_Args = {
  account_balance_row?: Maybe<Scalars['account_balance_scalar']>;
};

/** aggregate var_pop on columns */
export type Account_Balance_Var_Pop_Fields = {
  __typename?: 'account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Balance_Var_Samp_Fields = {
  __typename?: 'account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Balance_Variance_Fields = {
  __typename?: 'account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: Maybe<Array<Account_Bool_Exp>>;
  _not?: Maybe<Account_Bool_Exp>;
  _or?: Maybe<Array<Account_Bool_Exp>>;
  account_balance?: Maybe<Account_Balance_Bool_Exp>;
  account_key_lists?: Maybe<Account_Key_List_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  delegator_accounts?: Maybe<Delegator_Account_Bool_Exp>;
  locked_account?: Maybe<Locked_Account_Bool_Exp>;
  staker_node_ids?: Maybe<Staker_Node_Id_Bool_Exp>;
};

/** columns and relationships of "account_key_list" */
export type Account_Key_List = {
  __typename?: 'account_key_list';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  hash_algo: Scalars['String'];
  index: Scalars['bigint'];
  public_key: Scalars['String'];
  revoked: Scalars['Boolean'];
  sequence_number: Scalars['bigint'];
  sig_algo: Scalars['String'];
  weight: Scalars['String'];
};

/** aggregated selection of "account_key_list" */
export type Account_Key_List_Aggregate = {
  __typename?: 'account_key_list_aggregate';
  aggregate?: Maybe<Account_Key_List_Aggregate_Fields>;
  nodes: Array<Account_Key_List>;
};

/** aggregate fields of "account_key_list" */
export type Account_Key_List_Aggregate_Fields = {
  __typename?: 'account_key_list_aggregate_fields';
  avg?: Maybe<Account_Key_List_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Key_List_Max_Fields>;
  min?: Maybe<Account_Key_List_Min_Fields>;
  stddev?: Maybe<Account_Key_List_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Key_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Key_List_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Key_List_Sum_Fields>;
  var_pop?: Maybe<Account_Key_List_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Key_List_Var_Samp_Fields>;
  variance?: Maybe<Account_Key_List_Variance_Fields>;
};

/** aggregate fields of "account_key_list" */
export type Account_Key_List_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Key_List_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account_key_list" */
export type Account_Key_List_Aggregate_Order_By = {
  avg?: Maybe<Account_Key_List_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Account_Key_List_Max_Order_By>;
  min?: Maybe<Account_Key_List_Min_Order_By>;
  stddev?: Maybe<Account_Key_List_Stddev_Order_By>;
  stddev_pop?: Maybe<Account_Key_List_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Account_Key_List_Stddev_Samp_Order_By>;
  sum?: Maybe<Account_Key_List_Sum_Order_By>;
  var_pop?: Maybe<Account_Key_List_Var_Pop_Order_By>;
  var_samp?: Maybe<Account_Key_List_Var_Samp_Order_By>;
  variance?: Maybe<Account_Key_List_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Account_Key_List_Avg_Fields = {
  __typename?: 'account_key_list_avg_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account_key_list" */
export type Account_Key_List_Avg_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account_key_list". All fields are combined with a logical 'AND'. */
export type Account_Key_List_Bool_Exp = {
  _and?: Maybe<Array<Account_Key_List_Bool_Exp>>;
  _not?: Maybe<Account_Key_List_Bool_Exp>;
  _or?: Maybe<Array<Account_Key_List_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  hash_algo?: Maybe<String_Comparison_Exp>;
  index?: Maybe<Bigint_Comparison_Exp>;
  public_key?: Maybe<String_Comparison_Exp>;
  revoked?: Maybe<Boolean_Comparison_Exp>;
  sequence_number?: Maybe<Bigint_Comparison_Exp>;
  sig_algo?: Maybe<String_Comparison_Exp>;
  weight?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Key_List_Max_Fields = {
  __typename?: 'account_key_list_max_fields';
  address?: Maybe<Scalars['String']>;
  hash_algo?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  public_key?: Maybe<Scalars['String']>;
  sequence_number?: Maybe<Scalars['bigint']>;
  sig_algo?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "account_key_list" */
export type Account_Key_List_Max_Order_By = {
  address?: Maybe<Order_By>;
  hash_algo?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  public_key?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
  sig_algo?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Key_List_Min_Fields = {
  __typename?: 'account_key_list_min_fields';
  address?: Maybe<Scalars['String']>;
  hash_algo?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['bigint']>;
  public_key?: Maybe<Scalars['String']>;
  sequence_number?: Maybe<Scalars['bigint']>;
  sig_algo?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "account_key_list" */
export type Account_Key_List_Min_Order_By = {
  address?: Maybe<Order_By>;
  hash_algo?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  public_key?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
  sig_algo?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "account_key_list". */
export type Account_Key_List_Order_By = {
  account?: Maybe<Account_Order_By>;
  address?: Maybe<Order_By>;
  hash_algo?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  public_key?: Maybe<Order_By>;
  revoked?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
  sig_algo?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** select columns of table "account_key_list" */
export enum Account_Key_List_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  HashAlgo = 'hash_algo',
  /** column name */
  Index = 'index',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Revoked = 'revoked',
  /** column name */
  SequenceNumber = 'sequence_number',
  /** column name */
  SigAlgo = 'sig_algo',
  /** column name */
  Weight = 'weight',
}

/** aggregate stddev on columns */
export type Account_Key_List_Stddev_Fields = {
  __typename?: 'account_key_list_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account_key_list" */
export type Account_Key_List_Stddev_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Key_List_Stddev_Pop_Fields = {
  __typename?: 'account_key_list_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account_key_list" */
export type Account_Key_List_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Key_List_Stddev_Samp_Fields = {
  __typename?: 'account_key_list_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account_key_list" */
export type Account_Key_List_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Key_List_Sum_Fields = {
  __typename?: 'account_key_list_sum_fields';
  index?: Maybe<Scalars['bigint']>;
  sequence_number?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "account_key_list" */
export type Account_Key_List_Sum_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Account_Key_List_Var_Pop_Fields = {
  __typename?: 'account_key_list_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account_key_list" */
export type Account_Key_List_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Key_List_Var_Samp_Fields = {
  __typename?: 'account_key_list_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account_key_list" */
export type Account_Key_List_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Key_List_Variance_Fields = {
  __typename?: 'account_key_list_variance_fields';
  index?: Maybe<Scalars['Float']>;
  sequence_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account_key_list" */
export type Account_Key_List_Variance_Order_By = {
  index?: Maybe<Order_By>;
  sequence_number?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_balance?: Maybe<Account_Balance_Order_By>;
  account_key_lists_aggregate?: Maybe<Account_Key_List_Aggregate_Order_By>;
  address?: Maybe<Order_By>;
  delegator_accounts_aggregate?: Maybe<Delegator_Account_Aggregate_Order_By>;
  locked_account?: Maybe<Locked_Account_Order_By>;
  staker_node_ids_aggregate?: Maybe<Staker_Node_Id_Aggregate_Order_By>;
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address',
}

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_From_Genesis>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_From_Genesis_Variance_Fields>;
};

/** aggregate fields of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
}

/** aggregate stddev on columns */
export type Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'average_block_time_per_day_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Day>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Day_Variance_Fields>;
};

/** aggregate fields of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Hour>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Hour_Variance_Fields>;
};

/** aggregate fields of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
};

/** aggregated selection of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Average_Block_Time_Per_Minute>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Average_Block_Time_Per_Minute_Variance_Fields>;
};

/** aggregate fields of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: Maybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
}

/** aggregate stddev on columns */
export type Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  /** An array relationship */
  block_seals: Array<Block_Seal>;
  /** An aggregate relationship */
  block_seals_aggregate: Block_Seal_Aggregate;
  collection_guarantees: Scalars['jsonb'];
  /** An array relationship */
  collections: Array<Collection>;
  /** An aggregate relationship */
  collections_aggregate: Collection_Aggregate;
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['String'];
  parent_id: Scalars['String'];
  timestamp: Scalars['timestamp'];
  /** An array relationship */
  transaction_results: Array<Transaction_Result>;
  /** An aggregate relationship */
  transaction_results_aggregate: Transaction_Result_Aggregate;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};

/** columns and relationships of "block" */
export type BlockBlock_SealsArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockBlock_Seals_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockCollection_GuaranteesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "block" */
export type BlockCollectionsArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockEventsArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockTransaction_ResultsArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockTransaction_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "block" */
export type BlockTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "block" */
export type Block_Aggregate = {
  __typename?: 'block_aggregate';
  aggregate?: Maybe<Block_Aggregate_Fields>;
  nodes: Array<Block>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_Fields = {
  __typename?: 'block_aggregate_fields';
  avg?: Maybe<Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Max_Fields>;
  min?: Maybe<Block_Min_Fields>;
  stddev?: Maybe<Block_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Sum_Fields>;
  var_pop?: Maybe<Block_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Var_Samp_Fields>;
  variance?: Maybe<Block_Variance_Fields>;
};

/** aggregate fields of "block" */
export type Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Block_Avg_Fields = {
  __typename?: 'block_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: Maybe<Array<Block_Bool_Exp>>;
  _not?: Maybe<Block_Bool_Exp>;
  _or?: Maybe<Array<Block_Bool_Exp>>;
  block_seals?: Maybe<Block_Seal_Bool_Exp>;
  collection_guarantees?: Maybe<Jsonb_Comparison_Exp>;
  collections?: Maybe<Collection_Bool_Exp>;
  events?: Maybe<Event_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  parent_id?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  transaction_results?: Maybe<Transaction_Result_Bool_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  block_seals_aggregate?: Maybe<Block_Seal_Aggregate_Order_By>;
  collection_guarantees?: Maybe<Order_By>;
  collections_aggregate?: Maybe<Collection_Aggregate_Order_By>;
  events_aggregate?: Maybe<Event_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  transaction_results_aggregate?: Maybe<Transaction_Result_Aggregate_Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
};

/** columns and relationships of "block_seal" */
export type Block_Seal = {
  __typename?: 'block_seal';
  /** An object relationship */
  block: Block;
  execution_receipt_id?: Maybe<Scalars['String']>;
  execution_receipt_signatures?: Maybe<Scalars['_text']>;
  height: Scalars['bigint'];
};

/** aggregated selection of "block_seal" */
export type Block_Seal_Aggregate = {
  __typename?: 'block_seal_aggregate';
  aggregate?: Maybe<Block_Seal_Aggregate_Fields>;
  nodes: Array<Block_Seal>;
};

/** aggregate fields of "block_seal" */
export type Block_Seal_Aggregate_Fields = {
  __typename?: 'block_seal_aggregate_fields';
  avg?: Maybe<Block_Seal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Block_Seal_Max_Fields>;
  min?: Maybe<Block_Seal_Min_Fields>;
  stddev?: Maybe<Block_Seal_Stddev_Fields>;
  stddev_pop?: Maybe<Block_Seal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Block_Seal_Stddev_Samp_Fields>;
  sum?: Maybe<Block_Seal_Sum_Fields>;
  var_pop?: Maybe<Block_Seal_Var_Pop_Fields>;
  var_samp?: Maybe<Block_Seal_Var_Samp_Fields>;
  variance?: Maybe<Block_Seal_Variance_Fields>;
};

/** aggregate fields of "block_seal" */
export type Block_Seal_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Block_Seal_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "block_seal" */
export type Block_Seal_Aggregate_Order_By = {
  avg?: Maybe<Block_Seal_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Block_Seal_Max_Order_By>;
  min?: Maybe<Block_Seal_Min_Order_By>;
  stddev?: Maybe<Block_Seal_Stddev_Order_By>;
  stddev_pop?: Maybe<Block_Seal_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Block_Seal_Stddev_Samp_Order_By>;
  sum?: Maybe<Block_Seal_Sum_Order_By>;
  var_pop?: Maybe<Block_Seal_Var_Pop_Order_By>;
  var_samp?: Maybe<Block_Seal_Var_Samp_Order_By>;
  variance?: Maybe<Block_Seal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Block_Seal_Avg_Fields = {
  __typename?: 'block_seal_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "block_seal" */
export type Block_Seal_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block_seal". All fields are combined with a logical 'AND'. */
export type Block_Seal_Bool_Exp = {
  _and?: Maybe<Array<Block_Seal_Bool_Exp>>;
  _not?: Maybe<Block_Seal_Bool_Exp>;
  _or?: Maybe<Array<Block_Seal_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  execution_receipt_id?: Maybe<String_Comparison_Exp>;
  execution_receipt_signatures?: Maybe<_Text_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Block_Seal_Max_Fields = {
  __typename?: 'block_seal_max_fields';
  execution_receipt_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "block_seal" */
export type Block_Seal_Max_Order_By = {
  execution_receipt_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Block_Seal_Min_Fields = {
  __typename?: 'block_seal_min_fields';
  execution_receipt_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "block_seal" */
export type Block_Seal_Min_Order_By = {
  execution_receipt_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "block_seal". */
export type Block_Seal_Order_By = {
  block?: Maybe<Block_Order_By>;
  execution_receipt_id?: Maybe<Order_By>;
  execution_receipt_signatures?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "block_seal" */
export enum Block_Seal_Select_Column {
  /** column name */
  ExecutionReceiptId = 'execution_receipt_id',
  /** column name */
  ExecutionReceiptSignatures = 'execution_receipt_signatures',
  /** column name */
  Height = 'height',
}

/** aggregate stddev on columns */
export type Block_Seal_Stddev_Fields = {
  __typename?: 'block_seal_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "block_seal" */
export type Block_Seal_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Block_Seal_Stddev_Pop_Fields = {
  __typename?: 'block_seal_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "block_seal" */
export type Block_Seal_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Block_Seal_Stddev_Samp_Fields = {
  __typename?: 'block_seal_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "block_seal" */
export type Block_Seal_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Block_Seal_Sum_Fields = {
  __typename?: 'block_seal_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block_seal" */
export type Block_Seal_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Block_Seal_Var_Pop_Fields = {
  __typename?: 'block_seal_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "block_seal" */
export type Block_Seal_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Block_Seal_Var_Samp_Fields = {
  __typename?: 'block_seal_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "block_seal" */
export type Block_Seal_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Block_Seal_Variance_Fields = {
  __typename?: 'block_seal_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "block_seal" */
export type Block_Seal_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  CollectionGuarantees = 'collection_guarantees',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Timestamp = 'timestamp',
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "collection" */
export type Collection = {
  __typename?: 'collection';
  /** An object relationship */
  block: Block;
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  height: Scalars['bigint'];
  id: Scalars['String'];
  processed: Scalars['Boolean'];
  transaction_id: Scalars['String'];
  /** An array relationship */
  transaction_results: Array<Transaction_Result>;
  /** An aggregate relationship */
  transaction_results_aggregate: Transaction_Result_Aggregate;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
};

/** columns and relationships of "collection" */
export type CollectionEventsArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

/** columns and relationships of "collection" */
export type CollectionEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

/** columns and relationships of "collection" */
export type CollectionTransaction_ResultsArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

/** columns and relationships of "collection" */
export type CollectionTransaction_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

/** columns and relationships of "collection" */
export type CollectionTransactionsArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** columns and relationships of "collection" */
export type CollectionTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "collection" */
export type Collection_Aggregate = {
  __typename?: 'collection_aggregate';
  aggregate?: Maybe<Collection_Aggregate_Fields>;
  nodes: Array<Collection>;
};

/** aggregate fields of "collection" */
export type Collection_Aggregate_Fields = {
  __typename?: 'collection_aggregate_fields';
  avg?: Maybe<Collection_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Collection_Max_Fields>;
  min?: Maybe<Collection_Min_Fields>;
  stddev?: Maybe<Collection_Stddev_Fields>;
  stddev_pop?: Maybe<Collection_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collection_Stddev_Samp_Fields>;
  sum?: Maybe<Collection_Sum_Fields>;
  var_pop?: Maybe<Collection_Var_Pop_Fields>;
  var_samp?: Maybe<Collection_Var_Samp_Fields>;
  variance?: Maybe<Collection_Variance_Fields>;
};

/** aggregate fields of "collection" */
export type Collection_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Collection_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collection" */
export type Collection_Aggregate_Order_By = {
  avg?: Maybe<Collection_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Collection_Max_Order_By>;
  min?: Maybe<Collection_Min_Order_By>;
  stddev?: Maybe<Collection_Stddev_Order_By>;
  stddev_pop?: Maybe<Collection_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Collection_Stddev_Samp_Order_By>;
  sum?: Maybe<Collection_Sum_Order_By>;
  var_pop?: Maybe<Collection_Var_Pop_Order_By>;
  var_samp?: Maybe<Collection_Var_Samp_Order_By>;
  variance?: Maybe<Collection_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Collection_Avg_Fields = {
  __typename?: 'collection_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "collection" */
export type Collection_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collection". All fields are combined with a logical 'AND'. */
export type Collection_Bool_Exp = {
  _and?: Maybe<Array<Collection_Bool_Exp>>;
  _not?: Maybe<Collection_Bool_Exp>;
  _or?: Maybe<Array<Collection_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  events?: Maybe<Event_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  processed?: Maybe<Boolean_Comparison_Exp>;
  transaction_id?: Maybe<String_Comparison_Exp>;
  transaction_results?: Maybe<Transaction_Result_Bool_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
};

/** aggregate max on columns */
export type Collection_Max_Fields = {
  __typename?: 'collection_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "collection" */
export type Collection_Max_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Collection_Min_Fields = {
  __typename?: 'collection_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "collection" */
export type Collection_Min_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "collection". */
export type Collection_Order_By = {
  block?: Maybe<Block_Order_By>;
  events_aggregate?: Maybe<Event_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  processed?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
  transaction_results_aggregate?: Maybe<Transaction_Result_Aggregate_Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
};

/** select columns of table "collection" */
export enum Collection_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Processed = 'processed',
  /** column name */
  TransactionId = 'transaction_id',
}

/** aggregate stddev on columns */
export type Collection_Stddev_Fields = {
  __typename?: 'collection_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "collection" */
export type Collection_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Collection_Stddev_Pop_Fields = {
  __typename?: 'collection_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "collection" */
export type Collection_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Collection_Stddev_Samp_Fields = {
  __typename?: 'collection_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "collection" */
export type Collection_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Collection_Sum_Fields = {
  __typename?: 'collection_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "collection" */
export type Collection_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Collection_Var_Pop_Fields = {
  __typename?: 'collection_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "collection" */
export type Collection_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Collection_Var_Samp_Fields = {
  __typename?: 'collection_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "collection" */
export type Collection_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Collection_Variance_Fields = {
  __typename?: 'collection_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "collection" */
export type Collection_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "current_table" */
export type Current_Table = {
  __typename?: 'current_table';
  height: Scalars['bigint'];
  node_id: Scalars['String'];
};

/** aggregated selection of "current_table" */
export type Current_Table_Aggregate = {
  __typename?: 'current_table_aggregate';
  aggregate?: Maybe<Current_Table_Aggregate_Fields>;
  nodes: Array<Current_Table>;
};

/** aggregate fields of "current_table" */
export type Current_Table_Aggregate_Fields = {
  __typename?: 'current_table_aggregate_fields';
  avg?: Maybe<Current_Table_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Current_Table_Max_Fields>;
  min?: Maybe<Current_Table_Min_Fields>;
  stddev?: Maybe<Current_Table_Stddev_Fields>;
  stddev_pop?: Maybe<Current_Table_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Current_Table_Stddev_Samp_Fields>;
  sum?: Maybe<Current_Table_Sum_Fields>;
  var_pop?: Maybe<Current_Table_Var_Pop_Fields>;
  var_samp?: Maybe<Current_Table_Var_Samp_Fields>;
  variance?: Maybe<Current_Table_Variance_Fields>;
};

/** aggregate fields of "current_table" */
export type Current_Table_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Current_Table_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Current_Table_Avg_Fields = {
  __typename?: 'current_table_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "current_table". All fields are combined with a logical 'AND'. */
export type Current_Table_Bool_Exp = {
  _and?: Maybe<Array<Current_Table_Bool_Exp>>;
  _not?: Maybe<Current_Table_Bool_Exp>;
  _or?: Maybe<Array<Current_Table_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Current_Table_Max_Fields = {
  __typename?: 'current_table_max_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Current_Table_Min_Fields = {
  __typename?: 'current_table_min_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "current_table". */
export type Current_Table_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
};

/** select columns of table "current_table" */
export enum Current_Table_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  NodeId = 'node_id',
}

/** aggregate stddev on columns */
export type Current_Table_Stddev_Fields = {
  __typename?: 'current_table_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Current_Table_Stddev_Pop_Fields = {
  __typename?: 'current_table_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Current_Table_Stddev_Samp_Fields = {
  __typename?: 'current_table_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Current_Table_Sum_Fields = {
  __typename?: 'current_table_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Current_Table_Var_Pop_Fields = {
  __typename?: 'current_table_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Current_Table_Var_Samp_Fields = {
  __typename?: 'current_table_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Current_Table_Variance_Fields = {
  __typename?: 'current_table_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cut_percentage" */
export type Cut_Percentage = {
  __typename?: 'cut_percentage';
  cut_percentage: Scalars['bigint'];
  height: Scalars['bigint'];
};

/** aggregated selection of "cut_percentage" */
export type Cut_Percentage_Aggregate = {
  __typename?: 'cut_percentage_aggregate';
  aggregate?: Maybe<Cut_Percentage_Aggregate_Fields>;
  nodes: Array<Cut_Percentage>;
};

/** aggregate fields of "cut_percentage" */
export type Cut_Percentage_Aggregate_Fields = {
  __typename?: 'cut_percentage_aggregate_fields';
  avg?: Maybe<Cut_Percentage_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cut_Percentage_Max_Fields>;
  min?: Maybe<Cut_Percentage_Min_Fields>;
  stddev?: Maybe<Cut_Percentage_Stddev_Fields>;
  stddev_pop?: Maybe<Cut_Percentage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cut_Percentage_Stddev_Samp_Fields>;
  sum?: Maybe<Cut_Percentage_Sum_Fields>;
  var_pop?: Maybe<Cut_Percentage_Var_Pop_Fields>;
  var_samp?: Maybe<Cut_Percentage_Var_Samp_Fields>;
  variance?: Maybe<Cut_Percentage_Variance_Fields>;
};

/** aggregate fields of "cut_percentage" */
export type Cut_Percentage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cut_Percentage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cut_Percentage_Avg_Fields = {
  __typename?: 'cut_percentage_avg_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cut_percentage". All fields are combined with a logical 'AND'. */
export type Cut_Percentage_Bool_Exp = {
  _and?: Maybe<Array<Cut_Percentage_Bool_Exp>>;
  _not?: Maybe<Cut_Percentage_Bool_Exp>;
  _or?: Maybe<Array<Cut_Percentage_Bool_Exp>>;
  cut_percentage?: Maybe<Bigint_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Cut_Percentage_Max_Fields = {
  __typename?: 'cut_percentage_max_fields';
  cut_percentage?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Cut_Percentage_Min_Fields = {
  __typename?: 'cut_percentage_min_fields';
  cut_percentage?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "cut_percentage". */
export type Cut_Percentage_Order_By = {
  cut_percentage?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** select columns of table "cut_percentage" */
export enum Cut_Percentage_Select_Column {
  /** column name */
  CutPercentage = 'cut_percentage',
  /** column name */
  Height = 'height',
}

/** aggregate stddev on columns */
export type Cut_Percentage_Stddev_Fields = {
  __typename?: 'cut_percentage_stddev_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cut_Percentage_Stddev_Pop_Fields = {
  __typename?: 'cut_percentage_stddev_pop_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cut_Percentage_Stddev_Samp_Fields = {
  __typename?: 'cut_percentage_stddev_samp_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Cut_Percentage_Sum_Fields = {
  __typename?: 'cut_percentage_sum_fields';
  cut_percentage?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Cut_Percentage_Var_Pop_Fields = {
  __typename?: 'cut_percentage_var_pop_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cut_Percentage_Var_Samp_Fields = {
  __typename?: 'cut_percentage_var_samp_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cut_Percentage_Variance_Fields = {
  __typename?: 'cut_percentage_variance_fields';
  cut_percentage?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "delegator_account" */
export type Delegator_Account = {
  __typename?: 'delegator_account';
  /** An object relationship */
  account: Account;
  account_address: Scalars['String'];
  delegator_id: Scalars['bigint'];
  /** An object relationship */
  delegator_info?: Maybe<Delegator_Info>;
  delegator_node_id: Scalars['String'];
};

/** aggregated selection of "delegator_account" */
export type Delegator_Account_Aggregate = {
  __typename?: 'delegator_account_aggregate';
  aggregate?: Maybe<Delegator_Account_Aggregate_Fields>;
  nodes: Array<Delegator_Account>;
};

/** aggregate fields of "delegator_account" */
export type Delegator_Account_Aggregate_Fields = {
  __typename?: 'delegator_account_aggregate_fields';
  avg?: Maybe<Delegator_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Delegator_Account_Max_Fields>;
  min?: Maybe<Delegator_Account_Min_Fields>;
  stddev?: Maybe<Delegator_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Delegator_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delegator_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Delegator_Account_Sum_Fields>;
  var_pop?: Maybe<Delegator_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Delegator_Account_Var_Samp_Fields>;
  variance?: Maybe<Delegator_Account_Variance_Fields>;
};

/** aggregate fields of "delegator_account" */
export type Delegator_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delegator_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delegator_account" */
export type Delegator_Account_Aggregate_Order_By = {
  avg?: Maybe<Delegator_Account_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delegator_Account_Max_Order_By>;
  min?: Maybe<Delegator_Account_Min_Order_By>;
  stddev?: Maybe<Delegator_Account_Stddev_Order_By>;
  stddev_pop?: Maybe<Delegator_Account_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delegator_Account_Stddev_Samp_Order_By>;
  sum?: Maybe<Delegator_Account_Sum_Order_By>;
  var_pop?: Maybe<Delegator_Account_Var_Pop_Order_By>;
  var_samp?: Maybe<Delegator_Account_Var_Samp_Order_By>;
  variance?: Maybe<Delegator_Account_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Delegator_Account_Avg_Fields = {
  __typename?: 'delegator_account_avg_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delegator_account" */
export type Delegator_Account_Avg_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delegator_account". All fields are combined with a logical 'AND'. */
export type Delegator_Account_Bool_Exp = {
  _and?: Maybe<Array<Delegator_Account_Bool_Exp>>;
  _not?: Maybe<Delegator_Account_Bool_Exp>;
  _or?: Maybe<Array<Delegator_Account_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  account_address?: Maybe<String_Comparison_Exp>;
  delegator_id?: Maybe<Bigint_Comparison_Exp>;
  delegator_info?: Maybe<Delegator_Info_Bool_Exp>;
  delegator_node_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Delegator_Account_Max_Fields = {
  __typename?: 'delegator_account_max_fields';
  account_address?: Maybe<Scalars['String']>;
  delegator_id?: Maybe<Scalars['bigint']>;
  delegator_node_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "delegator_account" */
export type Delegator_Account_Max_Order_By = {
  account_address?: Maybe<Order_By>;
  delegator_id?: Maybe<Order_By>;
  delegator_node_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delegator_Account_Min_Fields = {
  __typename?: 'delegator_account_min_fields';
  account_address?: Maybe<Scalars['String']>;
  delegator_id?: Maybe<Scalars['bigint']>;
  delegator_node_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "delegator_account" */
export type Delegator_Account_Min_Order_By = {
  account_address?: Maybe<Order_By>;
  delegator_id?: Maybe<Order_By>;
  delegator_node_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "delegator_account". */
export type Delegator_Account_Order_By = {
  account?: Maybe<Account_Order_By>;
  account_address?: Maybe<Order_By>;
  delegator_id?: Maybe<Order_By>;
  delegator_info?: Maybe<Delegator_Info_Order_By>;
  delegator_node_id?: Maybe<Order_By>;
};

/** select columns of table "delegator_account" */
export enum Delegator_Account_Select_Column {
  /** column name */
  AccountAddress = 'account_address',
  /** column name */
  DelegatorId = 'delegator_id',
  /** column name */
  DelegatorNodeId = 'delegator_node_id',
}

/** aggregate stddev on columns */
export type Delegator_Account_Stddev_Fields = {
  __typename?: 'delegator_account_stddev_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delegator_account" */
export type Delegator_Account_Stddev_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delegator_Account_Stddev_Pop_Fields = {
  __typename?: 'delegator_account_stddev_pop_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delegator_account" */
export type Delegator_Account_Stddev_Pop_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delegator_Account_Stddev_Samp_Fields = {
  __typename?: 'delegator_account_stddev_samp_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delegator_account" */
export type Delegator_Account_Stddev_Samp_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delegator_Account_Sum_Fields = {
  __typename?: 'delegator_account_sum_fields';
  delegator_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "delegator_account" */
export type Delegator_Account_Sum_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Delegator_Account_Var_Pop_Fields = {
  __typename?: 'delegator_account_var_pop_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delegator_account" */
export type Delegator_Account_Var_Pop_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delegator_Account_Var_Samp_Fields = {
  __typename?: 'delegator_account_var_samp_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delegator_account" */
export type Delegator_Account_Var_Samp_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delegator_Account_Variance_Fields = {
  __typename?: 'delegator_account_variance_fields';
  delegator_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delegator_account" */
export type Delegator_Account_Variance_Order_By = {
  delegator_id?: Maybe<Order_By>;
};

/** columns and relationships of "delegator_info" */
export type Delegator_Info = {
  __typename?: 'delegator_info';
  height: Scalars['String'];
  id: Scalars['bigint'];
  node_id: Scalars['String'];
  /** An object relationship */
  staking_table: Staking_Table;
  tokens_committed: Scalars['String'];
  tokens_requested_to_unstake: Scalars['String'];
  tokens_rewarded: Scalars['String'];
  tokens_staked: Scalars['String'];
  tokens_unstaked: Scalars['String'];
  tokens_unstaking: Scalars['String'];
};

/** aggregated selection of "delegator_info" */
export type Delegator_Info_Aggregate = {
  __typename?: 'delegator_info_aggregate';
  aggregate?: Maybe<Delegator_Info_Aggregate_Fields>;
  nodes: Array<Delegator_Info>;
};

/** aggregate fields of "delegator_info" */
export type Delegator_Info_Aggregate_Fields = {
  __typename?: 'delegator_info_aggregate_fields';
  avg?: Maybe<Delegator_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Delegator_Info_Max_Fields>;
  min?: Maybe<Delegator_Info_Min_Fields>;
  stddev?: Maybe<Delegator_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Delegator_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Delegator_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Delegator_Info_Sum_Fields>;
  var_pop?: Maybe<Delegator_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Delegator_Info_Var_Samp_Fields>;
  variance?: Maybe<Delegator_Info_Variance_Fields>;
};

/** aggregate fields of "delegator_info" */
export type Delegator_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Delegator_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "delegator_info" */
export type Delegator_Info_Aggregate_Order_By = {
  avg?: Maybe<Delegator_Info_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Delegator_Info_Max_Order_By>;
  min?: Maybe<Delegator_Info_Min_Order_By>;
  stddev?: Maybe<Delegator_Info_Stddev_Order_By>;
  stddev_pop?: Maybe<Delegator_Info_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Delegator_Info_Stddev_Samp_Order_By>;
  sum?: Maybe<Delegator_Info_Sum_Order_By>;
  var_pop?: Maybe<Delegator_Info_Var_Pop_Order_By>;
  var_samp?: Maybe<Delegator_Info_Var_Samp_Order_By>;
  variance?: Maybe<Delegator_Info_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Delegator_Info_Avg_Fields = {
  __typename?: 'delegator_info_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "delegator_info" */
export type Delegator_Info_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "delegator_info". All fields are combined with a logical 'AND'. */
export type Delegator_Info_Bool_Exp = {
  _and?: Maybe<Array<Delegator_Info_Bool_Exp>>;
  _not?: Maybe<Delegator_Info_Bool_Exp>;
  _or?: Maybe<Array<Delegator_Info_Bool_Exp>>;
  height?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
  staking_table?: Maybe<Staking_Table_Bool_Exp>;
  tokens_committed?: Maybe<String_Comparison_Exp>;
  tokens_requested_to_unstake?: Maybe<String_Comparison_Exp>;
  tokens_rewarded?: Maybe<String_Comparison_Exp>;
  tokens_staked?: Maybe<String_Comparison_Exp>;
  tokens_unstaked?: Maybe<String_Comparison_Exp>;
  tokens_unstaking?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Delegator_Info_Max_Fields = {
  __typename?: 'delegator_info_max_fields';
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  tokens_committed?: Maybe<Scalars['String']>;
  tokens_requested_to_unstake?: Maybe<Scalars['String']>;
  tokens_rewarded?: Maybe<Scalars['String']>;
  tokens_staked?: Maybe<Scalars['String']>;
  tokens_unstaked?: Maybe<Scalars['String']>;
  tokens_unstaking?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "delegator_info" */
export type Delegator_Info_Max_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Delegator_Info_Min_Fields = {
  __typename?: 'delegator_info_min_fields';
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  tokens_committed?: Maybe<Scalars['String']>;
  tokens_requested_to_unstake?: Maybe<Scalars['String']>;
  tokens_rewarded?: Maybe<Scalars['String']>;
  tokens_staked?: Maybe<Scalars['String']>;
  tokens_unstaked?: Maybe<Scalars['String']>;
  tokens_unstaking?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "delegator_info" */
export type Delegator_Info_Min_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "delegator_info". */
export type Delegator_Info_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  staking_table?: Maybe<Staking_Table_Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** select columns of table "delegator_info" */
export enum Delegator_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  TokensCommitted = 'tokens_committed',
  /** column name */
  TokensRequestedToUnstake = 'tokens_requested_to_unstake',
  /** column name */
  TokensRewarded = 'tokens_rewarded',
  /** column name */
  TokensStaked = 'tokens_staked',
  /** column name */
  TokensUnstaked = 'tokens_unstaked',
  /** column name */
  TokensUnstaking = 'tokens_unstaking',
}

/** aggregate stddev on columns */
export type Delegator_Info_Stddev_Fields = {
  __typename?: 'delegator_info_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "delegator_info" */
export type Delegator_Info_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Delegator_Info_Stddev_Pop_Fields = {
  __typename?: 'delegator_info_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "delegator_info" */
export type Delegator_Info_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Delegator_Info_Stddev_Samp_Fields = {
  __typename?: 'delegator_info_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "delegator_info" */
export type Delegator_Info_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Delegator_Info_Sum_Fields = {
  __typename?: 'delegator_info_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "delegator_info" */
export type Delegator_Info_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Delegator_Info_Var_Pop_Fields = {
  __typename?: 'delegator_info_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "delegator_info" */
export type Delegator_Info_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Delegator_Info_Var_Samp_Fields = {
  __typename?: 'delegator_info_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "delegator_info" */
export type Delegator_Info_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Delegator_Info_Variance_Fields = {
  __typename?: 'delegator_info_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "delegator_info" */
export type Delegator_Info_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'event';
  /** An object relationship */
  block: Block;
  /** An object relationship */
  collection?: Maybe<Collection>;
  event_index?: Maybe<Scalars['bigint']>;
  height: Scalars['bigint'];
  transaction_id?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  avg?: Maybe<Event_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Event_Max_Order_By>;
  min?: Maybe<Event_Min_Order_By>;
  stddev?: Maybe<Event_Stddev_Order_By>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Order_By>;
  sum?: Maybe<Event_Sum_Order_By>;
  var_pop?: Maybe<Event_Var_Pop_Order_By>;
  var_samp?: Maybe<Event_Var_Samp_Order_By>;
  variance?: Maybe<Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: Maybe<Array<Event_Bool_Exp>>;
  _not?: Maybe<Event_Bool_Exp>;
  _or?: Maybe<Array<Event_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  collection?: Maybe<Collection_Bool_Exp>;
  event_index?: Maybe<Bigint_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  transaction_id?: Maybe<String_Comparison_Exp>;
  transaction_index?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  event_index?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
  transaction_index?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  event_index?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  transaction_id?: Maybe<Scalars['String']>;
  transaction_index?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
  transaction_index?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  block?: Maybe<Block_Order_By>;
  collection?: Maybe<Collection_Order_By>;
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
  transaction_index?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  EventIndex = 'event_index',
  /** column name */
  Height = 'height',
  /** column name */
  TransactionId = 'transaction_id',
  /** column name */
  TransactionIndex = 'transaction_index',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  event_index?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  event_index?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
  event_index?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  time: Scalars['timestamp'];
};

/** aggregated selection of "genesis" */
export type Genesis_Aggregate = {
  __typename?: 'genesis_aggregate';
  aggregate?: Maybe<Genesis_Aggregate_Fields>;
  nodes: Array<Genesis>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_Fields = {
  __typename?: 'genesis_aggregate_fields';
  avg?: Maybe<Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Genesis_Max_Fields>;
  min?: Maybe<Genesis_Min_Fields>;
  stddev?: Maybe<Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Genesis_Sum_Fields>;
  var_pop?: Maybe<Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Genesis_Var_Samp_Fields>;
  variance?: Maybe<Genesis_Variance_Fields>;
};

/** aggregate fields of "genesis" */
export type Genesis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Genesis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Genesis_Avg_Fields = {
  __typename?: 'genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: Maybe<Array<Genesis_Bool_Exp>>;
  _not?: Maybe<Genesis_Bool_Exp>;
  _or?: Maybe<Array<Genesis_Bool_Exp>>;
  chain_id?: Maybe<String_Comparison_Exp>;
  initial_height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  time?: Maybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Genesis_Max_Fields = {
  __typename?: 'genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Genesis_Min_Fields = {
  __typename?: 'genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bigint']>;
  time?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: Maybe<Order_By>;
  initial_height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Time = 'time',
}

/** aggregate stddev on columns */
export type Genesis_Stddev_Fields = {
  __typename?: 'genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Genesis_Stddev_Pop_Fields = {
  __typename?: 'genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Genesis_Stddev_Samp_Fields = {
  __typename?: 'genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Genesis_Sum_Fields = {
  __typename?: 'genesis_sum_fields';
  initial_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Genesis_Var_Pop_Fields = {
  __typename?: 'genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Genesis_Var_Samp_Fields = {
  __typename?: 'genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Genesis_Variance_Fields = {
  __typename?: 'genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "locked_account" */
export type Locked_Account = {
  __typename?: 'locked_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  /** An array relationship */
  locked_account_balances: Array<Locked_Account_Balance>;
  /** An aggregate relationship */
  locked_account_balances_aggregate: Locked_Account_Balance_Aggregate;
  locked_address: Scalars['String'];
};

/** columns and relationships of "locked_account" */
export type Locked_AccountLocked_Account_BalancesArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

/** columns and relationships of "locked_account" */
export type Locked_AccountLocked_Account_Balances_AggregateArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

/** aggregated selection of "locked_account" */
export type Locked_Account_Aggregate = {
  __typename?: 'locked_account_aggregate';
  aggregate?: Maybe<Locked_Account_Aggregate_Fields>;
  nodes: Array<Locked_Account>;
};

/** aggregate fields of "locked_account" */
export type Locked_Account_Aggregate_Fields = {
  __typename?: 'locked_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Locked_Account_Max_Fields>;
  min?: Maybe<Locked_Account_Min_Fields>;
};

/** aggregate fields of "locked_account" */
export type Locked_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locked_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "locked_account_balance" */
export type Locked_Account_Balance = {
  __typename?: 'locked_account_balance';
  balance: Scalars['bigint'];
  height: Scalars['bigint'];
  /** An object relationship */
  locked_account: Locked_Account;
  locked_address: Scalars['String'];
  unlock_limit: Scalars['bigint'];
};

/** aggregated selection of "locked_account_balance" */
export type Locked_Account_Balance_Aggregate = {
  __typename?: 'locked_account_balance_aggregate';
  aggregate?: Maybe<Locked_Account_Balance_Aggregate_Fields>;
  nodes: Array<Locked_Account_Balance>;
};

/** aggregate fields of "locked_account_balance" */
export type Locked_Account_Balance_Aggregate_Fields = {
  __typename?: 'locked_account_balance_aggregate_fields';
  avg?: Maybe<Locked_Account_Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Locked_Account_Balance_Max_Fields>;
  min?: Maybe<Locked_Account_Balance_Min_Fields>;
  stddev?: Maybe<Locked_Account_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Locked_Account_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Locked_Account_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Locked_Account_Balance_Sum_Fields>;
  var_pop?: Maybe<Locked_Account_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Locked_Account_Balance_Var_Samp_Fields>;
  variance?: Maybe<Locked_Account_Balance_Variance_Fields>;
};

/** aggregate fields of "locked_account_balance" */
export type Locked_Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locked_account_balance" */
export type Locked_Account_Balance_Aggregate_Order_By = {
  avg?: Maybe<Locked_Account_Balance_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Locked_Account_Balance_Max_Order_By>;
  min?: Maybe<Locked_Account_Balance_Min_Order_By>;
  stddev?: Maybe<Locked_Account_Balance_Stddev_Order_By>;
  stddev_pop?: Maybe<Locked_Account_Balance_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Locked_Account_Balance_Stddev_Samp_Order_By>;
  sum?: Maybe<Locked_Account_Balance_Sum_Order_By>;
  var_pop?: Maybe<Locked_Account_Balance_Var_Pop_Order_By>;
  var_samp?: Maybe<Locked_Account_Balance_Var_Samp_Order_By>;
  variance?: Maybe<Locked_Account_Balance_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Locked_Account_Balance_Avg_Fields = {
  __typename?: 'locked_account_balance_avg_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Avg_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "locked_account_balance". All fields are combined with a logical 'AND'. */
export type Locked_Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Locked_Account_Balance_Bool_Exp>>;
  _not?: Maybe<Locked_Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Locked_Account_Balance_Bool_Exp>>;
  balance?: Maybe<Bigint_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  locked_account?: Maybe<Locked_Account_Bool_Exp>;
  locked_address?: Maybe<String_Comparison_Exp>;
  unlock_limit?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Locked_Account_Balance_Max_Fields = {
  __typename?: 'locked_account_balance_max_fields';
  balance?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  locked_address?: Maybe<Scalars['String']>;
  unlock_limit?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Max_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  locked_address?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locked_Account_Balance_Min_Fields = {
  __typename?: 'locked_account_balance_min_fields';
  balance?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  locked_address?: Maybe<Scalars['String']>;
  unlock_limit?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Min_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  locked_address?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "locked_account_balance". */
export type Locked_Account_Balance_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  locked_account?: Maybe<Locked_Account_Order_By>;
  locked_address?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** select columns of table "locked_account_balance" */
export enum Locked_Account_Balance_Select_Column {
  /** column name */
  Balance = 'balance',
  /** column name */
  Height = 'height',
  /** column name */
  LockedAddress = 'locked_address',
  /** column name */
  UnlockLimit = 'unlock_limit',
}

/** aggregate stddev on columns */
export type Locked_Account_Balance_Stddev_Fields = {
  __typename?: 'locked_account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Stddev_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Locked_Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'locked_account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Stddev_Pop_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Locked_Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'locked_account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Stddev_Samp_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Locked_Account_Balance_Sum_Fields = {
  __typename?: 'locked_account_balance_sum_fields';
  balance?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  unlock_limit?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Sum_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Locked_Account_Balance_Var_Pop_Fields = {
  __typename?: 'locked_account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Var_Pop_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Locked_Account_Balance_Var_Samp_Fields = {
  __typename?: 'locked_account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Var_Samp_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Locked_Account_Balance_Variance_Fields = {
  __typename?: 'locked_account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unlock_limit?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "locked_account_balance" */
export type Locked_Account_Balance_Variance_Order_By = {
  balance?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  unlock_limit?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "locked_account". All fields are combined with a logical 'AND'. */
export type Locked_Account_Bool_Exp = {
  _and?: Maybe<Array<Locked_Account_Bool_Exp>>;
  _not?: Maybe<Locked_Account_Bool_Exp>;
  _or?: Maybe<Array<Locked_Account_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  locked_account_balances?: Maybe<Locked_Account_Balance_Bool_Exp>;
  locked_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Locked_Account_Max_Fields = {
  __typename?: 'locked_account_max_fields';
  address?: Maybe<Scalars['String']>;
  locked_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Locked_Account_Min_Fields = {
  __typename?: 'locked_account_min_fields';
  address?: Maybe<Scalars['String']>;
  locked_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "locked_account". */
export type Locked_Account_Order_By = {
  account?: Maybe<Account_Order_By>;
  address?: Maybe<Order_By>;
  locked_account_balances_aggregate?: Maybe<Locked_Account_Balance_Aggregate_Order_By>;
  locked_address?: Maybe<Order_By>;
};

/** select columns of table "locked_account" */
export enum Locked_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  LockedAddress = 'locked_address',
}

/** columns and relationships of "node_infos_from_table" */
export type Node_Infos_From_Table = {
  __typename?: 'node_infos_from_table';
  delegator_i_d_counter: Scalars['bigint'];
  delegators: Scalars['_int8'];
  height: Scalars['bigint'];
  id: Scalars['String'];
  initial_weight: Scalars['bigint'];
  networking_address: Scalars['String'];
  networking_key: Scalars['String'];
  role: Scalars['bigint'];
  staking_key: Scalars['String'];
  /** An object relationship */
  staking_table: Staking_Table;
  tokens_committed: Scalars['bigint'];
  tokens_requested_to_unstake: Scalars['bigint'];
  tokens_rewarded: Scalars['bigint'];
  tokens_staked: Scalars['bigint'];
  tokens_unstaked: Scalars['bigint'];
  tokens_unstaking: Scalars['bigint'];
};

/** aggregated selection of "node_infos_from_table" */
export type Node_Infos_From_Table_Aggregate = {
  __typename?: 'node_infos_from_table_aggregate';
  aggregate?: Maybe<Node_Infos_From_Table_Aggregate_Fields>;
  nodes: Array<Node_Infos_From_Table>;
};

/** aggregate fields of "node_infos_from_table" */
export type Node_Infos_From_Table_Aggregate_Fields = {
  __typename?: 'node_infos_from_table_aggregate_fields';
  avg?: Maybe<Node_Infos_From_Table_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Node_Infos_From_Table_Max_Fields>;
  min?: Maybe<Node_Infos_From_Table_Min_Fields>;
  stddev?: Maybe<Node_Infos_From_Table_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Infos_From_Table_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Infos_From_Table_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Infos_From_Table_Sum_Fields>;
  var_pop?: Maybe<Node_Infos_From_Table_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Infos_From_Table_Var_Samp_Fields>;
  variance?: Maybe<Node_Infos_From_Table_Variance_Fields>;
};

/** aggregate fields of "node_infos_from_table" */
export type Node_Infos_From_Table_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "node_infos_from_table" */
export type Node_Infos_From_Table_Aggregate_Order_By = {
  avg?: Maybe<Node_Infos_From_Table_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Node_Infos_From_Table_Max_Order_By>;
  min?: Maybe<Node_Infos_From_Table_Min_Order_By>;
  stddev?: Maybe<Node_Infos_From_Table_Stddev_Order_By>;
  stddev_pop?: Maybe<Node_Infos_From_Table_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Node_Infos_From_Table_Stddev_Samp_Order_By>;
  sum?: Maybe<Node_Infos_From_Table_Sum_Order_By>;
  var_pop?: Maybe<Node_Infos_From_Table_Var_Pop_Order_By>;
  var_samp?: Maybe<Node_Infos_From_Table_Var_Samp_Order_By>;
  variance?: Maybe<Node_Infos_From_Table_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Node_Infos_From_Table_Avg_Fields = {
  __typename?: 'node_infos_from_table_avg_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Avg_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "node_infos_from_table". All fields are combined with a logical 'AND'. */
export type Node_Infos_From_Table_Bool_Exp = {
  _and?: Maybe<Array<Node_Infos_From_Table_Bool_Exp>>;
  _not?: Maybe<Node_Infos_From_Table_Bool_Exp>;
  _or?: Maybe<Array<Node_Infos_From_Table_Bool_Exp>>;
  delegator_i_d_counter?: Maybe<Bigint_Comparison_Exp>;
  delegators?: Maybe<_Int8_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  initial_weight?: Maybe<Bigint_Comparison_Exp>;
  networking_address?: Maybe<String_Comparison_Exp>;
  networking_key?: Maybe<String_Comparison_Exp>;
  role?: Maybe<Bigint_Comparison_Exp>;
  staking_key?: Maybe<String_Comparison_Exp>;
  staking_table?: Maybe<Staking_Table_Bool_Exp>;
  tokens_committed?: Maybe<Bigint_Comparison_Exp>;
  tokens_requested_to_unstake?: Maybe<Bigint_Comparison_Exp>;
  tokens_rewarded?: Maybe<Bigint_Comparison_Exp>;
  tokens_staked?: Maybe<Bigint_Comparison_Exp>;
  tokens_unstaked?: Maybe<Bigint_Comparison_Exp>;
  tokens_unstaking?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Node_Infos_From_Table_Max_Fields = {
  __typename?: 'node_infos_from_table_max_fields';
  delegator_i_d_counter?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  initial_weight?: Maybe<Scalars['bigint']>;
  networking_address?: Maybe<Scalars['String']>;
  networking_key?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['bigint']>;
  staking_key?: Maybe<Scalars['String']>;
  tokens_committed?: Maybe<Scalars['bigint']>;
  tokens_requested_to_unstake?: Maybe<Scalars['bigint']>;
  tokens_rewarded?: Maybe<Scalars['bigint']>;
  tokens_staked?: Maybe<Scalars['bigint']>;
  tokens_unstaked?: Maybe<Scalars['bigint']>;
  tokens_unstaking?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Max_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  networking_address?: Maybe<Order_By>;
  networking_key?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  staking_key?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Node_Infos_From_Table_Min_Fields = {
  __typename?: 'node_infos_from_table_min_fields';
  delegator_i_d_counter?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  initial_weight?: Maybe<Scalars['bigint']>;
  networking_address?: Maybe<Scalars['String']>;
  networking_key?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['bigint']>;
  staking_key?: Maybe<Scalars['String']>;
  tokens_committed?: Maybe<Scalars['bigint']>;
  tokens_requested_to_unstake?: Maybe<Scalars['bigint']>;
  tokens_rewarded?: Maybe<Scalars['bigint']>;
  tokens_staked?: Maybe<Scalars['bigint']>;
  tokens_unstaked?: Maybe<Scalars['bigint']>;
  tokens_unstaking?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Min_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  networking_address?: Maybe<Order_By>;
  networking_key?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  staking_key?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "node_infos_from_table". */
export type Node_Infos_From_Table_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  delegators?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  networking_address?: Maybe<Order_By>;
  networking_key?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  staking_key?: Maybe<Order_By>;
  staking_table?: Maybe<Staking_Table_Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** select columns of table "node_infos_from_table" */
export enum Node_Infos_From_Table_Select_Column {
  /** column name */
  DelegatorIDCounter = 'delegator_i_d_counter',
  /** column name */
  Delegators = 'delegators',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  InitialWeight = 'initial_weight',
  /** column name */
  NetworkingAddress = 'networking_address',
  /** column name */
  NetworkingKey = 'networking_key',
  /** column name */
  Role = 'role',
  /** column name */
  StakingKey = 'staking_key',
  /** column name */
  TokensCommitted = 'tokens_committed',
  /** column name */
  TokensRequestedToUnstake = 'tokens_requested_to_unstake',
  /** column name */
  TokensRewarded = 'tokens_rewarded',
  /** column name */
  TokensStaked = 'tokens_staked',
  /** column name */
  TokensUnstaked = 'tokens_unstaked',
  /** column name */
  TokensUnstaking = 'tokens_unstaking',
}

/** aggregate stddev on columns */
export type Node_Infos_From_Table_Stddev_Fields = {
  __typename?: 'node_infos_from_table_stddev_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Stddev_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Node_Infos_From_Table_Stddev_Pop_Fields = {
  __typename?: 'node_infos_from_table_stddev_pop_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Stddev_Pop_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Node_Infos_From_Table_Stddev_Samp_Fields = {
  __typename?: 'node_infos_from_table_stddev_samp_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Stddev_Samp_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Node_Infos_From_Table_Sum_Fields = {
  __typename?: 'node_infos_from_table_sum_fields';
  delegator_i_d_counter?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  initial_weight?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['bigint']>;
  tokens_committed?: Maybe<Scalars['bigint']>;
  tokens_requested_to_unstake?: Maybe<Scalars['bigint']>;
  tokens_rewarded?: Maybe<Scalars['bigint']>;
  tokens_staked?: Maybe<Scalars['bigint']>;
  tokens_unstaked?: Maybe<Scalars['bigint']>;
  tokens_unstaking?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Sum_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Node_Infos_From_Table_Var_Pop_Fields = {
  __typename?: 'node_infos_from_table_var_pop_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Var_Pop_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Node_Infos_From_Table_Var_Samp_Fields = {
  __typename?: 'node_infos_from_table_var_samp_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Var_Samp_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Node_Infos_From_Table_Variance_Fields = {
  __typename?: 'node_infos_from_table_variance_fields';
  delegator_i_d_counter?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  initial_weight?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['Float']>;
  tokens_committed?: Maybe<Scalars['Float']>;
  tokens_requested_to_unstake?: Maybe<Scalars['Float']>;
  tokens_rewarded?: Maybe<Scalars['Float']>;
  tokens_staked?: Maybe<Scalars['Float']>;
  tokens_unstaked?: Maybe<Scalars['Float']>;
  tokens_unstaking?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "node_infos_from_table" */
export type Node_Infos_From_Table_Variance_Order_By = {
  delegator_i_d_counter?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  initial_weight?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  tokens_committed?: Maybe<Order_By>;
  tokens_requested_to_unstake?: Maybe<Order_By>;
  tokens_rewarded?: Maybe<Order_By>;
  tokens_staked?: Maybe<Order_By>;
  tokens_unstaked?: Maybe<Order_By>;
  tokens_unstaking?: Maybe<Order_By>;
};

/** columns and relationships of "node_total_commitment" */
export type Node_Total_Commitment = {
  __typename?: 'node_total_commitment';
  height: Scalars['bigint'];
  node_id: Scalars['String'];
  /** An object relationship */
  staking_table: Staking_Table;
  total_commitment: Scalars['String'];
};

/** aggregated selection of "node_total_commitment" */
export type Node_Total_Commitment_Aggregate = {
  __typename?: 'node_total_commitment_aggregate';
  aggregate?: Maybe<Node_Total_Commitment_Aggregate_Fields>;
  nodes: Array<Node_Total_Commitment>;
};

/** aggregate fields of "node_total_commitment" */
export type Node_Total_Commitment_Aggregate_Fields = {
  __typename?: 'node_total_commitment_aggregate_fields';
  avg?: Maybe<Node_Total_Commitment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Node_Total_Commitment_Max_Fields>;
  min?: Maybe<Node_Total_Commitment_Min_Fields>;
  stddev?: Maybe<Node_Total_Commitment_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Total_Commitment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Total_Commitment_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Total_Commitment_Sum_Fields>;
  var_pop?: Maybe<Node_Total_Commitment_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Total_Commitment_Var_Samp_Fields>;
  variance?: Maybe<Node_Total_Commitment_Variance_Fields>;
};

/** aggregate fields of "node_total_commitment" */
export type Node_Total_Commitment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "node_total_commitment" */
export type Node_Total_Commitment_Aggregate_Order_By = {
  avg?: Maybe<Node_Total_Commitment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Node_Total_Commitment_Max_Order_By>;
  min?: Maybe<Node_Total_Commitment_Min_Order_By>;
  stddev?: Maybe<Node_Total_Commitment_Stddev_Order_By>;
  stddev_pop?: Maybe<Node_Total_Commitment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Node_Total_Commitment_Stddev_Samp_Order_By>;
  sum?: Maybe<Node_Total_Commitment_Sum_Order_By>;
  var_pop?: Maybe<Node_Total_Commitment_Var_Pop_Order_By>;
  var_samp?: Maybe<Node_Total_Commitment_Var_Samp_Order_By>;
  variance?: Maybe<Node_Total_Commitment_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Node_Total_Commitment_Avg_Fields = {
  __typename?: 'node_total_commitment_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "node_total_commitment". All fields are combined with a logical 'AND'. */
export type Node_Total_Commitment_Bool_Exp = {
  _and?: Maybe<Array<Node_Total_Commitment_Bool_Exp>>;
  _not?: Maybe<Node_Total_Commitment_Bool_Exp>;
  _or?: Maybe<Array<Node_Total_Commitment_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
  staking_table?: Maybe<Staking_Table_Bool_Exp>;
  total_commitment?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Node_Total_Commitment_Max_Fields = {
  __typename?: 'node_total_commitment_max_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  total_commitment?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Max_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  total_commitment?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Node_Total_Commitment_Min_Fields = {
  __typename?: 'node_total_commitment_min_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  total_commitment?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Min_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  total_commitment?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "node_total_commitment". */
export type Node_Total_Commitment_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  staking_table?: Maybe<Staking_Table_Order_By>;
  total_commitment?: Maybe<Order_By>;
};

/** select columns of table "node_total_commitment" */
export enum Node_Total_Commitment_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  TotalCommitment = 'total_commitment',
}

/** aggregate stddev on columns */
export type Node_Total_Commitment_Stddev_Fields = {
  __typename?: 'node_total_commitment_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Node_Total_Commitment_Stddev_Pop_Fields = {
  __typename?: 'node_total_commitment_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Node_Total_Commitment_Stddev_Samp_Fields = {
  __typename?: 'node_total_commitment_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Node_Total_Commitment_Sum_Fields = {
  __typename?: 'node_total_commitment_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Node_Total_Commitment_Var_Pop_Fields = {
  __typename?: 'node_total_commitment_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Node_Total_Commitment_Var_Samp_Fields = {
  __typename?: 'node_total_commitment_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Node_Total_Commitment_Variance_Fields = {
  __typename?: 'node_total_commitment_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "node_total_commitment" */
export type Node_Total_Commitment_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators = {
  __typename?: 'node_total_commitment_without_delegators';
  height: Scalars['bigint'];
  node_id: Scalars['String'];
  /** An object relationship */
  staking_table: Staking_Table;
  total_commitment_without_delegators: Scalars['String'];
};

/** aggregated selection of "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Aggregate = {
  __typename?: 'node_total_commitment_without_delegators_aggregate';
  aggregate?: Maybe<Node_Total_Commitment_Without_Delegators_Aggregate_Fields>;
  nodes: Array<Node_Total_Commitment_Without_Delegators>;
};

/** aggregate fields of "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Aggregate_Fields = {
  __typename?: 'node_total_commitment_without_delegators_aggregate_fields';
  avg?: Maybe<Node_Total_Commitment_Without_Delegators_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Node_Total_Commitment_Without_Delegators_Max_Fields>;
  min?: Maybe<Node_Total_Commitment_Without_Delegators_Min_Fields>;
  stddev?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Total_Commitment_Without_Delegators_Sum_Fields>;
  var_pop?: Maybe<Node_Total_Commitment_Without_Delegators_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Total_Commitment_Without_Delegators_Var_Samp_Fields>;
  variance?: Maybe<Node_Total_Commitment_Without_Delegators_Variance_Fields>;
};

/** aggregate fields of "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Aggregate_Order_By = {
  avg?: Maybe<Node_Total_Commitment_Without_Delegators_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Node_Total_Commitment_Without_Delegators_Max_Order_By>;
  min?: Maybe<Node_Total_Commitment_Without_Delegators_Min_Order_By>;
  stddev?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Order_By>;
  stddev_pop?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Node_Total_Commitment_Without_Delegators_Stddev_Samp_Order_By>;
  sum?: Maybe<Node_Total_Commitment_Without_Delegators_Sum_Order_By>;
  var_pop?: Maybe<Node_Total_Commitment_Without_Delegators_Var_Pop_Order_By>;
  var_samp?: Maybe<Node_Total_Commitment_Without_Delegators_Var_Samp_Order_By>;
  variance?: Maybe<Node_Total_Commitment_Without_Delegators_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Node_Total_Commitment_Without_Delegators_Avg_Fields = {
  __typename?: 'node_total_commitment_without_delegators_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "node_total_commitment_without_delegators". All fields are combined with a logical 'AND'. */
export type Node_Total_Commitment_Without_Delegators_Bool_Exp = {
  _and?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Bool_Exp>>;
  _not?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
  _or?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
  staking_table?: Maybe<Staking_Table_Bool_Exp>;
  total_commitment_without_delegators?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Node_Total_Commitment_Without_Delegators_Max_Fields = {
  __typename?: 'node_total_commitment_without_delegators_max_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  total_commitment_without_delegators?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Max_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  total_commitment_without_delegators?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Node_Total_Commitment_Without_Delegators_Min_Fields = {
  __typename?: 'node_total_commitment_without_delegators_min_fields';
  height?: Maybe<Scalars['bigint']>;
  node_id?: Maybe<Scalars['String']>;
  total_commitment_without_delegators?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Min_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  total_commitment_without_delegators?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "node_total_commitment_without_delegators". */
export type Node_Total_Commitment_Without_Delegators_Order_By = {
  height?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  staking_table?: Maybe<Staking_Table_Order_By>;
  total_commitment_without_delegators?: Maybe<Order_By>;
};

/** select columns of table "node_total_commitment_without_delegators" */
export enum Node_Total_Commitment_Without_Delegators_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  TotalCommitmentWithoutDelegators = 'total_commitment_without_delegators',
}

/** aggregate stddev on columns */
export type Node_Total_Commitment_Without_Delegators_Stddev_Fields = {
  __typename?: 'node_total_commitment_without_delegators_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Node_Total_Commitment_Without_Delegators_Stddev_Pop_Fields = {
  __typename?: 'node_total_commitment_without_delegators_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Node_Total_Commitment_Without_Delegators_Stddev_Samp_Fields = {
  __typename?: 'node_total_commitment_without_delegators_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Node_Total_Commitment_Without_Delegators_Sum_Fields = {
  __typename?: 'node_total_commitment_without_delegators_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Node_Total_Commitment_Without_Delegators_Var_Pop_Fields = {
  __typename?: 'node_total_commitment_without_delegators_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Node_Total_Commitment_Without_Delegators_Var_Samp_Fields = {
  __typename?: 'node_total_commitment_without_delegators_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Node_Total_Commitment_Without_Delegators_Variance_Fields = {
  __typename?: 'node_total_commitment_without_delegators_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "node_total_commitment_without_delegators" */
export type Node_Total_Commitment_Without_Delegators_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "proposed_table" */
export type Proposed_Table = {
  __typename?: 'proposed_table';
  height: Scalars['bigint'];
  proposed_table: Scalars['String'];
};

/** aggregated selection of "proposed_table" */
export type Proposed_Table_Aggregate = {
  __typename?: 'proposed_table_aggregate';
  aggregate?: Maybe<Proposed_Table_Aggregate_Fields>;
  nodes: Array<Proposed_Table>;
};

/** aggregate fields of "proposed_table" */
export type Proposed_Table_Aggregate_Fields = {
  __typename?: 'proposed_table_aggregate_fields';
  avg?: Maybe<Proposed_Table_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposed_Table_Max_Fields>;
  min?: Maybe<Proposed_Table_Min_Fields>;
  stddev?: Maybe<Proposed_Table_Stddev_Fields>;
  stddev_pop?: Maybe<Proposed_Table_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposed_Table_Stddev_Samp_Fields>;
  sum?: Maybe<Proposed_Table_Sum_Fields>;
  var_pop?: Maybe<Proposed_Table_Var_Pop_Fields>;
  var_samp?: Maybe<Proposed_Table_Var_Samp_Fields>;
  variance?: Maybe<Proposed_Table_Variance_Fields>;
};

/** aggregate fields of "proposed_table" */
export type Proposed_Table_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proposed_Table_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Proposed_Table_Avg_Fields = {
  __typename?: 'proposed_table_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "proposed_table". All fields are combined with a logical 'AND'. */
export type Proposed_Table_Bool_Exp = {
  _and?: Maybe<Array<Proposed_Table_Bool_Exp>>;
  _not?: Maybe<Proposed_Table_Bool_Exp>;
  _or?: Maybe<Array<Proposed_Table_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  proposed_table?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proposed_Table_Max_Fields = {
  __typename?: 'proposed_table_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposed_table?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Proposed_Table_Min_Fields = {
  __typename?: 'proposed_table_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposed_table?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "proposed_table". */
export type Proposed_Table_Order_By = {
  height?: Maybe<Order_By>;
  proposed_table?: Maybe<Order_By>;
};

/** select columns of table "proposed_table" */
export enum Proposed_Table_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposedTable = 'proposed_table',
}

/** aggregate stddev on columns */
export type Proposed_Table_Stddev_Fields = {
  __typename?: 'proposed_table_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Proposed_Table_Stddev_Pop_Fields = {
  __typename?: 'proposed_table_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Proposed_Table_Stddev_Samp_Fields = {
  __typename?: 'proposed_table_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Proposed_Table_Sum_Fields = {
  __typename?: 'proposed_table_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Proposed_Table_Var_Pop_Fields = {
  __typename?: 'proposed_table_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Proposed_Table_Var_Samp_Fields = {
  __typename?: 'proposed_table_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Proposed_Table_Variance_Fields = {
  __typename?: 'proposed_table_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "pruning" */
export type Pruning = {
  __typename?: 'pruning';
  last_pruned_height: Scalars['bigint'];
};

/** aggregated selection of "pruning" */
export type Pruning_Aggregate = {
  __typename?: 'pruning_aggregate';
  aggregate?: Maybe<Pruning_Aggregate_Fields>;
  nodes: Array<Pruning>;
};

/** aggregate fields of "pruning" */
export type Pruning_Aggregate_Fields = {
  __typename?: 'pruning_aggregate_fields';
  avg?: Maybe<Pruning_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pruning_Max_Fields>;
  min?: Maybe<Pruning_Min_Fields>;
  stddev?: Maybe<Pruning_Stddev_Fields>;
  stddev_pop?: Maybe<Pruning_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pruning_Stddev_Samp_Fields>;
  sum?: Maybe<Pruning_Sum_Fields>;
  var_pop?: Maybe<Pruning_Var_Pop_Fields>;
  var_samp?: Maybe<Pruning_Var_Samp_Fields>;
  variance?: Maybe<Pruning_Variance_Fields>;
};

/** aggregate fields of "pruning" */
export type Pruning_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pruning_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Pruning_Avg_Fields = {
  __typename?: 'pruning_avg_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "pruning". All fields are combined with a logical 'AND'. */
export type Pruning_Bool_Exp = {
  _and?: Maybe<Array<Pruning_Bool_Exp>>;
  _not?: Maybe<Pruning_Bool_Exp>;
  _or?: Maybe<Array<Pruning_Bool_Exp>>;
  last_pruned_height?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pruning_Max_Fields = {
  __typename?: 'pruning_max_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Pruning_Min_Fields = {
  __typename?: 'pruning_min_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "pruning". */
export type Pruning_Order_By = {
  last_pruned_height?: Maybe<Order_By>;
};

/** select columns of table "pruning" */
export enum Pruning_Select_Column {
  /** column name */
  LastPrunedHeight = 'last_pruned_height',
}

/** aggregate stddev on columns */
export type Pruning_Stddev_Fields = {
  __typename?: 'pruning_stddev_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Pruning_Stddev_Pop_Fields = {
  __typename?: 'pruning_stddev_pop_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Pruning_Stddev_Samp_Fields = {
  __typename?: 'pruning_stddev_samp_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Pruning_Sum_Fields = {
  __typename?: 'pruning_sum_fields';
  last_pruned_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Pruning_Var_Pop_Fields = {
  __typename?: 'pruning_var_pop_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Pruning_Var_Samp_Fields = {
  __typename?: 'pruning_var_samp_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Pruning_Variance_Fields = {
  __typename?: 'pruning_variance_fields';
  last_pruned_height?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** execute function "account_balance_tokens_prices" which returns "token_price" */
  account_balance_tokens_prices: Array<Token_Price>;
  /** execute function "account_balance_tokens_prices" and query aggregates on result of table type "token_price" */
  account_balance_tokens_prices_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "account_key_list" */
  account_key_list: Array<Account_Key_List>;
  /** fetch aggregated fields from the table: "account_key_list" */
  account_key_list_aggregate: Account_Key_List_Aggregate;
  /** fetch data from the table: "account_key_list" using primary key columns */
  account_key_list_by_pk?: Maybe<Account_Key_List>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "block_seal" */
  block_seal: Array<Block_Seal>;
  /** fetch aggregated fields from the table: "block_seal" */
  block_seal_aggregate: Block_Seal_Aggregate;
  /** fetch data from the table: "collection" */
  collection: Array<Collection>;
  /** fetch aggregated fields from the table: "collection" */
  collection_aggregate: Collection_Aggregate;
  /** fetch data from the table: "current_table" */
  current_table: Array<Current_Table>;
  /** fetch aggregated fields from the table: "current_table" */
  current_table_aggregate: Current_Table_Aggregate;
  /** fetch data from the table: "cut_percentage" */
  cut_percentage: Array<Cut_Percentage>;
  /** fetch aggregated fields from the table: "cut_percentage" */
  cut_percentage_aggregate: Cut_Percentage_Aggregate;
  /** fetch data from the table: "delegator_account" */
  delegator_account: Array<Delegator_Account>;
  /** fetch aggregated fields from the table: "delegator_account" */
  delegator_account_aggregate: Delegator_Account_Aggregate;
  /** fetch data from the table: "delegator_account" using primary key columns */
  delegator_account_by_pk?: Maybe<Delegator_Account>;
  /** fetch data from the table: "delegator_info" */
  delegator_info: Array<Delegator_Info>;
  /** fetch aggregated fields from the table: "delegator_info" */
  delegator_info_aggregate: Delegator_Info_Aggregate;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table: "locked_account" */
  locked_account: Array<Locked_Account>;
  /** fetch aggregated fields from the table: "locked_account" */
  locked_account_aggregate: Locked_Account_Aggregate;
  /** fetch data from the table: "locked_account_balance" */
  locked_account_balance: Array<Locked_Account_Balance>;
  /** fetch aggregated fields from the table: "locked_account_balance" */
  locked_account_balance_aggregate: Locked_Account_Balance_Aggregate;
  /** fetch data from the table: "locked_account_balance" using primary key columns */
  locked_account_balance_by_pk?: Maybe<Locked_Account_Balance>;
  /** fetch data from the table: "node_infos_from_table" */
  node_infos_from_table: Array<Node_Infos_From_Table>;
  /** fetch aggregated fields from the table: "node_infos_from_table" */
  node_infos_from_table_aggregate: Node_Infos_From_Table_Aggregate;
  /** fetch data from the table: "node_total_commitment" */
  node_total_commitment: Array<Node_Total_Commitment>;
  /** fetch aggregated fields from the table: "node_total_commitment" */
  node_total_commitment_aggregate: Node_Total_Commitment_Aggregate;
  /** An array relationship */
  node_total_commitment_without_delegators: Array<Node_Total_Commitment_Without_Delegators>;
  /** An aggregate relationship */
  node_total_commitment_without_delegators_aggregate: Node_Total_Commitment_Without_Delegators_Aggregate;
  /** fetch data from the table: "proposed_table" */
  proposed_table: Array<Proposed_Table>;
  /** fetch aggregated fields from the table: "proposed_table" */
  proposed_table_aggregate: Proposed_Table_Aggregate;
  /** fetch data from the table: "pruning" */
  pruning: Array<Pruning>;
  /** fetch aggregated fields from the table: "pruning" */
  pruning_aggregate: Pruning_Aggregate;
  /** fetch data from the table: "stake_requirements" */
  stake_requirements: Array<Stake_Requirements>;
  /** fetch aggregated fields from the table: "stake_requirements" */
  stake_requirements_aggregate: Stake_Requirements_Aggregate;
  /** fetch data from the table: "staker_node_id" */
  staker_node_id: Array<Staker_Node_Id>;
  /** fetch aggregated fields from the table: "staker_node_id" */
  staker_node_id_aggregate: Staker_Node_Id_Aggregate;
  /** fetch data from the table: "staking_table" */
  staking_table: Array<Staking_Table>;
  /** fetch aggregated fields from the table: "staking_table" */
  staking_table_aggregate: Staking_Table_Aggregate;
  /** fetch data from the table: "staking_table" using primary key columns */
  staking_table_by_pk?: Maybe<Staking_Table>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "total_stake" */
  total_stake: Array<Total_Stake>;
  /** fetch aggregated fields from the table: "total_stake" */
  total_stake_aggregate: Total_Stake_Aggregate;
  /** fetch data from the table: "total_stake_by_type" */
  total_stake_by_type: Array<Total_Stake_By_Type>;
  /** fetch aggregated fields from the table: "total_stake_by_type" */
  total_stake_by_type_aggregate: Total_Stake_By_Type_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction_result" */
  transaction_result: Array<Transaction_Result>;
  /** fetch aggregated fields from the table: "transaction_result" */
  transaction_result_aggregate: Transaction_Result_Aggregate;
  /** fetch data from the table: "weekly_payout" */
  weekly_payout: Array<Weekly_Payout>;
  /** fetch aggregated fields from the table: "weekly_payout" */
  weekly_payout_aggregate: Weekly_Payout_Aggregate;
};

export type Query_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};

export type Query_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};

export type Query_RootAccount_BalanceArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};

export type Query_RootAccount_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};

export type Query_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String'];
};

export type Query_RootAccount_Balance_Tokens_PricesArgs = {
  args: Account_Balance_Tokens_Prices_Args;
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Query_RootAccount_Balance_Tokens_Prices_AggregateArgs = {
  args: Account_Balance_Tokens_Prices_Args;
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};

export type Query_RootAccount_Key_ListArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

export type Query_RootAccount_Key_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

export type Query_RootAccount_Key_List_By_PkArgs = {
  address: Scalars['String'];
  index: Scalars['bigint'];
};

export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

export type Query_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};

export type Query_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};

export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};

export type Query_RootBlock_SealArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

export type Query_RootBlock_Seal_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

export type Query_RootCollectionArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

export type Query_RootCollection_AggregateArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

export type Query_RootCurrent_TableArgs = {
  distinct_on?: Maybe<Array<Current_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Table_Order_By>>;
  where?: Maybe<Current_Table_Bool_Exp>;
};

export type Query_RootCurrent_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Current_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Table_Order_By>>;
  where?: Maybe<Current_Table_Bool_Exp>;
};

export type Query_RootCut_PercentageArgs = {
  distinct_on?: Maybe<Array<Cut_Percentage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cut_Percentage_Order_By>>;
  where?: Maybe<Cut_Percentage_Bool_Exp>;
};

export type Query_RootCut_Percentage_AggregateArgs = {
  distinct_on?: Maybe<Array<Cut_Percentage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cut_Percentage_Order_By>>;
  where?: Maybe<Cut_Percentage_Bool_Exp>;
};

export type Query_RootDelegator_AccountArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

export type Query_RootDelegator_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

export type Query_RootDelegator_Account_By_PkArgs = {
  delegator_id: Scalars['bigint'];
  delegator_node_id: Scalars['String'];
};

export type Query_RootDelegator_InfoArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

export type Query_RootDelegator_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

export type Query_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Query_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Query_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};

export type Query_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};

export type Query_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootLocked_AccountArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Order_By>>;
  where?: Maybe<Locked_Account_Bool_Exp>;
};

export type Query_RootLocked_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Order_By>>;
  where?: Maybe<Locked_Account_Bool_Exp>;
};

export type Query_RootLocked_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

export type Query_RootLocked_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

export type Query_RootLocked_Account_Balance_By_PkArgs = {
  height: Scalars['bigint'];
  locked_address: Scalars['String'];
};

export type Query_RootNode_Infos_From_TableArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

export type Query_RootNode_Infos_From_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

export type Query_RootNode_Total_CommitmentArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

export type Query_RootNode_Total_Commitment_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

export type Query_RootNode_Total_Commitment_Without_DelegatorsArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

export type Query_RootNode_Total_Commitment_Without_Delegators_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

export type Query_RootProposed_TableArgs = {
  distinct_on?: Maybe<Array<Proposed_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposed_Table_Order_By>>;
  where?: Maybe<Proposed_Table_Bool_Exp>;
};

export type Query_RootProposed_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposed_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposed_Table_Order_By>>;
  where?: Maybe<Proposed_Table_Bool_Exp>;
};

export type Query_RootPruningArgs = {
  distinct_on?: Maybe<Array<Pruning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pruning_Order_By>>;
  where?: Maybe<Pruning_Bool_Exp>;
};

export type Query_RootPruning_AggregateArgs = {
  distinct_on?: Maybe<Array<Pruning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pruning_Order_By>>;
  where?: Maybe<Pruning_Bool_Exp>;
};

export type Query_RootStake_RequirementsArgs = {
  distinct_on?: Maybe<Array<Stake_Requirements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Requirements_Order_By>>;
  where?: Maybe<Stake_Requirements_Bool_Exp>;
};

export type Query_RootStake_Requirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Requirements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Requirements_Order_By>>;
  where?: Maybe<Stake_Requirements_Bool_Exp>;
};

export type Query_RootStaker_Node_IdArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

export type Query_RootStaker_Node_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

export type Query_RootStaking_TableArgs = {
  distinct_on?: Maybe<Array<Staking_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Table_Order_By>>;
  where?: Maybe<Staking_Table_Bool_Exp>;
};

export type Query_RootStaking_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Table_Order_By>>;
  where?: Maybe<Staking_Table_Bool_Exp>;
};

export type Query_RootStaking_Table_By_PkArgs = {
  node_id: Scalars['String'];
};

export type Query_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};

export type Query_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};

export type Query_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};

export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};

export type Query_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Query_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Query_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

export type Query_RootToken_Price_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

export type Query_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

export type Query_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

export type Query_RootTotal_StakeArgs = {
  distinct_on?: Maybe<Array<Total_Stake_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_Order_By>>;
  where?: Maybe<Total_Stake_Bool_Exp>;
};

export type Query_RootTotal_Stake_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Stake_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_Order_By>>;
  where?: Maybe<Total_Stake_Bool_Exp>;
};

export type Query_RootTotal_Stake_By_TypeArgs = {
  distinct_on?: Maybe<Array<Total_Stake_By_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_By_Type_Order_By>>;
  where?: Maybe<Total_Stake_By_Type_Bool_Exp>;
};

export type Query_RootTotal_Stake_By_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Stake_By_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_By_Type_Order_By>>;
  where?: Maybe<Total_Stake_By_Type_Bool_Exp>;
};

export type Query_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

export type Query_RootTransaction_ResultArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

export type Query_RootTransaction_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

export type Query_RootWeekly_PayoutArgs = {
  distinct_on?: Maybe<Array<Weekly_Payout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Payout_Order_By>>;
  where?: Maybe<Weekly_Payout_Bool_Exp>;
};

export type Query_RootWeekly_Payout_AggregateArgs = {
  distinct_on?: Maybe<Array<Weekly_Payout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Payout_Order_By>>;
  where?: Maybe<Weekly_Payout_Bool_Exp>;
};

/** columns and relationships of "stake_requirements" */
export type Stake_Requirements = {
  __typename?: 'stake_requirements';
  height: Scalars['bigint'];
  requirements: Scalars['String'];
  role: Scalars['String'];
};

/** aggregated selection of "stake_requirements" */
export type Stake_Requirements_Aggregate = {
  __typename?: 'stake_requirements_aggregate';
  aggregate?: Maybe<Stake_Requirements_Aggregate_Fields>;
  nodes: Array<Stake_Requirements>;
};

/** aggregate fields of "stake_requirements" */
export type Stake_Requirements_Aggregate_Fields = {
  __typename?: 'stake_requirements_aggregate_fields';
  avg?: Maybe<Stake_Requirements_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stake_Requirements_Max_Fields>;
  min?: Maybe<Stake_Requirements_Min_Fields>;
  stddev?: Maybe<Stake_Requirements_Stddev_Fields>;
  stddev_pop?: Maybe<Stake_Requirements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stake_Requirements_Stddev_Samp_Fields>;
  sum?: Maybe<Stake_Requirements_Sum_Fields>;
  var_pop?: Maybe<Stake_Requirements_Var_Pop_Fields>;
  var_samp?: Maybe<Stake_Requirements_Var_Samp_Fields>;
  variance?: Maybe<Stake_Requirements_Variance_Fields>;
};

/** aggregate fields of "stake_requirements" */
export type Stake_Requirements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stake_Requirements_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stake_Requirements_Avg_Fields = {
  __typename?: 'stake_requirements_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stake_requirements". All fields are combined with a logical 'AND'. */
export type Stake_Requirements_Bool_Exp = {
  _and?: Maybe<Array<Stake_Requirements_Bool_Exp>>;
  _not?: Maybe<Stake_Requirements_Bool_Exp>;
  _or?: Maybe<Array<Stake_Requirements_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  requirements?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stake_Requirements_Max_Fields = {
  __typename?: 'stake_requirements_max_fields';
  height?: Maybe<Scalars['bigint']>;
  requirements?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stake_Requirements_Min_Fields = {
  __typename?: 'stake_requirements_min_fields';
  height?: Maybe<Scalars['bigint']>;
  requirements?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "stake_requirements". */
export type Stake_Requirements_Order_By = {
  height?: Maybe<Order_By>;
  requirements?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** select columns of table "stake_requirements" */
export enum Stake_Requirements_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Requirements = 'requirements',
  /** column name */
  Role = 'role',
}

/** aggregate stddev on columns */
export type Stake_Requirements_Stddev_Fields = {
  __typename?: 'stake_requirements_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stake_Requirements_Stddev_Pop_Fields = {
  __typename?: 'stake_requirements_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stake_Requirements_Stddev_Samp_Fields = {
  __typename?: 'stake_requirements_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stake_Requirements_Sum_Fields = {
  __typename?: 'stake_requirements_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Stake_Requirements_Var_Pop_Fields = {
  __typename?: 'stake_requirements_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stake_Requirements_Var_Samp_Fields = {
  __typename?: 'stake_requirements_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stake_Requirements_Variance_Fields = {
  __typename?: 'stake_requirements_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staker_node_id" */
export type Staker_Node_Id = {
  __typename?: 'staker_node_id';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  node_id: Scalars['String'];
  /** An object relationship */
  staking_table: Staking_Table;
};

/** aggregated selection of "staker_node_id" */
export type Staker_Node_Id_Aggregate = {
  __typename?: 'staker_node_id_aggregate';
  aggregate?: Maybe<Staker_Node_Id_Aggregate_Fields>;
  nodes: Array<Staker_Node_Id>;
};

/** aggregate fields of "staker_node_id" */
export type Staker_Node_Id_Aggregate_Fields = {
  __typename?: 'staker_node_id_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Staker_Node_Id_Max_Fields>;
  min?: Maybe<Staker_Node_Id_Min_Fields>;
};

/** aggregate fields of "staker_node_id" */
export type Staker_Node_Id_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "staker_node_id" */
export type Staker_Node_Id_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Staker_Node_Id_Max_Order_By>;
  min?: Maybe<Staker_Node_Id_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "staker_node_id". All fields are combined with a logical 'AND'. */
export type Staker_Node_Id_Bool_Exp = {
  _and?: Maybe<Array<Staker_Node_Id_Bool_Exp>>;
  _not?: Maybe<Staker_Node_Id_Bool_Exp>;
  _or?: Maybe<Array<Staker_Node_Id_Bool_Exp>>;
  account?: Maybe<Account_Bool_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
  staking_table?: Maybe<Staking_Table_Bool_Exp>;
};

/** aggregate max on columns */
export type Staker_Node_Id_Max_Fields = {
  __typename?: 'staker_node_id_max_fields';
  address?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "staker_node_id" */
export type Staker_Node_Id_Max_Order_By = {
  address?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Staker_Node_Id_Min_Fields = {
  __typename?: 'staker_node_id_min_fields';
  address?: Maybe<Scalars['String']>;
  node_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "staker_node_id" */
export type Staker_Node_Id_Min_Order_By = {
  address?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "staker_node_id". */
export type Staker_Node_Id_Order_By = {
  account?: Maybe<Account_Order_By>;
  address?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  staking_table?: Maybe<Staking_Table_Order_By>;
};

/** select columns of table "staker_node_id" */
export enum Staker_Node_Id_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  NodeId = 'node_id',
}

/** columns and relationships of "staking_table" */
export type Staking_Table = {
  __typename?: 'staking_table';
  /** An array relationship */
  delegator_infos: Array<Delegator_Info>;
  /** An aggregate relationship */
  delegator_infos_aggregate: Delegator_Info_Aggregate;
  node_id: Scalars['String'];
  /** An array relationship */
  node_infos_from_tables: Array<Node_Infos_From_Table>;
  /** An aggregate relationship */
  node_infos_from_tables_aggregate: Node_Infos_From_Table_Aggregate;
  /** An array relationship */
  node_total_commitment_without_delegators: Array<Node_Total_Commitment_Without_Delegators>;
  /** An aggregate relationship */
  node_total_commitment_without_delegators_aggregate: Node_Total_Commitment_Without_Delegators_Aggregate;
  /** An array relationship */
  node_total_commitments: Array<Node_Total_Commitment>;
  /** An aggregate relationship */
  node_total_commitments_aggregate: Node_Total_Commitment_Aggregate;
  /** An object relationship */
  staker_node_id: Staker_Node_Id;
};

/** columns and relationships of "staking_table" */
export type Staking_TableDelegator_InfosArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableDelegator_Infos_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Infos_From_TablesArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Infos_From_Tables_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Total_Commitment_Without_DelegatorsArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Total_Commitment_Without_Delegators_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Total_CommitmentsArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

/** columns and relationships of "staking_table" */
export type Staking_TableNode_Total_Commitments_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

/** aggregated selection of "staking_table" */
export type Staking_Table_Aggregate = {
  __typename?: 'staking_table_aggregate';
  aggregate?: Maybe<Staking_Table_Aggregate_Fields>;
  nodes: Array<Staking_Table>;
};

/** aggregate fields of "staking_table" */
export type Staking_Table_Aggregate_Fields = {
  __typename?: 'staking_table_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Staking_Table_Max_Fields>;
  min?: Maybe<Staking_Table_Min_Fields>;
};

/** aggregate fields of "staking_table" */
export type Staking_Table_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Staking_Table_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "staking_table". All fields are combined with a logical 'AND'. */
export type Staking_Table_Bool_Exp = {
  _and?: Maybe<Array<Staking_Table_Bool_Exp>>;
  _not?: Maybe<Staking_Table_Bool_Exp>;
  _or?: Maybe<Array<Staking_Table_Bool_Exp>>;
  delegator_infos?: Maybe<Delegator_Info_Bool_Exp>;
  node_id?: Maybe<String_Comparison_Exp>;
  node_infos_from_tables?: Maybe<Node_Infos_From_Table_Bool_Exp>;
  node_total_commitment_without_delegators?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
  node_total_commitments?: Maybe<Node_Total_Commitment_Bool_Exp>;
  staker_node_id?: Maybe<Staker_Node_Id_Bool_Exp>;
};

/** aggregate max on columns */
export type Staking_Table_Max_Fields = {
  __typename?: 'staking_table_max_fields';
  node_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Staking_Table_Min_Fields = {
  __typename?: 'staking_table_min_fields';
  node_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "staking_table". */
export type Staking_Table_Order_By = {
  delegator_infos_aggregate?: Maybe<Delegator_Info_Aggregate_Order_By>;
  node_id?: Maybe<Order_By>;
  node_infos_from_tables_aggregate?: Maybe<Node_Infos_From_Table_Aggregate_Order_By>;
  node_total_commitment_without_delegators_aggregate?: Maybe<Node_Total_Commitment_Without_Delegators_Aggregate_Order_By>;
  node_total_commitments_aggregate?: Maybe<Node_Total_Commitment_Aggregate_Order_By>;
  staker_node_id?: Maybe<Staker_Node_Id_Order_By>;
};

/** select columns of table "staking_table" */
export enum Staking_Table_Select_Column {
  /** column name */
  NodeId = 'node_id',
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** execute function "account_balance_tokens_prices" which returns "token_price" */
  account_balance_tokens_prices: Array<Token_Price>;
  /** execute function "account_balance_tokens_prices" and query aggregates on result of table type "token_price" */
  account_balance_tokens_prices_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "account_key_list" */
  account_key_list: Array<Account_Key_List>;
  /** fetch aggregated fields from the table: "account_key_list" */
  account_key_list_aggregate: Account_Key_List_Aggregate;
  /** fetch data from the table: "account_key_list" using primary key columns */
  account_key_list_by_pk?: Maybe<Account_Key_List>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch aggregated fields from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis_aggregate: Average_Block_Time_From_Genesis_Aggregate;
  /** fetch data from the table: "average_block_time_from_genesis" using primary key columns */
  average_block_time_from_genesis_by_pk?: Maybe<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch aggregated fields from the table: "average_block_time_per_day" */
  average_block_time_per_day_aggregate: Average_Block_Time_Per_Day_Aggregate;
  /** fetch data from the table: "average_block_time_per_day" using primary key columns */
  average_block_time_per_day_by_pk?: Maybe<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_block_time_per_hour" */
  average_block_time_per_hour_aggregate: Average_Block_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "average_block_time_per_hour" using primary key columns */
  average_block_time_per_hour_by_pk?: Maybe<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch aggregated fields from the table: "average_block_time_per_minute" */
  average_block_time_per_minute_aggregate: Average_Block_Time_Per_Minute_Aggregate;
  /** fetch data from the table: "average_block_time_per_minute" using primary key columns */
  average_block_time_per_minute_by_pk?: Maybe<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "block_seal" */
  block_seal: Array<Block_Seal>;
  /** fetch aggregated fields from the table: "block_seal" */
  block_seal_aggregate: Block_Seal_Aggregate;
  /** fetch data from the table: "collection" */
  collection: Array<Collection>;
  /** fetch aggregated fields from the table: "collection" */
  collection_aggregate: Collection_Aggregate;
  /** fetch data from the table: "current_table" */
  current_table: Array<Current_Table>;
  /** fetch aggregated fields from the table: "current_table" */
  current_table_aggregate: Current_Table_Aggregate;
  /** fetch data from the table: "cut_percentage" */
  cut_percentage: Array<Cut_Percentage>;
  /** fetch aggregated fields from the table: "cut_percentage" */
  cut_percentage_aggregate: Cut_Percentage_Aggregate;
  /** fetch data from the table: "delegator_account" */
  delegator_account: Array<Delegator_Account>;
  /** fetch aggregated fields from the table: "delegator_account" */
  delegator_account_aggregate: Delegator_Account_Aggregate;
  /** fetch data from the table: "delegator_account" using primary key columns */
  delegator_account_by_pk?: Maybe<Delegator_Account>;
  /** fetch data from the table: "delegator_info" */
  delegator_info: Array<Delegator_Info>;
  /** fetch aggregated fields from the table: "delegator_info" */
  delegator_info_aggregate: Delegator_Info_Aggregate;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch aggregated fields from the table: "genesis" */
  genesis_aggregate: Genesis_Aggregate;
  /** fetch data from the table: "genesis" using primary key columns */
  genesis_by_pk?: Maybe<Genesis>;
  /** fetch data from the table: "locked_account" */
  locked_account: Array<Locked_Account>;
  /** fetch aggregated fields from the table: "locked_account" */
  locked_account_aggregate: Locked_Account_Aggregate;
  /** fetch data from the table: "locked_account_balance" */
  locked_account_balance: Array<Locked_Account_Balance>;
  /** fetch aggregated fields from the table: "locked_account_balance" */
  locked_account_balance_aggregate: Locked_Account_Balance_Aggregate;
  /** fetch data from the table: "locked_account_balance" using primary key columns */
  locked_account_balance_by_pk?: Maybe<Locked_Account_Balance>;
  /** fetch data from the table: "node_infos_from_table" */
  node_infos_from_table: Array<Node_Infos_From_Table>;
  /** fetch aggregated fields from the table: "node_infos_from_table" */
  node_infos_from_table_aggregate: Node_Infos_From_Table_Aggregate;
  /** fetch data from the table: "node_total_commitment" */
  node_total_commitment: Array<Node_Total_Commitment>;
  /** fetch aggregated fields from the table: "node_total_commitment" */
  node_total_commitment_aggregate: Node_Total_Commitment_Aggregate;
  /** An array relationship */
  node_total_commitment_without_delegators: Array<Node_Total_Commitment_Without_Delegators>;
  /** An aggregate relationship */
  node_total_commitment_without_delegators_aggregate: Node_Total_Commitment_Without_Delegators_Aggregate;
  /** fetch data from the table: "proposed_table" */
  proposed_table: Array<Proposed_Table>;
  /** fetch aggregated fields from the table: "proposed_table" */
  proposed_table_aggregate: Proposed_Table_Aggregate;
  /** fetch data from the table: "pruning" */
  pruning: Array<Pruning>;
  /** fetch aggregated fields from the table: "pruning" */
  pruning_aggregate: Pruning_Aggregate;
  /** fetch data from the table: "stake_requirements" */
  stake_requirements: Array<Stake_Requirements>;
  /** fetch aggregated fields from the table: "stake_requirements" */
  stake_requirements_aggregate: Stake_Requirements_Aggregate;
  /** fetch data from the table: "staker_node_id" */
  staker_node_id: Array<Staker_Node_Id>;
  /** fetch aggregated fields from the table: "staker_node_id" */
  staker_node_id_aggregate: Staker_Node_Id_Aggregate;
  /** fetch data from the table: "staking_table" */
  staking_table: Array<Staking_Table>;
  /** fetch aggregated fields from the table: "staking_table" */
  staking_table_aggregate: Staking_Table_Aggregate;
  /** fetch data from the table: "staking_table" using primary key columns */
  staking_table_by_pk?: Maybe<Staking_Table>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch aggregated fields from the table: "supply" */
  supply_aggregate: Supply_Aggregate;
  /** fetch data from the table: "supply" using primary key columns */
  supply_by_pk?: Maybe<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch aggregated fields from the table: "token_price_history" */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_price_history" using primary key columns */
  token_price_history_by_pk?: Maybe<Token_Price_History>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "total_stake" */
  total_stake: Array<Total_Stake>;
  /** fetch aggregated fields from the table: "total_stake" */
  total_stake_aggregate: Total_Stake_Aggregate;
  /** fetch data from the table: "total_stake_by_type" */
  total_stake_by_type: Array<Total_Stake_By_Type>;
  /** fetch aggregated fields from the table: "total_stake_by_type" */
  total_stake_by_type_aggregate: Total_Stake_By_Type_Aggregate;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction_result" */
  transaction_result: Array<Transaction_Result>;
  /** fetch aggregated fields from the table: "transaction_result" */
  transaction_result_aggregate: Transaction_Result_Aggregate;
  /** fetch data from the table: "weekly_payout" */
  weekly_payout: Array<Weekly_Payout>;
  /** fetch aggregated fields from the table: "weekly_payout" */
  weekly_payout_aggregate: Weekly_Payout_Aggregate;
};

export type Subscription_RootAccountArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Order_By>>;
  where?: Maybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_BalanceArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};

export type Subscription_RootAccount_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_Order_By>>;
  where?: Maybe<Account_Balance_Bool_Exp>;
};

export type Subscription_RootAccount_Balance_By_PkArgs = {
  address: Scalars['String'];
};

export type Subscription_RootAccount_Balance_Tokens_PricesArgs = {
  args: Account_Balance_Tokens_Prices_Args;
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Subscription_RootAccount_Balance_Tokens_Prices_AggregateArgs = {
  args: Account_Balance_Tokens_Prices_Args;
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};

export type Subscription_RootAccount_Key_ListArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

export type Subscription_RootAccount_Key_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Key_List_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Key_List_Order_By>>;
  where?: Maybe<Account_Key_List_Bool_Exp>;
};

export type Subscription_RootAccount_Key_List_By_PkArgs = {
  address: Scalars['String'];
  index: Scalars['bigint'];
};

export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: Maybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_From_Genesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Day_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Day_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Hour_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: Maybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};

export type Subscription_RootAverage_Block_Time_Per_Minute_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootBlockArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};

export type Subscription_RootBlock_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Order_By>>;
  where?: Maybe<Block_Bool_Exp>;
};

export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};

export type Subscription_RootBlock_SealArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

export type Subscription_RootBlock_Seal_AggregateArgs = {
  distinct_on?: Maybe<Array<Block_Seal_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Block_Seal_Order_By>>;
  where?: Maybe<Block_Seal_Bool_Exp>;
};

export type Subscription_RootCollectionArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

export type Subscription_RootCollection_AggregateArgs = {
  distinct_on?: Maybe<Array<Collection_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collection_Order_By>>;
  where?: Maybe<Collection_Bool_Exp>;
};

export type Subscription_RootCurrent_TableArgs = {
  distinct_on?: Maybe<Array<Current_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Table_Order_By>>;
  where?: Maybe<Current_Table_Bool_Exp>;
};

export type Subscription_RootCurrent_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Current_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_Table_Order_By>>;
  where?: Maybe<Current_Table_Bool_Exp>;
};

export type Subscription_RootCut_PercentageArgs = {
  distinct_on?: Maybe<Array<Cut_Percentage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cut_Percentage_Order_By>>;
  where?: Maybe<Cut_Percentage_Bool_Exp>;
};

export type Subscription_RootCut_Percentage_AggregateArgs = {
  distinct_on?: Maybe<Array<Cut_Percentage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cut_Percentage_Order_By>>;
  where?: Maybe<Cut_Percentage_Bool_Exp>;
};

export type Subscription_RootDelegator_AccountArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

export type Subscription_RootDelegator_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Account_Order_By>>;
  where?: Maybe<Delegator_Account_Bool_Exp>;
};

export type Subscription_RootDelegator_Account_By_PkArgs = {
  delegator_id: Scalars['bigint'];
  delegator_node_id: Scalars['String'];
};

export type Subscription_RootDelegator_InfoArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

export type Subscription_RootDelegator_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Delegator_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Delegator_Info_Order_By>>;
  where?: Maybe<Delegator_Info_Bool_Exp>;
};

export type Subscription_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};

export type Subscription_RootGenesisArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};

export type Subscription_RootGenesis_AggregateArgs = {
  distinct_on?: Maybe<Array<Genesis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genesis_Order_By>>;
  where?: Maybe<Genesis_Bool_Exp>;
};

export type Subscription_RootGenesis_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootLocked_AccountArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Order_By>>;
  where?: Maybe<Locked_Account_Bool_Exp>;
};

export type Subscription_RootLocked_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Order_By>>;
  where?: Maybe<Locked_Account_Bool_Exp>;
};

export type Subscription_RootLocked_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

export type Subscription_RootLocked_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Locked_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locked_Account_Balance_Order_By>>;
  where?: Maybe<Locked_Account_Balance_Bool_Exp>;
};

export type Subscription_RootLocked_Account_Balance_By_PkArgs = {
  height: Scalars['bigint'];
  locked_address: Scalars['String'];
};

export type Subscription_RootNode_Infos_From_TableArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

export type Subscription_RootNode_Infos_From_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Infos_From_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Infos_From_Table_Order_By>>;
  where?: Maybe<Node_Infos_From_Table_Bool_Exp>;
};

export type Subscription_RootNode_Total_CommitmentArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

export type Subscription_RootNode_Total_Commitment_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Bool_Exp>;
};

export type Subscription_RootNode_Total_Commitment_Without_DelegatorsArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

export type Subscription_RootNode_Total_Commitment_Without_Delegators_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Total_Commitment_Without_Delegators_Order_By>>;
  where?: Maybe<Node_Total_Commitment_Without_Delegators_Bool_Exp>;
};

export type Subscription_RootProposed_TableArgs = {
  distinct_on?: Maybe<Array<Proposed_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposed_Table_Order_By>>;
  where?: Maybe<Proposed_Table_Bool_Exp>;
};

export type Subscription_RootProposed_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Proposed_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proposed_Table_Order_By>>;
  where?: Maybe<Proposed_Table_Bool_Exp>;
};

export type Subscription_RootPruningArgs = {
  distinct_on?: Maybe<Array<Pruning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pruning_Order_By>>;
  where?: Maybe<Pruning_Bool_Exp>;
};

export type Subscription_RootPruning_AggregateArgs = {
  distinct_on?: Maybe<Array<Pruning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Pruning_Order_By>>;
  where?: Maybe<Pruning_Bool_Exp>;
};

export type Subscription_RootStake_RequirementsArgs = {
  distinct_on?: Maybe<Array<Stake_Requirements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Requirements_Order_By>>;
  where?: Maybe<Stake_Requirements_Bool_Exp>;
};

export type Subscription_RootStake_Requirements_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Requirements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Requirements_Order_By>>;
  where?: Maybe<Stake_Requirements_Bool_Exp>;
};

export type Subscription_RootStaker_Node_IdArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

export type Subscription_RootStaker_Node_Id_AggregateArgs = {
  distinct_on?: Maybe<Array<Staker_Node_Id_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staker_Node_Id_Order_By>>;
  where?: Maybe<Staker_Node_Id_Bool_Exp>;
};

export type Subscription_RootStaking_TableArgs = {
  distinct_on?: Maybe<Array<Staking_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Table_Order_By>>;
  where?: Maybe<Staking_Table_Bool_Exp>;
};

export type Subscription_RootStaking_Table_AggregateArgs = {
  distinct_on?: Maybe<Array<Staking_Table_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Staking_Table_Order_By>>;
  where?: Maybe<Staking_Table_Bool_Exp>;
};

export type Subscription_RootStaking_Table_By_PkArgs = {
  node_id: Scalars['String'];
};

export type Subscription_RootSupplyArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};

export type Subscription_RootSupply_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Order_By>>;
  where?: Maybe<Supply_Bool_Exp>;
};

export type Subscription_RootSupply_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};

export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};

export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};

export type Subscription_RootToken_PriceArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Subscription_RootToken_Price_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_Order_By>>;
  where?: Maybe<Token_Price_Bool_Exp>;
};

export type Subscription_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

export type Subscription_RootToken_Price_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

export type Subscription_RootToken_Price_History_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootToken_UnitArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

export type Subscription_RootToken_Unit_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

export type Subscription_RootTotal_StakeArgs = {
  distinct_on?: Maybe<Array<Total_Stake_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_Order_By>>;
  where?: Maybe<Total_Stake_Bool_Exp>;
};

export type Subscription_RootTotal_Stake_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Stake_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_Order_By>>;
  where?: Maybe<Total_Stake_Bool_Exp>;
};

export type Subscription_RootTotal_Stake_By_TypeArgs = {
  distinct_on?: Maybe<Array<Total_Stake_By_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_By_Type_Order_By>>;
  where?: Maybe<Total_Stake_By_Type_Bool_Exp>;
};

export type Subscription_RootTotal_Stake_By_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Total_Stake_By_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Total_Stake_By_Type_Order_By>>;
  where?: Maybe<Total_Stake_By_Type_Bool_Exp>;
};

export type Subscription_RootTransactionArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};

export type Subscription_RootTransaction_ResultArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

export type Subscription_RootTransaction_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Transaction_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Result_Order_By>>;
  where?: Maybe<Transaction_Result_Bool_Exp>;
};

export type Subscription_RootWeekly_PayoutArgs = {
  distinct_on?: Maybe<Array<Weekly_Payout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Payout_Order_By>>;
  where?: Maybe<Weekly_Payout_Bool_Exp>;
};

export type Subscription_RootWeekly_Payout_AggregateArgs = {
  distinct_on?: Maybe<Array<Weekly_Payout_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Weekly_Payout_Order_By>>;
  where?: Maybe<Weekly_Payout_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  supply: Scalars['bigint'];
};

/** aggregated selection of "supply" */
export type Supply_Aggregate = {
  __typename?: 'supply_aggregate';
  aggregate?: Maybe<Supply_Aggregate_Fields>;
  nodes: Array<Supply>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_Fields = {
  __typename?: 'supply_aggregate_fields';
  avg?: Maybe<Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Max_Fields>;
  min?: Maybe<Supply_Min_Fields>;
  stddev?: Maybe<Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Sum_Fields>;
  var_pop?: Maybe<Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Var_Samp_Fields>;
  variance?: Maybe<Supply_Variance_Fields>;
};

/** aggregate fields of "supply" */
export type Supply_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Supply_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Avg_Fields = {
  __typename?: 'supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: Maybe<Array<Supply_Bool_Exp>>;
  _not?: Maybe<Supply_Bool_Exp>;
  _or?: Maybe<Array<Supply_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  one_row_id?: Maybe<Boolean_Comparison_Exp>;
  supply?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Supply_Max_Fields = {
  __typename?: 'supply_max_fields';
  height?: Maybe<Scalars['bigint']>;
  supply?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Supply_Min_Fields = {
  __typename?: 'supply_min_fields';
  height?: Maybe<Scalars['bigint']>;
  supply?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  height?: Maybe<Order_By>;
  one_row_id?: Maybe<Order_By>;
  supply?: Maybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Supply = 'supply',
}

/** aggregate stddev on columns */
export type Supply_Stddev_Fields = {
  __typename?: 'supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Stddev_Pop_Fields = {
  __typename?: 'supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Stddev_Samp_Fields = {
  __typename?: 'supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Supply_Sum_Fields = {
  __typename?: 'supply_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  supply?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Supply_Var_Pop_Fields = {
  __typename?: 'supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Var_Samp_Fields = {
  __typename?: 'supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Variance_Fields = {
  __typename?: 'supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
  /** An aggregate relationship */
  token_units_aggregate: Token_Unit_Aggregate;
};

/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

/** columns and relationships of "token" */
export type TokenToken_Units_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Unit_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Unit_Order_By>>;
  where?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  token_units?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: Maybe<Order_By>;
  token_units_aggregate?: Maybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price" */
export type Token_Price_Aggregate = {
  __typename?: 'token_price_aggregate';
  aggregate?: Maybe<Token_Price_Aggregate_Fields>;
  nodes: Array<Token_Price>;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_Fields = {
  __typename?: 'token_price_aggregate_fields';
  avg?: Maybe<Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_Max_Fields>;
  min?: Maybe<Token_Price_Min_Fields>;
  stddev?: Maybe<Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_Sum_Fields>;
  var_pop?: Maybe<Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_Variance_Fields>;
};

/** aggregate fields of "token_price" */
export type Token_Price_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Price_Avg_Fields = {
  __typename?: 'token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_Bool_Exp>>;
  _not?: Maybe<Token_Price_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  id: Scalars['Int'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** aggregated selection of "token_price_history" */
export type Token_Price_History_Aggregate = {
  __typename?: 'token_price_history_aggregate';
  aggregate?: Maybe<Token_Price_History_Aggregate_Fields>;
  nodes: Array<Token_Price_History>;
};

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_Fields = {
  __typename?: 'token_price_history_aggregate_fields';
  avg?: Maybe<Token_Price_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Price_History_Max_Fields>;
  min?: Maybe<Token_Price_History_Min_Fields>;
  stddev?: Maybe<Token_Price_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Price_History_Sum_Fields>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Price_History_Variance_Fields>;
};

/** aggregate fields of "token_price_history" */
export type Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Price_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: Maybe<Token_Price_History_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Price_History_Max_Order_By>;
  min?: Maybe<Token_Price_History_Min_Order_By>;
  stddev?: Maybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Price_History_Sum_Order_By>;
  var_pop?: Maybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: Maybe<Token_Price_History_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Price_History_Avg_Fields = {
  __typename?: 'token_price_history_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: Maybe<Token_Price_History_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name',
}

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  unit_name?: Maybe<Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name',
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name',
}

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  aliases?: Maybe<Scalars['_text']>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token: Token;
  token_name: Scalars['String'];
  /** An object relationship */
  token_price: Token_Price;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_histories_aggregate: Token_Price_History_Aggregate;
};

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};

/** aggregated selection of "token_unit" */
export type Token_Unit_Aggregate = {
  __typename?: 'token_unit_aggregate';
  aggregate?: Maybe<Token_Unit_Aggregate_Fields>;
  nodes: Array<Token_Unit>;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_Fields = {
  __typename?: 'token_unit_aggregate_fields';
  avg?: Maybe<Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
  stddev?: Maybe<Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Token_Unit_Variance_Fields>;
};

/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: Maybe<Token_Unit_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Unit_Max_Order_By>;
  min?: Maybe<Token_Unit_Min_Order_By>;
  stddev?: Maybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: Maybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: Maybe<Token_Unit_Sum_Order_By>;
  var_pop?: Maybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: Maybe<Token_Unit_Var_Samp_Order_By>;
  variance?: Maybe<Token_Unit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Token_Unit_Avg_Fields = {
  __typename?: 'token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: Maybe<Array<Token_Unit_Bool_Exp>>;
  _not?: Maybe<Token_Unit_Bool_Exp>;
  _or?: Maybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: Maybe<_Text_Comparison_Exp>;
  denom?: Maybe<String_Comparison_Exp>;
  exponent?: Maybe<Int_Comparison_Exp>;
  price_id?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  token_name?: Maybe<String_Comparison_Exp>;
  token_price?: Maybe<Token_Price_Bool_Exp>;
  token_price_histories?: Maybe<Token_Price_History_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token_name?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: Maybe<Order_By>;
  denom?: Maybe<Order_By>;
  exponent?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  token_name?: Maybe<Order_By>;
  token_price?: Maybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: Maybe<Token_Price_History_Aggregate_Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Aliases = 'aliases',
  /** column name */
  Denom = 'denom',
  /** column name */
  Exponent = 'exponent',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  TokenName = 'token_name',
}

/** aggregate stddev on columns */
export type Token_Unit_Stddev_Fields = {
  __typename?: 'token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Unit_Sum_Fields = {
  __typename?: 'token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Unit_Var_Pop_Fields = {
  __typename?: 'token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Unit_Var_Samp_Fields = {
  __typename?: 'token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Unit_Variance_Fields = {
  __typename?: 'token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: Maybe<Order_By>;
};

/** columns and relationships of "total_stake" */
export type Total_Stake = {
  __typename?: 'total_stake';
  height: Scalars['bigint'];
  total_stake: Scalars['bigint'];
};

/** aggregated selection of "total_stake" */
export type Total_Stake_Aggregate = {
  __typename?: 'total_stake_aggregate';
  aggregate?: Maybe<Total_Stake_Aggregate_Fields>;
  nodes: Array<Total_Stake>;
};

/** aggregate fields of "total_stake" */
export type Total_Stake_Aggregate_Fields = {
  __typename?: 'total_stake_aggregate_fields';
  avg?: Maybe<Total_Stake_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Total_Stake_Max_Fields>;
  min?: Maybe<Total_Stake_Min_Fields>;
  stddev?: Maybe<Total_Stake_Stddev_Fields>;
  stddev_pop?: Maybe<Total_Stake_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Total_Stake_Stddev_Samp_Fields>;
  sum?: Maybe<Total_Stake_Sum_Fields>;
  var_pop?: Maybe<Total_Stake_Var_Pop_Fields>;
  var_samp?: Maybe<Total_Stake_Var_Samp_Fields>;
  variance?: Maybe<Total_Stake_Variance_Fields>;
};

/** aggregate fields of "total_stake" */
export type Total_Stake_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Total_Stake_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Total_Stake_Avg_Fields = {
  __typename?: 'total_stake_avg_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "total_stake". All fields are combined with a logical 'AND'. */
export type Total_Stake_Bool_Exp = {
  _and?: Maybe<Array<Total_Stake_Bool_Exp>>;
  _not?: Maybe<Total_Stake_Bool_Exp>;
  _or?: Maybe<Array<Total_Stake_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  total_stake?: Maybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "total_stake_by_type" */
export type Total_Stake_By_Type = {
  __typename?: 'total_stake_by_type';
  height: Scalars['bigint'];
  role: Scalars['String'];
  total_stake: Scalars['String'];
};

/** aggregated selection of "total_stake_by_type" */
export type Total_Stake_By_Type_Aggregate = {
  __typename?: 'total_stake_by_type_aggregate';
  aggregate?: Maybe<Total_Stake_By_Type_Aggregate_Fields>;
  nodes: Array<Total_Stake_By_Type>;
};

/** aggregate fields of "total_stake_by_type" */
export type Total_Stake_By_Type_Aggregate_Fields = {
  __typename?: 'total_stake_by_type_aggregate_fields';
  avg?: Maybe<Total_Stake_By_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Total_Stake_By_Type_Max_Fields>;
  min?: Maybe<Total_Stake_By_Type_Min_Fields>;
  stddev?: Maybe<Total_Stake_By_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Total_Stake_By_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Total_Stake_By_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Total_Stake_By_Type_Sum_Fields>;
  var_pop?: Maybe<Total_Stake_By_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Total_Stake_By_Type_Var_Samp_Fields>;
  variance?: Maybe<Total_Stake_By_Type_Variance_Fields>;
};

/** aggregate fields of "total_stake_by_type" */
export type Total_Stake_By_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Total_Stake_By_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Total_Stake_By_Type_Avg_Fields = {
  __typename?: 'total_stake_by_type_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "total_stake_by_type". All fields are combined with a logical 'AND'. */
export type Total_Stake_By_Type_Bool_Exp = {
  _and?: Maybe<Array<Total_Stake_By_Type_Bool_Exp>>;
  _not?: Maybe<Total_Stake_By_Type_Bool_Exp>;
  _or?: Maybe<Array<Total_Stake_By_Type_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  total_stake?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Total_Stake_By_Type_Max_Fields = {
  __typename?: 'total_stake_by_type_max_fields';
  height?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['String']>;
  total_stake?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Total_Stake_By_Type_Min_Fields = {
  __typename?: 'total_stake_by_type_min_fields';
  height?: Maybe<Scalars['bigint']>;
  role?: Maybe<Scalars['String']>;
  total_stake?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "total_stake_by_type". */
export type Total_Stake_By_Type_Order_By = {
  height?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  total_stake?: Maybe<Order_By>;
};

/** select columns of table "total_stake_by_type" */
export enum Total_Stake_By_Type_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Role = 'role',
  /** column name */
  TotalStake = 'total_stake',
}

/** aggregate stddev on columns */
export type Total_Stake_By_Type_Stddev_Fields = {
  __typename?: 'total_stake_by_type_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Total_Stake_By_Type_Stddev_Pop_Fields = {
  __typename?: 'total_stake_by_type_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Total_Stake_By_Type_Stddev_Samp_Fields = {
  __typename?: 'total_stake_by_type_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Total_Stake_By_Type_Sum_Fields = {
  __typename?: 'total_stake_by_type_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Total_Stake_By_Type_Var_Pop_Fields = {
  __typename?: 'total_stake_by_type_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Total_Stake_By_Type_Var_Samp_Fields = {
  __typename?: 'total_stake_by_type_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Total_Stake_By_Type_Variance_Fields = {
  __typename?: 'total_stake_by_type_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Total_Stake_Max_Fields = {
  __typename?: 'total_stake_max_fields';
  height?: Maybe<Scalars['bigint']>;
  total_stake?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Total_Stake_Min_Fields = {
  __typename?: 'total_stake_min_fields';
  height?: Maybe<Scalars['bigint']>;
  total_stake?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "total_stake". */
export type Total_Stake_Order_By = {
  height?: Maybe<Order_By>;
  total_stake?: Maybe<Order_By>;
};

/** select columns of table "total_stake" */
export enum Total_Stake_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  TotalStake = 'total_stake',
}

/** aggregate stddev on columns */
export type Total_Stake_Stddev_Fields = {
  __typename?: 'total_stake_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Total_Stake_Stddev_Pop_Fields = {
  __typename?: 'total_stake_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Total_Stake_Stddev_Samp_Fields = {
  __typename?: 'total_stake_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Total_Stake_Sum_Fields = {
  __typename?: 'total_stake_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  total_stake?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Total_Stake_Var_Pop_Fields = {
  __typename?: 'total_stake_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Total_Stake_Var_Samp_Fields = {
  __typename?: 'total_stake_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Total_Stake_Variance_Fields = {
  __typename?: 'total_stake_variance_fields';
  height?: Maybe<Scalars['Float']>;
  total_stake?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  arguments?: Maybe<Scalars['_text']>;
  authorizers?: Maybe<Scalars['_text']>;
  /** An object relationship */
  block: Block;
  /** An object relationship */
  collection: Collection;
  envelope_signatures?: Maybe<Scalars['jsonb']>;
  gas_limit?: Maybe<Scalars['bigint']>;
  height: Scalars['bigint'];
  payer?: Maybe<Scalars['String']>;
  payload_signature?: Maybe<Scalars['jsonb']>;
  proposal_key?: Maybe<Scalars['String']>;
  reference_block_id?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  transaction_id: Scalars['String'];
  /** An object relationship */
  transaction_result?: Maybe<Transaction_Result>;
};

/** columns and relationships of "transaction" */
export type TransactionEnvelope_SignaturesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "transaction" */
export type TransactionPayload_SignatureArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: Maybe<Transaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transaction_Max_Order_By>;
  min?: Maybe<Transaction_Min_Order_By>;
  stddev?: Maybe<Transaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Transaction_Sum_Order_By>;
  var_pop?: Maybe<Transaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Transaction_Var_Samp_Order_By>;
  variance?: Maybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  arguments?: Maybe<_Text_Comparison_Exp>;
  authorizers?: Maybe<_Text_Comparison_Exp>;
  block?: Maybe<Block_Bool_Exp>;
  collection?: Maybe<Collection_Bool_Exp>;
  envelope_signatures?: Maybe<Jsonb_Comparison_Exp>;
  gas_limit?: Maybe<Bigint_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  payer?: Maybe<String_Comparison_Exp>;
  payload_signature?: Maybe<Jsonb_Comparison_Exp>;
  proposal_key?: Maybe<String_Comparison_Exp>;
  reference_block_id?: Maybe<String_Comparison_Exp>;
  script?: Maybe<String_Comparison_Exp>;
  transaction_id?: Maybe<String_Comparison_Exp>;
  transaction_result?: Maybe<Transaction_Result_Bool_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  gas_limit?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  payer?: Maybe<Scalars['String']>;
  proposal_key?: Maybe<Scalars['String']>;
  reference_block_id?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  payer?: Maybe<Order_By>;
  proposal_key?: Maybe<Order_By>;
  reference_block_id?: Maybe<Order_By>;
  script?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  gas_limit?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  payer?: Maybe<Scalars['String']>;
  proposal_key?: Maybe<Scalars['String']>;
  reference_block_id?: Maybe<Scalars['String']>;
  script?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  payer?: Maybe<Order_By>;
  proposal_key?: Maybe<Order_By>;
  reference_block_id?: Maybe<Order_By>;
  script?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  arguments?: Maybe<Order_By>;
  authorizers?: Maybe<Order_By>;
  block?: Maybe<Block_Order_By>;
  collection?: Maybe<Collection_Order_By>;
  envelope_signatures?: Maybe<Order_By>;
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  payer?: Maybe<Order_By>;
  payload_signature?: Maybe<Order_By>;
  proposal_key?: Maybe<Order_By>;
  reference_block_id?: Maybe<Order_By>;
  script?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
  transaction_result?: Maybe<Transaction_Result_Order_By>;
};

/** columns and relationships of "transaction_result" */
export type Transaction_Result = {
  __typename?: 'transaction_result';
  /** An object relationship */
  block: Block;
  /** An object relationship */
  collection: Collection;
  error?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  status: Scalars['String'];
  transaction_id: Scalars['String'];
};

/** aggregated selection of "transaction_result" */
export type Transaction_Result_Aggregate = {
  __typename?: 'transaction_result_aggregate';
  aggregate?: Maybe<Transaction_Result_Aggregate_Fields>;
  nodes: Array<Transaction_Result>;
};

/** aggregate fields of "transaction_result" */
export type Transaction_Result_Aggregate_Fields = {
  __typename?: 'transaction_result_aggregate_fields';
  avg?: Maybe<Transaction_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Result_Max_Fields>;
  min?: Maybe<Transaction_Result_Min_Fields>;
  stddev?: Maybe<Transaction_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Result_Sum_Fields>;
  var_pop?: Maybe<Transaction_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Result_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Result_Variance_Fields>;
};

/** aggregate fields of "transaction_result" */
export type Transaction_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transaction_Result_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction_result" */
export type Transaction_Result_Aggregate_Order_By = {
  avg?: Maybe<Transaction_Result_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transaction_Result_Max_Order_By>;
  min?: Maybe<Transaction_Result_Min_Order_By>;
  stddev?: Maybe<Transaction_Result_Stddev_Order_By>;
  stddev_pop?: Maybe<Transaction_Result_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transaction_Result_Stddev_Samp_Order_By>;
  sum?: Maybe<Transaction_Result_Sum_Order_By>;
  var_pop?: Maybe<Transaction_Result_Var_Pop_Order_By>;
  var_samp?: Maybe<Transaction_Result_Var_Samp_Order_By>;
  variance?: Maybe<Transaction_Result_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Result_Avg_Fields = {
  __typename?: 'transaction_result_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction_result" */
export type Transaction_Result_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction_result". All fields are combined with a logical 'AND'. */
export type Transaction_Result_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Result_Bool_Exp>>;
  _not?: Maybe<Transaction_Result_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Result_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  collection?: Maybe<Collection_Bool_Exp>;
  error?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  transaction_id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Result_Max_Fields = {
  __typename?: 'transaction_result_max_fields';
  error?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transaction_result" */
export type Transaction_Result_Max_Order_By = {
  error?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Result_Min_Fields = {
  __typename?: 'transaction_result_min_fields';
  error?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transaction_result" */
export type Transaction_Result_Min_Order_By = {
  error?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "transaction_result". */
export type Transaction_Result_Order_By = {
  block?: Maybe<Block_Order_By>;
  collection?: Maybe<Collection_Order_By>;
  error?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  transaction_id?: Maybe<Order_By>;
};

/** select columns of table "transaction_result" */
export enum Transaction_Result_Select_Column {
  /** column name */
  Error = 'error',
  /** column name */
  Height = 'height',
  /** column name */
  Status = 'status',
  /** column name */
  TransactionId = 'transaction_id',
}

/** aggregate stddev on columns */
export type Transaction_Result_Stddev_Fields = {
  __typename?: 'transaction_result_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction_result" */
export type Transaction_Result_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Result_Stddev_Pop_Fields = {
  __typename?: 'transaction_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction_result" */
export type Transaction_Result_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Result_Stddev_Samp_Fields = {
  __typename?: 'transaction_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction_result" */
export type Transaction_Result_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Result_Sum_Fields = {
  __typename?: 'transaction_result_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction_result" */
export type Transaction_Result_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Result_Var_Pop_Fields = {
  __typename?: 'transaction_result_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction_result" */
export type Transaction_Result_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Result_Var_Samp_Fields = {
  __typename?: 'transaction_result_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction_result" */
export type Transaction_Result_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Result_Variance_Fields = {
  __typename?: 'transaction_result_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction_result" */
export type Transaction_Result_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Arguments = 'arguments',
  /** column name */
  Authorizers = 'authorizers',
  /** column name */
  EnvelopeSignatures = 'envelope_signatures',
  /** column name */
  GasLimit = 'gas_limit',
  /** column name */
  Height = 'height',
  /** column name */
  Payer = 'payer',
  /** column name */
  PayloadSignature = 'payload_signature',
  /** column name */
  ProposalKey = 'proposal_key',
  /** column name */
  ReferenceBlockId = 'reference_block_id',
  /** column name */
  Script = 'script',
  /** column name */
  TransactionId = 'transaction_id',
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  gas_limit?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  gas_limit?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_limit?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
};

/** columns and relationships of "weekly_payout" */
export type Weekly_Payout = {
  __typename?: 'weekly_payout';
  height: Scalars['bigint'];
  payout: Scalars['String'];
};

/** aggregated selection of "weekly_payout" */
export type Weekly_Payout_Aggregate = {
  __typename?: 'weekly_payout_aggregate';
  aggregate?: Maybe<Weekly_Payout_Aggregate_Fields>;
  nodes: Array<Weekly_Payout>;
};

/** aggregate fields of "weekly_payout" */
export type Weekly_Payout_Aggregate_Fields = {
  __typename?: 'weekly_payout_aggregate_fields';
  avg?: Maybe<Weekly_Payout_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Weekly_Payout_Max_Fields>;
  min?: Maybe<Weekly_Payout_Min_Fields>;
  stddev?: Maybe<Weekly_Payout_Stddev_Fields>;
  stddev_pop?: Maybe<Weekly_Payout_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Weekly_Payout_Stddev_Samp_Fields>;
  sum?: Maybe<Weekly_Payout_Sum_Fields>;
  var_pop?: Maybe<Weekly_Payout_Var_Pop_Fields>;
  var_samp?: Maybe<Weekly_Payout_Var_Samp_Fields>;
  variance?: Maybe<Weekly_Payout_Variance_Fields>;
};

/** aggregate fields of "weekly_payout" */
export type Weekly_Payout_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Weekly_Payout_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Weekly_Payout_Avg_Fields = {
  __typename?: 'weekly_payout_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "weekly_payout". All fields are combined with a logical 'AND'. */
export type Weekly_Payout_Bool_Exp = {
  _and?: Maybe<Array<Weekly_Payout_Bool_Exp>>;
  _not?: Maybe<Weekly_Payout_Bool_Exp>;
  _or?: Maybe<Array<Weekly_Payout_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  payout?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Weekly_Payout_Max_Fields = {
  __typename?: 'weekly_payout_max_fields';
  height?: Maybe<Scalars['bigint']>;
  payout?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Weekly_Payout_Min_Fields = {
  __typename?: 'weekly_payout_min_fields';
  height?: Maybe<Scalars['bigint']>;
  payout?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "weekly_payout". */
export type Weekly_Payout_Order_By = {
  height?: Maybe<Order_By>;
  payout?: Maybe<Order_By>;
};

/** select columns of table "weekly_payout" */
export enum Weekly_Payout_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Payout = 'payout',
}

/** aggregate stddev on columns */
export type Weekly_Payout_Stddev_Fields = {
  __typename?: 'weekly_payout_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Weekly_Payout_Stddev_Pop_Fields = {
  __typename?: 'weekly_payout_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Weekly_Payout_Stddev_Samp_Fields = {
  __typename?: 'weekly_payout_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Weekly_Payout_Sum_Fields = {
  __typename?: 'weekly_payout_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Weekly_Payout_Var_Pop_Fields = {
  __typename?: 'weekly_payout_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Weekly_Payout_Var_Samp_Fields = {
  __typename?: 'weekly_payout_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Weekly_Payout_Variance_Fields = {
  __typename?: 'weekly_payout_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveValidatorCountQuery = {
  total: { __typename?: 'node_infos_from_table_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'node_infos_from_table_aggregate_fields' } & Pick<
        Node_Infos_From_Table_Aggregate_Fields,
        'count'
      >
    >;
  };
};

export type BlockDetailsQueryVariables = Exact<{
  height?: Maybe<Scalars['bigint']>;
  signatureHeight?: Maybe<Scalars['bigint']>;
}>;

export type BlockDetailsQuery = {
  block: Array<
    { __typename?: 'block' } & Pick<Block, 'height' | 'timestamp'> & {
        hash: Block['id'];
        parentId: Block['parent_id'];
      } & {
        txs: { __typename?: 'transaction_aggregate' } & {
          aggregate?: Maybe<
            { __typename?: 'transaction_aggregate_fields' } & Pick<
              Transaction_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;

export type LatestBlockHeightListenerSubscription = {
  height: Array<{ __typename?: 'block' } & Pick<Block, 'height'>>;
};

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never }>;

export type AverageBlockTimeQuery = {
  averageBlockTime: Array<
    { __typename?: 'average_block_time_per_hour' } & {
      averageTime: Average_Block_Time_Per_Hour['average_time'];
    }
  >;
};

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type BlocksListenerSubscription = {
  blocks: Array<
    { __typename?: 'block' } & Pick<Block, 'height' | 'timestamp'> & { hash: Block['id'] } & {
        txs: { __typename?: 'transaction_aggregate' } & {
          aggregate?: Maybe<
            { __typename?: 'transaction_aggregate_fields' } & Pick<
              Transaction_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type BlocksQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type BlocksQuery = {
  blocks: Array<
    { __typename?: 'block' } & Pick<Block, 'height' | 'timestamp'> & { hash: Block['id'] } & {
        txs: { __typename?: 'transaction_aggregate' } & {
          aggregate?: Maybe<
            { __typename?: 'transaction_aggregate_fields' } & Pick<
              Transaction_Aggregate_Fields,
              'count'
            >
          >;
        };
      }
  >;
};

export type MarketDataQueryVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;

export type MarketDataQuery = {
  tokenPrice: Array<
    { __typename?: 'token_price' } & Pick<Token_Price, 'price'> & {
        marketCap: Token_Price['market_cap'];
      }
  >;
  supply: Array<{ __typename?: 'supply' } & Pick<Supply, 'supply'>>;
};

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;

export type TokenPriceListenerSubscription = {
  tokenPrice: Array<
    { __typename?: 'token_price' } & Pick<Token_Price, 'id' | 'price' | 'timestamp'> & {
        marketCap: Token_Price['market_cap'];
        unitName: Token_Price['unit_name'];
      }
  >;
};

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type TransactionsListenerSubscription = {
  transactions: Array<
    { __typename?: 'transaction' } & Pick<Transaction, 'height'> & {
        hash: Transaction['transaction_id'];
      } & { block: { __typename?: 'block' } & Pick<Block, 'timestamp'> }
  >;
};

export type TransactionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;

export type TransactionsQuery = {
  transactions: Array<
    { __typename?: 'transaction' } & Pick<Transaction, 'height'> & {
        hash: Transaction['transaction_id'];
      } & { block: { __typename?: 'block' } & Pick<Block, 'timestamp'> }
  >;
};

export const ActiveValidatorCountDocument = gql`
  query ActiveValidatorCount {
    total: node_infos_from_table_aggregate(where: { role: { _eq: "1" } }) {
      aggregate {
        count(columns: delegators)
      }
    }
  }
`;

/**
 * __useActiveValidatorCountQuery__
 *
 * To run a query within a React component, call `useActiveValidatorCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveValidatorCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveValidatorCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveValidatorCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ActiveValidatorCountQuery,
    ActiveValidatorCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(
    ActiveValidatorCountDocument,
    options
  );
}
export function useActiveValidatorCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ActiveValidatorCountQuery,
    ActiveValidatorCountQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(
    ActiveValidatorCountDocument,
    options
  );
}
export type ActiveValidatorCountQueryHookResult = ReturnType<typeof useActiveValidatorCountQuery>;
export type ActiveValidatorCountLazyQueryHookResult = ReturnType<
  typeof useActiveValidatorCountLazyQuery
>;
export type ActiveValidatorCountQueryResult = Apollo.QueryResult<
  ActiveValidatorCountQuery,
  ActiveValidatorCountQueryVariables
>;
export const BlockDetailsDocument = gql`
  query BlockDetails($height: bigint, $signatureHeight: bigint) {
    block(limit: 1, where: { height: { _eq: $height } }) {
      height
      hash: id
      parentId: parent_id
      timestamp
      txs: transactions_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useBlockDetailsQuery__
 *
 * To run a query within a React component, call `useBlockDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlockDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlockDetailsQuery({
 *   variables: {
 *      height: // value for 'height'
 *      signatureHeight: // value for 'signatureHeight'
 *   },
 * });
 */
export function useBlockDetailsQuery(
  baseOptions?: Apollo.QueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(
    BlockDetailsDocument,
    options
  );
}
export function useBlockDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(
    BlockDetailsDocument,
    options
  );
}
export type BlockDetailsQueryHookResult = ReturnType<typeof useBlockDetailsQuery>;
export type BlockDetailsLazyQueryHookResult = ReturnType<typeof useBlockDetailsLazyQuery>;
export type BlockDetailsQueryResult = Apollo.QueryResult<
  BlockDetailsQuery,
  BlockDetailsQueryVariables
>;
export const LatestBlockHeightListenerDocument = gql`
  subscription LatestBlockHeightListener($offset: Int = 0) {
    height: block(order_by: { height: desc }, limit: 1, offset: $offset) {
      height
    }
  }
`;

/**
 * __useLatestBlockHeightListenerSubscription__
 *
 * To run a query within a React component, call `useLatestBlockHeightListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightListenerSubscription({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightListenerSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    LatestBlockHeightListenerSubscription,
    LatestBlockHeightListenerSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    LatestBlockHeightListenerSubscription,
    LatestBlockHeightListenerSubscriptionVariables
  >(LatestBlockHeightListenerDocument, options);
}
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<
  typeof useLatestBlockHeightListenerSubscription
>;
export type LatestBlockHeightListenerSubscriptionResult =
  Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const AverageBlockTimeDocument = gql`
  query AverageBlockTime {
    averageBlockTime: average_block_time_per_hour(limit: 1, order_by: { height: desc }) {
      averageTime: average_time
    }
  }
`;

/**
 * __useAverageBlockTimeQuery__
 *
 * To run a query within a React component, call `useAverageBlockTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAverageBlockTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAverageBlockTimeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAverageBlockTimeQuery(
  baseOptions?: Apollo.QueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(
    AverageBlockTimeDocument,
    options
  );
}
export function useAverageBlockTimeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(
    AverageBlockTimeDocument,
    options
  );
}
export type AverageBlockTimeQueryHookResult = ReturnType<typeof useAverageBlockTimeQuery>;
export type AverageBlockTimeLazyQueryHookResult = ReturnType<typeof useAverageBlockTimeLazyQuery>;
export type AverageBlockTimeQueryResult = Apollo.QueryResult<
  AverageBlockTimeQuery,
  AverageBlockTimeQueryVariables
>;
export const BlocksListenerDocument = gql`
  subscription BlocksListener($limit: Int = 7, $offset: Int = 0) {
    blocks: block(limit: $limit, offset: $offset, order_by: { height: desc }) {
      height
      txs: transactions_aggregate {
        aggregate {
          count
        }
      }
      hash: id
      timestamp
    }
  }
`;

/**
 * __useBlocksListenerSubscription__
 *
 * To run a query within a React component, call `useBlocksListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useBlocksListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksListenerSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    BlocksListenerSubscription,
    BlocksListenerSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>(
    BlocksListenerDocument,
    options
  );
}
export type BlocksListenerSubscriptionHookResult = ReturnType<typeof useBlocksListenerSubscription>;
export type BlocksListenerSubscriptionResult =
  Apollo.SubscriptionResult<BlocksListenerSubscription>;
export const BlocksDocument = gql`
  query Blocks($limit: Int = 7, $offset: Int = 0) {
    blocks: block(limit: $limit, offset: $offset, order_by: { height: desc }) {
      height
      txs: transactions_aggregate {
        aggregate {
          count
        }
      }
      hash: id
      timestamp
    }
  }
`;

/**
 * __useBlocksQuery__
 *
 * To run a query within a React component, call `useBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlocksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useBlocksQuery(
  baseOptions?: Apollo.QueryHookOptions<BlocksQuery, BlocksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
}
export function useBlocksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlocksQuery, BlocksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
}
export type BlocksQueryHookResult = ReturnType<typeof useBlocksQuery>;
export type BlocksLazyQueryHookResult = ReturnType<typeof useBlocksLazyQuery>;
export type BlocksQueryResult = Apollo.QueryResult<BlocksQuery, BlocksQueryVariables>;
export const MarketDataDocument = gql`
  query MarketData($denom: String) {
    tokenPrice: token_price(where: { unit_name: { _eq: $denom } }) {
      marketCap: market_cap
      price
    }
    supply {
      supply
    }
  }
`;

/**
 * __useMarketDataQuery__
 *
 * To run a query within a React component, call `useMarketDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketDataQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useMarketDataQuery(
  baseOptions?: Apollo.QueryHookOptions<MarketDataQuery, MarketDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
}
export function useMarketDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MarketDataQuery, MarketDataQueryVariables>(
    MarketDataDocument,
    options
  );
}
export type MarketDataQueryHookResult = ReturnType<typeof useMarketDataQuery>;
export type MarketDataLazyQueryHookResult = ReturnType<typeof useMarketDataLazyQuery>;
export type MarketDataQueryResult = Apollo.QueryResult<MarketDataQuery, MarketDataQueryVariables>;
export const TokenPriceListenerDocument = gql`
  subscription TokenPriceListener($denom: String) {
    tokenPrice: token_price(where: { unit_name: { _eq: $denom } }) {
      id
      price
      timestamp
      marketCap: market_cap
      unitName: unit_name
    }
  }
`;

/**
 * __useTokenPriceListenerSubscription__
 *
 * To run a query within a React component, call `useTokenPriceListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceListenerSubscription({
 *   variables: {
 *      denom: // value for 'denom'
 *   },
 * });
 */
export function useTokenPriceListenerSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    TokenPriceListenerSubscription,
    TokenPriceListenerSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    TokenPriceListenerSubscription,
    TokenPriceListenerSubscriptionVariables
  >(TokenPriceListenerDocument, options);
}
export type TokenPriceListenerSubscriptionHookResult = ReturnType<
  typeof useTokenPriceListenerSubscription
>;
export type TokenPriceListenerSubscriptionResult =
  Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TransactionsListenerDocument = gql`
  subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
    transactions: transaction(limit: $limit, offset: $offset, order_by: { height: desc }) {
      height
      hash: transaction_id
      block {
        timestamp
      }
    }
  }
`;

/**
 * __useTransactionsListenerSubscription__
 *
 * To run a query within a React component, call `useTransactionsListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsListenerSubscription({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsListenerSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    TransactionsListenerSubscription,
    TransactionsListenerSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    TransactionsListenerSubscription,
    TransactionsListenerSubscriptionVariables
  >(TransactionsListenerDocument, options);
}
export type TransactionsListenerSubscriptionHookResult = ReturnType<
  typeof useTransactionsListenerSubscription
>;
export type TransactionsListenerSubscriptionResult =
  Apollo.SubscriptionResult<TransactionsListenerSubscription>;
export const TransactionsDocument = gql`
  query Transactions($limit: Int = 7, $offset: Int = 0) {
    transactions: transaction(limit: $limit, offset: $offset, order_by: { height: desc }) {
      height
      hash: transaction_id
      block {
        timestamp
      }
    }
  }
`;

/**
 * __useTransactionsQuery__
 *
 * To run a query within a React component, call `useTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(
    TransactionsDocument,
    options
  );
}
export function useTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(
    TransactionsDocument,
    options
  );
}
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<
  TransactionsQuery,
  TransactionsQueryVariables
>;
