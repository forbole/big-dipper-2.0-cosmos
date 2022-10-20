import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Instruction: any;
  ParsedAccount: any;
  _text: any;
  bigint: any;
  float8: any;
  json: any;
  numeric: any;
  timestamp: any;
};


export type AccountInfo = {
  __typename?: 'AccountInfo';
  data: Array<Scalars['String']>;
  executable: Scalars['Boolean'];
  lamports: Scalars['bigint'];
  parsed?: Maybe<Scalars['ParsedAccount']>;
  program_owner: Scalars['String'];
  rent_epoch: Scalars['Int'];
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

export type EpochInfo = {
  __typename?: 'EpochInfo';
  absolute_slot: Scalars['bigint'];
  block_height: Scalars['bigint'];
  epoch: Scalars['bigint'];
  slot_index: Scalars['bigint'];
  slots_in_epoch: Scalars['bigint'];
  transaction_count: Scalars['bigint'];
};

export type EpochSchedule = {
  __typename?: 'EpochSchedule';
  first_normal_epoch: Scalars['Int'];
  first_normal_slot: Scalars['Int'];
  leader_schedule_slot_offset: Scalars['Int'];
  slots_per_epoch: Scalars['Int'];
  warmup: Scalars['Boolean'];
};

export type InflationGovernor = {
  __typename?: 'InflationGovernor';
  foundation: Scalars['Float'];
  foundation_term: Scalars['Float'];
  initial: Scalars['Float'];
  taper: Scalars['Float'];
  terminal: Scalars['Float'];
};

export type InflationRate = {
  __typename?: 'InflationRate';
  epoch: Scalars['bigint'];
  foundation: Scalars['Float'];
  total: Scalars['Float'];
  validator: Scalars['Float'];
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

export type Tx = {
  __typename?: 'Tx';
  accounts: Array<Scalars['String']>;
  error: Scalars['Boolean'];
  fee: Scalars['bigint'];
  instructions: Array<Scalars['Instruction']>;
  logs: Array<Scalars['String']>;
  signature: Scalars['String'];
  slot: Scalars['bigint'];
};

export type TxMeta = {
  __typename?: 'TxMeta';
  block_time: Scalars['bigint'];
  error: Scalars['Boolean'];
  memo: Scalars['String'];
  signature: Scalars['String'];
  slot: Scalars['bigint'];
};

export type TxsByAddressConfig = {
  before?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  until?: Maybe<Scalars['String']>;
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

/** columns and relationships of "account_balance" */
export type Account_Balance = {
  __typename?: 'account_balance';
  address: Scalars['String'];
  balance: Scalars['bigint'];
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
};

/** Boolean expression to filter rows from the table "account_balance". All fields are combined with a logical 'AND'. */
export type Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Account_Balance_Bool_Exp>>;
  _not?: Maybe<Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Account_Balance_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Bigint_Comparison_Exp>;
};

/** columns and relationships of "account_balance_history" */
export type Account_Balance_History = {
  __typename?: 'account_balance_history';
  address: Scalars['String'];
  balance: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
};

/** aggregated selection of "account_balance_history" */
export type Account_Balance_History_Aggregate = {
  __typename?: 'account_balance_history_aggregate';
  aggregate?: Maybe<Account_Balance_History_Aggregate_Fields>;
  nodes: Array<Account_Balance_History>;
};

/** aggregate fields of "account_balance_history" */
export type Account_Balance_History_Aggregate_Fields = {
  __typename?: 'account_balance_history_aggregate_fields';
  avg?: Maybe<Account_Balance_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Balance_History_Max_Fields>;
  min?: Maybe<Account_Balance_History_Min_Fields>;
  stddev?: Maybe<Account_Balance_History_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Balance_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Balance_History_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Balance_History_Sum_Fields>;
  var_pop?: Maybe<Account_Balance_History_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Balance_History_Var_Samp_Fields>;
  variance?: Maybe<Account_Balance_History_Variance_Fields>;
};


/** aggregate fields of "account_balance_history" */
export type Account_Balance_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Account_Balance_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Account_Balance_History_Avg_Fields = {
  __typename?: 'account_balance_history_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "account_balance_history". All fields are combined with a logical 'AND'. */
export type Account_Balance_History_Bool_Exp = {
  _and?: Maybe<Array<Account_Balance_History_Bool_Exp>>;
  _not?: Maybe<Account_Balance_History_Bool_Exp>;
  _or?: Maybe<Array<Account_Balance_History_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Bigint_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Account_Balance_History_Max_Fields = {
  __typename?: 'account_balance_history_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Account_Balance_History_Min_Fields = {
  __typename?: 'account_balance_history_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "account_balance_history". */
export type Account_Balance_History_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** select columns of table "account_balance_history" */
export enum Account_Balance_History_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Account_Balance_History_Stddev_Fields = {
  __typename?: 'account_balance_history_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Balance_History_Stddev_Pop_Fields = {
  __typename?: 'account_balance_history_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Balance_History_Stddev_Samp_Fields = {
  __typename?: 'account_balance_history_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Balance_History_Sum_Fields = {
  __typename?: 'account_balance_history_sum_fields';
  balance?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Account_Balance_History_Var_Pop_Fields = {
  __typename?: 'account_balance_history_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Balance_History_Var_Samp_Fields = {
  __typename?: 'account_balance_history_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Balance_History_Variance_Fields = {
  __typename?: 'account_balance_history_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Account_Balance_Max_Fields = {
  __typename?: 'account_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Account_Balance_Min_Fields = {
  __typename?: 'account_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "account_balance". */
export type Account_Balance_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
};

/** select columns of table "account_balance" */
export enum Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance'
}

/** aggregate stddev on columns */
export type Account_Balance_Stddev_Fields = {
  __typename?: 'account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Account_Balance_Sum_Fields = {
  __typename?: 'account_balance_sum_fields';
  balance?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Account_Balance_Var_Pop_Fields = {
  __typename?: 'account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Account_Balance_Var_Samp_Fields = {
  __typename?: 'account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Account_Balance_Variance_Fields = {
  __typename?: 'account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "average_slot_time_per_hour" */
export type Average_Slot_Time_Per_Hour = {
  __typename?: 'average_slot_time_per_hour';
  average_time: Scalars['numeric'];
  slot: Scalars['bigint'];
};

/** aggregated selection of "average_slot_time_per_hour" */
export type Average_Slot_Time_Per_Hour_Aggregate = {
  __typename?: 'average_slot_time_per_hour_aggregate';
  aggregate?: Maybe<Average_Slot_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Average_Slot_Time_Per_Hour>;
};

/** aggregate fields of "average_slot_time_per_hour" */
export type Average_Slot_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'average_slot_time_per_hour_aggregate_fields';
  avg?: Maybe<Average_Slot_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Average_Slot_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Average_Slot_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Average_Slot_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Average_Slot_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Average_Slot_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Average_Slot_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Average_Slot_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Average_Slot_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Average_Slot_Time_Per_Hour_Variance_Fields>;
};


/** aggregate fields of "average_slot_time_per_hour" */
export type Average_Slot_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Average_Slot_Time_Per_Hour_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Average_Slot_Time_Per_Hour_Avg_Fields = {
  __typename?: 'average_slot_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "average_slot_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Slot_Time_Per_Hour_Bool_Exp = {
  _and?: Maybe<Array<Average_Slot_Time_Per_Hour_Bool_Exp>>;
  _not?: Maybe<Average_Slot_Time_Per_Hour_Bool_Exp>;
  _or?: Maybe<Array<Average_Slot_Time_Per_Hour_Bool_Exp>>;
  average_time?: Maybe<Numeric_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Average_Slot_Time_Per_Hour_Max_Fields = {
  __typename?: 'average_slot_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['numeric']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Average_Slot_Time_Per_Hour_Min_Fields = {
  __typename?: 'average_slot_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['numeric']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "average_slot_time_per_hour". */
export type Average_Slot_Time_Per_Hour_Order_By = {
  average_time?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** select columns of table "average_slot_time_per_hour" */
export enum Average_Slot_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Slot = 'slot'
}

/** aggregate stddev on columns */
export type Average_Slot_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'average_slot_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Average_Slot_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'average_slot_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Average_Slot_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'average_slot_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Average_Slot_Time_Per_Hour_Sum_Fields = {
  __typename?: 'average_slot_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['numeric']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Average_Slot_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'average_slot_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Average_Slot_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'average_slot_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Average_Slot_Time_Per_Hour_Variance_Fields = {
  __typename?: 'average_slot_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
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
  hash: Scalars['String'];
  height: Scalars['bigint'];
  leader: Scalars['String'];
  num_txs: Scalars['Int'];
  slot: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  /** An array relationship */
  validator: Array<Validator>;
  /** An aggregate relationship */
  validator_aggregate: Validator_Aggregate;
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


/** columns and relationships of "block" */
export type BlockValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
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
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: Maybe<Array<Block_Bool_Exp>>;
  _not?: Maybe<Block_Bool_Exp>;
  _or?: Maybe<Array<Block_Bool_Exp>>;
  hash?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  leader?: Maybe<String_Comparison_Exp>;
  num_txs?: Maybe<Int_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  transactions?: Maybe<Transaction_Bool_Exp>;
  validator?: Maybe<Validator_Bool_Exp>;
};

/** aggregate max on columns */
export type Block_Max_Fields = {
  __typename?: 'block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  leader?: Maybe<Scalars['String']>;
  num_txs?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Block_Min_Fields = {
  __typename?: 'block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  leader?: Maybe<Scalars['String']>;
  num_txs?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  hash?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  leader?: Maybe<Order_By>;
  num_txs?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Transaction_Aggregate_Order_By>;
  validator_aggregate?: Maybe<Validator_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Leader = 'leader',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  Slot = 'slot',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Block_Stddev_Fields = {
  __typename?: 'block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Block_Stddev_Pop_Fields = {
  __typename?: 'block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Block_Stddev_Samp_Fields = {
  __typename?: 'block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Block_Sum_Fields = {
  __typename?: 'block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Block_Var_Pop_Fields = {
  __typename?: 'block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Block_Var_Samp_Fields = {
  __typename?: 'block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Block_Variance_Fields = {
  __typename?: 'block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "instruction" */
export type Instruction = {
  __typename?: 'instruction';
  index: Scalars['Int'];
  inner_index: Scalars['Int'];
  involved_accounts: Scalars['_text'];
  program: Scalars['String'];
  raw_data: Scalars['String'];
  slot: Scalars['bigint'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  tx_signature: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['json'];
};


/** columns and relationships of "instruction" */
export type InstructionValueArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "instruction" */
export type Instruction_Aggregate = {
  __typename?: 'instruction_aggregate';
  aggregate?: Maybe<Instruction_Aggregate_Fields>;
  nodes: Array<Instruction>;
};

/** aggregate fields of "instruction" */
export type Instruction_Aggregate_Fields = {
  __typename?: 'instruction_aggregate_fields';
  avg?: Maybe<Instruction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Instruction_Max_Fields>;
  min?: Maybe<Instruction_Min_Fields>;
  stddev?: Maybe<Instruction_Stddev_Fields>;
  stddev_pop?: Maybe<Instruction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instruction_Stddev_Samp_Fields>;
  sum?: Maybe<Instruction_Sum_Fields>;
  var_pop?: Maybe<Instruction_Var_Pop_Fields>;
  var_samp?: Maybe<Instruction_Var_Samp_Fields>;
  variance?: Maybe<Instruction_Variance_Fields>;
};


/** aggregate fields of "instruction" */
export type Instruction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instruction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instruction" */
export type Instruction_Aggregate_Order_By = {
  avg?: Maybe<Instruction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instruction_Max_Order_By>;
  min?: Maybe<Instruction_Min_Order_By>;
  stddev?: Maybe<Instruction_Stddev_Order_By>;
  stddev_pop?: Maybe<Instruction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instruction_Stddev_Samp_Order_By>;
  sum?: Maybe<Instruction_Sum_Order_By>;
  var_pop?: Maybe<Instruction_Var_Pop_Order_By>;
  var_samp?: Maybe<Instruction_Var_Samp_Order_By>;
  variance?: Maybe<Instruction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Instruction_Avg_Fields = {
  __typename?: 'instruction_avg_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instruction" */
export type Instruction_Avg_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instruction". All fields are combined with a logical 'AND'. */
export type Instruction_Bool_Exp = {
  _and?: Maybe<Array<Instruction_Bool_Exp>>;
  _not?: Maybe<Instruction_Bool_Exp>;
  _or?: Maybe<Array<Instruction_Bool_Exp>>;
  index?: Maybe<Int_Comparison_Exp>;
  inner_index?: Maybe<Int_Comparison_Exp>;
  involved_accounts?: Maybe<_Text_Comparison_Exp>;
  program?: Maybe<String_Comparison_Exp>;
  raw_data?: Maybe<String_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
  transaction?: Maybe<Transaction_Bool_Exp>;
  tx_signature?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  value?: Maybe<Json_Comparison_Exp>;
};

/** aggregate max on columns */
export type Instruction_Max_Fields = {
  __typename?: 'instruction_max_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
  program?: Maybe<Scalars['String']>;
  raw_data?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  tx_signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "instruction" */
export type Instruction_Max_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  raw_data?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  tx_signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instruction_Min_Fields = {
  __typename?: 'instruction_min_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
  program?: Maybe<Scalars['String']>;
  raw_data?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
  tx_signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "instruction" */
export type Instruction_Min_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  raw_data?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  tx_signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "instruction". */
export type Instruction_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  involved_accounts?: Maybe<Order_By>;
  program?: Maybe<Order_By>;
  raw_data?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  transaction?: Maybe<Transaction_Order_By>;
  tx_signature?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "instruction" */
export enum Instruction_Select_Column {
  /** column name */
  Index = 'index',
  /** column name */
  InnerIndex = 'inner_index',
  /** column name */
  InvolvedAccounts = 'involved_accounts',
  /** column name */
  Program = 'program',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  Slot = 'slot',
  /** column name */
  TxSignature = 'tx_signature',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Instruction_Stddev_Fields = {
  __typename?: 'instruction_stddev_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instruction" */
export type Instruction_Stddev_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instruction_Stddev_Pop_Fields = {
  __typename?: 'instruction_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instruction" */
export type Instruction_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instruction_Stddev_Samp_Fields = {
  __typename?: 'instruction_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instruction" */
export type Instruction_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instruction_Sum_Fields = {
  __typename?: 'instruction_sum_fields';
  index?: Maybe<Scalars['Int']>;
  inner_index?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "instruction" */
export type Instruction_Sum_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Instruction_Var_Pop_Fields = {
  __typename?: 'instruction_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instruction" */
export type Instruction_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instruction_Var_Samp_Fields = {
  __typename?: 'instruction_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instruction" */
export type Instruction_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instruction_Variance_Fields = {
  __typename?: 'instruction_variance_fields';
  index?: Maybe<Scalars['Float']>;
  inner_index?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instruction" */
export type Instruction_Variance_Order_By = {
  index?: Maybe<Order_By>;
  inner_index?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

export type Instructions_By_Address_Args = {
  addresses?: Maybe<Scalars['_text']>;
  end_slot?: Maybe<Scalars['bigint']>;
  programs?: Maybe<Scalars['_text']>;
  start_slot?: Maybe<Scalars['bigint']>;
};


/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** columns and relationships of "multisig" */
export type Multisig = {
  __typename?: 'multisig';
  address: Scalars['String'];
  minimum: Scalars['Int'];
  signers: Scalars['_text'];
};

/** aggregated selection of "multisig" */
export type Multisig_Aggregate = {
  __typename?: 'multisig_aggregate';
  aggregate?: Maybe<Multisig_Aggregate_Fields>;
  nodes: Array<Multisig>;
};

/** aggregate fields of "multisig" */
export type Multisig_Aggregate_Fields = {
  __typename?: 'multisig_aggregate_fields';
  avg?: Maybe<Multisig_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Multisig_Max_Fields>;
  min?: Maybe<Multisig_Min_Fields>;
  stddev?: Maybe<Multisig_Stddev_Fields>;
  stddev_pop?: Maybe<Multisig_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Multisig_Stddev_Samp_Fields>;
  sum?: Maybe<Multisig_Sum_Fields>;
  var_pop?: Maybe<Multisig_Var_Pop_Fields>;
  var_samp?: Maybe<Multisig_Var_Samp_Fields>;
  variance?: Maybe<Multisig_Variance_Fields>;
};


/** aggregate fields of "multisig" */
export type Multisig_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Multisig_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Multisig_Avg_Fields = {
  __typename?: 'multisig_avg_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "multisig". All fields are combined with a logical 'AND'. */
export type Multisig_Bool_Exp = {
  _and?: Maybe<Array<Multisig_Bool_Exp>>;
  _not?: Maybe<Multisig_Bool_Exp>;
  _or?: Maybe<Array<Multisig_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  minimum?: Maybe<Int_Comparison_Exp>;
  signers?: Maybe<_Text_Comparison_Exp>;
};

/** aggregate max on columns */
export type Multisig_Max_Fields = {
  __typename?: 'multisig_max_fields';
  address?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Multisig_Min_Fields = {
  __typename?: 'multisig_min_fields';
  address?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "multisig". */
export type Multisig_Order_By = {
  address?: Maybe<Order_By>;
  minimum?: Maybe<Order_By>;
  signers?: Maybe<Order_By>;
};

/** select columns of table "multisig" */
export enum Multisig_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Minimum = 'minimum',
  /** column name */
  Signers = 'signers'
}

/** aggregate stddev on columns */
export type Multisig_Stddev_Fields = {
  __typename?: 'multisig_stddev_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Multisig_Stddev_Pop_Fields = {
  __typename?: 'multisig_stddev_pop_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Multisig_Stddev_Samp_Fields = {
  __typename?: 'multisig_stddev_samp_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Multisig_Sum_Fields = {
  __typename?: 'multisig_sum_fields';
  minimum?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Multisig_Var_Pop_Fields = {
  __typename?: 'multisig_var_pop_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Multisig_Var_Samp_Fields = {
  __typename?: 'multisig_var_samp_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Multisig_Variance_Fields = {
  __typename?: 'multisig_variance_fields';
  minimum?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nonce_account" */
export type Nonce_Account = {
  __typename?: 'nonce_account';
  address: Scalars['String'];
  authority: Scalars['String'];
  blockhash: Scalars['String'];
  lamports_per_signature: Scalars['Int'];
  /** An object relationship */
  native_balance?: Maybe<Account_Balance>;
};

/** aggregated selection of "nonce_account" */
export type Nonce_Account_Aggregate = {
  __typename?: 'nonce_account_aggregate';
  aggregate?: Maybe<Nonce_Account_Aggregate_Fields>;
  nodes: Array<Nonce_Account>;
};

/** aggregate fields of "nonce_account" */
export type Nonce_Account_Aggregate_Fields = {
  __typename?: 'nonce_account_aggregate_fields';
  avg?: Maybe<Nonce_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Nonce_Account_Max_Fields>;
  min?: Maybe<Nonce_Account_Min_Fields>;
  stddev?: Maybe<Nonce_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Nonce_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nonce_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Nonce_Account_Sum_Fields>;
  var_pop?: Maybe<Nonce_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Nonce_Account_Var_Samp_Fields>;
  variance?: Maybe<Nonce_Account_Variance_Fields>;
};


/** aggregate fields of "nonce_account" */
export type Nonce_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Nonce_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Nonce_Account_Avg_Fields = {
  __typename?: 'nonce_account_avg_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nonce_account". All fields are combined with a logical 'AND'. */
export type Nonce_Account_Bool_Exp = {
  _and?: Maybe<Array<Nonce_Account_Bool_Exp>>;
  _not?: Maybe<Nonce_Account_Bool_Exp>;
  _or?: Maybe<Array<Nonce_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  authority?: Maybe<String_Comparison_Exp>;
  blockhash?: Maybe<String_Comparison_Exp>;
  lamports_per_signature?: Maybe<Int_Comparison_Exp>;
  native_balance?: Maybe<Account_Balance_Bool_Exp>;
};

/** aggregate max on columns */
export type Nonce_Account_Max_Fields = {
  __typename?: 'nonce_account_max_fields';
  address?: Maybe<Scalars['String']>;
  authority?: Maybe<Scalars['String']>;
  blockhash?: Maybe<Scalars['String']>;
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Nonce_Account_Min_Fields = {
  __typename?: 'nonce_account_min_fields';
  address?: Maybe<Scalars['String']>;
  authority?: Maybe<Scalars['String']>;
  blockhash?: Maybe<Scalars['String']>;
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "nonce_account". */
export type Nonce_Account_Order_By = {
  address?: Maybe<Order_By>;
  authority?: Maybe<Order_By>;
  blockhash?: Maybe<Order_By>;
  lamports_per_signature?: Maybe<Order_By>;
  native_balance?: Maybe<Account_Balance_Order_By>;
};

/** select columns of table "nonce_account" */
export enum Nonce_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Authority = 'authority',
  /** column name */
  Blockhash = 'blockhash',
  /** column name */
  LamportsPerSignature = 'lamports_per_signature'
}

/** aggregate stddev on columns */
export type Nonce_Account_Stddev_Fields = {
  __typename?: 'nonce_account_stddev_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Nonce_Account_Stddev_Pop_Fields = {
  __typename?: 'nonce_account_stddev_pop_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Nonce_Account_Stddev_Samp_Fields = {
  __typename?: 'nonce_account_stddev_samp_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Nonce_Account_Sum_Fields = {
  __typename?: 'nonce_account_sum_fields';
  lamports_per_signature?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Nonce_Account_Var_Pop_Fields = {
  __typename?: 'nonce_account_var_pop_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Nonce_Account_Var_Samp_Fields = {
  __typename?: 'nonce_account_var_samp_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Nonce_Account_Variance_Fields = {
  __typename?: 'nonce_account_variance_fields';
  lamports_per_signature?: Maybe<Scalars['Float']>;
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
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "program_account" */
export type Program_Account = {
  __typename?: 'program_account';
  address: Scalars['String'];
  /** An object relationship */
  program_data?: Maybe<Program_Data_Account>;
  program_data_account: Scalars['String'];
};

/** aggregated selection of "program_account" */
export type Program_Account_Aggregate = {
  __typename?: 'program_account_aggregate';
  aggregate?: Maybe<Program_Account_Aggregate_Fields>;
  nodes: Array<Program_Account>;
};

/** aggregate fields of "program_account" */
export type Program_Account_Aggregate_Fields = {
  __typename?: 'program_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Program_Account_Max_Fields>;
  min?: Maybe<Program_Account_Min_Fields>;
};


/** aggregate fields of "program_account" */
export type Program_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Program_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "program_account". All fields are combined with a logical 'AND'. */
export type Program_Account_Bool_Exp = {
  _and?: Maybe<Array<Program_Account_Bool_Exp>>;
  _not?: Maybe<Program_Account_Bool_Exp>;
  _or?: Maybe<Array<Program_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  program_data?: Maybe<Program_Data_Account_Bool_Exp>;
  program_data_account?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Program_Account_Max_Fields = {
  __typename?: 'program_account_max_fields';
  address?: Maybe<Scalars['String']>;
  program_data_account?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Program_Account_Min_Fields = {
  __typename?: 'program_account_min_fields';
  address?: Maybe<Scalars['String']>;
  program_data_account?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "program_account". */
export type Program_Account_Order_By = {
  address?: Maybe<Order_By>;
  program_data?: Maybe<Program_Data_Account_Order_By>;
  program_data_account?: Maybe<Order_By>;
};

/** select columns of table "program_account" */
export enum Program_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ProgramDataAccount = 'program_data_account'
}

/** columns and relationships of "program_data_account" */
export type Program_Data_Account = {
  __typename?: 'program_data_account';
  address: Scalars['String'];
  last_modified_slot: Scalars['bigint'];
  update_authority: Scalars['String'];
};

/** aggregated selection of "program_data_account" */
export type Program_Data_Account_Aggregate = {
  __typename?: 'program_data_account_aggregate';
  aggregate?: Maybe<Program_Data_Account_Aggregate_Fields>;
  nodes: Array<Program_Data_Account>;
};

/** aggregate fields of "program_data_account" */
export type Program_Data_Account_Aggregate_Fields = {
  __typename?: 'program_data_account_aggregate_fields';
  avg?: Maybe<Program_Data_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Program_Data_Account_Max_Fields>;
  min?: Maybe<Program_Data_Account_Min_Fields>;
  stddev?: Maybe<Program_Data_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Program_Data_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Program_Data_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Program_Data_Account_Sum_Fields>;
  var_pop?: Maybe<Program_Data_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Program_Data_Account_Var_Samp_Fields>;
  variance?: Maybe<Program_Data_Account_Variance_Fields>;
};


/** aggregate fields of "program_data_account" */
export type Program_Data_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Program_Data_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Program_Data_Account_Avg_Fields = {
  __typename?: 'program_data_account_avg_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "program_data_account". All fields are combined with a logical 'AND'. */
export type Program_Data_Account_Bool_Exp = {
  _and?: Maybe<Array<Program_Data_Account_Bool_Exp>>;
  _not?: Maybe<Program_Data_Account_Bool_Exp>;
  _or?: Maybe<Array<Program_Data_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  last_modified_slot?: Maybe<Bigint_Comparison_Exp>;
  update_authority?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Program_Data_Account_Max_Fields = {
  __typename?: 'program_data_account_max_fields';
  address?: Maybe<Scalars['String']>;
  last_modified_slot?: Maybe<Scalars['bigint']>;
  update_authority?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Program_Data_Account_Min_Fields = {
  __typename?: 'program_data_account_min_fields';
  address?: Maybe<Scalars['String']>;
  last_modified_slot?: Maybe<Scalars['bigint']>;
  update_authority?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "program_data_account". */
export type Program_Data_Account_Order_By = {
  address?: Maybe<Order_By>;
  last_modified_slot?: Maybe<Order_By>;
  update_authority?: Maybe<Order_By>;
};

/** select columns of table "program_data_account" */
export enum Program_Data_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  LastModifiedSlot = 'last_modified_slot',
  /** column name */
  UpdateAuthority = 'update_authority'
}

/** aggregate stddev on columns */
export type Program_Data_Account_Stddev_Fields = {
  __typename?: 'program_data_account_stddev_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Program_Data_Account_Stddev_Pop_Fields = {
  __typename?: 'program_data_account_stddev_pop_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Program_Data_Account_Stddev_Samp_Fields = {
  __typename?: 'program_data_account_stddev_samp_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Program_Data_Account_Sum_Fields = {
  __typename?: 'program_data_account_sum_fields';
  last_modified_slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Program_Data_Account_Var_Pop_Fields = {
  __typename?: 'program_data_account_var_pop_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Program_Data_Account_Var_Samp_Fields = {
  __typename?: 'program_data_account_var_samp_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Program_Data_Account_Variance_Fields = {
  __typename?: 'program_data_account_variance_fields';
  last_modified_slot?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** fetch data from the table: "account_balance_history" */
  account_balance_history: Array<Account_Balance_History>;
  /** fetch aggregated fields from the table: "account_balance_history" */
  account_balance_history_aggregate: Account_Balance_History_Aggregate;
  actions_account_info: AccountInfo;
  actions_epoch_info: EpochInfo;
  actions_epoch_schedule: EpochSchedule;
  actions_inflation_governor: InflationGovernor;
  actions_inflation_rate: InflationRate;
  actions_tx: Tx;
  actions_txs_by_address: Array<TxMeta>;
  /** fetch data from the table: "average_slot_time_per_hour" */
  average_slot_time_per_hour: Array<Average_Slot_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_slot_time_per_hour" */
  average_slot_time_per_hour_aggregate: Average_Slot_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "instruction" */
  instruction: Array<Instruction>;
  /** fetch aggregated fields from the table: "instruction" */
  instruction_aggregate: Instruction_Aggregate;
  /** execute function "instructions_by_address" which returns "instruction" */
  instructions_by_address: Array<Instruction>;
  /** execute function "instructions_by_address" and query aggregates on result of table type "instruction" */
  instructions_by_address_aggregate: Instruction_Aggregate;
  /** fetch data from the table: "multisig" */
  multisig: Array<Multisig>;
  /** fetch aggregated fields from the table: "multisig" */
  multisig_aggregate: Multisig_Aggregate;
  /** fetch data from the table: "multisig" using primary key columns */
  multisig_by_pk?: Maybe<Multisig>;
  /** fetch data from the table: "nonce_account" */
  nonce_account: Array<Nonce_Account>;
  /** fetch aggregated fields from the table: "nonce_account" */
  nonce_account_aggregate: Nonce_Account_Aggregate;
  /** fetch data from the table: "nonce_account" using primary key columns */
  nonce_account_by_pk?: Maybe<Nonce_Account>;
  /** fetch data from the table: "program_account" */
  program_account: Array<Program_Account>;
  /** fetch aggregated fields from the table: "program_account" */
  program_account_aggregate: Program_Account_Aggregate;
  /** fetch data from the table: "program_account" using primary key columns */
  program_account_by_pk?: Maybe<Program_Account>;
  /** fetch data from the table: "program_data_account" */
  program_data_account: Array<Program_Data_Account>;
  /** fetch aggregated fields from the table: "program_data_account" */
  program_data_account_aggregate: Program_Data_Account_Aggregate;
  /** fetch data from the table: "program_data_account" using primary key columns */
  program_data_account_by_pk?: Maybe<Program_Data_Account>;
  /** fetch data from the table: "stake_account" */
  stake_account: Array<Stake_Account>;
  /** fetch aggregated fields from the table: "stake_account" */
  stake_account_aggregate: Stake_Account_Aggregate;
  /** fetch data from the table: "stake_account" using primary key columns */
  stake_account_by_pk?: Maybe<Stake_Account>;
  /** fetch data from the table: "stake_delegation" */
  stake_delegation: Array<Stake_Delegation>;
  /** fetch aggregated fields from the table: "stake_delegation" */
  stake_delegation_aggregate: Stake_Delegation_Aggregate;
  /** fetch data from the table: "stake_delegation" using primary key columns */
  stake_delegation_by_pk?: Maybe<Stake_Delegation>;
  /** fetch data from the table: "stake_lockup" */
  stake_lockup: Array<Stake_Lockup>;
  /** fetch aggregated fields from the table: "stake_lockup" */
  stake_lockup_aggregate: Stake_Lockup_Aggregate;
  /** fetch data from the table: "stake_lockup" using primary key columns */
  stake_lockup_by_pk?: Maybe<Stake_Lockup>;
  /** fetch data from the table: "supply_info" */
  supply_info: Array<Supply_Info>;
  /** fetch aggregated fields from the table: "supply_info" */
  supply_info_aggregate: Supply_Info_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_account" */
  token_account: Array<Token_Account>;
  /** fetch aggregated fields from the table: "token_account" */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account_balance" */
  token_account_balance: Array<Token_Account_Balance>;
  /** fetch aggregated fields from the table: "token_account_balance" */
  token_account_balance_aggregate: Token_Account_Balance_Aggregate;
  /** fetch data from the table: "token_account_balance" using primary key columns */
  token_account_balance_by_pk?: Maybe<Token_Account_Balance>;
  /** fetch data from the table: "token_account_balance_history" */
  token_account_balance_history: Array<Token_Account_Balance_History>;
  /** fetch aggregated fields from the table: "token_account_balance_history" */
  token_account_balance_history_aggregate: Token_Account_Balance_History_Aggregate;
  /** fetch data from the table: "token_account_balance_ordering" */
  token_account_balance_ordering: Array<Token_Account_Balance_Ordering>;
  /** fetch aggregated fields from the table: "token_account_balance_ordering" */
  token_account_balance_ordering_aggregate: Token_Account_Balance_Ordering_Aggregate;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_delegation" */
  token_delegation: Array<Token_Delegation>;
  /** fetch aggregated fields from the table: "token_delegation" */
  token_delegation_aggregate: Token_Delegation_Aggregate;
  /** fetch data from the table: "token_delegation" using primary key columns */
  token_delegation_by_pk?: Maybe<Token_Delegation>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_history: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_supply" */
  token_supply: Array<Token_Supply>;
  /** fetch aggregated fields from the table: "token_supply" */
  token_supply_aggregate: Token_Supply_Aggregate;
  /** fetch data from the table: "token_supply" using primary key columns */
  token_supply_by_pk?: Maybe<Token_Supply>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "token_unit" using primary key columns */
  token_unit_by_pk?: Maybe<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** execute function "transactions_by_address_2" which returns "transaction" */
  transactions_by_address_2: Array<Transaction>;
  /** execute function "transactions_by_address_2" and query aggregates on result of table type "transaction" */
  transactions_by_address_2_aggregate: Transaction_Aggregate;
  /** An array relationship */
  validator: Array<Validator>;
  /** An aggregate relationship */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_config" */
  validator_config: Array<Validator_Config>;
  /** fetch aggregated fields from the table: "validator_config" */
  validator_config_aggregate: Validator_Config_Aggregate;
  /** fetch data from the table: "validator_config" using primary key columns */
  validator_config_by_pk?: Maybe<Validator_Config>;
  /** fetch data from the table: "validator_skip_rate" */
  validator_skip_rate: Array<Validator_Skip_Rate>;
  /** fetch aggregated fields from the table: "validator_skip_rate" */
  validator_skip_rate_aggregate: Validator_Skip_Rate_Aggregate;
  /** fetch data from the table: "validator_skip_rate" using primary key columns */
  validator_skip_rate_by_pk?: Maybe<Validator_Skip_Rate>;
  /** fetch data from the table: "validator_skip_rate_history" */
  validator_skip_rate_history: Array<Validator_Skip_Rate_History>;
  /** fetch aggregated fields from the table: "validator_skip_rate_history" */
  validator_skip_rate_history_aggregate: Validator_Skip_Rate_History_Aggregate;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
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


export type Query_RootAccount_Balance_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_History_Order_By>>;
  where?: Maybe<Account_Balance_History_Bool_Exp>;
};


export type Query_RootAccount_Balance_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_History_Order_By>>;
  where?: Maybe<Account_Balance_History_Bool_Exp>;
};


export type Query_RootActions_Account_InfoArgs = {
  address: Scalars['String'];
};


export type Query_RootActions_TxArgs = {
  signature: Scalars['String'];
};


export type Query_RootActions_Txs_By_AddressArgs = {
  address: Scalars['String'];
  config?: Maybe<TxsByAddressConfig>;
};


export type Query_RootAverage_Slot_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Slot_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Slot_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Slot_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Slot_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Slot_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Slot_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Slot_Time_Per_Hour_Bool_Exp>;
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
  slot: Scalars['bigint'];
};


export type Query_RootInstructionArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Query_RootInstruction_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Query_RootInstructions_By_AddressArgs = {
  args: Instructions_By_Address_Args;
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Query_RootInstructions_By_Address_AggregateArgs = {
  args: Instructions_By_Address_Args;
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Query_RootMultisigArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Query_RootMultisig_AggregateArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Query_RootMultisig_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootNonce_AccountArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Query_RootNonce_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Query_RootNonce_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootProgram_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Query_RootProgram_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Query_RootProgram_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootProgram_Data_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Query_RootProgram_Data_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Query_RootProgram_Data_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootStake_AccountArgs = {
  distinct_on?: Maybe<Array<Stake_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Account_Order_By>>;
  where?: Maybe<Stake_Account_Bool_Exp>;
};


export type Query_RootStake_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Account_Order_By>>;
  where?: Maybe<Stake_Account_Bool_Exp>;
};


export type Query_RootStake_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootStake_DelegationArgs = {
  distinct_on?: Maybe<Array<Stake_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Delegation_Order_By>>;
  where?: Maybe<Stake_Delegation_Bool_Exp>;
};


export type Query_RootStake_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Delegation_Order_By>>;
  where?: Maybe<Stake_Delegation_Bool_Exp>;
};


export type Query_RootStake_Delegation_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootStake_LockupArgs = {
  distinct_on?: Maybe<Array<Stake_Lockup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Lockup_Order_By>>;
  where?: Maybe<Stake_Lockup_Bool_Exp>;
};


export type Query_RootStake_Lockup_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Lockup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Lockup_Order_By>>;
  where?: Maybe<Stake_Lockup_Bool_Exp>;
};


export type Query_RootStake_Lockup_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootSupply_InfoArgs = {
  distinct_on?: Maybe<Array<Supply_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Info_Order_By>>;
  where?: Maybe<Supply_Info_Bool_Exp>;
};


export type Query_RootSupply_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Info_Order_By>>;
  where?: Maybe<Supply_Info_Bool_Exp>;
};


export type Query_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_AccountArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Query_RootToken_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_Account_Balance_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_History_Order_By>>;
  where?: Maybe<Token_Account_Balance_History_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_History_Order_By>>;
  where?: Maybe<Token_Account_Balance_History_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_OrderingArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Ordering_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Ordering_Order_By>>;
  where?: Maybe<Token_Account_Balance_Ordering_Bool_Exp>;
};


export type Query_RootToken_Account_Balance_Ordering_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Ordering_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Ordering_Order_By>>;
  where?: Maybe<Token_Account_Balance_Ordering_Bool_Exp>;
};


export type Query_RootToken_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Query_RootToken_By_PkArgs = {
  mint: Scalars['String'];
};


export type Query_RootToken_DelegationArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Query_RootToken_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Query_RootToken_Delegation_By_PkArgs = {
  source_address: Scalars['String'];
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
  id: Scalars['String'];
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


export type Query_RootToken_SupplyArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Query_RootToken_Supply_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Query_RootToken_Supply_By_PkArgs = {
  mint: Scalars['String'];
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


export type Query_RootToken_Unit_By_PkArgs = {
  mint: Scalars['String'];
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


export type Query_RootTransactions_By_Address_2Args = {
  args: Transactions_By_Address_2_Args;
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootTransactions_By_Address_2_AggregateArgs = {
  args: Transactions_By_Address_2_Args;
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootValidator_ConfigArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Query_RootValidator_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Query_RootValidator_Config_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootValidator_Skip_RateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_Bool_Exp>;
};


export type Query_RootValidator_Skip_Rate_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_Bool_Exp>;
};


export type Query_RootValidator_Skip_Rate_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootValidator_Skip_Rate_HistoryArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_History_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
};


export type Query_RootValidator_Skip_Rate_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_History_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  address: Scalars['String'];
};

/** columns and relationships of "stake_account" */
export type Stake_Account = {
  __typename?: 'stake_account';
  address: Scalars['String'];
  /** An object relationship */
  native_balance?: Maybe<Account_Balance>;
  /** An object relationship */
  stake_delegation?: Maybe<Stake_Delegation>;
  /** An object relationship */
  stake_lockup?: Maybe<Stake_Lockup>;
  staker: Scalars['String'];
  withdrawer: Scalars['String'];
};

/** aggregated selection of "stake_account" */
export type Stake_Account_Aggregate = {
  __typename?: 'stake_account_aggregate';
  aggregate?: Maybe<Stake_Account_Aggregate_Fields>;
  nodes: Array<Stake_Account>;
};

/** aggregate fields of "stake_account" */
export type Stake_Account_Aggregate_Fields = {
  __typename?: 'stake_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Stake_Account_Max_Fields>;
  min?: Maybe<Stake_Account_Min_Fields>;
};


/** aggregate fields of "stake_account" */
export type Stake_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stake_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "stake_account". All fields are combined with a logical 'AND'. */
export type Stake_Account_Bool_Exp = {
  _and?: Maybe<Array<Stake_Account_Bool_Exp>>;
  _not?: Maybe<Stake_Account_Bool_Exp>;
  _or?: Maybe<Array<Stake_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  native_balance?: Maybe<Account_Balance_Bool_Exp>;
  stake_delegation?: Maybe<Stake_Delegation_Bool_Exp>;
  stake_lockup?: Maybe<Stake_Lockup_Bool_Exp>;
  staker?: Maybe<String_Comparison_Exp>;
  withdrawer?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stake_Account_Max_Fields = {
  __typename?: 'stake_account_max_fields';
  address?: Maybe<Scalars['String']>;
  staker?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Stake_Account_Min_Fields = {
  __typename?: 'stake_account_min_fields';
  address?: Maybe<Scalars['String']>;
  staker?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "stake_account". */
export type Stake_Account_Order_By = {
  address?: Maybe<Order_By>;
  native_balance?: Maybe<Account_Balance_Order_By>;
  stake_delegation?: Maybe<Stake_Delegation_Order_By>;
  stake_lockup?: Maybe<Stake_Lockup_Order_By>;
  staker?: Maybe<Order_By>;
  withdrawer?: Maybe<Order_By>;
};

/** select columns of table "stake_account" */
export enum Stake_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Staker = 'staker',
  /** column name */
  Withdrawer = 'withdrawer'
}

/** columns and relationships of "stake_delegation" */
export type Stake_Delegation = {
  __typename?: 'stake_delegation';
  activation_epoch: Scalars['numeric'];
  address: Scalars['String'];
  deactivation_epoch: Scalars['numeric'];
  stake: Scalars['bigint'];
  /** An object relationship */
  stake_account: Stake_Account;
  voter: Scalars['String'];
  warmup_cooldown_rate: Scalars['float8'];
};

/** aggregated selection of "stake_delegation" */
export type Stake_Delegation_Aggregate = {
  __typename?: 'stake_delegation_aggregate';
  aggregate?: Maybe<Stake_Delegation_Aggregate_Fields>;
  nodes: Array<Stake_Delegation>;
};

/** aggregate fields of "stake_delegation" */
export type Stake_Delegation_Aggregate_Fields = {
  __typename?: 'stake_delegation_aggregate_fields';
  avg?: Maybe<Stake_Delegation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stake_Delegation_Max_Fields>;
  min?: Maybe<Stake_Delegation_Min_Fields>;
  stddev?: Maybe<Stake_Delegation_Stddev_Fields>;
  stddev_pop?: Maybe<Stake_Delegation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stake_Delegation_Stddev_Samp_Fields>;
  sum?: Maybe<Stake_Delegation_Sum_Fields>;
  var_pop?: Maybe<Stake_Delegation_Var_Pop_Fields>;
  var_samp?: Maybe<Stake_Delegation_Var_Samp_Fields>;
  variance?: Maybe<Stake_Delegation_Variance_Fields>;
};


/** aggregate fields of "stake_delegation" */
export type Stake_Delegation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stake_Delegation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stake_Delegation_Avg_Fields = {
  __typename?: 'stake_delegation_avg_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stake_delegation". All fields are combined with a logical 'AND'. */
export type Stake_Delegation_Bool_Exp = {
  _and?: Maybe<Array<Stake_Delegation_Bool_Exp>>;
  _not?: Maybe<Stake_Delegation_Bool_Exp>;
  _or?: Maybe<Array<Stake_Delegation_Bool_Exp>>;
  activation_epoch?: Maybe<Numeric_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  deactivation_epoch?: Maybe<Numeric_Comparison_Exp>;
  stake?: Maybe<Bigint_Comparison_Exp>;
  stake_account?: Maybe<Stake_Account_Bool_Exp>;
  voter?: Maybe<String_Comparison_Exp>;
  warmup_cooldown_rate?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stake_Delegation_Max_Fields = {
  __typename?: 'stake_delegation_max_fields';
  activation_epoch?: Maybe<Scalars['numeric']>;
  address?: Maybe<Scalars['String']>;
  deactivation_epoch?: Maybe<Scalars['numeric']>;
  stake?: Maybe<Scalars['bigint']>;
  voter?: Maybe<Scalars['String']>;
  warmup_cooldown_rate?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Stake_Delegation_Min_Fields = {
  __typename?: 'stake_delegation_min_fields';
  activation_epoch?: Maybe<Scalars['numeric']>;
  address?: Maybe<Scalars['String']>;
  deactivation_epoch?: Maybe<Scalars['numeric']>;
  stake?: Maybe<Scalars['bigint']>;
  voter?: Maybe<Scalars['String']>;
  warmup_cooldown_rate?: Maybe<Scalars['float8']>;
};

/** Ordering options when selecting data from "stake_delegation". */
export type Stake_Delegation_Order_By = {
  activation_epoch?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  deactivation_epoch?: Maybe<Order_By>;
  stake?: Maybe<Order_By>;
  stake_account?: Maybe<Stake_Account_Order_By>;
  voter?: Maybe<Order_By>;
  warmup_cooldown_rate?: Maybe<Order_By>;
};

/** select columns of table "stake_delegation" */
export enum Stake_Delegation_Select_Column {
  /** column name */
  ActivationEpoch = 'activation_epoch',
  /** column name */
  Address = 'address',
  /** column name */
  DeactivationEpoch = 'deactivation_epoch',
  /** column name */
  Stake = 'stake',
  /** column name */
  Voter = 'voter',
  /** column name */
  WarmupCooldownRate = 'warmup_cooldown_rate'
}

/** aggregate stddev on columns */
export type Stake_Delegation_Stddev_Fields = {
  __typename?: 'stake_delegation_stddev_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stake_Delegation_Stddev_Pop_Fields = {
  __typename?: 'stake_delegation_stddev_pop_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stake_Delegation_Stddev_Samp_Fields = {
  __typename?: 'stake_delegation_stddev_samp_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stake_Delegation_Sum_Fields = {
  __typename?: 'stake_delegation_sum_fields';
  activation_epoch?: Maybe<Scalars['numeric']>;
  deactivation_epoch?: Maybe<Scalars['numeric']>;
  stake?: Maybe<Scalars['bigint']>;
  warmup_cooldown_rate?: Maybe<Scalars['float8']>;
};

/** aggregate var_pop on columns */
export type Stake_Delegation_Var_Pop_Fields = {
  __typename?: 'stake_delegation_var_pop_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stake_Delegation_Var_Samp_Fields = {
  __typename?: 'stake_delegation_var_samp_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stake_Delegation_Variance_Fields = {
  __typename?: 'stake_delegation_variance_fields';
  activation_epoch?: Maybe<Scalars['Float']>;
  deactivation_epoch?: Maybe<Scalars['Float']>;
  stake?: Maybe<Scalars['Float']>;
  warmup_cooldown_rate?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "stake_lockup" */
export type Stake_Lockup = {
  __typename?: 'stake_lockup';
  address: Scalars['String'];
  custodian: Scalars['String'];
  epoch: Scalars['bigint'];
  /** An object relationship */
  stake_account: Stake_Account;
  unix_timestamp: Scalars['timestamp'];
};

/** aggregated selection of "stake_lockup" */
export type Stake_Lockup_Aggregate = {
  __typename?: 'stake_lockup_aggregate';
  aggregate?: Maybe<Stake_Lockup_Aggregate_Fields>;
  nodes: Array<Stake_Lockup>;
};

/** aggregate fields of "stake_lockup" */
export type Stake_Lockup_Aggregate_Fields = {
  __typename?: 'stake_lockup_aggregate_fields';
  avg?: Maybe<Stake_Lockup_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stake_Lockup_Max_Fields>;
  min?: Maybe<Stake_Lockup_Min_Fields>;
  stddev?: Maybe<Stake_Lockup_Stddev_Fields>;
  stddev_pop?: Maybe<Stake_Lockup_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stake_Lockup_Stddev_Samp_Fields>;
  sum?: Maybe<Stake_Lockup_Sum_Fields>;
  var_pop?: Maybe<Stake_Lockup_Var_Pop_Fields>;
  var_samp?: Maybe<Stake_Lockup_Var_Samp_Fields>;
  variance?: Maybe<Stake_Lockup_Variance_Fields>;
};


/** aggregate fields of "stake_lockup" */
export type Stake_Lockup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stake_Lockup_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stake_Lockup_Avg_Fields = {
  __typename?: 'stake_lockup_avg_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stake_lockup". All fields are combined with a logical 'AND'. */
export type Stake_Lockup_Bool_Exp = {
  _and?: Maybe<Array<Stake_Lockup_Bool_Exp>>;
  _not?: Maybe<Stake_Lockup_Bool_Exp>;
  _or?: Maybe<Array<Stake_Lockup_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  custodian?: Maybe<String_Comparison_Exp>;
  epoch?: Maybe<Bigint_Comparison_Exp>;
  stake_account?: Maybe<Stake_Account_Bool_Exp>;
  unix_timestamp?: Maybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Stake_Lockup_Max_Fields = {
  __typename?: 'stake_lockup_max_fields';
  address?: Maybe<Scalars['String']>;
  custodian?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  unix_timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Stake_Lockup_Min_Fields = {
  __typename?: 'stake_lockup_min_fields';
  address?: Maybe<Scalars['String']>;
  custodian?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  unix_timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "stake_lockup". */
export type Stake_Lockup_Order_By = {
  address?: Maybe<Order_By>;
  custodian?: Maybe<Order_By>;
  epoch?: Maybe<Order_By>;
  stake_account?: Maybe<Stake_Account_Order_By>;
  unix_timestamp?: Maybe<Order_By>;
};

/** select columns of table "stake_lockup" */
export enum Stake_Lockup_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Custodian = 'custodian',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  UnixTimestamp = 'unix_timestamp'
}

/** aggregate stddev on columns */
export type Stake_Lockup_Stddev_Fields = {
  __typename?: 'stake_lockup_stddev_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stake_Lockup_Stddev_Pop_Fields = {
  __typename?: 'stake_lockup_stddev_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stake_Lockup_Stddev_Samp_Fields = {
  __typename?: 'stake_lockup_stddev_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stake_Lockup_Sum_Fields = {
  __typename?: 'stake_lockup_sum_fields';
  epoch?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Stake_Lockup_Var_Pop_Fields = {
  __typename?: 'stake_lockup_var_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stake_Lockup_Var_Samp_Fields = {
  __typename?: 'stake_lockup_var_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stake_Lockup_Variance_Fields = {
  __typename?: 'stake_lockup_variance_fields';
  epoch?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account_balance" */
  account_balance: Array<Account_Balance>;
  /** fetch aggregated fields from the table: "account_balance" */
  account_balance_aggregate: Account_Balance_Aggregate;
  /** fetch data from the table: "account_balance" using primary key columns */
  account_balance_by_pk?: Maybe<Account_Balance>;
  /** fetch data from the table: "account_balance_history" */
  account_balance_history: Array<Account_Balance_History>;
  /** fetch aggregated fields from the table: "account_balance_history" */
  account_balance_history_aggregate: Account_Balance_History_Aggregate;
  /** fetch data from the table: "average_slot_time_per_hour" */
  average_slot_time_per_hour: Array<Average_Slot_Time_Per_Hour>;
  /** fetch aggregated fields from the table: "average_slot_time_per_hour" */
  average_slot_time_per_hour_aggregate: Average_Slot_Time_Per_Hour_Aggregate;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch aggregated fields from the table: "block" */
  block_aggregate: Block_Aggregate;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "instruction" */
  instruction: Array<Instruction>;
  /** fetch aggregated fields from the table: "instruction" */
  instruction_aggregate: Instruction_Aggregate;
  /** execute function "instructions_by_address" which returns "instruction" */
  instructions_by_address: Array<Instruction>;
  /** execute function "instructions_by_address" and query aggregates on result of table type "instruction" */
  instructions_by_address_aggregate: Instruction_Aggregate;
  /** fetch data from the table: "multisig" */
  multisig: Array<Multisig>;
  /** fetch aggregated fields from the table: "multisig" */
  multisig_aggregate: Multisig_Aggregate;
  /** fetch data from the table: "multisig" using primary key columns */
  multisig_by_pk?: Maybe<Multisig>;
  /** fetch data from the table: "nonce_account" */
  nonce_account: Array<Nonce_Account>;
  /** fetch aggregated fields from the table: "nonce_account" */
  nonce_account_aggregate: Nonce_Account_Aggregate;
  /** fetch data from the table: "nonce_account" using primary key columns */
  nonce_account_by_pk?: Maybe<Nonce_Account>;
  /** fetch data from the table: "program_account" */
  program_account: Array<Program_Account>;
  /** fetch aggregated fields from the table: "program_account" */
  program_account_aggregate: Program_Account_Aggregate;
  /** fetch data from the table: "program_account" using primary key columns */
  program_account_by_pk?: Maybe<Program_Account>;
  /** fetch data from the table: "program_data_account" */
  program_data_account: Array<Program_Data_Account>;
  /** fetch aggregated fields from the table: "program_data_account" */
  program_data_account_aggregate: Program_Data_Account_Aggregate;
  /** fetch data from the table: "program_data_account" using primary key columns */
  program_data_account_by_pk?: Maybe<Program_Data_Account>;
  /** fetch data from the table: "stake_account" */
  stake_account: Array<Stake_Account>;
  /** fetch aggregated fields from the table: "stake_account" */
  stake_account_aggregate: Stake_Account_Aggregate;
  /** fetch data from the table: "stake_account" using primary key columns */
  stake_account_by_pk?: Maybe<Stake_Account>;
  /** fetch data from the table: "stake_delegation" */
  stake_delegation: Array<Stake_Delegation>;
  /** fetch aggregated fields from the table: "stake_delegation" */
  stake_delegation_aggregate: Stake_Delegation_Aggregate;
  /** fetch data from the table: "stake_delegation" using primary key columns */
  stake_delegation_by_pk?: Maybe<Stake_Delegation>;
  /** fetch data from the table: "stake_lockup" */
  stake_lockup: Array<Stake_Lockup>;
  /** fetch aggregated fields from the table: "stake_lockup" */
  stake_lockup_aggregate: Stake_Lockup_Aggregate;
  /** fetch data from the table: "stake_lockup" using primary key columns */
  stake_lockup_by_pk?: Maybe<Stake_Lockup>;
  /** fetch data from the table: "supply_info" */
  supply_info: Array<Supply_Info>;
  /** fetch aggregated fields from the table: "supply_info" */
  supply_info_aggregate: Supply_Info_Aggregate;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_account" */
  token_account: Array<Token_Account>;
  /** fetch aggregated fields from the table: "token_account" */
  token_account_aggregate: Token_Account_Aggregate;
  /** fetch data from the table: "token_account_balance" */
  token_account_balance: Array<Token_Account_Balance>;
  /** fetch aggregated fields from the table: "token_account_balance" */
  token_account_balance_aggregate: Token_Account_Balance_Aggregate;
  /** fetch data from the table: "token_account_balance" using primary key columns */
  token_account_balance_by_pk?: Maybe<Token_Account_Balance>;
  /** fetch data from the table: "token_account_balance_history" */
  token_account_balance_history: Array<Token_Account_Balance_History>;
  /** fetch aggregated fields from the table: "token_account_balance_history" */
  token_account_balance_history_aggregate: Token_Account_Balance_History_Aggregate;
  /** fetch data from the table: "token_account_balance_ordering" */
  token_account_balance_ordering: Array<Token_Account_Balance_Ordering>;
  /** fetch aggregated fields from the table: "token_account_balance_ordering" */
  token_account_balance_ordering_aggregate: Token_Account_Balance_Ordering_Aggregate;
  /** fetch data from the table: "token_account" using primary key columns */
  token_account_by_pk?: Maybe<Token_Account>;
  /** fetch aggregated fields from the table: "token" */
  token_aggregate: Token_Aggregate;
  /** fetch data from the table: "token" using primary key columns */
  token_by_pk?: Maybe<Token>;
  /** fetch data from the table: "token_delegation" */
  token_delegation: Array<Token_Delegation>;
  /** fetch aggregated fields from the table: "token_delegation" */
  token_delegation_aggregate: Token_Delegation_Aggregate;
  /** fetch data from the table: "token_delegation" using primary key columns */
  token_delegation_by_pk?: Maybe<Token_Delegation>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch aggregated fields from the table: "token_price" */
  token_price_aggregate: Token_Price_Aggregate;
  /** fetch data from the table: "token_price" using primary key columns */
  token_price_by_pk?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_history: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  /** fetch data from the table: "token_supply" */
  token_supply: Array<Token_Supply>;
  /** fetch aggregated fields from the table: "token_supply" */
  token_supply_aggregate: Token_Supply_Aggregate;
  /** fetch data from the table: "token_supply" using primary key columns */
  token_supply_by_pk?: Maybe<Token_Supply>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch aggregated fields from the table: "token_unit" */
  token_unit_aggregate: Token_Unit_Aggregate;
  /** fetch data from the table: "token_unit" using primary key columns */
  token_unit_by_pk?: Maybe<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** execute function "transactions_by_address_2" which returns "transaction" */
  transactions_by_address_2: Array<Transaction>;
  /** execute function "transactions_by_address_2" and query aggregates on result of table type "transaction" */
  transactions_by_address_2_aggregate: Transaction_Aggregate;
  /** An array relationship */
  validator: Array<Validator>;
  /** An aggregate relationship */
  validator_aggregate: Validator_Aggregate;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_config" */
  validator_config: Array<Validator_Config>;
  /** fetch aggregated fields from the table: "validator_config" */
  validator_config_aggregate: Validator_Config_Aggregate;
  /** fetch data from the table: "validator_config" using primary key columns */
  validator_config_by_pk?: Maybe<Validator_Config>;
  /** fetch data from the table: "validator_skip_rate" */
  validator_skip_rate: Array<Validator_Skip_Rate>;
  /** fetch aggregated fields from the table: "validator_skip_rate" */
  validator_skip_rate_aggregate: Validator_Skip_Rate_Aggregate;
  /** fetch data from the table: "validator_skip_rate" using primary key columns */
  validator_skip_rate_by_pk?: Maybe<Validator_Skip_Rate>;
  /** fetch data from the table: "validator_skip_rate_history" */
  validator_skip_rate_history: Array<Validator_Skip_Rate_History>;
  /** fetch aggregated fields from the table: "validator_skip_rate_history" */
  validator_skip_rate_history_aggregate: Validator_Skip_Rate_History_Aggregate;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
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


export type Subscription_RootAccount_Balance_HistoryArgs = {
  distinct_on?: Maybe<Array<Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_History_Order_By>>;
  where?: Maybe<Account_Balance_History_Bool_Exp>;
};


export type Subscription_RootAccount_Balance_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Account_Balance_History_Order_By>>;
  where?: Maybe<Account_Balance_History_Bool_Exp>;
};


export type Subscription_RootAverage_Slot_Time_Per_HourArgs = {
  distinct_on?: Maybe<Array<Average_Slot_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Slot_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Slot_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Slot_Time_Per_Hour_AggregateArgs = {
  distinct_on?: Maybe<Array<Average_Slot_Time_Per_Hour_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Average_Slot_Time_Per_Hour_Order_By>>;
  where?: Maybe<Average_Slot_Time_Per_Hour_Bool_Exp>;
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
  slot: Scalars['bigint'];
};


export type Subscription_RootInstructionArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Subscription_RootInstruction_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Subscription_RootInstructions_By_AddressArgs = {
  args: Instructions_By_Address_Args;
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Subscription_RootInstructions_By_Address_AggregateArgs = {
  args: Instructions_By_Address_Args;
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


export type Subscription_RootMultisigArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Subscription_RootMultisig_AggregateArgs = {
  distinct_on?: Maybe<Array<Multisig_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Multisig_Order_By>>;
  where?: Maybe<Multisig_Bool_Exp>;
};


export type Subscription_RootMultisig_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootNonce_AccountArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Subscription_RootNonce_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Nonce_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Nonce_Account_Order_By>>;
  where?: Maybe<Nonce_Account_Bool_Exp>;
};


export type Subscription_RootNonce_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootProgram_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Account_Order_By>>;
  where?: Maybe<Program_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootProgram_Data_AccountArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Data_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Program_Data_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Program_Data_Account_Order_By>>;
  where?: Maybe<Program_Data_Account_Bool_Exp>;
};


export type Subscription_RootProgram_Data_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootStake_AccountArgs = {
  distinct_on?: Maybe<Array<Stake_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Account_Order_By>>;
  where?: Maybe<Stake_Account_Bool_Exp>;
};


export type Subscription_RootStake_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Account_Order_By>>;
  where?: Maybe<Stake_Account_Bool_Exp>;
};


export type Subscription_RootStake_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootStake_DelegationArgs = {
  distinct_on?: Maybe<Array<Stake_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Delegation_Order_By>>;
  where?: Maybe<Stake_Delegation_Bool_Exp>;
};


export type Subscription_RootStake_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Delegation_Order_By>>;
  where?: Maybe<Stake_Delegation_Bool_Exp>;
};


export type Subscription_RootStake_Delegation_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootStake_LockupArgs = {
  distinct_on?: Maybe<Array<Stake_Lockup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Lockup_Order_By>>;
  where?: Maybe<Stake_Lockup_Bool_Exp>;
};


export type Subscription_RootStake_Lockup_AggregateArgs = {
  distinct_on?: Maybe<Array<Stake_Lockup_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stake_Lockup_Order_By>>;
  where?: Maybe<Stake_Lockup_Bool_Exp>;
};


export type Subscription_RootStake_Lockup_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootSupply_InfoArgs = {
  distinct_on?: Maybe<Array<Supply_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Info_Order_By>>;
  where?: Maybe<Supply_Info_Bool_Exp>;
};


export type Subscription_RootSupply_Info_AggregateArgs = {
  distinct_on?: Maybe<Array<Supply_Info_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Supply_Info_Order_By>>;
  where?: Maybe<Supply_Info_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_AccountArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


export type Subscription_RootToken_Account_BalanceArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Order_By>>;
  where?: Maybe<Token_Account_Balance_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_Account_Balance_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_History_Order_By>>;
  where?: Maybe<Token_Account_Balance_History_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_History_Order_By>>;
  where?: Maybe<Token_Account_Balance_History_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_OrderingArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Ordering_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Ordering_Order_By>>;
  where?: Maybe<Token_Account_Balance_Ordering_Bool_Exp>;
};


export type Subscription_RootToken_Account_Balance_Ordering_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Balance_Ordering_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Balance_Ordering_Order_By>>;
  where?: Maybe<Token_Account_Balance_Ordering_Bool_Exp>;
};


export type Subscription_RootToken_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootToken_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Order_By>>;
  where?: Maybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_By_PkArgs = {
  mint: Scalars['String'];
};


export type Subscription_RootToken_DelegationArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Subscription_RootToken_Delegation_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Delegation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Delegation_Order_By>>;
  where?: Maybe<Token_Delegation_Bool_Exp>;
};


export type Subscription_RootToken_Delegation_By_PkArgs = {
  source_address: Scalars['String'];
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
  id: Scalars['String'];
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


export type Subscription_RootToken_SupplyArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Subscription_RootToken_Supply_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Supply_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Supply_Order_By>>;
  where?: Maybe<Token_Supply_Bool_Exp>;
};


export type Subscription_RootToken_Supply_By_PkArgs = {
  mint: Scalars['String'];
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


export type Subscription_RootToken_Unit_By_PkArgs = {
  mint: Scalars['String'];
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


export type Subscription_RootTransactions_By_Address_2Args = {
  args: Transactions_By_Address_2_Args;
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransactions_By_Address_2_AggregateArgs = {
  args: Transactions_By_Address_2_Args;
  distinct_on?: Maybe<Array<Transaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transaction_Order_By>>;
  where?: Maybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Order_By>>;
  where?: Maybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootValidator_ConfigArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Subscription_RootValidator_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Config_Order_By>>;
  where?: Maybe<Validator_Config_Bool_Exp>;
};


export type Subscription_RootValidator_Config_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootValidator_Skip_RateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_Bool_Exp>;
};


export type Subscription_RootValidator_Skip_Rate_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_Bool_Exp>;
};


export type Subscription_RootValidator_Skip_Rate_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootValidator_Skip_Rate_HistoryArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_History_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
};


export type Subscription_RootValidator_Skip_Rate_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Skip_Rate_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Skip_Rate_History_Order_By>>;
  where?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Validator_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Validator_Status_Order_By>>;
  where?: Maybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  address: Scalars['String'];
};

/** columns and relationships of "supply_info" */
export type Supply_Info = {
  __typename?: 'supply_info';
  circulating: Scalars['numeric'];
  epoch: Scalars['bigint'];
  non_circulating: Scalars['numeric'];
  total: Scalars['numeric'];
};

/** aggregated selection of "supply_info" */
export type Supply_Info_Aggregate = {
  __typename?: 'supply_info_aggregate';
  aggregate?: Maybe<Supply_Info_Aggregate_Fields>;
  nodes: Array<Supply_Info>;
};

/** aggregate fields of "supply_info" */
export type Supply_Info_Aggregate_Fields = {
  __typename?: 'supply_info_aggregate_fields';
  avg?: Maybe<Supply_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Supply_Info_Max_Fields>;
  min?: Maybe<Supply_Info_Min_Fields>;
  stddev?: Maybe<Supply_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Supply_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Supply_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Supply_Info_Sum_Fields>;
  var_pop?: Maybe<Supply_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Supply_Info_Var_Samp_Fields>;
  variance?: Maybe<Supply_Info_Variance_Fields>;
};


/** aggregate fields of "supply_info" */
export type Supply_Info_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Supply_Info_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Supply_Info_Avg_Fields = {
  __typename?: 'supply_info_avg_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "supply_info". All fields are combined with a logical 'AND'. */
export type Supply_Info_Bool_Exp = {
  _and?: Maybe<Array<Supply_Info_Bool_Exp>>;
  _not?: Maybe<Supply_Info_Bool_Exp>;
  _or?: Maybe<Array<Supply_Info_Bool_Exp>>;
  circulating?: Maybe<Numeric_Comparison_Exp>;
  epoch?: Maybe<Bigint_Comparison_Exp>;
  non_circulating?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Supply_Info_Max_Fields = {
  __typename?: 'supply_info_max_fields';
  circulating?: Maybe<Scalars['numeric']>;
  epoch?: Maybe<Scalars['bigint']>;
  non_circulating?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Supply_Info_Min_Fields = {
  __typename?: 'supply_info_min_fields';
  circulating?: Maybe<Scalars['numeric']>;
  epoch?: Maybe<Scalars['bigint']>;
  non_circulating?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "supply_info". */
export type Supply_Info_Order_By = {
  circulating?: Maybe<Order_By>;
  epoch?: Maybe<Order_By>;
  non_circulating?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** select columns of table "supply_info" */
export enum Supply_Info_Select_Column {
  /** column name */
  Circulating = 'circulating',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  NonCirculating = 'non_circulating',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Supply_Info_Stddev_Fields = {
  __typename?: 'supply_info_stddev_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Supply_Info_Stddev_Pop_Fields = {
  __typename?: 'supply_info_stddev_pop_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Supply_Info_Stddev_Samp_Fields = {
  __typename?: 'supply_info_stddev_samp_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Supply_Info_Sum_Fields = {
  __typename?: 'supply_info_sum_fields';
  circulating?: Maybe<Scalars['numeric']>;
  epoch?: Maybe<Scalars['bigint']>;
  non_circulating?: Maybe<Scalars['numeric']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Supply_Info_Var_Pop_Fields = {
  __typename?: 'supply_info_var_pop_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Supply_Info_Var_Samp_Fields = {
  __typename?: 'supply_info_var_samp_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Supply_Info_Variance_Fields = {
  __typename?: 'supply_info_variance_fields';
  circulating?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Float']>;
  non_circulating?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
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
  decimals: Scalars['Int'];
  freeze_authority: Scalars['String'];
  mint: Scalars['String'];
  mint_authority: Scalars['String'];
  /** An array relationship */
  token_accounts: Array<Token_Account>;
  /** An aggregate relationship */
  token_accounts_aggregate: Token_Account_Aggregate;
  /** An object relationship */
  token_supply?: Maybe<Token_Supply>;
};


/** columns and relationships of "token" */
export type TokenToken_AccountsArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};


/** columns and relationships of "token" */
export type TokenToken_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Token_Account_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Account_Order_By>>;
  where?: Maybe<Token_Account_Bool_Exp>;
};

/** columns and relationships of "token_account" */
export type Token_Account = {
  __typename?: 'token_account';
  address: Scalars['String'];
  mint: Scalars['String'];
  owner: Scalars['String'];
  /** An object relationship */
  token_balance?: Maybe<Token_Account_Balance>;
  /** An object relationship */
  token_delegate?: Maybe<Token_Delegation>;
  /** An object relationship */
  token_info?: Maybe<Token>;
  /** An object relationship */
  token_unit?: Maybe<Token_Unit>;
};

/** aggregated selection of "token_account" */
export type Token_Account_Aggregate = {
  __typename?: 'token_account_aggregate';
  aggregate?: Maybe<Token_Account_Aggregate_Fields>;
  nodes: Array<Token_Account>;
};

/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_Fields = {
  __typename?: 'token_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Max_Fields>;
  min?: Maybe<Token_Account_Min_Fields>;
};


/** aggregate fields of "token_account" */
export type Token_Account_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "token_account" */
export type Token_Account_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Token_Account_Max_Order_By>;
  min?: Maybe<Token_Account_Min_Order_By>;
};

/** columns and relationships of "token_account_balance" */
export type Token_Account_Balance = {
  __typename?: 'token_account_balance';
  address: Scalars['String'];
  balance: Scalars['numeric'];
  /** An object relationship */
  token_account?: Maybe<Token_Account>;
};

/** aggregated selection of "token_account_balance" */
export type Token_Account_Balance_Aggregate = {
  __typename?: 'token_account_balance_aggregate';
  aggregate?: Maybe<Token_Account_Balance_Aggregate_Fields>;
  nodes: Array<Token_Account_Balance>;
};

/** aggregate fields of "token_account_balance" */
export type Token_Account_Balance_Aggregate_Fields = {
  __typename?: 'token_account_balance_aggregate_fields';
  avg?: Maybe<Token_Account_Balance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Balance_Max_Fields>;
  min?: Maybe<Token_Account_Balance_Min_Fields>;
  stddev?: Maybe<Token_Account_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_Balance_Sum_Fields>;
  var_pop?: Maybe<Token_Account_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_Balance_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_Balance_Variance_Fields>;
};


/** aggregate fields of "token_account_balance" */
export type Token_Account_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Balance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Account_Balance_Avg_Fields = {
  __typename?: 'token_account_balance_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account_balance". All fields are combined with a logical 'AND'. */
export type Token_Account_Balance_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Balance_Bool_Exp>>;
  _not?: Maybe<Token_Account_Balance_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Balance_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Numeric_Comparison_Exp>;
  token_account?: Maybe<Token_Account_Bool_Exp>;
};

/** columns and relationships of "token_account_balance_history" */
export type Token_Account_Balance_History = {
  __typename?: 'token_account_balance_history';
  address: Scalars['String'];
  balance: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
};

/** aggregated selection of "token_account_balance_history" */
export type Token_Account_Balance_History_Aggregate = {
  __typename?: 'token_account_balance_history_aggregate';
  aggregate?: Maybe<Token_Account_Balance_History_Aggregate_Fields>;
  nodes: Array<Token_Account_Balance_History>;
};

/** aggregate fields of "token_account_balance_history" */
export type Token_Account_Balance_History_Aggregate_Fields = {
  __typename?: 'token_account_balance_history_aggregate_fields';
  avg?: Maybe<Token_Account_Balance_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Balance_History_Max_Fields>;
  min?: Maybe<Token_Account_Balance_History_Min_Fields>;
  stddev?: Maybe<Token_Account_Balance_History_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_Balance_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_Balance_History_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_Balance_History_Sum_Fields>;
  var_pop?: Maybe<Token_Account_Balance_History_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_Balance_History_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_Balance_History_Variance_Fields>;
};


/** aggregate fields of "token_account_balance_history" */
export type Token_Account_Balance_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Balance_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Account_Balance_History_Avg_Fields = {
  __typename?: 'token_account_balance_history_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account_balance_history". All fields are combined with a logical 'AND'. */
export type Token_Account_Balance_History_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Balance_History_Bool_Exp>>;
  _not?: Maybe<Token_Account_Balance_History_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Balance_History_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Numeric_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Account_Balance_History_Max_Fields = {
  __typename?: 'token_account_balance_history_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Token_Account_Balance_History_Min_Fields = {
  __typename?: 'token_account_balance_history_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "token_account_balance_history". */
export type Token_Account_Balance_History_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** select columns of table "token_account_balance_history" */
export enum Token_Account_Balance_History_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate stddev on columns */
export type Token_Account_Balance_History_Stddev_Fields = {
  __typename?: 'token_account_balance_history_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_Balance_History_Stddev_Pop_Fields = {
  __typename?: 'token_account_balance_history_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_Balance_History_Stddev_Samp_Fields = {
  __typename?: 'token_account_balance_history_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Account_Balance_History_Sum_Fields = {
  __typename?: 'token_account_balance_history_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Account_Balance_History_Var_Pop_Fields = {
  __typename?: 'token_account_balance_history_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Account_Balance_History_Var_Samp_Fields = {
  __typename?: 'token_account_balance_history_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Account_Balance_History_Variance_Fields = {
  __typename?: 'token_account_balance_history_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Token_Account_Balance_Max_Fields = {
  __typename?: 'token_account_balance_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Token_Account_Balance_Min_Fields = {
  __typename?: 'token_account_balance_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "token_account_balance". */
export type Token_Account_Balance_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  token_account?: Maybe<Token_Account_Order_By>;
};

/** columns and relationships of "token_account_balance_ordering" */
export type Token_Account_Balance_Ordering = {
  __typename?: 'token_account_balance_ordering';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  mint?: Maybe<Scalars['String']>;
  /** An object relationship */
  token_account?: Maybe<Token_Account>;
};

/** aggregated selection of "token_account_balance_ordering" */
export type Token_Account_Balance_Ordering_Aggregate = {
  __typename?: 'token_account_balance_ordering_aggregate';
  aggregate?: Maybe<Token_Account_Balance_Ordering_Aggregate_Fields>;
  nodes: Array<Token_Account_Balance_Ordering>;
};

/** aggregate fields of "token_account_balance_ordering" */
export type Token_Account_Balance_Ordering_Aggregate_Fields = {
  __typename?: 'token_account_balance_ordering_aggregate_fields';
  avg?: Maybe<Token_Account_Balance_Ordering_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Account_Balance_Ordering_Max_Fields>;
  min?: Maybe<Token_Account_Balance_Ordering_Min_Fields>;
  stddev?: Maybe<Token_Account_Balance_Ordering_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Account_Balance_Ordering_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Account_Balance_Ordering_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Account_Balance_Ordering_Sum_Fields>;
  var_pop?: Maybe<Token_Account_Balance_Ordering_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Account_Balance_Ordering_Var_Samp_Fields>;
  variance?: Maybe<Token_Account_Balance_Ordering_Variance_Fields>;
};


/** aggregate fields of "token_account_balance_ordering" */
export type Token_Account_Balance_Ordering_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Account_Balance_Ordering_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Account_Balance_Ordering_Avg_Fields = {
  __typename?: 'token_account_balance_ordering_avg_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account_balance_ordering". All fields are combined with a logical 'AND'. */
export type Token_Account_Balance_Ordering_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Balance_Ordering_Bool_Exp>>;
  _not?: Maybe<Token_Account_Balance_Ordering_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Balance_Ordering_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  balance?: Maybe<Numeric_Comparison_Exp>;
  mint?: Maybe<String_Comparison_Exp>;
  token_account?: Maybe<Token_Account_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Account_Balance_Ordering_Max_Fields = {
  __typename?: 'token_account_balance_ordering_max_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  mint?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Account_Balance_Ordering_Min_Fields = {
  __typename?: 'token_account_balance_ordering_min_fields';
  address?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['numeric']>;
  mint?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_account_balance_ordering". */
export type Token_Account_Balance_Ordering_Order_By = {
  address?: Maybe<Order_By>;
  balance?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  token_account?: Maybe<Token_Account_Order_By>;
};

/** select columns of table "token_account_balance_ordering" */
export enum Token_Account_Balance_Ordering_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance',
  /** column name */
  Mint = 'mint'
}

/** aggregate stddev on columns */
export type Token_Account_Balance_Ordering_Stddev_Fields = {
  __typename?: 'token_account_balance_ordering_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_Balance_Ordering_Stddev_Pop_Fields = {
  __typename?: 'token_account_balance_ordering_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_Balance_Ordering_Stddev_Samp_Fields = {
  __typename?: 'token_account_balance_ordering_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Account_Balance_Ordering_Sum_Fields = {
  __typename?: 'token_account_balance_ordering_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Account_Balance_Ordering_Var_Pop_Fields = {
  __typename?: 'token_account_balance_ordering_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Account_Balance_Ordering_Var_Samp_Fields = {
  __typename?: 'token_account_balance_ordering_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Account_Balance_Ordering_Variance_Fields = {
  __typename?: 'token_account_balance_ordering_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** select columns of table "token_account_balance" */
export enum Token_Account_Balance_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Balance = 'balance'
}

/** aggregate stddev on columns */
export type Token_Account_Balance_Stddev_Fields = {
  __typename?: 'token_account_balance_stddev_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Account_Balance_Stddev_Pop_Fields = {
  __typename?: 'token_account_balance_stddev_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Account_Balance_Stddev_Samp_Fields = {
  __typename?: 'token_account_balance_stddev_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Account_Balance_Sum_Fields = {
  __typename?: 'token_account_balance_sum_fields';
  balance?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Account_Balance_Var_Pop_Fields = {
  __typename?: 'token_account_balance_var_pop_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Account_Balance_Var_Samp_Fields = {
  __typename?: 'token_account_balance_var_samp_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Account_Balance_Variance_Fields = {
  __typename?: 'token_account_balance_variance_fields';
  balance?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_account". All fields are combined with a logical 'AND'. */
export type Token_Account_Bool_Exp = {
  _and?: Maybe<Array<Token_Account_Bool_Exp>>;
  _not?: Maybe<Token_Account_Bool_Exp>;
  _or?: Maybe<Array<Token_Account_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  mint?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  token_balance?: Maybe<Token_Account_Balance_Bool_Exp>;
  token_delegate?: Maybe<Token_Delegation_Bool_Exp>;
  token_info?: Maybe<Token_Bool_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Account_Max_Fields = {
  __typename?: 'token_account_max_fields';
  address?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "token_account" */
export type Token_Account_Max_Order_By = {
  address?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Account_Min_Fields = {
  __typename?: 'token_account_min_fields';
  address?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "token_account" */
export type Token_Account_Min_Order_By = {
  address?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_account". */
export type Token_Account_Order_By = {
  address?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  token_balance?: Maybe<Token_Account_Balance_Order_By>;
  token_delegate?: Maybe<Token_Delegation_Order_By>;
  token_info?: Maybe<Token_Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
};

/** select columns of table "token_account" */
export enum Token_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Mint = 'mint',
  /** column name */
  Owner = 'owner'
}

/** aggregated selection of "token" */
export type Token_Aggregate = {
  __typename?: 'token_aggregate';
  aggregate?: Maybe<Token_Aggregate_Fields>;
  nodes: Array<Token>;
};

/** aggregate fields of "token" */
export type Token_Aggregate_Fields = {
  __typename?: 'token_aggregate_fields';
  avg?: Maybe<Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Max_Fields>;
  min?: Maybe<Token_Min_Fields>;
  stddev?: Maybe<Token_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Sum_Fields>;
  var_pop?: Maybe<Token_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Var_Samp_Fields>;
  variance?: Maybe<Token_Variance_Fields>;
};


/** aggregate fields of "token" */
export type Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Avg_Fields = {
  __typename?: 'token_avg_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: Maybe<Array<Token_Bool_Exp>>;
  _not?: Maybe<Token_Bool_Exp>;
  _or?: Maybe<Array<Token_Bool_Exp>>;
  decimals?: Maybe<Int_Comparison_Exp>;
  freeze_authority?: Maybe<String_Comparison_Exp>;
  mint?: Maybe<String_Comparison_Exp>;
  mint_authority?: Maybe<String_Comparison_Exp>;
  token_accounts?: Maybe<Token_Account_Bool_Exp>;
  token_supply?: Maybe<Token_Supply_Bool_Exp>;
};

/** columns and relationships of "token_delegation" */
export type Token_Delegation = {
  __typename?: 'token_delegation';
  amount: Scalars['numeric'];
  delegate_address: Scalars['String'];
  source_address: Scalars['String'];
  /** An object relationship */
  source_token_account: Token_Account;
};

/** aggregated selection of "token_delegation" */
export type Token_Delegation_Aggregate = {
  __typename?: 'token_delegation_aggregate';
  aggregate?: Maybe<Token_Delegation_Aggregate_Fields>;
  nodes: Array<Token_Delegation>;
};

/** aggregate fields of "token_delegation" */
export type Token_Delegation_Aggregate_Fields = {
  __typename?: 'token_delegation_aggregate_fields';
  avg?: Maybe<Token_Delegation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Delegation_Max_Fields>;
  min?: Maybe<Token_Delegation_Min_Fields>;
  stddev?: Maybe<Token_Delegation_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Delegation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Delegation_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Delegation_Sum_Fields>;
  var_pop?: Maybe<Token_Delegation_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Delegation_Var_Samp_Fields>;
  variance?: Maybe<Token_Delegation_Variance_Fields>;
};


/** aggregate fields of "token_delegation" */
export type Token_Delegation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Delegation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Delegation_Avg_Fields = {
  __typename?: 'token_delegation_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_delegation". All fields are combined with a logical 'AND'. */
export type Token_Delegation_Bool_Exp = {
  _and?: Maybe<Array<Token_Delegation_Bool_Exp>>;
  _not?: Maybe<Token_Delegation_Bool_Exp>;
  _or?: Maybe<Array<Token_Delegation_Bool_Exp>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  delegate_address?: Maybe<String_Comparison_Exp>;
  source_address?: Maybe<String_Comparison_Exp>;
  source_token_account?: Maybe<Token_Account_Bool_Exp>;
};

/** aggregate max on columns */
export type Token_Delegation_Max_Fields = {
  __typename?: 'token_delegation_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  delegate_address?: Maybe<Scalars['String']>;
  source_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Delegation_Min_Fields = {
  __typename?: 'token_delegation_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  delegate_address?: Maybe<Scalars['String']>;
  source_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_delegation". */
export type Token_Delegation_Order_By = {
  amount?: Maybe<Order_By>;
  delegate_address?: Maybe<Order_By>;
  source_address?: Maybe<Order_By>;
  source_token_account?: Maybe<Token_Account_Order_By>;
};

/** select columns of table "token_delegation" */
export enum Token_Delegation_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DelegateAddress = 'delegate_address',
  /** column name */
  SourceAddress = 'source_address'
}

/** aggregate stddev on columns */
export type Token_Delegation_Stddev_Fields = {
  __typename?: 'token_delegation_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Delegation_Stddev_Pop_Fields = {
  __typename?: 'token_delegation_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Delegation_Stddev_Samp_Fields = {
  __typename?: 'token_delegation_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Delegation_Sum_Fields = {
  __typename?: 'token_delegation_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Delegation_Var_Pop_Fields = {
  __typename?: 'token_delegation_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Delegation_Var_Samp_Fields = {
  __typename?: 'token_delegation_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Delegation_Variance_Fields = {
  __typename?: 'token_delegation_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Token_Max_Fields = {
  __typename?: 'token_max_fields';
  decimals?: Maybe<Scalars['Int']>;
  freeze_authority?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  mint_authority?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Min_Fields = {
  __typename?: 'token_min_fields';
  decimals?: Maybe<Scalars['Int']>;
  freeze_authority?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  mint_authority?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  decimals?: Maybe<Order_By>;
  freeze_authority?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  mint_authority?: Maybe<Order_By>;
  token_accounts_aggregate?: Maybe<Token_Account_Aggregate_Order_By>;
  token_supply?: Maybe<Token_Supply_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  id: Scalars['String'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  symbol: Scalars['String'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit?: Maybe<Token_Unit>;
  volume: Scalars['float8'];
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
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_Bool_Exp>>;
  _not?: Maybe<Token_Price_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  volume?: Maybe<Float8_Comparison_Exp>;
};

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  id: Scalars['String'];
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  symbol: Scalars['String'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit?: Maybe<Token_Unit>;
  volume: Scalars['float8'];
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
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: Maybe<Token_Price_History_Bool_Exp>;
  _or?: Maybe<Array<Token_Price_History_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  market_cap?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  symbol?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  token_unit?: Maybe<Token_Unit_Bool_Exp>;
  volume?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Price_History_Max_Fields = {
  __typename?: 'token_price_history_max_fields';
  id?: Maybe<Scalars['String']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  volume?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Token_Price_History_Min_Fields = {
  __typename?: 'token_price_history_min_fields';
  id?: Maybe<Scalars['String']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  volume?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  volume?: Maybe<Order_By>;
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
  Symbol = 'symbol',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type Token_Price_History_Stddev_Fields = {
  __typename?: 'token_price_history_stddev_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'token_price_history_stddev_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'token_price_history_stddev_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Token_Price_History_Sum_Fields = {
  __typename?: 'token_price_history_sum_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Token_Price_History_Var_Pop_Fields = {
  __typename?: 'token_price_history_var_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Token_Price_History_Var_Samp_Fields = {
  __typename?: 'token_price_history_var_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Token_Price_History_Variance_Fields = {
  __typename?: 'token_price_history_variance_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  volume?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Token_Price_Max_Fields = {
  __typename?: 'token_price_max_fields';
  id?: Maybe<Scalars['String']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  volume?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Token_Price_Min_Fields = {
  __typename?: 'token_price_min_fields';
  id?: Maybe<Scalars['String']>;
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  volume?: Maybe<Scalars['float8']>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  id?: Maybe<Order_By>;
  market_cap?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  symbol?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  token_unit?: Maybe<Token_Unit_Order_By>;
  volume?: Maybe<Order_By>;
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
  Symbol = 'symbol',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Volume = 'volume'
}

/** aggregate stddev on columns */
export type Token_Price_Stddev_Fields = {
  __typename?: 'token_price_stddev_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Price_Stddev_Pop_Fields = {
  __typename?: 'token_price_stddev_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Price_Stddev_Samp_Fields = {
  __typename?: 'token_price_stddev_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Price_Sum_Fields = {
  __typename?: 'token_price_sum_fields';
  market_cap?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
  volume?: Maybe<Scalars['float8']>;
};

/** aggregate var_pop on columns */
export type Token_Price_Var_Pop_Fields = {
  __typename?: 'token_price_var_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Price_Var_Samp_Fields = {
  __typename?: 'token_price_var_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Price_Variance_Fields = {
  __typename?: 'token_price_variance_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Decimals = 'decimals',
  /** column name */
  FreezeAuthority = 'freeze_authority',
  /** column name */
  Mint = 'mint',
  /** column name */
  MintAuthority = 'mint_authority'
}

/** aggregate stddev on columns */
export type Token_Stddev_Fields = {
  __typename?: 'token_stddev_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Stddev_Pop_Fields = {
  __typename?: 'token_stddev_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Stddev_Samp_Fields = {
  __typename?: 'token_stddev_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Sum_Fields = {
  __typename?: 'token_sum_fields';
  decimals?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "token_supply" */
export type Token_Supply = {
  __typename?: 'token_supply';
  mint: Scalars['String'];
  supply: Scalars['numeric'];
};

/** aggregated selection of "token_supply" */
export type Token_Supply_Aggregate = {
  __typename?: 'token_supply_aggregate';
  aggregate?: Maybe<Token_Supply_Aggregate_Fields>;
  nodes: Array<Token_Supply>;
};

/** aggregate fields of "token_supply" */
export type Token_Supply_Aggregate_Fields = {
  __typename?: 'token_supply_aggregate_fields';
  avg?: Maybe<Token_Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Token_Supply_Max_Fields>;
  min?: Maybe<Token_Supply_Min_Fields>;
  stddev?: Maybe<Token_Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Token_Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Token_Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Token_Supply_Sum_Fields>;
  var_pop?: Maybe<Token_Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Token_Supply_Var_Samp_Fields>;
  variance?: Maybe<Token_Supply_Variance_Fields>;
};


/** aggregate fields of "token_supply" */
export type Token_Supply_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Supply_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Token_Supply_Avg_Fields = {
  __typename?: 'token_supply_avg_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "token_supply". All fields are combined with a logical 'AND'. */
export type Token_Supply_Bool_Exp = {
  _and?: Maybe<Array<Token_Supply_Bool_Exp>>;
  _not?: Maybe<Token_Supply_Bool_Exp>;
  _or?: Maybe<Array<Token_Supply_Bool_Exp>>;
  mint?: Maybe<String_Comparison_Exp>;
  supply?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Supply_Max_Fields = {
  __typename?: 'token_supply_max_fields';
  mint?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Token_Supply_Min_Fields = {
  __typename?: 'token_supply_min_fields';
  mint?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "token_supply". */
export type Token_Supply_Order_By = {
  mint?: Maybe<Order_By>;
  supply?: Maybe<Order_By>;
};

/** select columns of table "token_supply" */
export enum Token_Supply_Select_Column {
  /** column name */
  Mint = 'mint',
  /** column name */
  Supply = 'supply'
}

/** aggregate stddev on columns */
export type Token_Supply_Stddev_Fields = {
  __typename?: 'token_supply_stddev_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Token_Supply_Stddev_Pop_Fields = {
  __typename?: 'token_supply_stddev_pop_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Token_Supply_Stddev_Samp_Fields = {
  __typename?: 'token_supply_stddev_samp_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Token_Supply_Sum_Fields = {
  __typename?: 'token_supply_sum_fields';
  supply?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Token_Supply_Var_Pop_Fields = {
  __typename?: 'token_supply_var_pop_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Supply_Var_Samp_Fields = {
  __typename?: 'token_supply_var_samp_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Supply_Variance_Fields = {
  __typename?: 'token_supply_variance_fields';
  supply?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "token_unit" */
export type Token_Unit = {
  __typename?: 'token_unit';
  description: Scalars['String'];
  logo_uri: Scalars['String'];
  mint: Scalars['String'];
  price_id: Scalars['String'];
  /** An object relationship */
  token?: Maybe<Token>;
  /** An object relationship */
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_history: Array<Token_Price_History>;
  /** An aggregate relationship */
  token_price_history_aggregate: Token_Price_History_Aggregate;
  unit_name: Scalars['String'];
  website: Scalars['String'];
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoryArgs = {
  distinct_on?: Maybe<Array<Token_Price_History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Token_Price_History_Order_By>>;
  where?: Maybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_History_AggregateArgs = {
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
  count: Scalars['Int'];
  max?: Maybe<Token_Unit_Max_Fields>;
  min?: Maybe<Token_Unit_Min_Fields>;
};


/** aggregate fields of "token_unit" */
export type Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Token_Unit_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: Maybe<Array<Token_Unit_Bool_Exp>>;
  _not?: Maybe<Token_Unit_Bool_Exp>;
  _or?: Maybe<Array<Token_Unit_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  logo_uri?: Maybe<String_Comparison_Exp>;
  mint?: Maybe<String_Comparison_Exp>;
  price_id?: Maybe<String_Comparison_Exp>;
  token?: Maybe<Token_Bool_Exp>;
  token_price?: Maybe<Token_Price_Bool_Exp>;
  token_price_history?: Maybe<Token_Price_History_Bool_Exp>;
  unit_name?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Token_Unit_Max_Fields = {
  __typename?: 'token_unit_max_fields';
  description?: Maybe<Scalars['String']>;
  logo_uri?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  price_id?: Maybe<Scalars['String']>;
  unit_name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Token_Unit_Min_Fields = {
  __typename?: 'token_unit_min_fields';
  description?: Maybe<Scalars['String']>;
  logo_uri?: Maybe<Scalars['String']>;
  mint?: Maybe<Scalars['String']>;
  price_id?: Maybe<Scalars['String']>;
  unit_name?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  description?: Maybe<Order_By>;
  logo_uri?: Maybe<Order_By>;
  mint?: Maybe<Order_By>;
  price_id?: Maybe<Order_By>;
  token?: Maybe<Token_Order_By>;
  token_price?: Maybe<Token_Price_Order_By>;
  token_price_history_aggregate?: Maybe<Token_Price_History_Aggregate_Order_By>;
  unit_name?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** select columns of table "token_unit" */
export enum Token_Unit_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  LogoUri = 'logo_uri',
  /** column name */
  Mint = 'mint',
  /** column name */
  PriceId = 'price_id',
  /** column name */
  UnitName = 'unit_name',
  /** column name */
  Website = 'website'
}

/** aggregate var_pop on columns */
export type Token_Var_Pop_Fields = {
  __typename?: 'token_var_pop_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Token_Var_Samp_Fields = {
  __typename?: 'token_var_samp_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Token_Variance_Fields = {
  __typename?: 'token_variance_fields';
  decimals?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block?: Maybe<Block>;
  fee: Scalars['Int'];
  index: Scalars['Int'];
  /** An array relationship */
  instructions: Array<Instruction>;
  /** An aggregate relationship */
  instructions_aggregate: Instruction_Aggregate;
  involved_accounts: Scalars['_text'];
  logs?: Maybe<Scalars['_text']>;
  num_instructions: Scalars['Int'];
  signature: Scalars['String'];
  slot: Scalars['bigint'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type TransactionInstructionsArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionInstructions_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruction_Order_By>>;
  where?: Maybe<Instruction_Bool_Exp>;
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
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: Maybe<Array<Transaction_Bool_Exp>>;
  _not?: Maybe<Transaction_Bool_Exp>;
  _or?: Maybe<Array<Transaction_Bool_Exp>>;
  block?: Maybe<Block_Bool_Exp>;
  fee?: Maybe<Int_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  instructions?: Maybe<Instruction_Bool_Exp>;
  involved_accounts?: Maybe<_Text_Comparison_Exp>;
  logs?: Maybe<_Text_Comparison_Exp>;
  num_instructions?: Maybe<Int_Comparison_Exp>;
  signature?: Maybe<String_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
  success?: Maybe<Boolean_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  fee?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  num_instructions?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  fee?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  num_instructions?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: Maybe<Block_Order_By>;
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  instructions_aggregate?: Maybe<Instruction_Aggregate_Order_By>;
  involved_accounts?: Maybe<Order_By>;
  logs?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
  success?: Maybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccounts = 'involved_accounts',
  /** column name */
  Logs = 'logs',
  /** column name */
  NumInstructions = 'num_instructions',
  /** column name */
  Signature = 'signature',
  /** column name */
  Slot = 'slot',
  /** column name */
  Success = 'success'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  fee?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  num_instructions?: Maybe<Scalars['Int']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  fee?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  num_instructions?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  fee?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  num_instructions?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

export type Transactions_By_Address_2_Args = {
  current?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  address: Scalars['String'];
  commission: Scalars['Int'];
  /** An object relationship */
  native_balance?: Maybe<Account_Balance>;
  node: Scalars['String'];
  /** An object relationship */
  validator_config?: Maybe<Validator_Config>;
  /** An object relationship */
  validator_skip_rate?: Maybe<Validator_Skip_Rate>;
  /** An object relationship */
  validator_skip_rate_history?: Maybe<Validator_Skip_Rate_History>;
  /** An object relationship */
  validator_status?: Maybe<Validator_Status>;
  voter: Scalars['String'];
  withdrawer: Scalars['String'];
};

/** aggregated selection of "validator" */
export type Validator_Aggregate = {
  __typename?: 'validator_aggregate';
  aggregate?: Maybe<Validator_Aggregate_Fields>;
  nodes: Array<Validator>;
};

/** aggregate fields of "validator" */
export type Validator_Aggregate_Fields = {
  __typename?: 'validator_aggregate_fields';
  avg?: Maybe<Validator_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Max_Fields>;
  min?: Maybe<Validator_Min_Fields>;
  stddev?: Maybe<Validator_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Sum_Fields>;
  var_pop?: Maybe<Validator_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Var_Samp_Fields>;
  variance?: Maybe<Validator_Variance_Fields>;
};


/** aggregate fields of "validator" */
export type Validator_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator" */
export type Validator_Aggregate_Order_By = {
  avg?: Maybe<Validator_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Validator_Max_Order_By>;
  min?: Maybe<Validator_Min_Order_By>;
  stddev?: Maybe<Validator_Stddev_Order_By>;
  stddev_pop?: Maybe<Validator_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Validator_Stddev_Samp_Order_By>;
  sum?: Maybe<Validator_Sum_Order_By>;
  var_pop?: Maybe<Validator_Var_Pop_Order_By>;
  var_samp?: Maybe<Validator_Var_Samp_Order_By>;
  variance?: Maybe<Validator_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Avg_Fields = {
  __typename?: 'validator_avg_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator" */
export type Validator_Avg_Order_By = {
  commission?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: Maybe<Array<Validator_Bool_Exp>>;
  _not?: Maybe<Validator_Bool_Exp>;
  _or?: Maybe<Array<Validator_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  commission?: Maybe<Int_Comparison_Exp>;
  native_balance?: Maybe<Account_Balance_Bool_Exp>;
  node?: Maybe<String_Comparison_Exp>;
  validator_config?: Maybe<Validator_Config_Bool_Exp>;
  validator_skip_rate?: Maybe<Validator_Skip_Rate_Bool_Exp>;
  validator_skip_rate_history?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
  validator_status?: Maybe<Validator_Status_Bool_Exp>;
  voter?: Maybe<String_Comparison_Exp>;
  withdrawer?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "validator_config" */
export type Validator_Config = {
  __typename?: 'validator_config';
  address: Scalars['String'];
  avatar_url: Scalars['String'];
  details: Scalars['String'];
  keybase_username: Scalars['String'];
  name: Scalars['String'];
  owner: Scalars['String'];
  website: Scalars['String'];
};

/** aggregated selection of "validator_config" */
export type Validator_Config_Aggregate = {
  __typename?: 'validator_config_aggregate';
  aggregate?: Maybe<Validator_Config_Aggregate_Fields>;
  nodes: Array<Validator_Config>;
};

/** aggregate fields of "validator_config" */
export type Validator_Config_Aggregate_Fields = {
  __typename?: 'validator_config_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Validator_Config_Max_Fields>;
  min?: Maybe<Validator_Config_Min_Fields>;
};


/** aggregate fields of "validator_config" */
export type Validator_Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "validator_config". All fields are combined with a logical 'AND'. */
export type Validator_Config_Bool_Exp = {
  _and?: Maybe<Array<Validator_Config_Bool_Exp>>;
  _not?: Maybe<Validator_Config_Bool_Exp>;
  _or?: Maybe<Array<Validator_Config_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  details?: Maybe<String_Comparison_Exp>;
  keybase_username?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<String_Comparison_Exp>;
  website?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Config_Max_Fields = {
  __typename?: 'validator_config_max_fields';
  address?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  keybase_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Validator_Config_Min_Fields = {
  __typename?: 'validator_config_min_fields';
  address?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  keybase_username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator_config". */
export type Validator_Config_Order_By = {
  address?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  details?: Maybe<Order_By>;
  keybase_username?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  website?: Maybe<Order_By>;
};

/** select columns of table "validator_config" */
export enum Validator_Config_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  KeybaseUsername = 'keybase_username',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Website = 'website'
}

/** aggregate max on columns */
export type Validator_Max_Fields = {
  __typename?: 'validator_max_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Int']>;
  node?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator" */
export type Validator_Max_Order_By = {
  address?: Maybe<Order_By>;
  commission?: Maybe<Order_By>;
  node?: Maybe<Order_By>;
  voter?: Maybe<Order_By>;
  withdrawer?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Min_Fields = {
  __typename?: 'validator_min_fields';
  address?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Int']>;
  node?: Maybe<Scalars['String']>;
  voter?: Maybe<Scalars['String']>;
  withdrawer?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator" */
export type Validator_Min_Order_By = {
  address?: Maybe<Order_By>;
  commission?: Maybe<Order_By>;
  node?: Maybe<Order_By>;
  voter?: Maybe<Order_By>;
  withdrawer?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  address?: Maybe<Order_By>;
  commission?: Maybe<Order_By>;
  native_balance?: Maybe<Account_Balance_Order_By>;
  node?: Maybe<Order_By>;
  validator_config?: Maybe<Validator_Config_Order_By>;
  validator_skip_rate?: Maybe<Validator_Skip_Rate_Order_By>;
  validator_skip_rate_history?: Maybe<Validator_Skip_Rate_History_Order_By>;
  validator_status?: Maybe<Validator_Status_Order_By>;
  voter?: Maybe<Order_By>;
  withdrawer?: Maybe<Order_By>;
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Commission = 'commission',
  /** column name */
  Node = 'node',
  /** column name */
  Voter = 'voter',
  /** column name */
  Withdrawer = 'withdrawer'
}

/** columns and relationships of "validator_skip_rate" */
export type Validator_Skip_Rate = {
  __typename?: 'validator_skip_rate';
  address: Scalars['String'];
  epoch: Scalars['bigint'];
  skip: Scalars['Int'];
  skip_rate: Scalars['float8'];
  total: Scalars['Int'];
};

/** aggregated selection of "validator_skip_rate" */
export type Validator_Skip_Rate_Aggregate = {
  __typename?: 'validator_skip_rate_aggregate';
  aggregate?: Maybe<Validator_Skip_Rate_Aggregate_Fields>;
  nodes: Array<Validator_Skip_Rate>;
};

/** aggregate fields of "validator_skip_rate" */
export type Validator_Skip_Rate_Aggregate_Fields = {
  __typename?: 'validator_skip_rate_aggregate_fields';
  avg?: Maybe<Validator_Skip_Rate_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Skip_Rate_Max_Fields>;
  min?: Maybe<Validator_Skip_Rate_Min_Fields>;
  stddev?: Maybe<Validator_Skip_Rate_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Skip_Rate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Skip_Rate_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Skip_Rate_Sum_Fields>;
  var_pop?: Maybe<Validator_Skip_Rate_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Skip_Rate_Var_Samp_Fields>;
  variance?: Maybe<Validator_Skip_Rate_Variance_Fields>;
};


/** aggregate fields of "validator_skip_rate" */
export type Validator_Skip_Rate_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Skip_Rate_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Skip_Rate_Avg_Fields = {
  __typename?: 'validator_skip_rate_avg_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_skip_rate". All fields are combined with a logical 'AND'. */
export type Validator_Skip_Rate_Bool_Exp = {
  _and?: Maybe<Array<Validator_Skip_Rate_Bool_Exp>>;
  _not?: Maybe<Validator_Skip_Rate_Bool_Exp>;
  _or?: Maybe<Array<Validator_Skip_Rate_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  epoch?: Maybe<Bigint_Comparison_Exp>;
  skip?: Maybe<Int_Comparison_Exp>;
  skip_rate?: Maybe<Float8_Comparison_Exp>;
  total?: Maybe<Int_Comparison_Exp>;
};

/** columns and relationships of "validator_skip_rate_history" */
export type Validator_Skip_Rate_History = {
  __typename?: 'validator_skip_rate_history';
  address: Scalars['String'];
  epoch: Scalars['bigint'];
  skip: Scalars['Int'];
  skip_rate: Scalars['float8'];
  total: Scalars['Int'];
};

/** aggregated selection of "validator_skip_rate_history" */
export type Validator_Skip_Rate_History_Aggregate = {
  __typename?: 'validator_skip_rate_history_aggregate';
  aggregate?: Maybe<Validator_Skip_Rate_History_Aggregate_Fields>;
  nodes: Array<Validator_Skip_Rate_History>;
};

/** aggregate fields of "validator_skip_rate_history" */
export type Validator_Skip_Rate_History_Aggregate_Fields = {
  __typename?: 'validator_skip_rate_history_aggregate_fields';
  avg?: Maybe<Validator_Skip_Rate_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Skip_Rate_History_Max_Fields>;
  min?: Maybe<Validator_Skip_Rate_History_Min_Fields>;
  stddev?: Maybe<Validator_Skip_Rate_History_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Skip_Rate_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Skip_Rate_History_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Skip_Rate_History_Sum_Fields>;
  var_pop?: Maybe<Validator_Skip_Rate_History_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Skip_Rate_History_Var_Samp_Fields>;
  variance?: Maybe<Validator_Skip_Rate_History_Variance_Fields>;
};


/** aggregate fields of "validator_skip_rate_history" */
export type Validator_Skip_Rate_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Skip_Rate_History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Skip_Rate_History_Avg_Fields = {
  __typename?: 'validator_skip_rate_history_avg_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_skip_rate_history". All fields are combined with a logical 'AND'. */
export type Validator_Skip_Rate_History_Bool_Exp = {
  _and?: Maybe<Array<Validator_Skip_Rate_History_Bool_Exp>>;
  _not?: Maybe<Validator_Skip_Rate_History_Bool_Exp>;
  _or?: Maybe<Array<Validator_Skip_Rate_History_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  epoch?: Maybe<Bigint_Comparison_Exp>;
  skip?: Maybe<Int_Comparison_Exp>;
  skip_rate?: Maybe<Float8_Comparison_Exp>;
  total?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Skip_Rate_History_Max_Fields = {
  __typename?: 'validator_skip_rate_history_max_fields';
  address?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Validator_Skip_Rate_History_Min_Fields = {
  __typename?: 'validator_skip_rate_history_min_fields';
  address?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "validator_skip_rate_history". */
export type Validator_Skip_Rate_History_Order_By = {
  address?: Maybe<Order_By>;
  epoch?: Maybe<Order_By>;
  skip?: Maybe<Order_By>;
  skip_rate?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** select columns of table "validator_skip_rate_history" */
export enum Validator_Skip_Rate_History_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  Skip = 'skip',
  /** column name */
  SkipRate = 'skip_rate',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Validator_Skip_Rate_History_Stddev_Fields = {
  __typename?: 'validator_skip_rate_history_stddev_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Skip_Rate_History_Stddev_Pop_Fields = {
  __typename?: 'validator_skip_rate_history_stddev_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Skip_Rate_History_Stddev_Samp_Fields = {
  __typename?: 'validator_skip_rate_history_stddev_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Validator_Skip_Rate_History_Sum_Fields = {
  __typename?: 'validator_skip_rate_history_sum_fields';
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Validator_Skip_Rate_History_Var_Pop_Fields = {
  __typename?: 'validator_skip_rate_history_var_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Skip_Rate_History_Var_Samp_Fields = {
  __typename?: 'validator_skip_rate_history_var_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Skip_Rate_History_Variance_Fields = {
  __typename?: 'validator_skip_rate_history_variance_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Validator_Skip_Rate_Max_Fields = {
  __typename?: 'validator_skip_rate_max_fields';
  address?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Validator_Skip_Rate_Min_Fields = {
  __typename?: 'validator_skip_rate_min_fields';
  address?: Maybe<Scalars['String']>;
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** Ordering options when selecting data from "validator_skip_rate". */
export type Validator_Skip_Rate_Order_By = {
  address?: Maybe<Order_By>;
  epoch?: Maybe<Order_By>;
  skip?: Maybe<Order_By>;
  skip_rate?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** select columns of table "validator_skip_rate" */
export enum Validator_Skip_Rate_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Epoch = 'epoch',
  /** column name */
  Skip = 'skip',
  /** column name */
  SkipRate = 'skip_rate',
  /** column name */
  Total = 'total'
}

/** aggregate stddev on columns */
export type Validator_Skip_Rate_Stddev_Fields = {
  __typename?: 'validator_skip_rate_stddev_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Skip_Rate_Stddev_Pop_Fields = {
  __typename?: 'validator_skip_rate_stddev_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Skip_Rate_Stddev_Samp_Fields = {
  __typename?: 'validator_skip_rate_stddev_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Validator_Skip_Rate_Sum_Fields = {
  __typename?: 'validator_skip_rate_sum_fields';
  epoch?: Maybe<Scalars['bigint']>;
  skip?: Maybe<Scalars['Int']>;
  skip_rate?: Maybe<Scalars['float8']>;
  total?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Validator_Skip_Rate_Var_Pop_Fields = {
  __typename?: 'validator_skip_rate_var_pop_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Skip_Rate_Var_Samp_Fields = {
  __typename?: 'validator_skip_rate_var_samp_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Skip_Rate_Variance_Fields = {
  __typename?: 'validator_skip_rate_variance_fields';
  epoch?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  skip_rate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  activated_stake: Scalars['bigint'];
  active: Scalars['Boolean'];
  address: Scalars['String'];
  last_vote: Scalars['bigint'];
  root_slot: Scalars['bigint'];
  slot: Scalars['bigint'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_Fields = {
  __typename?: 'validator_status_aggregate_fields';
  avg?: Maybe<Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Status_Max_Fields>;
  min?: Maybe<Validator_Status_Min_Fields>;
  stddev?: Maybe<Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Validator_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: Maybe<Array<Validator_Status_Bool_Exp>>;
  _not?: Maybe<Validator_Status_Bool_Exp>;
  _or?: Maybe<Array<Validator_Status_Bool_Exp>>;
  activated_stake?: Maybe<Bigint_Comparison_Exp>;
  active?: Maybe<Boolean_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  last_vote?: Maybe<Bigint_Comparison_Exp>;
  root_slot?: Maybe<Bigint_Comparison_Exp>;
  slot?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  address?: Maybe<Scalars['String']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  address?: Maybe<Scalars['String']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  activated_stake?: Maybe<Order_By>;
  active?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  last_vote?: Maybe<Order_By>;
  root_slot?: Maybe<Order_By>;
  slot?: Maybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  ActivatedStake = 'activated_stake',
  /** column name */
  Active = 'active',
  /** column name */
  Address = 'address',
  /** column name */
  LastVote = 'last_vote',
  /** column name */
  RootSlot = 'root_slot',
  /** column name */
  Slot = 'slot'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  activated_stake?: Maybe<Scalars['bigint']>;
  last_vote?: Maybe<Scalars['bigint']>;
  root_slot?: Maybe<Scalars['bigint']>;
  slot?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  activated_stake?: Maybe<Scalars['Float']>;
  last_vote?: Maybe<Scalars['Float']>;
  root_slot?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Validator_Stddev_Fields = {
  __typename?: 'validator_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator" */
export type Validator_Stddev_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Stddev_Pop_Fields = {
  __typename?: 'validator_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator" */
export type Validator_Stddev_Pop_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Stddev_Samp_Fields = {
  __typename?: 'validator_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator" */
export type Validator_Stddev_Samp_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Validator_Sum_Fields = {
  __typename?: 'validator_sum_fields';
  commission?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator" */
export type Validator_Sum_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Var_Pop_Fields = {
  __typename?: 'validator_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator" */
export type Validator_Var_Pop_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Var_Samp_Fields = {
  __typename?: 'validator_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator" */
export type Validator_Var_Samp_Order_By = {
  commission?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Variance_Fields = {
  __typename?: 'validator_variance_fields';
  commission?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator" */
export type Validator_Variance_Order_By = {
  commission?: Maybe<Order_By>;
};

export type AccountTypeQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountTypeQuery = { actionsAccountInfo: (
    { __typename?: 'AccountInfo' }
    & Pick<AccountInfo, 'parsed'>
    & { programOwner: AccountInfo['program_owner'] }
  ) };

export type NativeAccountDetailsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type NativeAccountDetailsQuery = { accountBalance: Array<(
    { __typename?: 'account_balance' }
    & Pick<Account_Balance, 'balance'>
  )>, stake: (
    { __typename?: 'stake_account_aggregate' }
    & { nodes: Array<(
      { __typename?: 'stake_account' }
      & { nativeBalance?: Maybe<(
        { __typename?: 'account_balance' }
        & Pick<Account_Balance, 'balance'>
      )> }
    )> }
  ), nonce: (
    { __typename?: 'nonce_account_aggregate' }
    & { nodes: Array<(
      { __typename?: 'nonce_account' }
      & { nativeBalance?: Maybe<(
        { __typename?: 'account_balance' }
        & Pick<Account_Balance, 'balance'>
      )> }
    )> }
  ), validator: (
    { __typename?: 'validator_aggregate' }
    & { nodes: Array<(
      { __typename?: 'validator' }
      & { nativeBalance?: Maybe<(
        { __typename?: 'account_balance' }
        & Pick<Account_Balance, 'balance'>
      )> }
    )> }
  ) };

export type NativeRelatedAccountsCountQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type NativeRelatedAccountsCountQuery = { stakeAccountAggregate: (
    { __typename?: 'stake_account_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'stake_account_aggregate_fields' }
      & Pick<Stake_Account_Aggregate_Fields, 'count'>
    )> }
  ), validatorAggregate: (
    { __typename?: 'validator_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_aggregate_fields' }
      & Pick<Validator_Aggregate_Fields, 'count'>
    )> }
  ), nonceAccountAggregate: (
    { __typename?: 'nonce_account_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'nonce_account_aggregate_fields' }
      & Pick<Nonce_Account_Aggregate_Fields, 'count'>
    )> }
  ), tokenAccountAggregate: (
    { __typename?: 'token_account_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'token_account_aggregate_fields' }
      & Pick<Token_Account_Aggregate_Fields, 'count'>
    )> }
  ) };

export type NativeRelatedAccountsQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type NativeRelatedAccountsQuery = { stakeAccount: Array<(
    { __typename?: 'stake_account' }
    & Pick<Stake_Account, 'address'>
  )>, validator: Array<(
    { __typename?: 'validator' }
    & Pick<Validator, 'address'>
  )>, nonceAccount: Array<(
    { __typename?: 'nonce_account' }
    & Pick<Nonce_Account, 'address'>
  )>, tokenAccount: Array<(
    { __typename?: 'token_account' }
    & Pick<Token_Account, 'address'>
  )> };

export type NativeAccountTokensQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type NativeAccountTokensQuery = { tokens: Array<(
    { __typename?: 'token_account_balance' }
    & Pick<Token_Account_Balance, 'balance'>
    & { tokenAccount?: Maybe<(
      { __typename?: 'token_account' }
      & { tokenUnit?: Maybe<(
        { __typename?: 'token_unit' }
        & Pick<Token_Unit, 'mint'>
        & { unitName: Token_Unit['unit_name'] }
      )>, tokenInfo?: Maybe<(
        { __typename?: 'token' }
        & Pick<Token, 'decimals'>
      )> }
    )> }
  )> };

export type TokenDetailsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type TokenDetailsQuery = { tokenUnit: Array<(
    { __typename?: 'token_unit' }
    & Pick<Token_Unit, 'mint'>
    & { unitName: Token_Unit['unit_name'], logo: Token_Unit['logo_uri'] }
    & { tokenPrice?: Maybe<(
      { __typename?: 'token_price' }
      & Pick<Token_Price, 'price'>
      & { marketCap: Token_Price['market_cap'] }
    )> }
  )>, token: Array<(
    { __typename?: 'token' }
    & Pick<Token, 'mint' | 'decimals'>
    & { freezeAuthority: Token['freeze_authority'], mintAuthority: Token['mint_authority'] }
  )>, tokenSupply: Array<(
    { __typename?: 'token_supply' }
    & Pick<Token_Supply, 'supply'>
  )>, tokenAccountAggregate: (
    { __typename?: 'token_account_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'token_account_aggregate_fields' }
      & Pick<Token_Account_Aggregate_Fields, 'count'>
    )> }
  ) };

export type TokenDetailsHoldersQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type TokenDetailsHoldersQuery = { tokenAccountBalance: Array<(
    { __typename?: 'token_account_balance_ordering' }
    & Pick<Token_Account_Balance_Ordering, 'address' | 'balance'>
  )>, token: Array<(
    { __typename?: 'token' }
    & Pick<Token, 'decimals'>
  )> };

export type NonceAccountDetailsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type NonceAccountDetailsQuery = { nonceAccount: Array<(
    { __typename?: 'nonce_account' }
    & Pick<Nonce_Account, 'address' | 'authority' | 'blockhash'>
    & { lamportsPerSignature: Nonce_Account['lamports_per_signature'] }
    & { nativeBalance?: Maybe<(
      { __typename?: 'account_balance' }
      & Pick<Account_Balance, 'balance'>
    )> }
  )> };

export type TokenDetailsAccountDetailsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type TokenDetailsAccountDetailsQuery = { tokenAccount: Array<(
    { __typename?: 'token_account' }
    & Pick<Token_Account, 'address' | 'mint' | 'owner'>
    & { tokenInfo?: Maybe<(
      { __typename?: 'token' }
      & Pick<Token, 'decimals'>
    )>, tokenUnit?: Maybe<(
      { __typename?: 'token_unit' }
      & { unitName: Token_Unit['unit_name'], logoUrl: Token_Unit['logo_uri'] }
    )> }
  )>, tokenAccountBalance: Array<(
    { __typename?: 'token_account_balance' }
    & Pick<Token_Account_Balance, 'balance'>
  )> };

export type StakeAccountDetailsQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type StakeAccountDetailsQuery = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot'>
  )>, stakeAccount: Array<(
    { __typename?: 'stake_account' }
    & Pick<Stake_Account, 'address' | 'staker' | 'withdrawer'>
    & { nativeBalance?: Maybe<(
      { __typename?: 'account_balance' }
      & Pick<Account_Balance, 'balance'>
    )>, stakeDelegation?: Maybe<(
      { __typename?: 'stake_delegation' }
      & Pick<Stake_Delegation, 'stake' | 'voter'>
      & { activationEpoch: Stake_Delegation['activation_epoch'], deactivationEpoch: Stake_Delegation['deactivation_epoch'] }
    )> }
  )> };

export type VoteAccountDetailsQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type VoteAccountDetailsQuery = { validator: Array<(
    { __typename?: 'validator' }
    & Pick<Validator, 'address' | 'commission' | 'voter' | 'withdrawer'>
    & { nativeBalance?: Maybe<(
      { __typename?: 'account_balance' }
      & Pick<Account_Balance, 'balance'>
    )>, validatorStatus?: Maybe<(
      { __typename?: 'validator_status' }
      & Pick<Validator_Status, 'slot' | 'active'>
      & { rootSlot: Validator_Status['root_slot'], lastVote: Validator_Status['last_vote'] }
    )>, validatorConfig?: Maybe<(
      { __typename?: 'validator_config' }
      & Pick<Validator_Config, 'details' | 'name' | 'website'>
      & { avatarUrl: Validator_Config['avatar_url'] }
    )>, validatorSkipRate?: Maybe<(
      { __typename?: 'validator_skip_rate' }
      & Pick<Validator_Skip_Rate, 'epoch' | 'skip' | 'total'>
      & { skipRate: Validator_Skip_Rate['skip_rate'] }
    )> }
  )> };

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveValidatorCountQuery = { activeTotal: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & Pick<Validator_Status_Aggregate_Fields, 'count'>
    )> }
  ), total: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & Pick<Validator_Status_Aggregate_Fields, 'count'>
    )> }
  ) };

export type BlockDetailsQueryVariables = Exact<{
  height?: Maybe<Scalars['bigint']>;
}>;


export type BlockDetailsQuery = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot' | 'hash' | 'timestamp'>
    & { numTxs: Block['num_txs'] }
    & { validator: Array<(
      { __typename?: 'validator' }
      & Pick<Validator, 'address'>
    )> }
  )>, transaction: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'slot' | 'signature' | 'success'>
    & { numInstructions: Transaction['num_instructions'] }
    & { block?: Maybe<(
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    )> }
  )> };

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockHeightListenerSubscription = { height: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot'>
  )> };

export type LatestBlockHeightQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockHeightQuery = { height: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot'>
  )> };

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageBlockTimeQuery = { averageSlotTimePerHour: Array<(
    { __typename?: 'average_slot_time_per_hour' }
    & { averageTime: Average_Slot_Time_Per_Hour['average_time'] }
  )> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
}>;


export type LatestBlockTimestampQuery = { block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'timestamp'>
  )> };

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type BlocksListenerSubscription = { blocks: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot' | 'hash' | 'timestamp'>
    & { numTxs: Block['num_txs'] }
    & { validator: Array<(
      { __typename?: 'validator' }
      & Pick<Validator, 'address'>
    )> }
  )> };

export type BlocksQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type BlocksQuery = { blocks: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot' | 'hash' | 'timestamp'>
    & { numTxs: Block['num_txs'] }
    & { validator: Array<(
      { __typename?: 'validator' }
      & Pick<Validator, 'address'>
    )> }
  )> };

export type EpochQueryVariables = Exact<{ [key: string]: never; }>;


export type EpochQuery = { averageSlotTimePerHour: Array<(
    { __typename?: 'average_slot_time_per_hour' }
    & { averageTime: Average_Slot_Time_Per_Hour['average_time'] }
  )>, block: Array<(
    { __typename?: 'block' }
    & Pick<Block, 'slot'>
  )> };

export type EpochDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type EpochDetailsQuery = { inflationRate: (
    { __typename?: 'InflationRate' }
    & Pick<InflationRate, 'validator' | 'foundation' | 'total' | 'epoch'>
  ), inflationGovernor: (
    { __typename?: 'InflationGovernor' }
    & Pick<InflationGovernor, 'initial' | 'terminal' | 'taper' | 'foundation'>
    & { foundationTerm: InflationGovernor['foundation_term'] }
  ), epochSchedule: (
    { __typename?: 'EpochSchedule' }
    & Pick<EpochSchedule, 'warmup'>
    & { slotsPerEpoch: EpochSchedule['slots_per_epoch'], leaderScheduleSlotOffset: EpochSchedule['leader_schedule_slot_offset'], firstNormalEpoch: EpochSchedule['first_normal_epoch'], firstNormalSlot: EpochSchedule['first_normal_slot'] }
  ) };

export type MarketDataQueryVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;


export type MarketDataQuery = { tokenPrice: Array<(
    { __typename?: 'token_price' }
    & Pick<Token_Price, 'price'>
    & { marketCap: Token_Price['market_cap'] }
  )>, supplyInfo: Array<(
    { __typename?: 'supply_info' }
    & Pick<Supply_Info, 'total'>
  )>, inflationRate: (
    { __typename?: 'InflationRate' }
    & Pick<InflationRate, 'total'>
  ) };

export type StakeWeightQueryVariables = Exact<{ [key: string]: never; }>;


export type StakeWeightQuery = { validatorStatusAggregate: (
    { __typename?: 'validator_status_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'validator_status_aggregate_fields' }
      & { sum?: Maybe<(
        { __typename?: 'validator_status_sum_fields' }
        & { activatedStake: Validator_Status_Sum_Fields['activated_stake'] }
      )> }
    )> }
  ), supplyInfo: Array<(
    { __typename?: 'supply_info' }
    & Pick<Supply_Info, 'total'>
  )> };

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
}>;


export type TokenPriceListenerSubscription = { tokenPrice: Array<(
    { __typename?: 'token_price' }
    & Pick<Token_Price, 'price' | 'timestamp'>
    & { marketCap: Token_Price['market_cap'], unitName: Token_Price['symbol'] }
  )> };

export type TokenPriceHistoryQueryVariables = Exact<{
  denom?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type TokenPriceHistoryQuery = { tokenPrice: Array<(
    { __typename?: 'token_price_history' }
    & Pick<Token_Price_History, 'price' | 'timestamp'>
  )> };

export type TokensQueryVariables = Exact<{ [key: string]: never; }>;


export type TokensQuery = { tokenUnit: Array<(
    { __typename?: 'token_unit' }
    & { address: Token_Unit['mint'], unitName: Token_Unit['unit_name'], logo: Token_Unit['logo_uri'] }
    & { tokenPrice?: Maybe<(
      { __typename?: 'token_price' }
      & Pick<Token_Price, 'price' | 'volume'>
      & { marketCap: Token_Price['market_cap'] }
    )> }
  )> };

export type TxByAddressQueryVariables = Exact<{
  address: Scalars['String'];
  current?: Scalars['String'];
  limit?: Scalars['Int'];
}>;


export type TxByAddressQuery = { transactionsByAddress: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'signature' | 'slot' | 'success'>
    & { numInstructions: Transaction['num_instructions'] }
    & { block?: Maybe<(
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    )> }
  )> };

export type TxByAddressCountQueryVariables = Exact<{
  address?: Maybe<Scalars['_text']>;
  endSlot?: Maybe<Scalars['bigint']>;
  startSlot?: Maybe<Scalars['bigint']>;
}>;


export type TxByAddressCountQuery = { txCount: (
    { __typename?: 'instruction_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'instruction_aggregate_fields' }
      & Pick<Instruction_Aggregate_Fields, 'count'>
    )> }
  ) };

export type TransactionDetailsQueryVariables = Exact<{
  signature?: Maybe<Scalars['String']>;
}>;


export type TransactionDetailsQuery = { transaction: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'slot' | 'success' | 'signature' | 'fee' | 'logs'>
    & { block?: Maybe<(
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    )>, instructions: Array<(
      { __typename?: 'instruction' }
      & Pick<Instruction, 'type' | 'index' | 'program' | 'value'>
      & { innerIndex: Instruction['inner_index'], rawData: Instruction['raw_data'] }
    )> }
  )> };

export type AccountWithdrawalAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountWithdrawalAddressQuery = { tokenAccount: Array<(
    { __typename?: 'token_account' }
    & { tokenUnit?: Maybe<(
      { __typename?: 'token_unit' }
      & { unitName: Token_Unit['unit_name'] }
    )>, tokenInfo?: Maybe<(
      { __typename?: 'token' }
      & Pick<Token, 'decimals'>
    )> }
  )> };

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type TransactionsListenerSubscription = { transactions: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'slot' | 'signature' | 'success'>
    & { numInstructions: Transaction['num_instructions'] }
    & { block?: Maybe<(
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    )> }
  )> };

export type TransactionsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
}>;


export type TransactionsQuery = { transactions: Array<(
    { __typename?: 'transaction' }
    & Pick<Transaction, 'slot' | 'signature' | 'success'>
    & { numInstructions: Transaction['num_instructions'] }
    & { block?: Maybe<(
      { __typename?: 'block' }
      & Pick<Block, 'timestamp'>
    )> }
  )> };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { validator: Array<(
    { __typename?: 'validator' }
    & Pick<Validator, 'address' | 'commission'>
    & { validatorStatus?: Maybe<(
      { __typename?: 'validator_status' }
      & Pick<Validator_Status, 'active' | 'slot'>
      & { activatedStake: Validator_Status['activated_stake'], lastVote: Validator_Status['last_vote'], rootSlot: Validator_Status['root_slot'] }
    )>, validatorSkipRate?: Maybe<(
      { __typename?: 'validator_skip_rate' }
      & Pick<Validator_Skip_Rate, 'skip' | 'total'>
      & { skipRate: Validator_Skip_Rate['skip_rate'] }
    )> }
  )> };

export type ValidatorAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorAddressesQuery = { validator: Array<(
    { __typename?: 'validator' }
    & Pick<Validator, 'address' | 'node'>
    & { validatorConfig?: Maybe<(
      { __typename?: 'validator_config' }
      & Pick<Validator_Config, 'name'>
      & { avatarUrl: Validator_Config['avatar_url'] }
    )> }
  )> };


export const AccountTypeDocument = gql`
    query AccountType($address: String!) {
  actionsAccountInfo: actions_account_info(address: $address) {
    parsed
    programOwner: program_owner
  }
}
    `;

/**
 * __useAccountTypeQuery__
 *
 * To run a query within a React component, call `useAccountTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountTypeQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountTypeQuery(baseOptions: Apollo.QueryHookOptions<AccountTypeQuery, AccountTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountTypeQuery, AccountTypeQueryVariables>(AccountTypeDocument, options);
      }
export function useAccountTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountTypeQuery, AccountTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountTypeQuery, AccountTypeQueryVariables>(AccountTypeDocument, options);
        }
export type AccountTypeQueryHookResult = ReturnType<typeof useAccountTypeQuery>;
export type AccountTypeLazyQueryHookResult = ReturnType<typeof useAccountTypeLazyQuery>;
export type AccountTypeQueryResult = Apollo.QueryResult<AccountTypeQuery, AccountTypeQueryVariables>;
export const NativeAccountDetailsDocument = gql`
    query NativeAccountDetails($address: String!) {
  accountBalance: account_balance(where: {address: {_eq: $address}}) {
    balance
  }
  stake: stake_account_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  nonce: nonce_account_aggregate(where: {authority: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
  validator: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    nodes {
      nativeBalance: native_balance {
        balance
      }
    }
  }
}
    `;

/**
 * __useNativeAccountDetailsQuery__
 *
 * To run a query within a React component, call `useNativeAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNativeAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNativeAccountDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNativeAccountDetailsQuery(baseOptions: Apollo.QueryHookOptions<NativeAccountDetailsQuery, NativeAccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NativeAccountDetailsQuery, NativeAccountDetailsQueryVariables>(NativeAccountDetailsDocument, options);
      }
export function useNativeAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NativeAccountDetailsQuery, NativeAccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NativeAccountDetailsQuery, NativeAccountDetailsQueryVariables>(NativeAccountDetailsDocument, options);
        }
export type NativeAccountDetailsQueryHookResult = ReturnType<typeof useNativeAccountDetailsQuery>;
export type NativeAccountDetailsLazyQueryHookResult = ReturnType<typeof useNativeAccountDetailsLazyQuery>;
export type NativeAccountDetailsQueryResult = Apollo.QueryResult<NativeAccountDetailsQuery, NativeAccountDetailsQueryVariables>;
export const NativeRelatedAccountsCountDocument = gql`
    query NativeRelatedAccountsCount($address: String) {
  stakeAccountAggregate: stake_account_aggregate(
    where: {withdrawer: {_eq: $address}}
  ) {
    aggregate {
      count
    }
  }
  validatorAggregate: validator_aggregate(where: {withdrawer: {_eq: $address}}) {
    aggregate {
      count
    }
  }
  nonceAccountAggregate: nonce_account_aggregate(
    where: {authority: {_eq: $address}}
  ) {
    aggregate {
      count
    }
  }
  tokenAccountAggregate: token_account_aggregate(where: {owner: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useNativeRelatedAccountsCountQuery__
 *
 * To run a query within a React component, call `useNativeRelatedAccountsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useNativeRelatedAccountsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNativeRelatedAccountsCountQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNativeRelatedAccountsCountQuery(baseOptions?: Apollo.QueryHookOptions<NativeRelatedAccountsCountQuery, NativeRelatedAccountsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NativeRelatedAccountsCountQuery, NativeRelatedAccountsCountQueryVariables>(NativeRelatedAccountsCountDocument, options);
      }
export function useNativeRelatedAccountsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NativeRelatedAccountsCountQuery, NativeRelatedAccountsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NativeRelatedAccountsCountQuery, NativeRelatedAccountsCountQueryVariables>(NativeRelatedAccountsCountDocument, options);
        }
export type NativeRelatedAccountsCountQueryHookResult = ReturnType<typeof useNativeRelatedAccountsCountQuery>;
export type NativeRelatedAccountsCountLazyQueryHookResult = ReturnType<typeof useNativeRelatedAccountsCountLazyQuery>;
export type NativeRelatedAccountsCountQueryResult = Apollo.QueryResult<NativeRelatedAccountsCountQuery, NativeRelatedAccountsCountQueryVariables>;
export const NativeRelatedAccountsDocument = gql`
    query NativeRelatedAccounts($address: String) {
  stakeAccount: stake_account(where: {withdrawer: {_eq: $address}}) {
    address
  }
  validator(where: {withdrawer: {_eq: $address}}) {
    address
  }
  nonceAccount: nonce_account(where: {authority: {_eq: $address}}) {
    address
  }
  tokenAccount: token_account(where: {owner: {_eq: $address}}) {
    address
  }
}
    `;

/**
 * __useNativeRelatedAccountsQuery__
 *
 * To run a query within a React component, call `useNativeRelatedAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNativeRelatedAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNativeRelatedAccountsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNativeRelatedAccountsQuery(baseOptions?: Apollo.QueryHookOptions<NativeRelatedAccountsQuery, NativeRelatedAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NativeRelatedAccountsQuery, NativeRelatedAccountsQueryVariables>(NativeRelatedAccountsDocument, options);
      }
export function useNativeRelatedAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NativeRelatedAccountsQuery, NativeRelatedAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NativeRelatedAccountsQuery, NativeRelatedAccountsQueryVariables>(NativeRelatedAccountsDocument, options);
        }
export type NativeRelatedAccountsQueryHookResult = ReturnType<typeof useNativeRelatedAccountsQuery>;
export type NativeRelatedAccountsLazyQueryHookResult = ReturnType<typeof useNativeRelatedAccountsLazyQuery>;
export type NativeRelatedAccountsQueryResult = Apollo.QueryResult<NativeRelatedAccountsQuery, NativeRelatedAccountsQueryVariables>;
export const NativeAccountTokensDocument = gql`
    query NativeAccountTokens($address: String) {
  tokens: token_account_balance(where: {token_account: {owner: {_eq: $address}}}) {
    balance
    tokenAccount: token_account {
      tokenUnit: token_unit {
        unitName: unit_name
        mint
      }
      tokenInfo: token_info {
        decimals
      }
    }
  }
}
    `;

/**
 * __useNativeAccountTokensQuery__
 *
 * To run a query within a React component, call `useNativeAccountTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useNativeAccountTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNativeAccountTokensQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNativeAccountTokensQuery(baseOptions?: Apollo.QueryHookOptions<NativeAccountTokensQuery, NativeAccountTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NativeAccountTokensQuery, NativeAccountTokensQueryVariables>(NativeAccountTokensDocument, options);
      }
export function useNativeAccountTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NativeAccountTokensQuery, NativeAccountTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NativeAccountTokensQuery, NativeAccountTokensQueryVariables>(NativeAccountTokensDocument, options);
        }
export type NativeAccountTokensQueryHookResult = ReturnType<typeof useNativeAccountTokensQuery>;
export type NativeAccountTokensLazyQueryHookResult = ReturnType<typeof useNativeAccountTokensLazyQuery>;
export type NativeAccountTokensQueryResult = Apollo.QueryResult<NativeAccountTokensQuery, NativeAccountTokensQueryVariables>;
export const TokenDetailsDocument = gql`
    query TokenDetails($address: String!) {
  tokenUnit: token_unit(where: {mint: {_eq: $address}}) {
    mint
    unitName: unit_name
    logo: logo_uri
    tokenPrice: token_price {
      marketCap: market_cap
      price
    }
  }
  token(where: {mint: {_eq: $address}}) {
    mint
    freezeAuthority: freeze_authority
    decimals
    mintAuthority: mint_authority
  }
  tokenSupply: token_supply(where: {mint: {_eq: $address}}) {
    supply
  }
  tokenAccountAggregate: token_account_aggregate(where: {mint: {_eq: $address}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTokenDetailsQuery__
 *
 * To run a query within a React component, call `useTokenDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenDetailsQuery(baseOptions: Apollo.QueryHookOptions<TokenDetailsQuery, TokenDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenDetailsQuery, TokenDetailsQueryVariables>(TokenDetailsDocument, options);
      }
export function useTokenDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenDetailsQuery, TokenDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenDetailsQuery, TokenDetailsQueryVariables>(TokenDetailsDocument, options);
        }
export type TokenDetailsQueryHookResult = ReturnType<typeof useTokenDetailsQuery>;
export type TokenDetailsLazyQueryHookResult = ReturnType<typeof useTokenDetailsLazyQuery>;
export type TokenDetailsQueryResult = Apollo.QueryResult<TokenDetailsQuery, TokenDetailsQueryVariables>;
export const TokenDetailsHoldersDocument = gql`
    query TokenDetailsHolders($address: String!) {
  tokenAccountBalance: token_account_balance_ordering(
    where: {mint: {_eq: $address}, balance: {_gt: "0"}}
    order_by: {balance: desc}
    limit: 10
  ) {
    address
    balance
  }
  token(where: {mint: {_eq: $address}}) {
    decimals
  }
}
    `;

/**
 * __useTokenDetailsHoldersQuery__
 *
 * To run a query within a React component, call `useTokenDetailsHoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenDetailsHoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenDetailsHoldersQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenDetailsHoldersQuery(baseOptions: Apollo.QueryHookOptions<TokenDetailsHoldersQuery, TokenDetailsHoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenDetailsHoldersQuery, TokenDetailsHoldersQueryVariables>(TokenDetailsHoldersDocument, options);
      }
export function useTokenDetailsHoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenDetailsHoldersQuery, TokenDetailsHoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenDetailsHoldersQuery, TokenDetailsHoldersQueryVariables>(TokenDetailsHoldersDocument, options);
        }
export type TokenDetailsHoldersQueryHookResult = ReturnType<typeof useTokenDetailsHoldersQuery>;
export type TokenDetailsHoldersLazyQueryHookResult = ReturnType<typeof useTokenDetailsHoldersLazyQuery>;
export type TokenDetailsHoldersQueryResult = Apollo.QueryResult<TokenDetailsHoldersQuery, TokenDetailsHoldersQueryVariables>;
export const NonceAccountDetailsDocument = gql`
    query NonceAccountDetails($address: String!) {
  nonceAccount: nonce_account(where: {address: {_eq: $address}}) {
    address
    authority
    lamportsPerSignature: lamports_per_signature
    blockhash
    nativeBalance: native_balance {
      balance
    }
  }
}
    `;

/**
 * __useNonceAccountDetailsQuery__
 *
 * To run a query within a React component, call `useNonceAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNonceAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNonceAccountDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useNonceAccountDetailsQuery(baseOptions: Apollo.QueryHookOptions<NonceAccountDetailsQuery, NonceAccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NonceAccountDetailsQuery, NonceAccountDetailsQueryVariables>(NonceAccountDetailsDocument, options);
      }
export function useNonceAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NonceAccountDetailsQuery, NonceAccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NonceAccountDetailsQuery, NonceAccountDetailsQueryVariables>(NonceAccountDetailsDocument, options);
        }
export type NonceAccountDetailsQueryHookResult = ReturnType<typeof useNonceAccountDetailsQuery>;
export type NonceAccountDetailsLazyQueryHookResult = ReturnType<typeof useNonceAccountDetailsLazyQuery>;
export type NonceAccountDetailsQueryResult = Apollo.QueryResult<NonceAccountDetailsQuery, NonceAccountDetailsQueryVariables>;
export const TokenDetailsAccountDetailsDocument = gql`
    query TokenDetailsAccountDetails($address: String!) {
  tokenAccount: token_account(where: {address: {_eq: $address}}) {
    address
    mint
    owner
    tokenInfo: token_info {
      decimals
    }
    tokenUnit: token_unit {
      unitName: unit_name
      logoUrl: logo_uri
    }
  }
  tokenAccountBalance: token_account_balance(where: {address: {_eq: $address}}) {
    balance
  }
}
    `;

/**
 * __useTokenDetailsAccountDetailsQuery__
 *
 * To run a query within a React component, call `useTokenDetailsAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenDetailsAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenDetailsAccountDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenDetailsAccountDetailsQuery(baseOptions: Apollo.QueryHookOptions<TokenDetailsAccountDetailsQuery, TokenDetailsAccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenDetailsAccountDetailsQuery, TokenDetailsAccountDetailsQueryVariables>(TokenDetailsAccountDetailsDocument, options);
      }
export function useTokenDetailsAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenDetailsAccountDetailsQuery, TokenDetailsAccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenDetailsAccountDetailsQuery, TokenDetailsAccountDetailsQueryVariables>(TokenDetailsAccountDetailsDocument, options);
        }
export type TokenDetailsAccountDetailsQueryHookResult = ReturnType<typeof useTokenDetailsAccountDetailsQuery>;
export type TokenDetailsAccountDetailsLazyQueryHookResult = ReturnType<typeof useTokenDetailsAccountDetailsLazyQuery>;
export type TokenDetailsAccountDetailsQueryResult = Apollo.QueryResult<TokenDetailsAccountDetailsQuery, TokenDetailsAccountDetailsQueryVariables>;
export const StakeAccountDetailsDocument = gql`
    query StakeAccountDetails($address: String) {
  block(order_by: {slot: desc}, limit: 1) {
    slot
  }
  stakeAccount: stake_account(where: {address: {_eq: $address}}) {
    address
    nativeBalance: native_balance {
      balance
    }
    staker
    withdrawer
    stakeDelegation: stake_delegation {
      stake
      activationEpoch: activation_epoch
      deactivationEpoch: deactivation_epoch
      voter
    }
  }
}
    `;

/**
 * __useStakeAccountDetailsQuery__
 *
 * To run a query within a React component, call `useStakeAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakeAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakeAccountDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useStakeAccountDetailsQuery(baseOptions?: Apollo.QueryHookOptions<StakeAccountDetailsQuery, StakeAccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StakeAccountDetailsQuery, StakeAccountDetailsQueryVariables>(StakeAccountDetailsDocument, options);
      }
export function useStakeAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StakeAccountDetailsQuery, StakeAccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StakeAccountDetailsQuery, StakeAccountDetailsQueryVariables>(StakeAccountDetailsDocument, options);
        }
export type StakeAccountDetailsQueryHookResult = ReturnType<typeof useStakeAccountDetailsQuery>;
export type StakeAccountDetailsLazyQueryHookResult = ReturnType<typeof useStakeAccountDetailsLazyQuery>;
export type StakeAccountDetailsQueryResult = Apollo.QueryResult<StakeAccountDetailsQuery, StakeAccountDetailsQueryVariables>;
export const VoteAccountDetailsDocument = gql`
    query VoteAccountDetails($address: String) {
  validator(where: {address: {_eq: $address}}) {
    address
    nativeBalance: native_balance {
      balance
    }
    commission
    voter
    withdrawer
    validatorStatus: validator_status {
      slot
      rootSlot: root_slot
      lastVote: last_vote
      active
    }
    validatorConfig: validator_config {
      details
      avatarUrl: avatar_url
      name
      website
    }
    validatorSkipRate: validator_skip_rate {
      epoch
      skip
      skipRate: skip_rate
      total
    }
  }
}
    `;

/**
 * __useVoteAccountDetailsQuery__
 *
 * To run a query within a React component, call `useVoteAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVoteAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVoteAccountDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useVoteAccountDetailsQuery(baseOptions?: Apollo.QueryHookOptions<VoteAccountDetailsQuery, VoteAccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VoteAccountDetailsQuery, VoteAccountDetailsQueryVariables>(VoteAccountDetailsDocument, options);
      }
export function useVoteAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VoteAccountDetailsQuery, VoteAccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VoteAccountDetailsQuery, VoteAccountDetailsQueryVariables>(VoteAccountDetailsDocument, options);
        }
export type VoteAccountDetailsQueryHookResult = ReturnType<typeof useVoteAccountDetailsQuery>;
export type VoteAccountDetailsLazyQueryHookResult = ReturnType<typeof useVoteAccountDetailsLazyQuery>;
export type VoteAccountDetailsQueryResult = Apollo.QueryResult<VoteAccountDetailsQuery, VoteAccountDetailsQueryVariables>;
export const ActiveValidatorCountDocument = gql`
    query ActiveValidatorCount {
  activeTotal: validator_status_aggregate(where: {active: {_eq: true}}) {
    aggregate {
      count
    }
  }
  total: validator_status_aggregate {
    aggregate {
      count
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
export function useActiveValidatorCountQuery(baseOptions?: Apollo.QueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
      }
export function useActiveValidatorCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>(ActiveValidatorCountDocument, options);
        }
export type ActiveValidatorCountQueryHookResult = ReturnType<typeof useActiveValidatorCountQuery>;
export type ActiveValidatorCountLazyQueryHookResult = ReturnType<typeof useActiveValidatorCountLazyQuery>;
export type ActiveValidatorCountQueryResult = Apollo.QueryResult<ActiveValidatorCountQuery, ActiveValidatorCountQueryVariables>;
export const BlockDetailsDocument = gql`
    query BlockDetails($height: bigint) {
  block(limit: 1, where: {slot: {_eq: $height}}) {
    slot
    hash
    timestamp
    validator {
      address
    }
    numTxs: num_txs
  }
  transaction(where: {slot: {_eq: $height}}) {
    slot
    signature
    success
    block {
      timestamp
    }
    numInstructions: num_instructions
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
 *   },
 * });
 */
export function useBlockDetailsQuery(baseOptions?: Apollo.QueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
      }
export function useBlockDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlockDetailsQuery, BlockDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlockDetailsQuery, BlockDetailsQueryVariables>(BlockDetailsDocument, options);
        }
export type BlockDetailsQueryHookResult = ReturnType<typeof useBlockDetailsQuery>;
export type BlockDetailsLazyQueryHookResult = ReturnType<typeof useBlockDetailsLazyQuery>;
export type BlockDetailsQueryResult = Apollo.QueryResult<BlockDetailsQuery, BlockDetailsQueryVariables>;
export const LatestBlockHeightListenerDocument = gql`
    subscription LatestBlockHeightListener($offset: Int = 0) {
  height: block(order_by: {slot: desc}, limit: 1, offset: $offset) {
    slot
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
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const LatestBlockHeightDocument = gql`
    query LatestBlockHeight($offset: Int = 0) {
  height: block(order_by: {slot: desc}, limit: 1, offset: $offset) {
    slot
  }
}
    `;

/**
 * __useLatestBlockHeightQuery__
 *
 * To run a query within a React component, call `useLatestBlockHeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockHeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockHeightQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockHeightQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockHeightQuery, LatestBlockHeightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockHeightQuery, LatestBlockHeightQueryVariables>(LatestBlockHeightDocument, options);
      }
export function useLatestBlockHeightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockHeightQuery, LatestBlockHeightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockHeightQuery, LatestBlockHeightQueryVariables>(LatestBlockHeightDocument, options);
        }
export type LatestBlockHeightQueryHookResult = ReturnType<typeof useLatestBlockHeightQuery>;
export type LatestBlockHeightLazyQueryHookResult = ReturnType<typeof useLatestBlockHeightLazyQuery>;
export type LatestBlockHeightQueryResult = Apollo.QueryResult<LatestBlockHeightQuery, LatestBlockHeightQueryVariables>;
export const AverageBlockTimeDocument = gql`
    query AverageBlockTime {
  averageSlotTimePerHour: average_slot_time_per_hour(
    limit: 1
    order_by: {slot: desc}
  ) {
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
export function useAverageBlockTimeQuery(baseOptions?: Apollo.QueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
      }
export function useAverageBlockTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>(AverageBlockTimeDocument, options);
        }
export type AverageBlockTimeQueryHookResult = ReturnType<typeof useAverageBlockTimeQuery>;
export type AverageBlockTimeLazyQueryHookResult = ReturnType<typeof useAverageBlockTimeLazyQuery>;
export type AverageBlockTimeQueryResult = Apollo.QueryResult<AverageBlockTimeQuery, AverageBlockTimeQueryVariables>;
export const LatestBlockTimestampDocument = gql`
    query LatestBlockTimestamp($offset: Int = 0) {
  block: block(order_by: {height: desc}, limit: 1, offset: $offset) {
    timestamp
  }
}
    `;

/**
 * __useLatestBlockTimestampQuery__
 *
 * To run a query within a React component, call `useLatestBlockTimestampQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestBlockTimestampQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestBlockTimestampQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLatestBlockTimestampQuery(baseOptions?: Apollo.QueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
      }
export function useLatestBlockTimestampLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>(LatestBlockTimestampDocument, options);
        }
export type LatestBlockTimestampQueryHookResult = ReturnType<typeof useLatestBlockTimestampQuery>;
export type LatestBlockTimestampLazyQueryHookResult = ReturnType<typeof useLatestBlockTimestampLazyQuery>;
export type LatestBlockTimestampQueryResult = Apollo.QueryResult<LatestBlockTimestampQuery, LatestBlockTimestampQueryVariables>;
export const BlocksListenerDocument = gql`
    subscription BlocksListener($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {slot: desc}) {
    slot
    hash
    timestamp
    numTxs: num_txs
    validator {
      address
    }
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
export function useBlocksListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BlocksListenerSubscription, BlocksListenerSubscriptionVariables>(BlocksListenerDocument, options);
      }
export type BlocksListenerSubscriptionHookResult = ReturnType<typeof useBlocksListenerSubscription>;
export type BlocksListenerSubscriptionResult = Apollo.SubscriptionResult<BlocksListenerSubscription>;
export const BlocksDocument = gql`
    query Blocks($limit: Int = 7, $offset: Int = 0) {
  blocks: block(limit: $limit, offset: $offset, order_by: {slot: desc}) {
    slot
    hash
    timestamp
    numTxs: num_txs
    validator {
      address
    }
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
export function useBlocksQuery(baseOptions?: Apollo.QueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
      }
export function useBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BlocksQuery, BlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BlocksQuery, BlocksQueryVariables>(BlocksDocument, options);
        }
export type BlocksQueryHookResult = ReturnType<typeof useBlocksQuery>;
export type BlocksLazyQueryHookResult = ReturnType<typeof useBlocksLazyQuery>;
export type BlocksQueryResult = Apollo.QueryResult<BlocksQuery, BlocksQueryVariables>;
export const EpochDocument = gql`
    query Epoch {
  averageSlotTimePerHour: average_slot_time_per_hour {
    averageTime: average_time
  }
  block(order_by: {slot: desc}, limit: 1) {
    slot
  }
}
    `;

/**
 * __useEpochQuery__
 *
 * To run a query within a React component, call `useEpochQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpochQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpochQuery({
 *   variables: {
 *   },
 * });
 */
export function useEpochQuery(baseOptions?: Apollo.QueryHookOptions<EpochQuery, EpochQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpochQuery, EpochQueryVariables>(EpochDocument, options);
      }
export function useEpochLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpochQuery, EpochQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpochQuery, EpochQueryVariables>(EpochDocument, options);
        }
export type EpochQueryHookResult = ReturnType<typeof useEpochQuery>;
export type EpochLazyQueryHookResult = ReturnType<typeof useEpochLazyQuery>;
export type EpochQueryResult = Apollo.QueryResult<EpochQuery, EpochQueryVariables>;
export const EpochDetailsDocument = gql`
    query EpochDetails {
  inflationRate: actions_inflation_rate {
    validator
    foundation
    total
    epoch
  }
  inflationGovernor: actions_inflation_governor {
    initial
    terminal
    taper
    foundation
    foundationTerm: foundation_term
  }
  epochSchedule: actions_epoch_schedule {
    slotsPerEpoch: slots_per_epoch
    leaderScheduleSlotOffset: leader_schedule_slot_offset
    warmup
    firstNormalEpoch: first_normal_epoch
    firstNormalSlot: first_normal_slot
  }
}
    `;

/**
 * __useEpochDetailsQuery__
 *
 * To run a query within a React component, call `useEpochDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpochDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpochDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEpochDetailsQuery(baseOptions?: Apollo.QueryHookOptions<EpochDetailsQuery, EpochDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpochDetailsQuery, EpochDetailsQueryVariables>(EpochDetailsDocument, options);
      }
export function useEpochDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpochDetailsQuery, EpochDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpochDetailsQuery, EpochDetailsQueryVariables>(EpochDetailsDocument, options);
        }
export type EpochDetailsQueryHookResult = ReturnType<typeof useEpochDetailsQuery>;
export type EpochDetailsLazyQueryHookResult = ReturnType<typeof useEpochDetailsLazyQuery>;
export type EpochDetailsQueryResult = Apollo.QueryResult<EpochDetailsQuery, EpochDetailsQueryVariables>;
export const MarketDataDocument = gql`
    query MarketData($denom: String) {
  tokenPrice: token_price(where: {symbol: {_eq: $denom}}) {
    marketCap: market_cap
    price
  }
  supplyInfo: supply_info {
    total
  }
  inflationRate: actions_inflation_rate {
    total
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
export function useMarketDataQuery(baseOptions?: Apollo.QueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
      }
export function useMarketDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarketDataQuery, MarketDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarketDataQuery, MarketDataQueryVariables>(MarketDataDocument, options);
        }
export type MarketDataQueryHookResult = ReturnType<typeof useMarketDataQuery>;
export type MarketDataLazyQueryHookResult = ReturnType<typeof useMarketDataLazyQuery>;
export type MarketDataQueryResult = Apollo.QueryResult<MarketDataQuery, MarketDataQueryVariables>;
export const StakeWeightDocument = gql`
    query StakeWeight {
  validatorStatusAggregate: validator_status_aggregate {
    aggregate {
      sum {
        activatedStake: activated_stake
      }
    }
  }
  supplyInfo: supply_info {
    total
  }
}
    `;

/**
 * __useStakeWeightQuery__
 *
 * To run a query within a React component, call `useStakeWeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useStakeWeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStakeWeightQuery({
 *   variables: {
 *   },
 * });
 */
export function useStakeWeightQuery(baseOptions?: Apollo.QueryHookOptions<StakeWeightQuery, StakeWeightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StakeWeightQuery, StakeWeightQueryVariables>(StakeWeightDocument, options);
      }
export function useStakeWeightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StakeWeightQuery, StakeWeightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StakeWeightQuery, StakeWeightQueryVariables>(StakeWeightDocument, options);
        }
export type StakeWeightQueryHookResult = ReturnType<typeof useStakeWeightQuery>;
export type StakeWeightLazyQueryHookResult = ReturnType<typeof useStakeWeightLazyQuery>;
export type StakeWeightQueryResult = Apollo.QueryResult<StakeWeightQuery, StakeWeightQueryVariables>;
export const TokenPriceListenerDocument = gql`
    subscription TokenPriceListener($denom: String) {
  tokenPrice: token_price(where: {symbol: {_eq: $denom}}) {
    price
    timestamp
    marketCap: market_cap
    unitName: symbol
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
export function useTokenPriceListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>(TokenPriceListenerDocument, options);
      }
export type TokenPriceListenerSubscriptionHookResult = ReturnType<typeof useTokenPriceListenerSubscription>;
export type TokenPriceListenerSubscriptionResult = Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TokenPriceHistoryDocument = gql`
    query TokenPriceHistory($denom: String, $limit: Int = 48) {
  tokenPrice: token_price_history(
    where: {symbol: {_eq: $denom}}
    limit: $limit
    order_by: {timestamp: desc}
  ) {
    price
    timestamp
  }
}
    `;

/**
 * __useTokenPriceHistoryQuery__
 *
 * To run a query within a React component, call `useTokenPriceHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceHistoryQuery({
 *   variables: {
 *      denom: // value for 'denom'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTokenPriceHistoryQuery(baseOptions?: Apollo.QueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
      }
export function useTokenPriceHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>(TokenPriceHistoryDocument, options);
        }
export type TokenPriceHistoryQueryHookResult = ReturnType<typeof useTokenPriceHistoryQuery>;
export type TokenPriceHistoryLazyQueryHookResult = ReturnType<typeof useTokenPriceHistoryLazyQuery>;
export type TokenPriceHistoryQueryResult = Apollo.QueryResult<TokenPriceHistoryQuery, TokenPriceHistoryQueryVariables>;
export const TokensDocument = gql`
    query Tokens {
  tokenUnit: token_unit(order_by: {unit_name: asc}) {
    address: mint
    unitName: unit_name
    logo: logo_uri
    tokenPrice: token_price {
      marketCap: market_cap
      price
      volume
    }
  }
}
    `;

/**
 * __useTokensQuery__
 *
 * To run a query within a React component, call `useTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokensQuery(baseOptions?: Apollo.QueryHookOptions<TokensQuery, TokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokensQuery, TokensQueryVariables>(TokensDocument, options);
      }
export function useTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokensQuery, TokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokensQuery, TokensQueryVariables>(TokensDocument, options);
        }
export type TokensQueryHookResult = ReturnType<typeof useTokensQuery>;
export type TokensLazyQueryHookResult = ReturnType<typeof useTokensLazyQuery>;
export type TokensQueryResult = Apollo.QueryResult<TokensQuery, TokensQueryVariables>;
export const TxByAddressDocument = gql`
    query TxByAddress($address: String!, $current: String! = "", $limit: Int! = 50) {
  transactionsByAddress: transactions_by_address_2(
    args: {target: $address, current: $current, limit: $limit}
    order_by: {slot: desc, index: desc}
  ) {
    signature
    slot
    success
    numInstructions: num_instructions
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useTxByAddressQuery__
 *
 * To run a query within a React component, call `useTxByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      current: // value for 'current'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useTxByAddressQuery(baseOptions: Apollo.QueryHookOptions<TxByAddressQuery, TxByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TxByAddressQuery, TxByAddressQueryVariables>(TxByAddressDocument, options);
      }
export function useTxByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TxByAddressQuery, TxByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TxByAddressQuery, TxByAddressQueryVariables>(TxByAddressDocument, options);
        }
export type TxByAddressQueryHookResult = ReturnType<typeof useTxByAddressQuery>;
export type TxByAddressLazyQueryHookResult = ReturnType<typeof useTxByAddressLazyQuery>;
export type TxByAddressQueryResult = Apollo.QueryResult<TxByAddressQuery, TxByAddressQueryVariables>;
export const TxByAddressCountDocument = gql`
    query TxByAddressCount($address: _text, $endSlot: bigint, $startSlot: bigint) {
  txCount: instructions_by_address_aggregate(
    args: {addresses: $address, programs: "{}", end_slot: $endSlot, start_slot: $startSlot}
    distinct_on: tx_signature
  ) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTxByAddressCountQuery__
 *
 * To run a query within a React component, call `useTxByAddressCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTxByAddressCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTxByAddressCountQuery({
 *   variables: {
 *      address: // value for 'address'
 *      endSlot: // value for 'endSlot'
 *      startSlot: // value for 'startSlot'
 *   },
 * });
 */
export function useTxByAddressCountQuery(baseOptions?: Apollo.QueryHookOptions<TxByAddressCountQuery, TxByAddressCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TxByAddressCountQuery, TxByAddressCountQueryVariables>(TxByAddressCountDocument, options);
      }
export function useTxByAddressCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TxByAddressCountQuery, TxByAddressCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TxByAddressCountQuery, TxByAddressCountQueryVariables>(TxByAddressCountDocument, options);
        }
export type TxByAddressCountQueryHookResult = ReturnType<typeof useTxByAddressCountQuery>;
export type TxByAddressCountLazyQueryHookResult = ReturnType<typeof useTxByAddressCountLazyQuery>;
export type TxByAddressCountQueryResult = Apollo.QueryResult<TxByAddressCountQuery, TxByAddressCountQueryVariables>;
export const TransactionDetailsDocument = gql`
    query TransactionDetails($signature: String) {
  transaction(where: {signature: {_eq: $signature}}, limit: 1) {
    slot
    success
    signature
    fee
    logs
    block {
      timestamp
    }
    instructions(order_by: {index: asc}) {
      type
      index
      innerIndex: inner_index
      program
      value
      rawData: raw_data
    }
  }
}
    `;

/**
 * __useTransactionDetailsQuery__
 *
 * To run a query within a React component, call `useTransactionDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionDetailsQuery({
 *   variables: {
 *      signature: // value for 'signature'
 *   },
 * });
 */
export function useTransactionDetailsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
      }
export function useTransactionDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionDetailsQuery, TransactionDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionDetailsQuery, TransactionDetailsQueryVariables>(TransactionDetailsDocument, options);
        }
export type TransactionDetailsQueryHookResult = ReturnType<typeof useTransactionDetailsQuery>;
export type TransactionDetailsLazyQueryHookResult = ReturnType<typeof useTransactionDetailsLazyQuery>;
export type TransactionDetailsQueryResult = Apollo.QueryResult<TransactionDetailsQuery, TransactionDetailsQueryVariables>;
export const AccountWithdrawalAddressDocument = gql`
    query AccountWithdrawalAddress($address: String!) {
  tokenAccount: token_account(where: {address: {_eq: $address}}) {
    tokenUnit: token_unit {
      unitName: unit_name
    }
    tokenInfo: token_info {
      decimals
    }
  }
}
    `;

/**
 * __useAccountWithdrawalAddressQuery__
 *
 * To run a query within a React component, call `useAccountWithdrawalAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountWithdrawalAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountWithdrawalAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountWithdrawalAddressQuery(baseOptions: Apollo.QueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
      }
export function useAccountWithdrawalAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>(AccountWithdrawalAddressDocument, options);
        }
export type AccountWithdrawalAddressQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressQuery>;
export type AccountWithdrawalAddressLazyQueryHookResult = ReturnType<typeof useAccountWithdrawalAddressLazyQuery>;
export type AccountWithdrawalAddressQueryResult = Apollo.QueryResult<AccountWithdrawalAddressQuery, AccountWithdrawalAddressQueryVariables>;
export const TransactionsListenerDocument = gql`
    subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {slot: desc}
  ) {
    slot
    signature
    success
    block {
      timestamp
    }
    numInstructions: num_instructions
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
export function useTransactionsListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TransactionsListenerSubscription, TransactionsListenerSubscriptionVariables>(TransactionsListenerDocument, options);
      }
export type TransactionsListenerSubscriptionHookResult = ReturnType<typeof useTransactionsListenerSubscription>;
export type TransactionsListenerSubscriptionResult = Apollo.SubscriptionResult<TransactionsListenerSubscription>;
export const TransactionsDocument = gql`
    query Transactions($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {slot: desc}
  ) {
    slot
    signature
    success
    block {
      timestamp
    }
    numInstructions: num_instructions
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
export function useTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
      }
export function useTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsQuery, TransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsQuery, TransactionsQueryVariables>(TransactionsDocument, options);
        }
export type TransactionsQueryHookResult = ReturnType<typeof useTransactionsQuery>;
export type TransactionsLazyQueryHookResult = ReturnType<typeof useTransactionsLazyQuery>;
export type TransactionsQueryResult = Apollo.QueryResult<TransactionsQuery, TransactionsQueryVariables>;
export const ValidatorsDocument = gql`
    query Validators {
  validator {
    address
    commission
    validatorStatus: validator_status {
      active
      activatedStake: activated_stake
      lastVote: last_vote
      rootSlot: root_slot
      slot
    }
    validatorSkipRate: validator_skip_rate {
      skip
      skipRate: skip_rate
      total
    }
  }
}
    `;

/**
 * __useValidatorsQuery__
 *
 * To run a query within a React component, call `useValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
      }
export function useValidatorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsQuery, ValidatorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, options);
        }
export type ValidatorsQueryHookResult = ReturnType<typeof useValidatorsQuery>;
export type ValidatorsLazyQueryHookResult = ReturnType<typeof useValidatorsLazyQuery>;
export type ValidatorsQueryResult = Apollo.QueryResult<ValidatorsQuery, ValidatorsQueryVariables>;
export const ValidatorAddressesDocument = gql`
    query ValidatorAddresses {
  validator {
    address
    node
    validatorConfig: validator_config {
      name
      avatarUrl: avatar_url
    }
  }
}
    `;

/**
 * __useValidatorAddressesQuery__
 *
 * To run a query within a React component, call `useValidatorAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorAddressesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
      }
export function useValidatorAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>(ValidatorAddressesDocument, options);
        }
export type ValidatorAddressesQueryHookResult = ReturnType<typeof useValidatorAddressesQuery>;
export type ValidatorAddressesLazyQueryHookResult = ReturnType<typeof useValidatorAddressesLazyQuery>;
export type ValidatorAddressesQueryResult = Apollo.QueryResult<ValidatorAddressesQuery, ValidatorAddressesQueryVariables>;