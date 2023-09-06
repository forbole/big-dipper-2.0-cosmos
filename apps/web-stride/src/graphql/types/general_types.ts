import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ActionCoin: any;
  ActionDelegation: any;
  ActionPagination: any;
  ActionRedelegation: any;
  ActionUnbondingDelegation: any;
  _coin: any;
  _dec_coin: any;
  _text: any;
  bdjuno_provider_ActionCoin: any;
  bdjuno_provider_ActionDelegation: any;
  bdjuno_provider_ActionPagination: any;
  bdjuno_provider_ActionRedelegation: any;
  bdjuno_provider_ActionUnbondingDelegation: any;
  bdjuno_provider__coin: any;
  bdjuno_provider__dec_coin: any;
  bdjuno_provider__text: any;
  bdjuno_provider_bigint: any;
  bdjuno_provider_jsonb: any;
  bdjuno_provider_numeric: any;
  bdjuno_provider_smallint: any;
  bdjuno_provider_timestamp: any;
  bdjuno_provider_timestamptz: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamp: any;
  timestamptz: any;
};

export type ActionAddress = {
  __typename?: 'ActionAddress';
  address: Scalars['String'];
};

export type ActionBalance = {
  __typename?: 'ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

export type ActionDelegationResponse = {
  __typename?: 'ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['ActionDelegation']>>>;
  pagination?: Maybe<Scalars['ActionPagination']>;
};

export type ActionDelegationReward = {
  __typename?: 'ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
  validator_address: Scalars['String'];
};

export type ActionRedelegationResponse = {
  __typename?: 'ActionRedelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  redelegations?: Maybe<Array<Maybe<Scalars['ActionRedelegation']>>>;
};

export type ActionUnbondingDelegationResponse = {
  __typename?: 'ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['ActionPagination']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['ActionUnbondingDelegation']>>>;
};

export type ActionValidatorCommissionAmount = {
  __typename?: 'ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['ActionCoin']>>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_coin". All fields are combined with logical 'AND'. */
export type _Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_coin']>;
  _gt?: InputMaybe<Scalars['_coin']>;
  _gte?: InputMaybe<Scalars['_coin']>;
  _in?: InputMaybe<Array<Scalars['_coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_coin']>;
  _lte?: InputMaybe<Scalars['_coin']>;
  _neq?: InputMaybe<Scalars['_coin']>;
  _nin?: InputMaybe<Array<Scalars['_coin']>>;
};

/** Boolean expression to compare columns of type "_dec_coin". All fields are combined with logical 'AND'. */
export type _Dec_Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_dec_coin']>;
  _gt?: InputMaybe<Scalars['_dec_coin']>;
  _gte?: InputMaybe<Scalars['_dec_coin']>;
  _in?: InputMaybe<Array<Scalars['_dec_coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_dec_coin']>;
  _lte?: InputMaybe<Scalars['_dec_coin']>;
  _neq?: InputMaybe<Scalars['_dec_coin']>;
  _nin?: InputMaybe<Array<Scalars['_dec_coin']>>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  address: Scalars['String'];
  /** An array relationship */
  feeGrantAllowancesByGranterAddress: Array<Fee_Grant_Allowance>;
  /** An array relationship */
  fee_grant_allowances: Array<Fee_Grant_Allowance>;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An array relationship */
  proposals: Array<Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An object relationship */
  vesting_account?: Maybe<Vesting_Account>;
  /** An array relationship */
  vesting_accounts: Array<Vesting_Account>;
};


/** columns and relationships of "account" */
export type AccountFeeGrantAllowancesByGranterAddressArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountFee_Grant_AllowancesArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  feeGrantAllowancesByGranterAddress?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  fee_grant_allowances?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposals?: InputMaybe<Proposal_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
  vesting_accounts?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  address?: InputMaybe<Order_By>;
  feeGrantAllowancesByGranterAddress_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  fee_grant_allowances_aggregate?: InputMaybe<Fee_Grant_Allowance_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: InputMaybe<Vesting_Account_Aggregate_Order_By>;
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis = {
  __typename?: 'average_block_time_from_genesis';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "average_block_time_from_genesis". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_from_genesis". */
export type Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_from_genesis" */
export enum Average_Block_Time_From_Genesis_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_from_genesis" */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_From_Genesis_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "average_block_time_per_day" */
export type Average_Block_Time_Per_Day = {
  __typename?: 'average_block_time_per_day';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_day". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_day". */
export type Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_day" */
export enum Average_Block_Time_Per_Day_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_day" */
export type Average_Block_Time_Per_Day_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Day_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Day_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour = {
  __typename?: 'average_block_time_per_hour';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_hour". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_hour". */
export type Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_hour" */
export enum Average_Block_Time_Per_Hour_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_hour" */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Hour_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** columns and relationships of "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute = {
  __typename?: 'average_block_time_per_minute';
  average_time: Scalars['numeric'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "average_block_time_per_minute". All fields are combined with a logical 'AND'. */
export type Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "average_block_time_per_minute". */
export type Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "average_block_time_per_minute" */
export enum Average_Block_Time_Per_Minute_Select_Column {
  /** column name */
  AverageTime = 'average_time',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "average_block_time_per_minute" */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Average_Block_Time_Per_Minute_Stream_Cursor_Value_Input = {
  average_time?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
};

export type Bdjuno_Provider_ActionAddress = {
  __typename?: 'bdjuno_provider_ActionAddress';
  address: Scalars['String'];
};

export type Bdjuno_Provider_ActionBalance = {
  __typename?: 'bdjuno_provider_ActionBalance';
  coins?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionCoin']>>>;
};

export type Bdjuno_Provider_ActionDelegationResponse = {
  __typename?: 'bdjuno_provider_ActionDelegationResponse';
  delegations?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionDelegation']>>>;
  pagination?: Maybe<Scalars['bdjuno_provider_ActionPagination']>;
};

export type Bdjuno_Provider_ActionDelegationReward = {
  __typename?: 'bdjuno_provider_ActionDelegationReward';
  coins?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionCoin']>>>;
  validator_address: Scalars['String'];
};

export type Bdjuno_Provider_ActionRedelegationResponse = {
  __typename?: 'bdjuno_provider_ActionRedelegationResponse';
  pagination?: Maybe<Scalars['bdjuno_provider_ActionPagination']>;
  redelegations?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionRedelegation']>>>;
};

export type Bdjuno_Provider_ActionUnbondingDelegationResponse = {
  __typename?: 'bdjuno_provider_ActionUnbondingDelegationResponse';
  pagination?: Maybe<Scalars['bdjuno_provider_ActionPagination']>;
  unbonding_delegations?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionUnbondingDelegation']>>>;
};

export type Bdjuno_Provider_ActionValidatorCommissionAmount = {
  __typename?: 'bdjuno_provider_ActionValidatorCommissionAmount';
  coins?: Maybe<Array<Maybe<Scalars['bdjuno_provider_ActionCoin']>>>;
};

export type Bdjuno_Provider_Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Bdjuno_Provider_Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Bdjuno_Provider_String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _niregex?: InputMaybe<Scalars['String']>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nregex?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _regex?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider__Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider__coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider__coin']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider__coin']>>;
};

export type Bdjuno_Provider__Dec_Coin_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider__dec_coin']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider__dec_coin']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider__dec_coin']>>;
};

export type Bdjuno_Provider__Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider__text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider__text']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider__text']>>;
};

export type Bdjuno_Provider_Account = {
  __typename?: 'bdjuno_provider_account';
  address: Scalars['String'];
  feeGrantAllowancesByGranterAddress: Array<Bdjuno_Provider_Fee_Grant_Allowance>;
  feeGrantAllowancesByGranterAddress_aggregate: Bdjuno_Provider_Fee_Grant_Allowance_Aggregate;
  fee_grant_allowances: Array<Bdjuno_Provider_Fee_Grant_Allowance>;
  fee_grant_allowances_aggregate: Bdjuno_Provider_Fee_Grant_Allowance_Aggregate;
  proposal_deposits: Array<Bdjuno_Provider_Proposal_Deposit>;
  proposal_deposits_aggregate: Bdjuno_Provider_Proposal_Deposit_Aggregate;
  proposal_votes: Array<Bdjuno_Provider_Proposal_Vote>;
  proposal_votes_aggregate: Bdjuno_Provider_Proposal_Vote_Aggregate;
  proposals: Array<Bdjuno_Provider_Proposal>;
  proposals_aggregate: Bdjuno_Provider_Proposal_Aggregate;
  validator_infos: Array<Bdjuno_Provider_Validator_Info>;
  validator_infos_aggregate: Bdjuno_Provider_Validator_Info_Aggregate;
  vesting_account?: Maybe<Bdjuno_Provider_Vesting_Account>;
  vesting_accounts: Array<Bdjuno_Provider_Vesting_Account>;
  vesting_accounts_aggregate: Bdjuno_Provider_Vesting_Account_Aggregate;
};


export type Bdjuno_Provider_AccountFeeGrantAllowancesByGranterAddressArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Provider_AccountFeeGrantAllowancesByGranterAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Provider_AccountFee_Grant_AllowancesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Provider_AccountFee_Grant_Allowances_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
};


export type Bdjuno_Provider_AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
};


export type Bdjuno_Provider_AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Provider_AccountValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Provider_AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
};


export type Bdjuno_Provider_AccountVesting_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
};

export type Bdjuno_Provider_Account_Aggregate = {
  __typename?: 'bdjuno_provider_account_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Account_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Account>;
};

export type Bdjuno_Provider_Account_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_account_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Account_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Account_Min_Fields>;
};


export type Bdjuno_Provider_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Account_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Account_Bool_Exp>>;
  address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  feeGrantAllowancesByGranterAddress?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
  fee_grant_allowances?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
  proposal_deposits?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
  proposals?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  validator_infos?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
  vesting_account?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
  vesting_accounts?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
};

export type Bdjuno_Provider_Account_Max_Fields = {
  __typename?: 'bdjuno_provider_account_max_fields';
  address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Account_Min_Fields = {
  __typename?: 'bdjuno_provider_account_min_fields';
  address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Account_Order_By = {
  address?: InputMaybe<Bdjuno_Provider_Order_By>;
  feeGrantAllowancesByGranterAddress_aggregate?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_Order_By>;
  fee_grant_allowances_aggregate?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Bdjuno_Provider_Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: InputMaybe<Bdjuno_Provider_Vesting_Account_Aggregate_Order_By>;
};

export enum Bdjuno_Provider_Account_Select_Column {
  Address = 'address'
}

export type Bdjuno_Provider_Average_Block_Time_From_Genesis = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis';
  average_time: Scalars['bdjuno_provider_numeric'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Aggregate = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Average_Block_Time_From_Genesis>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Variance_Fields>;
};


export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Avg_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp>>;
  average_time?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Max_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_max_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Min_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_min_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Order_By = {
  average_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Average_Block_Time_From_Genesis_Select_Column {
  AverageTime = 'average_time',
  Height = 'height'
}

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Sum_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_sum_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_From_Genesis_Variance_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_from_genesis_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day = {
  __typename?: 'bdjuno_provider_average_block_time_per_day';
  average_time: Scalars['bdjuno_provider_numeric'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Aggregate = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Average_Block_Time_Per_Day>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Variance_Fields>;
};


export type Bdjuno_Provider_Average_Block_Time_Per_Day_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Avg_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp>>;
  average_time?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Max_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_max_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Min_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_min_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Order_By = {
  average_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Average_Block_Time_Per_Day_Select_Column {
  AverageTime = 'average_time',
  Height = 'height'
}

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Sum_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_sum_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Day_Variance_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_day_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour';
  average_time: Scalars['bdjuno_provider_numeric'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Aggregate = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Average_Block_Time_Per_Hour>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Variance_Fields>;
};


export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Avg_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp>>;
  average_time?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Max_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_max_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Min_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_min_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Order_By = {
  average_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Average_Block_Time_Per_Hour_Select_Column {
  AverageTime = 'average_time',
  Height = 'height'
}

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Sum_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_sum_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Hour_Variance_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_hour_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute';
  average_time: Scalars['bdjuno_provider_numeric'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Aggregate = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Average_Block_Time_Per_Minute>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Variance_Fields>;
};


export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Avg_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_avg_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp>>;
  average_time?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Max_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_max_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Min_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_min_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Order_By = {
  average_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Average_Block_Time_Per_Minute_Select_Column {
  AverageTime = 'average_time',
  Height = 'height'
}

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_stddev_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_stddev_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_stddev_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Sum_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_sum_fields';
  average_time?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_var_pop_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_var_samp_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Average_Block_Time_Per_Minute_Variance_Fields = {
  __typename?: 'bdjuno_provider_average_block_time_per_minute_variance_fields';
  average_time?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_bigint']>>;
};

export type Bdjuno_Provider_Block = {
  __typename?: 'bdjuno_provider_block';
  hash: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  pre_commits: Array<Bdjuno_Provider_Pre_Commit>;
  pre_commits_aggregate: Bdjuno_Provider_Pre_Commit_Aggregate;
  proposal_deposits: Array<Bdjuno_Provider_Proposal_Deposit>;
  proposal_deposits_aggregate: Bdjuno_Provider_Proposal_Deposit_Aggregate;
  proposal_votes: Array<Bdjuno_Provider_Proposal_Vote>;
  proposal_votes_aggregate: Bdjuno_Provider_Proposal_Vote_Aggregate;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['bdjuno_provider_timestamp'];
  total_gas?: Maybe<Scalars['bdjuno_provider_bigint']>;
  transactions: Array<Bdjuno_Provider_Transaction>;
  transactions_aggregate: Bdjuno_Provider_Transaction_Aggregate;
  validator?: Maybe<Bdjuno_Provider_Validator>;
  validator_voting_powers: Array<Bdjuno_Provider_Validator_Voting_Power>;
  validator_voting_powers_aggregate: Bdjuno_Provider_Validator_Voting_Power_Aggregate;
};


export type Bdjuno_Provider_BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Provider_BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Provider_BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_BlockProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_BlockProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Transaction_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
};


export type Bdjuno_Provider_BlockTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Transaction_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
};


export type Bdjuno_Provider_BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Bdjuno_Provider_BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};

export type Bdjuno_Provider_Block_Aggregate = {
  __typename?: 'bdjuno_provider_block_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Block_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Block>;
};

export type Bdjuno_Provider_Block_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_block_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Block_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Block_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Block_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Block_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Block_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Block_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Block_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Block_Variance_Fields>;
};


export type Bdjuno_Provider_Block_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Block_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Block_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Block_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Block_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Block_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Block_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Block_Variance_Order_By>;
};

export type Bdjuno_Provider_Block_Avg_Fields = {
  __typename?: 'bdjuno_provider_block_avg_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Block_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Block_Bool_Exp>>;
  hash?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
  proposal_deposits?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
  proposer_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};

export type Bdjuno_Provider_Block_Max_Fields = {
  __typename?: 'bdjuno_provider_block_max_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  total_gas?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Block_Max_Order_By = {
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Min_Fields = {
  __typename?: 'bdjuno_provider_block_min_fields';
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  total_gas?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Block_Min_Order_By = {
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Order_By = {
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  pre_commits_aggregate?: InputMaybe<Bdjuno_Provider_Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
  transactions_aggregate?: InputMaybe<Bdjuno_Provider_Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Aggregate_Order_By>;
};

export enum Bdjuno_Provider_Block_Select_Column {
  Hash = 'hash',
  Height = 'height',
  NumTxs = 'num_txs',
  ProposerAddress = 'proposer_address',
  Timestamp = 'timestamp',
  TotalGas = 'total_gas'
}

export type Bdjuno_Provider_Block_Stddev_Fields = {
  __typename?: 'bdjuno_provider_block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Sum_Fields = {
  __typename?: 'bdjuno_provider_block_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  num_txs?: Maybe<Scalars['Int']>;
  total_gas?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Block_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Block_Variance_Fields = {
  __typename?: 'bdjuno_provider_block_variance_fields';
  height?: Maybe<Scalars['Float']>;
  num_txs?: Maybe<Scalars['Float']>;
  total_gas?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Block_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  num_txs?: InputMaybe<Bdjuno_Provider_Order_By>;
  total_gas?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Community_Pool = {
  __typename?: 'bdjuno_provider_community_pool';
  coins: Scalars['bdjuno_provider__dec_coin'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Community_Pool_Aggregate = {
  __typename?: 'bdjuno_provider_community_pool_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Community_Pool_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Community_Pool>;
};

export type Bdjuno_Provider_Community_Pool_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_community_pool_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Community_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Community_Pool_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Community_Pool_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Community_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Community_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Community_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Community_Pool_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Community_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Community_Pool_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Community_Pool_Variance_Fields>;
};


export type Bdjuno_Provider_Community_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Community_Pool_Avg_Fields = {
  __typename?: 'bdjuno_provider_community_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Community_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Bool_Exp>>;
  coins?: InputMaybe<Bdjuno_Provider__Dec_Coin_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Community_Pool_Max_Fields = {
  __typename?: 'bdjuno_provider_community_pool_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Community_Pool_Min_Fields = {
  __typename?: 'bdjuno_provider_community_pool_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Community_Pool_Order_By = {
  coins?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Community_Pool_Select_Column {
  Coins = 'coins',
  Height = 'height'
}

export type Bdjuno_Provider_Community_Pool_Stddev_Fields = {
  __typename?: 'bdjuno_provider_community_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_community_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_community_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Sum_Fields = {
  __typename?: 'bdjuno_provider_community_pool_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Community_Pool_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_community_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_community_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Community_Pool_Variance_Fields = {
  __typename?: 'bdjuno_provider_community_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params = {
  __typename?: 'bdjuno_provider_distribution_params';
  height: Scalars['bdjuno_provider_bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Distribution_Params_Aggregate = {
  __typename?: 'bdjuno_provider_distribution_params_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Distribution_Params_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Distribution_Params>;
};

export type Bdjuno_Provider_Distribution_Params_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Distribution_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Distribution_Params_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Distribution_Params_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Distribution_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Distribution_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Distribution_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Distribution_Params_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Distribution_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Distribution_Params_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Distribution_Params_Variance_Fields>;
};


export type Bdjuno_Provider_Distribution_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Distribution_Params_Avg_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Distribution_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Distribution_Params_Max_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Distribution_Params_Min_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Distribution_Params_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  params?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Distribution_Params_Select_Column {
  Height = 'height',
  OneRowId = 'one_row_id',
  Params = 'params'
}

export type Bdjuno_Provider_Distribution_Params_Stddev_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Sum_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Distribution_Params_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Distribution_Params_Variance_Fields = {
  __typename?: 'bdjuno_provider_distribution_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence = {
  __typename?: 'bdjuno_provider_double_sign_evidence';
  doubleSignVoteByVoteAId: Bdjuno_Provider_Double_Sign_Vote;
  double_sign_vote: Bdjuno_Provider_Double_Sign_Vote;
  height: Scalars['bdjuno_provider_bigint'];
  vote_a_id: Scalars['bdjuno_provider_bigint'];
  vote_b_id: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Double_Sign_Evidence_Aggregate = {
  __typename?: 'bdjuno_provider_double_sign_evidence_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Double_Sign_Evidence>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Double_Sign_Evidence_Variance_Fields>;
};


export type Bdjuno_Provider_Double_Sign_Evidence_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Variance_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Avg_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_avg_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Max_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_a_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_b_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Min_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_a_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_b_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Double_Sign_Evidence_Select_Column {
  Height = 'height',
  VoteAId = 'vote_a_id',
  VoteBId = 'vote_b_id'
}

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Sum_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_a_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vote_b_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Variance_Fields = {
  __typename?: 'bdjuno_provider_double_sign_evidence_variance_fields';
  height?: Maybe<Scalars['Float']>;
  vote_a_id?: Maybe<Scalars['Float']>;
  vote_b_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_a_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  vote_b_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote = {
  __typename?: 'bdjuno_provider_double_sign_vote';
  block_id: Scalars['String'];
  doubleSignEvidencesByVoteBId: Array<Bdjuno_Provider_Double_Sign_Evidence>;
  doubleSignEvidencesByVoteBId_aggregate: Bdjuno_Provider_Double_Sign_Evidence_Aggregate;
  double_sign_evidences: Array<Bdjuno_Provider_Double_Sign_Evidence>;
  double_sign_evidences_aggregate: Bdjuno_Provider_Double_Sign_Evidence_Aggregate;
  height: Scalars['bdjuno_provider_bigint'];
  id: Scalars['Int'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['bdjuno_provider_smallint'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


export type Bdjuno_Provider_Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Bdjuno_Provider_Double_Sign_VoteDoubleSignEvidencesByVoteBId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Bdjuno_Provider_Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Bdjuno_Provider_Double_Sign_VoteDouble_Sign_Evidences_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Aggregate = {
  __typename?: 'bdjuno_provider_double_sign_vote_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Double_Sign_Vote>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Double_Sign_Vote_Variance_Fields>;
};


export type Bdjuno_Provider_Double_Sign_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Variance_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Avg_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  round?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  signature?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  type?: InputMaybe<Bdjuno_Provider_Smallint_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  validator_index?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Max_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_max_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['bdjuno_provider_smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  signature?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Min_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_min_fields';
  block_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['bdjuno_provider_smallint']>;
  validator_address?: Maybe<Scalars['String']>;
  validator_index?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  signature?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  signature?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Double_Sign_Vote_Select_Column {
  BlockId = 'block_id',
  Height = 'height',
  Id = 'id',
  Round = 'round',
  Signature = 'signature',
  Type = 'type',
  ValidatorAddress = 'validator_address',
  ValidatorIndex = 'validator_index'
}

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Sum_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['bdjuno_provider_smallint']>;
  validator_index?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Variance_Fields = {
  __typename?: 'bdjuno_provider_double_sign_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  round?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  validator_index?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  round?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_index?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance = {
  __typename?: 'bdjuno_provider_fee_grant_allowance';
  allowance: Scalars['bdjuno_provider_jsonb'];
  grantee: Bdjuno_Provider_Account;
  grantee_address: Scalars['String'];
  granter: Bdjuno_Provider_Account;
  granter_address: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  id: Scalars['Int'];
};


export type Bdjuno_Provider_Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Aggregate = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Fee_Grant_Allowance>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance_Variance_Fields>;
};


export type Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Variance_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Avg_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  grantee?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  grantee_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  granter?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  granter_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Max_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_max_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Max_Order_By = {
  grantee_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  granter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Min_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_min_fields';
  grantee_address?: Maybe<Scalars['String']>;
  granter_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Min_Order_By = {
  grantee_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  granter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Bdjuno_Provider_Order_By>;
  grantee?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  grantee_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  granter?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  granter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Fee_Grant_Allowance_Select_Column {
  Allowance = 'allowance',
  GranteeAddress = 'grantee_address',
  GranterAddress = 'granter_address',
  Height = 'height',
  Id = 'id'
}

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Sum_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Variance_Fields = {
  __typename?: 'bdjuno_provider_fee_grant_allowance_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Fee_Grant_Allowance_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Genesis = {
  __typename?: 'bdjuno_provider_genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bdjuno_provider_bigint'];
  time: Scalars['bdjuno_provider_timestamp'];
};

export type Bdjuno_Provider_Genesis_Aggregate = {
  __typename?: 'bdjuno_provider_genesis_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Genesis_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Genesis>;
};

export type Bdjuno_Provider_Genesis_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_genesis_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Genesis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Genesis_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Genesis_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Genesis_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Genesis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Genesis_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Genesis_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Genesis_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Genesis_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Genesis_Variance_Fields>;
};


export type Bdjuno_Provider_Genesis_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Genesis_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Genesis_Avg_Fields = {
  __typename?: 'bdjuno_provider_genesis_avg_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Genesis_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Genesis_Bool_Exp>>;
  chain_id?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  initial_height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
};

export type Bdjuno_Provider_Genesis_Max_Fields = {
  __typename?: 'bdjuno_provider_genesis_max_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
};

export type Bdjuno_Provider_Genesis_Min_Fields = {
  __typename?: 'bdjuno_provider_genesis_min_fields';
  chain_id?: Maybe<Scalars['String']>;
  initial_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
};

export type Bdjuno_Provider_Genesis_Order_By = {
  chain_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  initial_height?: InputMaybe<Bdjuno_Provider_Order_By>;
  time?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Genesis_Select_Column {
  ChainId = 'chain_id',
  InitialHeight = 'initial_height',
  Time = 'time'
}

export type Bdjuno_Provider_Genesis_Stddev_Fields = {
  __typename?: 'bdjuno_provider_genesis_stddev_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_genesis_stddev_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_genesis_stddev_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Sum_Fields = {
  __typename?: 'bdjuno_provider_genesis_sum_fields';
  initial_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Genesis_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_genesis_var_pop_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_genesis_var_samp_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Genesis_Variance_Fields = {
  __typename?: 'bdjuno_provider_genesis_variance_fields';
  initial_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params = {
  __typename?: 'bdjuno_provider_gov_params';
  deposit_params: Scalars['bdjuno_provider_jsonb'];
  height: Scalars['bdjuno_provider_bigint'];
  one_row_id: Scalars['Boolean'];
  tally_params: Scalars['bdjuno_provider_jsonb'];
  voting_params: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Gov_Params_Aggregate = {
  __typename?: 'bdjuno_provider_gov_params_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Gov_Params_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Gov_Params>;
};

export type Bdjuno_Provider_Gov_Params_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_gov_params_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Gov_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Gov_Params_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Gov_Params_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Gov_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Gov_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Gov_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Gov_Params_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Gov_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Gov_Params_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Gov_Params_Variance_Fields>;
};


export type Bdjuno_Provider_Gov_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Gov_Params_Avg_Fields = {
  __typename?: 'bdjuno_provider_gov_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Bool_Exp>>;
  deposit_params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  tally_params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  voting_params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Gov_Params_Max_Fields = {
  __typename?: 'bdjuno_provider_gov_params_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Gov_Params_Min_Fields = {
  __typename?: 'bdjuno_provider_gov_params_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Gov_Params_Order_By = {
  deposit_params?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  tally_params?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_params?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Gov_Params_Select_Column {
  DepositParams = 'deposit_params',
  Height = 'height',
  OneRowId = 'one_row_id',
  TallyParams = 'tally_params',
  VotingParams = 'voting_params'
}

export type Bdjuno_Provider_Gov_Params_Stddev_Fields = {
  __typename?: 'bdjuno_provider_gov_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_gov_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_gov_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Sum_Fields = {
  __typename?: 'bdjuno_provider_gov_params_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Gov_Params_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_gov_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_gov_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Gov_Params_Variance_Fields = {
  __typename?: 'bdjuno_provider_gov_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation = {
  __typename?: 'bdjuno_provider_inflation';
  height: Scalars['bdjuno_provider_bigint'];
  value: Scalars['bdjuno_provider_numeric'];
};

export type Bdjuno_Provider_Inflation_Aggregate = {
  __typename?: 'bdjuno_provider_inflation_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Inflation_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Inflation>;
};

export type Bdjuno_Provider_Inflation_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_inflation_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Inflation_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Inflation_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Inflation_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Inflation_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Inflation_Variance_Fields>;
};


export type Bdjuno_Provider_Inflation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Inflation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Inflation_Avg_Fields = {
  __typename?: 'bdjuno_provider_inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Inflation_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Inflation_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Inflation_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  value?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
};

export type Bdjuno_Provider_Inflation_Max_Fields = {
  __typename?: 'bdjuno_provider_inflation_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  value?: Maybe<Scalars['bdjuno_provider_numeric']>;
};

export type Bdjuno_Provider_Inflation_Min_Fields = {
  __typename?: 'bdjuno_provider_inflation_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  value?: Maybe<Scalars['bdjuno_provider_numeric']>;
};

export type Bdjuno_Provider_Inflation_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  value?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Inflation_Select_Column {
  Height = 'height',
  Value = 'value'
}

export type Bdjuno_Provider_Inflation_Stddev_Fields = {
  __typename?: 'bdjuno_provider_inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Sum_Fields = {
  __typename?: 'bdjuno_provider_inflation_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  value?: Maybe<Scalars['bdjuno_provider_numeric']>;
};

export type Bdjuno_Provider_Inflation_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Inflation_Variance_Fields = {
  __typename?: 'bdjuno_provider_inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Jsonb_Comparison_Exp = {
  _contained_in?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _contains?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _eq?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _has_key?: InputMaybe<Scalars['String']>;
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_jsonb']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_jsonb']>>;
};

export type Bdjuno_Provider_Message = {
  __typename?: 'bdjuno_provider_message';
  height: Scalars['bdjuno_provider_bigint'];
  index: Scalars['bdjuno_provider_bigint'];
  involved_accounts_addresses: Scalars['bdjuno_provider__text'];
  partition_id: Scalars['bdjuno_provider_bigint'];
  transaction?: Maybe<Bdjuno_Provider_Transaction>;
  transactionByPartitionIdTransactionHash?: Maybe<Bdjuno_Provider_Transaction>;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Message_Aggregate = {
  __typename?: 'bdjuno_provider_message_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Message_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Message>;
};

export type Bdjuno_Provider_Message_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_message_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Message_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Message_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Message_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Message_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Message_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Message_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Message_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Message_Variance_Fields>;
};


export type Bdjuno_Provider_Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Message_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Message_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Message_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Message_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Message_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Message_Variance_Order_By>;
};

export type Bdjuno_Provider_Message_Avg_Fields = {
  __typename?: 'bdjuno_provider_message_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Message_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Message_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  index?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<Bdjuno_Provider__Text_Comparison_Exp>;
  partition_id?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  transaction?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  type?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  value?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Message_Max_Fields = {
  __typename?: 'bdjuno_provider_message_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index?: Maybe<Scalars['bdjuno_provider_bigint']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Message_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  transaction_hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Min_Fields = {
  __typename?: 'bdjuno_provider_message_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index?: Maybe<Scalars['bdjuno_provider_bigint']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  transaction_hash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Message_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  transaction_hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  involved_accounts_addresses?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  transaction?: InputMaybe<Bdjuno_Provider_Transaction_Order_By>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Bdjuno_Provider_Transaction_Order_By>;
  transaction_hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  value?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Message_Select_Column {
  Height = 'height',
  Index = 'index',
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  PartitionId = 'partition_id',
  TransactionHash = 'transaction_hash',
  Type = 'type',
  Value = 'value'
}

export type Bdjuno_Provider_Message_Stddev_Fields = {
  __typename?: 'bdjuno_provider_message_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_message_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_message_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Sum_Fields = {
  __typename?: 'bdjuno_provider_message_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index?: Maybe<Scalars['bdjuno_provider_bigint']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Message_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_message_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_message_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Message_Variance_Fields = {
  __typename?: 'bdjuno_provider_message_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Message_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['bdjuno_provider__text']>;
  limit?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  offset?: InputMaybe<Scalars['bdjuno_provider_bigint']>;
  types?: InputMaybe<Scalars['bdjuno_provider__text']>;
};

export type Bdjuno_Provider_Mint_Params = {
  __typename?: 'bdjuno_provider_mint_params';
  height: Scalars['bdjuno_provider_bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Mint_Params_Aggregate = {
  __typename?: 'bdjuno_provider_mint_params_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Mint_Params_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Mint_Params>;
};

export type Bdjuno_Provider_Mint_Params_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_mint_params_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Mint_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Mint_Params_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Mint_Params_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Mint_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Mint_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Mint_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Mint_Params_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Mint_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Mint_Params_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Mint_Params_Variance_Fields>;
};


export type Bdjuno_Provider_Mint_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Mint_Params_Avg_Fields = {
  __typename?: 'bdjuno_provider_mint_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Mint_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Mint_Params_Max_Fields = {
  __typename?: 'bdjuno_provider_mint_params_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Mint_Params_Min_Fields = {
  __typename?: 'bdjuno_provider_mint_params_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Mint_Params_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  params?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Mint_Params_Select_Column {
  Height = 'height',
  OneRowId = 'one_row_id',
  Params = 'params'
}

export type Bdjuno_Provider_Mint_Params_Stddev_Fields = {
  __typename?: 'bdjuno_provider_mint_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_mint_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_mint_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Sum_Fields = {
  __typename?: 'bdjuno_provider_mint_params_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Mint_Params_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_mint_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_mint_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Mint_Params_Variance_Fields = {
  __typename?: 'bdjuno_provider_mint_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Modules = {
  __typename?: 'bdjuno_provider_modules';
  module_name: Scalars['String'];
};

export type Bdjuno_Provider_Modules_Aggregate = {
  __typename?: 'bdjuno_provider_modules_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Modules_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Modules>;
};

export type Bdjuno_Provider_Modules_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_modules_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Modules_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Modules_Min_Fields>;
};


export type Bdjuno_Provider_Modules_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Modules_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Modules_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Modules_Bool_Exp>>;
  module_name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Modules_Max_Fields = {
  __typename?: 'bdjuno_provider_modules_max_fields';
  module_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Modules_Min_Fields = {
  __typename?: 'bdjuno_provider_modules_min_fields';
  module_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Modules_Order_By = {
  module_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Modules_Select_Column {
  ModuleName = 'module_name'
}

export type Bdjuno_Provider_Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_numeric']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_numeric']>>;
};

export enum Bdjuno_Provider_Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Bdjuno_Provider_Pre_Commit = {
  __typename?: 'bdjuno_provider_pre_commit';
  height: Scalars['bdjuno_provider_bigint'];
  proposer_priority: Scalars['bdjuno_provider_bigint'];
  timestamp: Scalars['bdjuno_provider_timestamp'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Pre_Commit_Aggregate = {
  __typename?: 'bdjuno_provider_pre_commit_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Pre_Commit_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Pre_Commit>;
};

export type Bdjuno_Provider_Pre_Commit_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Pre_Commit_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Pre_Commit_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Pre_Commit_Variance_Fields>;
};


export type Bdjuno_Provider_Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Pre_Commit_Variance_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Avg_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  voting_power?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Pre_Commit_Max_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposer_priority?: Maybe<Scalars['bdjuno_provider_bigint']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Min_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposer_priority?: Maybe<Scalars['bdjuno_provider_bigint']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Pre_Commit_Select_Column {
  Height = 'height',
  ProposerPriority = 'proposer_priority',
  Timestamp = 'timestamp',
  ValidatorAddress = 'validator_address',
  VotingPower = 'voting_power'
}

export type Bdjuno_Provider_Pre_Commit_Stddev_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Sum_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposer_priority?: Maybe<Scalars['bdjuno_provider_bigint']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Pre_Commit_Variance_Fields = {
  __typename?: 'bdjuno_provider_pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_priority?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal = {
  __typename?: 'bdjuno_provider_proposal';
  content: Scalars['bdjuno_provider_jsonb'];
  deposit_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  proposal_deposits: Array<Bdjuno_Provider_Proposal_Deposit>;
  proposal_deposits_aggregate: Bdjuno_Provider_Proposal_Deposit_Aggregate;
  proposal_route: Scalars['String'];
  proposal_tally_result?: Maybe<Bdjuno_Provider_Proposal_Tally_Result>;
  proposal_tally_results: Array<Bdjuno_Provider_Proposal_Tally_Result>;
  proposal_tally_results_aggregate: Bdjuno_Provider_Proposal_Tally_Result_Aggregate;
  proposal_type: Scalars['String'];
  proposal_votes: Array<Bdjuno_Provider_Proposal_Vote>;
  proposal_votes_aggregate: Bdjuno_Provider_Proposal_Vote_Aggregate;
  proposer: Bdjuno_Provider_Account;
  proposer_address: Scalars['String'];
  staking_pool_snapshot?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['bdjuno_provider_timestamp'];
  title: Scalars['String'];
  validator_status_snapshots: Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
  validator_status_snapshots_aggregate: Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate;
  voting_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  voting_start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
};


export type Bdjuno_Provider_ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalProposal_Deposits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalProposal_Tally_Results_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalProposal_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Bdjuno_Provider_ProposalValidator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

export type Bdjuno_Provider_Proposal_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal>;
};

export type Bdjuno_Provider_Proposal_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Proposal_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Proposal_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Proposal_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Proposal_Variance_Order_By>;
};

export type Bdjuno_Provider_Proposal_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Avg_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Bool_Exp>>;
  content?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  description?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
  proposal_route?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal_tally_result?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
  proposal_type?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal_votes?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
  proposer?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  proposer_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  submit_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  title?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  voting_end_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Deposit = {
  __typename?: 'bdjuno_provider_proposal_deposit';
  amount?: Maybe<Scalars['bdjuno_provider__coin']>;
  block?: Maybe<Bdjuno_Provider_Block>;
  depositor?: Maybe<Bdjuno_Provider_Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height: Scalars['bdjuno_provider_bigint'];
  proposal: Bdjuno_Provider_Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_deposit_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Deposit_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal_Deposit>;
};

export type Bdjuno_Provider_Proposal_Deposit_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Deposit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Deposit_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Deposit_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Deposit_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Deposit_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Deposit_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Deposit_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Deposit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Variance_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<Bdjuno_Provider__Coin_Comparison_Exp>;
  block?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  depositor?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  depositor_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamptz_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Deposit_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_max_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_min_fields';
  depositor_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Bdjuno_Provider_Order_By>;
  block?: InputMaybe<Bdjuno_Provider_Block_Order_By>;
  depositor?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  depositor_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Deposit_Select_Column {
  Amount = 'amount',
  DepositorAddress = 'depositor_address',
  Height = 'height',
  ProposalId = 'proposal_id',
  Timestamp = 'timestamp'
}

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Deposit_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_deposit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  voting_start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
};

export type Bdjuno_Provider_Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  description?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_route?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_type?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  submit_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  title?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  voting_start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
};

export type Bdjuno_Provider_Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  description?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_route?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_type?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  submit_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  title?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Order_By = {
  content?: InputMaybe<Bdjuno_Provider_Order_By>;
  deposit_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  description?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_tally_result?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  proposer_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  staking_pool_snapshot?: InputMaybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  submit_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  title?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Select_Column {
  Content = 'content',
  DepositEndTime = 'deposit_end_time',
  Description = 'description',
  Id = 'id',
  ProposalRoute = 'proposal_route',
  ProposalType = 'proposal_type',
  ProposerAddress = 'proposer_address',
  Status = 'status',
  SubmitTime = 'submit_time',
  Title = 'title',
  VotingEndTime = 'voting_end_time',
  VotingStartTime = 'voting_start_time'
}

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  not_bonded_tokens: Scalars['String'];
  proposal: Bdjuno_Provider_Proposal;
  proposal_id: Scalars['Int'];
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  not_bonded_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Select_Column {
  BondedTokens = 'bonded_tokens',
  Height = 'height',
  NotBondedTokens = 'not_bonded_tokens',
  ProposalId = 'proposal_id'
}

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_staking_pool_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Stddev_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Sum_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result = {
  __typename?: 'bdjuno_provider_proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  proposal: Bdjuno_Provider_Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

export type Bdjuno_Provider_Proposal_Tally_Result_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_tally_result_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal_Tally_Result>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Tally_Result_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Tally_Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Variance_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  no?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  no_with_veto?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  yes?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_max_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  no?: InputMaybe<Bdjuno_Provider_Order_By>;
  no_with_veto?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  yes?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_min_fields';
  abstain?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  no?: Maybe<Scalars['String']>;
  no_with_veto?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  yes?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  no?: InputMaybe<Bdjuno_Provider_Order_By>;
  no_with_veto?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  yes?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  no?: InputMaybe<Bdjuno_Provider_Order_By>;
  no_with_veto?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  yes?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Tally_Result_Select_Column {
  Abstain = 'abstain',
  Height = 'height',
  No = 'no',
  NoWithVeto = 'no_with_veto',
  ProposalId = 'proposal_id',
  Yes = 'yes'
}

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_tally_result_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot';
  height: Scalars['bdjuno_provider_bigint'];
  id: Scalars['Int'];
  jailed: Scalars['Boolean'];
  proposal?: Maybe<Bdjuno_Provider_Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  jailed?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  status?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  voting_power?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  jailed?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column {
  Height = 'height',
  Id = 'id',
  Jailed = 'jailed',
  ProposalId = 'proposal_id',
  Status = 'status',
  ValidatorAddress = 'validator_address',
  VotingPower = 'voting_power'
}

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  id?: Maybe<Scalars['Int']>;
  proposal_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_validator_status_snapshot_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Variance_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote = {
  __typename?: 'bdjuno_provider_proposal_vote';
  account: Bdjuno_Provider_Account;
  block: Bdjuno_Provider_Block;
  height: Scalars['bdjuno_provider_bigint'];
  option: Scalars['String'];
  proposal: Bdjuno_Provider_Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
  voter_address: Scalars['String'];
};

export type Bdjuno_Provider_Proposal_Vote_Aggregate = {
  __typename?: 'bdjuno_provider_proposal_vote_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Proposal_Vote_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Proposal_Vote>;
};

export type Bdjuno_Provider_Proposal_Vote_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Proposal_Vote_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Proposal_Vote_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Proposal_Vote_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Proposal_Vote_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Proposal_Vote_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Proposal_Vote_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Proposal_Vote_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Proposal_Vote_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Proposal_Vote_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Proposal_Vote_Variance_Fields>;
};


export type Bdjuno_Provider_Proposal_Vote_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Variance_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Avg_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  block?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  option?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamptz_Comparison_Exp>;
  voter_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Proposal_Vote_Max_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
  voter_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  option?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  voter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Min_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  option?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamptz']>;
  voter_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  option?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  voter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Order_By = {
  account?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  block?: InputMaybe<Bdjuno_Provider_Block_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  option?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  voter_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Proposal_Vote_Select_Column {
  Height = 'height',
  Option = 'option',
  ProposalId = 'proposal_id',
  Timestamp = 'timestamp',
  VoterAddress = 'voter_address'
}

export type Bdjuno_Provider_Proposal_Vote_Stddev_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Sum_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Proposal_Vote_Variance_Fields = {
  __typename?: 'bdjuno_provider_proposal_vote_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Slashing_Params = {
  __typename?: 'bdjuno_provider_slashing_params';
  height: Scalars['bdjuno_provider_bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Slashing_Params_Aggregate = {
  __typename?: 'bdjuno_provider_slashing_params_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Slashing_Params_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Slashing_Params>;
};

export type Bdjuno_Provider_Slashing_Params_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Slashing_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Slashing_Params_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Slashing_Params_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Slashing_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Slashing_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Slashing_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Slashing_Params_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Slashing_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Slashing_Params_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Slashing_Params_Variance_Fields>;
};


export type Bdjuno_Provider_Slashing_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Slashing_Params_Avg_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Slashing_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Slashing_Params_Max_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Slashing_Params_Min_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Slashing_Params_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  params?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Slashing_Params_Select_Column {
  Height = 'height',
  OneRowId = 'one_row_id',
  Params = 'params'
}

export type Bdjuno_Provider_Slashing_Params_Stddev_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Sum_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Slashing_Params_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Slashing_Params_Variance_Fields = {
  __typename?: 'bdjuno_provider_slashing_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_smallint']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_smallint']>>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan = {
  __typename?: 'bdjuno_provider_software_upgrade_plan';
  height: Scalars['bdjuno_provider_bigint'];
  info: Scalars['String'];
  plan_name: Scalars['String'];
  proposal?: Maybe<Bdjuno_Provider_Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Aggregate = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Software_Upgrade_Plan>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Software_Upgrade_Plan_Variance_Fields>;
};


export type Bdjuno_Provider_Software_Upgrade_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Avg_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  info?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  plan_name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  upgrade_height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Max_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Min_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  info?: InputMaybe<Bdjuno_Provider_Order_By>;
  plan_name?: InputMaybe<Bdjuno_Provider_Order_By>;
  proposal?: InputMaybe<Bdjuno_Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  upgrade_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Software_Upgrade_Plan_Select_Column {
  Height = 'height',
  Info = 'info',
  PlanName = 'plan_name',
  ProposalId = 'proposal_id',
  UpgradeHeight = 'upgrade_height'
}

export type Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Sum_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Software_Upgrade_Plan_Variance_Fields = {
  __typename?: 'bdjuno_provider_software_upgrade_plan_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params = {
  __typename?: 'bdjuno_provider_staking_params';
  height: Scalars['bdjuno_provider_bigint'];
  one_row_id: Scalars['Boolean'];
  params: Scalars['bdjuno_provider_jsonb'];
};


export type Bdjuno_Provider_Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Staking_Params_Aggregate = {
  __typename?: 'bdjuno_provider_staking_params_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Staking_Params_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Staking_Params>;
};

export type Bdjuno_Provider_Staking_Params_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_staking_params_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Staking_Params_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Staking_Params_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Staking_Params_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Staking_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Staking_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Staking_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Staking_Params_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Staking_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Staking_Params_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Staking_Params_Variance_Fields>;
};


export type Bdjuno_Provider_Staking_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Staking_Params_Avg_Fields = {
  __typename?: 'bdjuno_provider_staking_params_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  params?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
};

export type Bdjuno_Provider_Staking_Params_Max_Fields = {
  __typename?: 'bdjuno_provider_staking_params_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Staking_Params_Min_Fields = {
  __typename?: 'bdjuno_provider_staking_params_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Staking_Params_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  one_row_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  params?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Staking_Params_Select_Column {
  Height = 'height',
  OneRowId = 'one_row_id',
  Params = 'params'
}

export type Bdjuno_Provider_Staking_Params_Stddev_Fields = {
  __typename?: 'bdjuno_provider_staking_params_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_staking_params_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_staking_params_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Sum_Fields = {
  __typename?: 'bdjuno_provider_staking_params_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Staking_Params_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_staking_params_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_staking_params_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Params_Variance_Fields = {
  __typename?: 'bdjuno_provider_staking_params_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool = {
  __typename?: 'bdjuno_provider_staking_pool';
  bonded_tokens: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  not_bonded_tokens: Scalars['String'];
  staked_not_bonded_tokens?: Maybe<Scalars['String']>;
  unbonding_tokens?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Staking_Pool_Aggregate = {
  __typename?: 'bdjuno_provider_staking_pool_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Staking_Pool_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Staking_Pool>;
};

export type Bdjuno_Provider_Staking_Pool_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Staking_Pool_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Staking_Pool_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Staking_Pool_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Staking_Pool_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Staking_Pool_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Staking_Pool_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Staking_Pool_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Staking_Pool_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Staking_Pool_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Staking_Pool_Variance_Fields>;
};


export type Bdjuno_Provider_Staking_Pool_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Staking_Pool_Avg_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  staked_not_bonded_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  unbonding_tokens?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Staking_Pool_Max_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_max_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  staked_not_bonded_tokens?: Maybe<Scalars['String']>;
  unbonding_tokens?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Staking_Pool_Min_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_min_fields';
  bonded_tokens?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  not_bonded_tokens?: Maybe<Scalars['String']>;
  staked_not_bonded_tokens?: Maybe<Scalars['String']>;
  unbonding_tokens?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  not_bonded_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
  staked_not_bonded_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
  unbonding_tokens?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Staking_Pool_Select_Column {
  BondedTokens = 'bonded_tokens',
  Height = 'height',
  NotBondedTokens = 'not_bonded_tokens',
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  UnbondingTokens = 'unbonding_tokens'
}

export type Bdjuno_Provider_Staking_Pool_Stddev_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Sum_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Staking_Pool_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Staking_Pool_Variance_Fields = {
  __typename?: 'bdjuno_provider_staking_pool_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply = {
  __typename?: 'bdjuno_provider_supply';
  coins: Scalars['bdjuno_provider__coin'];
  height: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Supply_Aggregate = {
  __typename?: 'bdjuno_provider_supply_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Supply_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Supply>;
};

export type Bdjuno_Provider_Supply_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_supply_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Supply_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Supply_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Supply_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Supply_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Supply_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Supply_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Supply_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Supply_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Supply_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Supply_Variance_Fields>;
};


export type Bdjuno_Provider_Supply_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Supply_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Supply_Avg_Fields = {
  __typename?: 'bdjuno_provider_supply_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Supply_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Supply_Bool_Exp>>;
  coins?: InputMaybe<Bdjuno_Provider__Coin_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Supply_Max_Fields = {
  __typename?: 'bdjuno_provider_supply_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Supply_Min_Fields = {
  __typename?: 'bdjuno_provider_supply_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Supply_Order_By = {
  coins?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Supply_Select_Column {
  Coins = 'coins',
  Height = 'height'
}

export type Bdjuno_Provider_Supply_Stddev_Fields = {
  __typename?: 'bdjuno_provider_supply_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_supply_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_supply_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Sum_Fields = {
  __typename?: 'bdjuno_provider_supply_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Supply_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_supply_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_supply_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Supply_Variance_Fields = {
  __typename?: 'bdjuno_provider_supply_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_timestamp']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_timestamp']>>;
};

export type Bdjuno_Provider_Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _gt?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _gte?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _in?: InputMaybe<Array<Scalars['bdjuno_provider_timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _lte?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _neq?: InputMaybe<Scalars['bdjuno_provider_timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['bdjuno_provider_timestamptz']>>;
};

export type Bdjuno_Provider_Token = {
  __typename?: 'bdjuno_provider_token';
  name: Scalars['String'];
  token_units: Array<Bdjuno_Provider_Token_Unit>;
  token_units_aggregate: Bdjuno_Provider_Token_Unit_Aggregate;
};


export type Bdjuno_Provider_TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
};


export type Bdjuno_Provider_TokenToken_Units_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
};

export type Bdjuno_Provider_Token_Aggregate = {
  __typename?: 'bdjuno_provider_token_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Token_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Token>;
};

export type Bdjuno_Provider_Token_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_token_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Token_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Token_Min_Fields>;
};


export type Bdjuno_Provider_Token_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Token_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Token_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Token_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Token_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Token_Bool_Exp>>;
  name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  token_units?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
};

export type Bdjuno_Provider_Token_Max_Fields = {
  __typename?: 'bdjuno_provider_token_max_fields';
  name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Min_Fields = {
  __typename?: 'bdjuno_provider_token_min_fields';
  name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Order_By = {
  name?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_units_aggregate?: InputMaybe<Bdjuno_Provider_Token_Unit_Aggregate_Order_By>;
};

export type Bdjuno_Provider_Token_Price = {
  __typename?: 'bdjuno_provider_token_price';
  id: Scalars['Int'];
  market_cap: Scalars['bdjuno_provider_bigint'];
  price: Scalars['bdjuno_provider_numeric'];
  timestamp: Scalars['bdjuno_provider_timestamp'];
  token_unit: Bdjuno_Provider_Token_Unit;
  unit_name: Scalars['String'];
};

export type Bdjuno_Provider_Token_Price_Aggregate = {
  __typename?: 'bdjuno_provider_token_price_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Token_Price_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Token_Price>;
};

export type Bdjuno_Provider_Token_Price_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_token_price_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Token_Price_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Token_Price_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Token_Price_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Token_Price_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Token_Price_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Token_Price_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Token_Price_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Token_Price_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Token_Price_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Token_Price_Variance_Fields>;
};


export type Bdjuno_Provider_Token_Price_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Token_Price_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Token_Price_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Token_Price_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Token_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Token_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Token_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Token_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Token_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Token_Price_Variance_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Avg_Fields = {
  __typename?: 'bdjuno_provider_token_price_avg_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Avg_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Bool_Exp>>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  market_cap?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  price?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Token_Price_History = {
  __typename?: 'bdjuno_provider_token_price_history';
  market_cap: Scalars['bdjuno_provider_bigint'];
  price: Scalars['bdjuno_provider_numeric'];
  timestamp: Scalars['bdjuno_provider_timestamp'];
  token_unit: Bdjuno_Provider_Token_Unit;
  unit_name: Scalars['String'];
};

export type Bdjuno_Provider_Token_Price_History_Aggregate = {
  __typename?: 'bdjuno_provider_token_price_history_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Token_Price_History_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Token_Price_History>;
};

export type Bdjuno_Provider_Token_Price_History_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Token_Price_History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Token_Price_History_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Token_Price_History_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Token_Price_History_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Token_Price_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Token_Price_History_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Token_Price_History_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Token_Price_History_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Token_Price_History_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Token_Price_History_Variance_Fields>;
};


export type Bdjuno_Provider_Token_Price_History_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Token_Price_History_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Token_Price_History_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Token_Price_History_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Token_Price_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Token_Price_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Token_Price_History_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Token_Price_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Token_Price_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Token_Price_History_Variance_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Avg_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_avg_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Bool_Exp>>;
  market_cap?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  price?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Token_Price_History_Max_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_max_fields';
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Min_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_min_fields';
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_unit?: InputMaybe<Bdjuno_Provider_Token_Unit_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Token_Price_History_Select_Column {
  MarketCap = 'market_cap',
  Price = 'price',
  Timestamp = 'timestamp',
  UnitName = 'unit_name'
}

export type Bdjuno_Provider_Token_Price_History_Stddev_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_stddev_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_stddev_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_stddev_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Sum_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_sum_fields';
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
};

export type Bdjuno_Provider_Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_var_pop_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_var_samp_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_History_Variance_Fields = {
  __typename?: 'bdjuno_provider_token_price_history_variance_fields';
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Max_Fields = {
  __typename?: 'bdjuno_provider_token_price_max_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Price_Max_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Min_Fields = {
  __typename?: 'bdjuno_provider_token_price_min_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
  timestamp?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  unit_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Price_Min_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
  timestamp?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_unit?: InputMaybe<Bdjuno_Provider_Token_Unit_Order_By>;
  unit_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Token_Price_Select_Column {
  Id = 'id',
  MarketCap = 'market_cap',
  Price = 'price',
  Timestamp = 'timestamp',
  UnitName = 'unit_name'
}

export type Bdjuno_Provider_Token_Price_Stddev_Fields = {
  __typename?: 'bdjuno_provider_token_price_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Stddev_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_price_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Stddev_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_price_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Stddev_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Sum_Fields = {
  __typename?: 'bdjuno_provider_token_price_sum_fields';
  id?: Maybe<Scalars['Int']>;
  market_cap?: Maybe<Scalars['bdjuno_provider_bigint']>;
  price?: Maybe<Scalars['bdjuno_provider_numeric']>;
};

export type Bdjuno_Provider_Token_Price_Sum_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_price_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Var_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_price_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Var_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Price_Variance_Fields = {
  __typename?: 'bdjuno_provider_token_price_variance_fields';
  id?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Price_Variance_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  market_cap?: InputMaybe<Bdjuno_Provider_Order_By>;
  price?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Token_Select_Column {
  Name = 'name'
}

export type Bdjuno_Provider_Token_Unit = {
  __typename?: 'bdjuno_provider_token_unit';
  aliases?: Maybe<Scalars['bdjuno_provider__text']>;
  denom: Scalars['String'];
  exponent: Scalars['Int'];
  price_id?: Maybe<Scalars['String']>;
  token: Bdjuno_Provider_Token;
  token_name: Scalars['String'];
  token_price?: Maybe<Bdjuno_Provider_Token_Price>;
  token_price_histories: Array<Bdjuno_Provider_Token_Price_History>;
  token_price_histories_aggregate: Bdjuno_Provider_Token_Price_History_Aggregate;
  token_prices: Array<Bdjuno_Provider_Token_Price>;
  token_prices_aggregate: Bdjuno_Provider_Token_Price_Aggregate;
};


export type Bdjuno_Provider_Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
};


export type Bdjuno_Provider_Token_UnitToken_Price_Histories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
};


export type Bdjuno_Provider_Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
};


export type Bdjuno_Provider_Token_UnitToken_Prices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
};

export type Bdjuno_Provider_Token_Unit_Aggregate = {
  __typename?: 'bdjuno_provider_token_unit_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Token_Unit_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Token_Unit>;
};

export type Bdjuno_Provider_Token_Unit_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_token_unit_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Token_Unit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Token_Unit_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Token_Unit_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Token_Unit_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Token_Unit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Token_Unit_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Token_Unit_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Token_Unit_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Token_Unit_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Token_Unit_Variance_Fields>;
};


export type Bdjuno_Provider_Token_Unit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Token_Unit_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Token_Unit_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Token_Unit_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Token_Unit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Token_Unit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Token_Unit_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Token_Unit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Token_Unit_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Token_Unit_Variance_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Avg_Fields = {
  __typename?: 'bdjuno_provider_token_unit_avg_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Bool_Exp>>;
  aliases?: InputMaybe<Bdjuno_Provider__Text_Comparison_Exp>;
  denom?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  exponent?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  price_id?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  token?: InputMaybe<Bdjuno_Provider_Token_Bool_Exp>;
  token_name?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  token_price?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
  token_price_histories?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
  token_prices?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
};

export type Bdjuno_Provider_Token_Unit_Max_Fields = {
  __typename?: 'bdjuno_provider_token_unit_max_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Unit_Max_Order_By = {
  denom?: InputMaybe<Bdjuno_Provider_Order_By>;
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
  price_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Min_Fields = {
  __typename?: 'bdjuno_provider_token_unit_min_fields';
  denom?: Maybe<Scalars['String']>;
  exponent?: Maybe<Scalars['Int']>;
  price_id?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Token_Unit_Min_Order_By = {
  denom?: InputMaybe<Bdjuno_Provider_Order_By>;
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
  price_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_name?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Order_By = {
  aliases?: InputMaybe<Bdjuno_Provider_Order_By>;
  denom?: InputMaybe<Bdjuno_Provider_Order_By>;
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
  price_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  token?: InputMaybe<Bdjuno_Provider_Token_Order_By>;
  token_name?: InputMaybe<Bdjuno_Provider_Order_By>;
  token_price?: InputMaybe<Bdjuno_Provider_Token_Price_Order_By>;
  token_price_histories_aggregate?: InputMaybe<Bdjuno_Provider_Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: InputMaybe<Bdjuno_Provider_Token_Price_Aggregate_Order_By>;
};

export enum Bdjuno_Provider_Token_Unit_Select_Column {
  Aliases = 'aliases',
  Denom = 'denom',
  Exponent = 'exponent',
  PriceId = 'price_id',
  TokenName = 'token_name'
}

export type Bdjuno_Provider_Token_Unit_Stddev_Fields = {
  __typename?: 'bdjuno_provider_token_unit_stddev_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_unit_stddev_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_unit_stddev_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Sum_Fields = {
  __typename?: 'bdjuno_provider_token_unit_sum_fields';
  exponent?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_token_unit_var_pop_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_token_unit_var_samp_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Token_Unit_Variance_Fields = {
  __typename?: 'bdjuno_provider_token_unit_variance_fields';
  exponent?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction = {
  __typename?: 'bdjuno_provider_transaction';
  block: Bdjuno_Provider_Block;
  fee: Scalars['bdjuno_provider_jsonb'];
  gas_used?: Maybe<Scalars['bdjuno_provider_bigint']>;
  gas_wanted?: Maybe<Scalars['bdjuno_provider_bigint']>;
  hash: Scalars['String'];
  height: Scalars['bdjuno_provider_bigint'];
  logs?: Maybe<Scalars['bdjuno_provider_jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['bdjuno_provider_jsonb'];
  messagesByTransactionHashPartitionId: Array<Bdjuno_Provider_Message>;
  messagesByTransactionHashPartitionId_aggregate: Bdjuno_Provider_Message_Aggregate;
  partition_id: Scalars['bdjuno_provider_bigint'];
  raw_log?: Maybe<Scalars['String']>;
  signatures: Scalars['bdjuno_provider__text'];
  signer_infos: Scalars['bdjuno_provider_jsonb'];
  success: Scalars['Boolean'];
};


export type Bdjuno_Provider_TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


export type Bdjuno_Provider_TransactionMessagesByTransactionHashPartitionIdArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Provider_TransactionMessagesByTransactionHashPartitionId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Provider_TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type Bdjuno_Provider_Transaction_Aggregate = {
  __typename?: 'bdjuno_provider_transaction_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Transaction_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Transaction>;
};

export type Bdjuno_Provider_Transaction_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_transaction_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Transaction_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Transaction_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Transaction_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Transaction_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Transaction_Variance_Fields>;
};


export type Bdjuno_Provider_Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Transaction_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Transaction_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Transaction_Variance_Order_By>;
};

export type Bdjuno_Provider_Transaction_Avg_Fields = {
  __typename?: 'bdjuno_provider_transaction_avg_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Transaction_Bool_Exp>>;
  block?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  fee?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  hash?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  logs?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  memo?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  messages?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  messagesByTransactionHashPartitionId?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
  partition_id?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  raw_log?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  signatures?: InputMaybe<Bdjuno_Provider__Text_Comparison_Exp>;
  signer_infos?: InputMaybe<Bdjuno_Provider_Jsonb_Comparison_Exp>;
  success?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
};

export type Bdjuno_Provider_Transaction_Max_Fields = {
  __typename?: 'bdjuno_provider_transaction_max_fields';
  gas_used?: Maybe<Scalars['bdjuno_provider_bigint']>;
  gas_wanted?: Maybe<Scalars['bdjuno_provider_bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  raw_log?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  memo?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  raw_log?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Min_Fields = {
  __typename?: 'bdjuno_provider_transaction_min_fields';
  gas_used?: Maybe<Scalars['bdjuno_provider_bigint']>;
  gas_wanted?: Maybe<Scalars['bdjuno_provider_bigint']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  memo?: Maybe<Scalars['String']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
  raw_log?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  memo?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  raw_log?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Order_By = {
  block?: InputMaybe<Bdjuno_Provider_Block_Order_By>;
  fee?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  hash?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  logs?: InputMaybe<Bdjuno_Provider_Order_By>;
  memo?: InputMaybe<Bdjuno_Provider_Order_By>;
  messages?: InputMaybe<Bdjuno_Provider_Order_By>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Bdjuno_Provider_Message_Aggregate_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
  raw_log?: InputMaybe<Bdjuno_Provider_Order_By>;
  signatures?: InputMaybe<Bdjuno_Provider_Order_By>;
  signer_infos?: InputMaybe<Bdjuno_Provider_Order_By>;
  success?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Transaction_Select_Column {
  Fee = 'fee',
  GasUsed = 'gas_used',
  GasWanted = 'gas_wanted',
  Hash = 'hash',
  Height = 'height',
  Logs = 'logs',
  Memo = 'memo',
  Messages = 'messages',
  PartitionId = 'partition_id',
  RawLog = 'raw_log',
  Signatures = 'signatures',
  SignerInfos = 'signer_infos',
  Success = 'success'
}

export type Bdjuno_Provider_Transaction_Stddev_Fields = {
  __typename?: 'bdjuno_provider_transaction_stddev_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_transaction_stddev_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_transaction_stddev_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Sum_Fields = {
  __typename?: 'bdjuno_provider_transaction_sum_fields';
  gas_used?: Maybe<Scalars['bdjuno_provider_bigint']>;
  gas_wanted?: Maybe<Scalars['bdjuno_provider_bigint']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  partition_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_transaction_var_pop_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_transaction_var_samp_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Transaction_Variance_Fields = {
  __typename?: 'bdjuno_provider_transaction_variance_fields';
  gas_used?: Maybe<Scalars['Float']>;
  gas_wanted?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  partition_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Bdjuno_Provider_Order_By>;
  gas_wanted?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  partition_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator = {
  __typename?: 'bdjuno_provider_validator';
  blocks: Array<Bdjuno_Provider_Block>;
  blocks_aggregate: Bdjuno_Provider_Block_Aggregate;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  double_sign_votes: Array<Bdjuno_Provider_Double_Sign_Vote>;
  double_sign_votes_aggregate: Bdjuno_Provider_Double_Sign_Vote_Aggregate;
  pre_commits: Array<Bdjuno_Provider_Pre_Commit>;
  pre_commits_aggregate: Bdjuno_Provider_Pre_Commit_Aggregate;
  proposal_validator_status_snapshot?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
  proposal_validator_status_snapshots: Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
  proposal_validator_status_snapshots_aggregate: Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate;
  validator_commissions: Array<Bdjuno_Provider_Validator_Commission>;
  validator_commissions_aggregate: Bdjuno_Provider_Validator_Commission_Aggregate;
  validator_descriptions: Array<Bdjuno_Provider_Validator_Description>;
  validator_descriptions_aggregate: Bdjuno_Provider_Validator_Description_Aggregate;
  validator_info?: Maybe<Bdjuno_Provider_Validator_Info>;
  validator_infos: Array<Bdjuno_Provider_Validator_Info>;
  validator_infos_aggregate: Bdjuno_Provider_Validator_Info_Aggregate;
  validator_signing_infos: Array<Bdjuno_Provider_Validator_Signing_Info>;
  validator_signing_infos_aggregate: Bdjuno_Provider_Validator_Signing_Info_Aggregate;
  validator_statuses: Array<Bdjuno_Provider_Validator_Status>;
  validator_statuses_aggregate: Bdjuno_Provider_Validator_Status_Aggregate;
  validator_voting_powers: Array<Bdjuno_Provider_Validator_Voting_Power>;
  validator_voting_powers_aggregate: Bdjuno_Provider_Validator_Voting_Power_Aggregate;
};


export type Bdjuno_Provider_ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Block_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorBlocks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Block_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorDouble_Sign_Votes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorProposal_Validator_Status_Snapshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Commissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Descriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Signing_Infos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Bdjuno_Provider_ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};

export type Bdjuno_Provider_Validator_Aggregate = {
  __typename?: 'bdjuno_provider_validator_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator>;
};

export type Bdjuno_Provider_Validator_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Min_Fields>;
};


export type Bdjuno_Provider_Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Bool_Exp>>;
  blocks?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  consensus_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
  pre_commits?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
  proposal_validator_status_snapshot?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  validator_commissions?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
  validator_descriptions?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
  validator_info?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
  validator_statuses?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};

export type Bdjuno_Provider_Validator_Commission = {
  __typename?: 'bdjuno_provider_validator_commission';
  commission: Scalars['bdjuno_provider_numeric'];
  height: Scalars['bdjuno_provider_bigint'];
  min_self_delegation: Scalars['bdjuno_provider_bigint'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
};

export type Bdjuno_Provider_Validator_Commission_Aggregate = {
  __typename?: 'bdjuno_provider_validator_commission_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Commission_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Commission>;
};

export type Bdjuno_Provider_Validator_Commission_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Validator_Commission_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Commission_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Commission_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Validator_Commission_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Validator_Commission_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Validator_Commission_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Validator_Commission_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Validator_Commission_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Validator_Commission_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Validator_Commission_Variance_Fields>;
};


export type Bdjuno_Provider_Validator_Commission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Validator_Commission_Variance_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Avg_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_avg_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Bdjuno_Provider_Numeric_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Validator_Commission_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_max_fields';
  commission?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  min_self_delegation?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_min_fields';
  commission?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  min_self_delegation?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Validator_Commission_Select_Column {
  Commission = 'commission',
  Height = 'height',
  MinSelfDelegation = 'min_self_delegation',
  ValidatorAddress = 'validator_address'
}

export type Bdjuno_Provider_Validator_Commission_Stddev_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_stddev_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_stddev_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_stddev_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Sum_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_sum_fields';
  commission?: Maybe<Scalars['bdjuno_provider_numeric']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  min_self_delegation?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_var_pop_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_var_samp_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Commission_Variance_Fields = {
  __typename?: 'bdjuno_provider_validator_commission_variance_fields';
  commission?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  min_self_delegation?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  min_self_delegation?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description = {
  __typename?: 'bdjuno_provider_validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bdjuno_provider_bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Description_Aggregate = {
  __typename?: 'bdjuno_provider_validator_description_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Description_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Description>;
};

export type Bdjuno_Provider_Validator_Description_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_description_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Validator_Description_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Description_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Description_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Validator_Description_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Validator_Description_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Validator_Description_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Validator_Description_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Validator_Description_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Validator_Description_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Validator_Description_Variance_Fields>;
};


export type Bdjuno_Provider_Validator_Description_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Description_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Validator_Description_Variance_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Avg_Fields = {
  __typename?: 'bdjuno_provider_validator_description_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  details?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  identity?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  moniker?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  security_contact?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  website?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Validator_Description_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_description_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Bdjuno_Provider_Order_By>;
  details?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  identity?: InputMaybe<Bdjuno_Provider_Order_By>;
  moniker?: InputMaybe<Bdjuno_Provider_Order_By>;
  security_contact?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  website?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_description_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  validator_address?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Bdjuno_Provider_Order_By>;
  details?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  identity?: InputMaybe<Bdjuno_Provider_Order_By>;
  moniker?: InputMaybe<Bdjuno_Provider_Order_By>;
  security_contact?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  website?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Bdjuno_Provider_Order_By>;
  details?: InputMaybe<Bdjuno_Provider_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  identity?: InputMaybe<Bdjuno_Provider_Order_By>;
  moniker?: InputMaybe<Bdjuno_Provider_Order_By>;
  security_contact?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  website?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Validator_Description_Select_Column {
  AvatarUrl = 'avatar_url',
  Details = 'details',
  Height = 'height',
  Identity = 'identity',
  Moniker = 'moniker',
  SecurityContact = 'security_contact',
  ValidatorAddress = 'validator_address',
  Website = 'website'
}

export type Bdjuno_Provider_Validator_Description_Stddev_Fields = {
  __typename?: 'bdjuno_provider_validator_description_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_description_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_description_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Sum_Fields = {
  __typename?: 'bdjuno_provider_validator_description_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_description_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_description_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Description_Variance_Fields = {
  __typename?: 'bdjuno_provider_validator_description_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Info = {
  __typename?: 'bdjuno_provider_validator_info';
  account?: Maybe<Bdjuno_Provider_Account>;
  consensus_address: Scalars['String'];
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  validator: Bdjuno_Provider_Validator;
};

export type Bdjuno_Provider_Validator_Info_Aggregate = {
  __typename?: 'bdjuno_provider_validator_info_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Info_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Info>;
};

export type Bdjuno_Provider_Validator_Info_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_info_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Info_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Info_Min_Fields>;
};


export type Bdjuno_Provider_Validator_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Info_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Info_Min_Order_By>;
};

export type Bdjuno_Provider_Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  consensus_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  max_change_rate?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  max_rate?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  operator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
};

export type Bdjuno_Provider_Validator_Info_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_info_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_change_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  operator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  self_delegate_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Info_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_info_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  max_change_rate?: Maybe<Scalars['String']>;
  max_rate?: Maybe<Scalars['String']>;
  operator_address?: Maybe<Scalars['String']>;
  self_delegate_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_change_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  operator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  self_delegate_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Info_Order_By = {
  account?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  consensus_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_change_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  max_rate?: InputMaybe<Bdjuno_Provider_Order_By>;
  operator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  self_delegate_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
};

export enum Bdjuno_Provider_Validator_Info_Select_Column {
  ConsensusAddress = 'consensus_address',
  MaxChangeRate = 'max_change_rate',
  MaxRate = 'max_rate',
  OperatorAddress = 'operator_address',
  SelfDelegateAddress = 'self_delegate_address'
}

export type Bdjuno_Provider_Validator_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_max_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_min_fields';
  consensus_address?: Maybe<Scalars['String']>;
  consensus_pubkey?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Bdjuno_Provider_Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  consensus_pubkey?: InputMaybe<Bdjuno_Provider_Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Bdjuno_Provider_Pre_Commit_Aggregate_Order_By>;
  proposal_validator_status_snapshot?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Bdjuno_Provider_Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Aggregate_Order_By>;
};

export enum Bdjuno_Provider_Validator_Select_Column {
  ConsensusAddress = 'consensus_address',
  ConsensusPubkey = 'consensus_pubkey'
}

export type Bdjuno_Provider_Validator_Signing_Info = {
  __typename?: 'bdjuno_provider_validator_signing_info';
  height: Scalars['bdjuno_provider_bigint'];
  index_offset: Scalars['bdjuno_provider_bigint'];
  jailed_until: Scalars['bdjuno_provider_timestamp'];
  missed_blocks_counter: Scalars['bdjuno_provider_bigint'];
  start_height: Scalars['bdjuno_provider_bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

export type Bdjuno_Provider_Validator_Signing_Info_Aggregate = {
  __typename?: 'bdjuno_provider_validator_signing_info_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Signing_Info>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Validator_Signing_Info_Variance_Fields>;
};


export type Bdjuno_Provider_Validator_Signing_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Variance_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Avg_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_avg_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index_offset?: Maybe<Scalars['bdjuno_provider_bigint']>;
  jailed_until?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bdjuno_provider_bigint']>;
  start_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  jailed_until?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index_offset?: Maybe<Scalars['bdjuno_provider_bigint']>;
  jailed_until?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  missed_blocks_counter?: Maybe<Scalars['bdjuno_provider_bigint']>;
  start_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  jailed_until?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  jailed_until?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
  tombstoned?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Validator_Signing_Info_Select_Column {
  Height = 'height',
  IndexOffset = 'index_offset',
  JailedUntil = 'jailed_until',
  MissedBlocksCounter = 'missed_blocks_counter',
  StartHeight = 'start_height',
  Tombstoned = 'tombstoned',
  ValidatorAddress = 'validator_address'
}

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Sum_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  index_offset?: Maybe<Scalars['bdjuno_provider_bigint']>;
  missed_blocks_counter?: Maybe<Scalars['bdjuno_provider_bigint']>;
  start_height?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Variance_Fields = {
  __typename?: 'bdjuno_provider_validator_signing_info_variance_fields';
  height?: Maybe<Scalars['Float']>;
  index_offset?: Maybe<Scalars['Float']>;
  missed_blocks_counter?: Maybe<Scalars['Float']>;
  start_height?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  index_offset?: InputMaybe<Bdjuno_Provider_Order_By>;
  missed_blocks_counter?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_height?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status = {
  __typename?: 'bdjuno_provider_validator_status';
  height: Scalars['bdjuno_provider_bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  tombstoned: Scalars['Boolean'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
};

export type Bdjuno_Provider_Validator_Status_Aggregate = {
  __typename?: 'bdjuno_provider_validator_status_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Status_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Status>;
};

export type Bdjuno_Provider_Validator_Status_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_status_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Status_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Status_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Validator_Status_Variance_Fields>;
};


export type Bdjuno_Provider_Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Status_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Validator_Status_Variance_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Avg_Fields = {
  __typename?: 'bdjuno_provider_validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  status?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  tombstoned?: InputMaybe<Bdjuno_Provider_Boolean_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
};

export type Bdjuno_Provider_Validator_Status_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_status_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Status_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_status_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Validator_Status_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  jailed?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
  tombstoned?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Validator_Status_Select_Column {
  Height = 'height',
  Jailed = 'jailed',
  Status = 'status',
  Tombstoned = 'tombstoned',
  ValidatorAddress = 'validator_address'
}

export type Bdjuno_Provider_Validator_Status_Stddev_Fields = {
  __typename?: 'bdjuno_provider_validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Sum_Fields = {
  __typename?: 'bdjuno_provider_validator_status_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  status?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Status_Variance_Fields = {
  __typename?: 'bdjuno_provider_validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  status?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power = {
  __typename?: 'bdjuno_provider_validator_voting_power';
  block: Bdjuno_Provider_Block;
  height: Scalars['bdjuno_provider_bigint'];
  validator: Bdjuno_Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Validator_Voting_Power_Aggregate = {
  __typename?: 'bdjuno_provider_validator_voting_power_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Validator_Voting_Power>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Validator_Voting_Power_Variance_Fields>;
};


export type Bdjuno_Provider_Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Variance_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Avg_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
  height?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  voting_power?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Max_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_max_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Min_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_min_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Bdjuno_Provider_Block_Order_By>;
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  validator?: InputMaybe<Bdjuno_Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Validator_Voting_Power_Select_Column {
  Height = 'height',
  ValidatorAddress = 'validator_address',
  VotingPower = 'voting_power'
}

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Sum_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bdjuno_provider_bigint']>;
  voting_power?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Variance_Fields = {
  __typename?: 'bdjuno_provider_validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Bdjuno_Provider_Order_By>;
  voting_power?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account = {
  __typename?: 'bdjuno_provider_vesting_account';
  account: Bdjuno_Provider_Account;
  address: Scalars['String'];
  end_time: Scalars['bdjuno_provider_timestamp'];
  id: Scalars['Int'];
  original_vesting: Scalars['bdjuno_provider__coin'];
  start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  type: Scalars['String'];
  vesting_periods: Array<Bdjuno_Provider_Vesting_Period>;
  vesting_periods_aggregate: Bdjuno_Provider_Vesting_Period_Aggregate;
};


export type Bdjuno_Provider_Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
};


export type Bdjuno_Provider_Vesting_AccountVesting_Periods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
};

export type Bdjuno_Provider_Vesting_Account_Aggregate = {
  __typename?: 'bdjuno_provider_vesting_account_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Vesting_Account_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Vesting_Account>;
};

export type Bdjuno_Provider_Vesting_Account_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Vesting_Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Vesting_Account_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Vesting_Account_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Vesting_Account_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Vesting_Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Vesting_Account_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Vesting_Account_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Vesting_Account_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Vesting_Account_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Vesting_Account_Variance_Fields>;
};


export type Bdjuno_Provider_Vesting_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Vesting_Account_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Vesting_Account_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Vesting_Account_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Vesting_Account_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Vesting_Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Vesting_Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Vesting_Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Vesting_Account_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Vesting_Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Vesting_Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Vesting_Account_Variance_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Avg_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Avg_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
  address?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  end_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bdjuno_Provider_Int_Comparison_Exp>;
  original_vesting?: InputMaybe<Bdjuno_Provider__Coin_Comparison_Exp>;
  start_time?: InputMaybe<Bdjuno_Provider_Timestamp_Comparison_Exp>;
  type?: InputMaybe<Bdjuno_Provider_String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
};

export type Bdjuno_Provider_Vesting_Account_Max_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_max_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  type?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Bdjuno_Provider_Order_By>;
  end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Min_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_min_fields';
  address?: Maybe<Scalars['String']>;
  end_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['bdjuno_provider_timestamp']>;
  type?: Maybe<Scalars['String']>;
};

export type Bdjuno_Provider_Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Bdjuno_Provider_Order_By>;
  end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Order_By = {
  account?: InputMaybe<Bdjuno_Provider_Account_Order_By>;
  address?: InputMaybe<Bdjuno_Provider_Order_By>;
  end_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
  original_vesting?: InputMaybe<Bdjuno_Provider_Order_By>;
  start_time?: InputMaybe<Bdjuno_Provider_Order_By>;
  type?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_periods_aggregate?: InputMaybe<Bdjuno_Provider_Vesting_Period_Aggregate_Order_By>;
};

export enum Bdjuno_Provider_Vesting_Account_Select_Column {
  Address = 'address',
  EndTime = 'end_time',
  Id = 'id',
  OriginalVesting = 'original_vesting',
  StartTime = 'start_time',
  Type = 'type'
}

export type Bdjuno_Provider_Vesting_Account_Stddev_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Stddev_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Stddev_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Stddev_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Sum_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Bdjuno_Provider_Vesting_Account_Sum_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Var_Pop_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Var_Samp_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Account_Variance_Fields = {
  __typename?: 'bdjuno_provider_vesting_account_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Account_Variance_Order_By = {
  id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period = {
  __typename?: 'bdjuno_provider_vesting_period';
  amount: Scalars['bdjuno_provider__coin'];
  length: Scalars['bdjuno_provider_bigint'];
  period_order: Scalars['bdjuno_provider_bigint'];
  vesting_account: Bdjuno_Provider_Vesting_Account;
  vesting_account_id: Scalars['bdjuno_provider_bigint'];
};

export type Bdjuno_Provider_Vesting_Period_Aggregate = {
  __typename?: 'bdjuno_provider_vesting_period_aggregate';
  aggregate?: Maybe<Bdjuno_Provider_Vesting_Period_Aggregate_Fields>;
  nodes: Array<Bdjuno_Provider_Vesting_Period>;
};

export type Bdjuno_Provider_Vesting_Period_Aggregate_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_aggregate_fields';
  avg?: Maybe<Bdjuno_Provider_Vesting_Period_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bdjuno_Provider_Vesting_Period_Max_Fields>;
  min?: Maybe<Bdjuno_Provider_Vesting_Period_Min_Fields>;
  stddev?: Maybe<Bdjuno_Provider_Vesting_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Bdjuno_Provider_Vesting_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bdjuno_Provider_Vesting_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Bdjuno_Provider_Vesting_Period_Sum_Fields>;
  var_pop?: Maybe<Bdjuno_Provider_Vesting_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Bdjuno_Provider_Vesting_Period_Var_Samp_Fields>;
  variance?: Maybe<Bdjuno_Provider_Vesting_Period_Variance_Fields>;
};


export type Bdjuno_Provider_Vesting_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

export type Bdjuno_Provider_Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Bdjuno_Provider_Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Bdjuno_Provider_Order_By>;
  max?: InputMaybe<Bdjuno_Provider_Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Bdjuno_Provider_Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Bdjuno_Provider_Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bdjuno_Provider_Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bdjuno_Provider_Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bdjuno_Provider_Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Bdjuno_Provider_Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bdjuno_Provider_Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Bdjuno_Provider_Vesting_Period_Variance_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Avg_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_avg_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<Bdjuno_Provider__Coin_Comparison_Exp>;
  length?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Bigint_Comparison_Exp>;
};

export type Bdjuno_Provider_Vesting_Period_Max_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_max_fields';
  length?: Maybe<Scalars['bdjuno_provider_bigint']>;
  period_order?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vesting_account_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Min_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_min_fields';
  length?: Maybe<Scalars['bdjuno_provider_bigint']>;
  period_order?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vesting_account_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Order_By = {
  amount?: InputMaybe<Bdjuno_Provider_Order_By>;
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account?: InputMaybe<Bdjuno_Provider_Vesting_Account_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export enum Bdjuno_Provider_Vesting_Period_Select_Column {
  Amount = 'amount',
  Length = 'length',
  PeriodOrder = 'period_order',
  VestingAccountId = 'vesting_account_id'
}

export type Bdjuno_Provider_Vesting_Period_Stddev_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_stddev_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Stddev_Pop_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_stddev_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Stddev_Samp_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_stddev_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Sum_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_sum_fields';
  length?: Maybe<Scalars['bdjuno_provider_bigint']>;
  period_order?: Maybe<Scalars['bdjuno_provider_bigint']>;
  vesting_account_id?: Maybe<Scalars['bdjuno_provider_bigint']>;
};

export type Bdjuno_Provider_Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Var_Pop_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_var_pop_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Var_Samp_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_var_samp_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Provider_Vesting_Period_Variance_Fields = {
  __typename?: 'bdjuno_provider_vesting_period_variance_fields';
  length?: Maybe<Scalars['Float']>;
  period_order?: Maybe<Scalars['Float']>;
  vesting_account_id?: Maybe<Scalars['Float']>;
};

export type Bdjuno_Provider_Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Bdjuno_Provider_Order_By>;
  period_order?: InputMaybe<Bdjuno_Provider_Order_By>;
  vesting_account_id?: InputMaybe<Bdjuno_Provider_Order_By>;
};

export type Bdjuno_Providerquery_Root = {
  __typename?: 'bdjuno_providerquery_root';
  account: Array<Bdjuno_Provider_Account>;
  account_aggregate: Bdjuno_Provider_Account_Aggregate;
  account_by_pk?: Maybe<Bdjuno_Provider_Account>;
  action_account_balance?: Maybe<Bdjuno_Provider_ActionBalance>;
  action_delegation?: Maybe<Bdjuno_Provider_ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<Bdjuno_Provider_ActionDelegationReward>>>;
  action_delegation_total?: Maybe<Bdjuno_Provider_ActionBalance>;
  action_delegator_withdraw_address: Bdjuno_Provider_ActionAddress;
  action_redelegation?: Maybe<Bdjuno_Provider_ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<Bdjuno_Provider_ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<Bdjuno_Provider_ActionBalance>;
  action_validator_commission_amount?: Maybe<Bdjuno_Provider_ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<Bdjuno_Provider_ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<Bdjuno_Provider_ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<Bdjuno_Provider_ActionUnbondingDelegationResponse>;
  average_block_time_from_genesis: Array<Bdjuno_Provider_Average_Block_Time_From_Genesis>;
  average_block_time_from_genesis_aggregate: Bdjuno_Provider_Average_Block_Time_From_Genesis_Aggregate;
  average_block_time_per_day: Array<Bdjuno_Provider_Average_Block_Time_Per_Day>;
  average_block_time_per_day_aggregate: Bdjuno_Provider_Average_Block_Time_Per_Day_Aggregate;
  average_block_time_per_hour: Array<Bdjuno_Provider_Average_Block_Time_Per_Hour>;
  average_block_time_per_hour_aggregate: Bdjuno_Provider_Average_Block_Time_Per_Hour_Aggregate;
  average_block_time_per_minute: Array<Bdjuno_Provider_Average_Block_Time_Per_Minute>;
  average_block_time_per_minute_aggregate: Bdjuno_Provider_Average_Block_Time_Per_Minute_Aggregate;
  block: Array<Bdjuno_Provider_Block>;
  block_aggregate: Bdjuno_Provider_Block_Aggregate;
  block_by_pk?: Maybe<Bdjuno_Provider_Block>;
  community_pool: Array<Bdjuno_Provider_Community_Pool>;
  community_pool_aggregate: Bdjuno_Provider_Community_Pool_Aggregate;
  distribution_params: Array<Bdjuno_Provider_Distribution_Params>;
  distribution_params_aggregate: Bdjuno_Provider_Distribution_Params_Aggregate;
  distribution_params_by_pk?: Maybe<Bdjuno_Provider_Distribution_Params>;
  double_sign_evidence: Array<Bdjuno_Provider_Double_Sign_Evidence>;
  double_sign_evidence_aggregate: Bdjuno_Provider_Double_Sign_Evidence_Aggregate;
  double_sign_vote: Array<Bdjuno_Provider_Double_Sign_Vote>;
  double_sign_vote_aggregate: Bdjuno_Provider_Double_Sign_Vote_Aggregate;
  double_sign_vote_by_pk?: Maybe<Bdjuno_Provider_Double_Sign_Vote>;
  fee_grant_allowance: Array<Bdjuno_Provider_Fee_Grant_Allowance>;
  fee_grant_allowance_aggregate: Bdjuno_Provider_Fee_Grant_Allowance_Aggregate;
  fee_grant_allowance_by_pk?: Maybe<Bdjuno_Provider_Fee_Grant_Allowance>;
  genesis: Array<Bdjuno_Provider_Genesis>;
  genesis_aggregate: Bdjuno_Provider_Genesis_Aggregate;
  gov_params: Array<Bdjuno_Provider_Gov_Params>;
  gov_params_aggregate: Bdjuno_Provider_Gov_Params_Aggregate;
  gov_params_by_pk?: Maybe<Bdjuno_Provider_Gov_Params>;
  inflation: Array<Bdjuno_Provider_Inflation>;
  inflation_aggregate: Bdjuno_Provider_Inflation_Aggregate;
  message: Array<Bdjuno_Provider_Message>;
  message_aggregate: Bdjuno_Provider_Message_Aggregate;
  messages_by_address: Array<Bdjuno_Provider_Message>;
  messages_by_address_aggregate: Bdjuno_Provider_Message_Aggregate;
  mint_params: Array<Bdjuno_Provider_Mint_Params>;
  mint_params_aggregate: Bdjuno_Provider_Mint_Params_Aggregate;
  mint_params_by_pk?: Maybe<Bdjuno_Provider_Mint_Params>;
  modules: Array<Bdjuno_Provider_Modules>;
  modules_aggregate: Bdjuno_Provider_Modules_Aggregate;
  modules_by_pk?: Maybe<Bdjuno_Provider_Modules>;
  pre_commit: Array<Bdjuno_Provider_Pre_Commit>;
  pre_commit_aggregate: Bdjuno_Provider_Pre_Commit_Aggregate;
  proposal: Array<Bdjuno_Provider_Proposal>;
  proposal_aggregate: Bdjuno_Provider_Proposal_Aggregate;
  proposal_by_pk?: Maybe<Bdjuno_Provider_Proposal>;
  proposal_deposit: Array<Bdjuno_Provider_Proposal_Deposit>;
  proposal_deposit_aggregate: Bdjuno_Provider_Proposal_Deposit_Aggregate;
  proposal_staking_pool_snapshot: Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot>;
  proposal_staking_pool_snapshot_aggregate: Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Aggregate;
  proposal_staking_pool_snapshot_by_pk?: Maybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot>;
  proposal_tally_result: Array<Bdjuno_Provider_Proposal_Tally_Result>;
  proposal_tally_result_aggregate: Bdjuno_Provider_Proposal_Tally_Result_Aggregate;
  proposal_tally_result_by_pk?: Maybe<Bdjuno_Provider_Proposal_Tally_Result>;
  proposal_validator_status_snapshot: Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
  proposal_validator_status_snapshot_aggregate: Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Aggregate;
  proposal_validator_status_snapshot_by_pk?: Maybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot>;
  proposal_vote: Array<Bdjuno_Provider_Proposal_Vote>;
  proposal_vote_aggregate: Bdjuno_Provider_Proposal_Vote_Aggregate;
  slashing_params: Array<Bdjuno_Provider_Slashing_Params>;
  slashing_params_aggregate: Bdjuno_Provider_Slashing_Params_Aggregate;
  slashing_params_by_pk?: Maybe<Bdjuno_Provider_Slashing_Params>;
  software_upgrade_plan: Array<Bdjuno_Provider_Software_Upgrade_Plan>;
  software_upgrade_plan_aggregate: Bdjuno_Provider_Software_Upgrade_Plan_Aggregate;
  staking_params: Array<Bdjuno_Provider_Staking_Params>;
  staking_params_aggregate: Bdjuno_Provider_Staking_Params_Aggregate;
  staking_params_by_pk?: Maybe<Bdjuno_Provider_Staking_Params>;
  staking_pool: Array<Bdjuno_Provider_Staking_Pool>;
  staking_pool_aggregate: Bdjuno_Provider_Staking_Pool_Aggregate;
  supply: Array<Bdjuno_Provider_Supply>;
  supply_aggregate: Bdjuno_Provider_Supply_Aggregate;
  token: Array<Bdjuno_Provider_Token>;
  token_aggregate: Bdjuno_Provider_Token_Aggregate;
  token_price: Array<Bdjuno_Provider_Token_Price>;
  token_price_aggregate: Bdjuno_Provider_Token_Price_Aggregate;
  token_price_by_pk?: Maybe<Bdjuno_Provider_Token_Price>;
  token_price_history: Array<Bdjuno_Provider_Token_Price_History>;
  token_price_history_aggregate: Bdjuno_Provider_Token_Price_History_Aggregate;
  token_unit: Array<Bdjuno_Provider_Token_Unit>;
  token_unit_aggregate: Bdjuno_Provider_Token_Unit_Aggregate;
  transaction: Array<Bdjuno_Provider_Transaction>;
  transaction_aggregate: Bdjuno_Provider_Transaction_Aggregate;
  validator: Array<Bdjuno_Provider_Validator>;
  validator_aggregate: Bdjuno_Provider_Validator_Aggregate;
  validator_by_pk?: Maybe<Bdjuno_Provider_Validator>;
  validator_commission: Array<Bdjuno_Provider_Validator_Commission>;
  validator_commission_aggregate: Bdjuno_Provider_Validator_Commission_Aggregate;
  validator_commission_by_pk?: Maybe<Bdjuno_Provider_Validator_Commission>;
  validator_description: Array<Bdjuno_Provider_Validator_Description>;
  validator_description_aggregate: Bdjuno_Provider_Validator_Description_Aggregate;
  validator_description_by_pk?: Maybe<Bdjuno_Provider_Validator_Description>;
  validator_info: Array<Bdjuno_Provider_Validator_Info>;
  validator_info_aggregate: Bdjuno_Provider_Validator_Info_Aggregate;
  validator_info_by_pk?: Maybe<Bdjuno_Provider_Validator_Info>;
  validator_signing_info: Array<Bdjuno_Provider_Validator_Signing_Info>;
  validator_signing_info_aggregate: Bdjuno_Provider_Validator_Signing_Info_Aggregate;
  validator_signing_info_by_pk?: Maybe<Bdjuno_Provider_Validator_Signing_Info>;
  validator_status: Array<Bdjuno_Provider_Validator_Status>;
  validator_status_aggregate: Bdjuno_Provider_Validator_Status_Aggregate;
  validator_status_by_pk?: Maybe<Bdjuno_Provider_Validator_Status>;
  validator_voting_power: Array<Bdjuno_Provider_Validator_Voting_Power>;
  validator_voting_power_aggregate: Bdjuno_Provider_Validator_Voting_Power_Aggregate;
  validator_voting_power_by_pk?: Maybe<Bdjuno_Provider_Validator_Voting_Power>;
  vesting_account: Array<Bdjuno_Provider_Vesting_Account>;
  vesting_account_aggregate: Bdjuno_Provider_Vesting_Account_Aggregate;
  vesting_account_by_pk?: Maybe<Bdjuno_Provider_Vesting_Account>;
  vesting_period: Array<Bdjuno_Provider_Vesting_Period>;
  vesting_period_aggregate: Bdjuno_Provider_Vesting_Period_Aggregate;
};


export type Bdjuno_Providerquery_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Account_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Delegation_RewardArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootAction_RedelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_From_Genesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_Day_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_Hour_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootAverage_Block_Time_Per_Minute_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Block_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootBlock_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Block_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Block_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootBlock_By_PkArgs = {
  height: Scalars['bdjuno_provider_bigint'];
};


export type Bdjuno_Providerquery_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Community_Pool_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootCommunity_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Community_Pool_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Community_Pool_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Distribution_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDistribution_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Distribution_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Distribution_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDistribution_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Bdjuno_Providerquery_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDouble_Sign_Evidence_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDouble_Sign_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootDouble_Sign_Vote_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootFee_Grant_Allowance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Fee_Grant_Allowance_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootFee_Grant_Allowance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Genesis_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Genesis_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootGenesis_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Genesis_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Genesis_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Gov_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootGov_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Gov_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Gov_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootGov_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Bdjuno_Providerquery_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Inflation_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Inflation_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Inflation_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Inflation_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMessages_By_AddressArgs = {
  args: Bdjuno_Provider_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMessages_By_Address_AggregateArgs = {
  args: Bdjuno_Provider_Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Message_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Message_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Mint_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMint_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Mint_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Mint_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootMint_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Bdjuno_Providerquery_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Modules_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Modules_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootModules_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Modules_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Modules_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Bdjuno_Providerquery_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Pre_Commit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Deposit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Deposit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Staking_Pool_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Tally_Result_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Validator_Status_Snapshot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Validator_Status_Snapshot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootProposal_Vote_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Proposal_Vote_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Slashing_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSlashing_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Slashing_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Slashing_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSlashing_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Bdjuno_Providerquery_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Software_Upgrade_Plan_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Staking_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootStaking_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Staking_Params_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Staking_Params_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootStaking_Params_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Bdjuno_Providerquery_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Staking_Pool_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootStaking_Pool_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Staking_Pool_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Staking_Pool_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Supply_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Supply_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootSupply_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Supply_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Supply_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_Price_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_Price_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_Price_History_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Price_History_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Price_History_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootToken_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Token_Unit_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Token_Unit_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Transaction_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Transaction_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Transaction_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Commission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Commission_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Description_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Description_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Info_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Signing_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Status_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Bdjuno_Providerquery_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootVesting_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Account_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootVesting_Account_By_PkArgs = {
  id: Scalars['Int'];
};


export type Bdjuno_Providerquery_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
};


export type Bdjuno_Providerquery_RootVesting_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bdjuno_Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Bdjuno_Provider_Vesting_Period_Bool_Exp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "block" */
export type Block = {
  __typename?: 'block';
  /** An object relationship */
  ccv_validator?: Maybe<Ccv_Validator>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** order by aggregate values of table "block" */
export type Block_Aggregate_Order_By = {
  avg?: InputMaybe<Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_Max_Order_By>;
  min?: InputMaybe<Block_Min_Order_By>;
  stddev?: InputMaybe<Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Block_Sum_Order_By>;
  var_pop?: InputMaybe<Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Block_Variance_Order_By>;
};

/** order by avg() on columns of table "block" */
export type Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Block_Bool_Exp = {
  _and?: InputMaybe<Array<Block_Bool_Exp>>;
  _not?: InputMaybe<Block_Bool_Exp>;
  _or?: InputMaybe<Array<Block_Bool_Exp>>;
  ccv_validator?: InputMaybe<Ccv_Validator_Bool_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "block" */
export type Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "block" */
export type Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "block". */
export type Block_Order_By = {
  ccv_validator?: InputMaybe<Ccv_Validator_Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** order by stddev() on columns of table "block" */
export type Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "block" */
export type Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "block" */
export type Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_txs?: InputMaybe<Scalars['Int']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block" */
export type Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "block" */
export type Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "block" */
export type Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "block" */
export type Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** columns and relationships of "ccv_validator" */
export type Ccv_Validator = {
  __typename?: 'ccv_validator';
  ccv_validator?: Maybe<Provider_Validator>;
  ccv_validator_info?: Maybe<Provider_Validator_Info>;
  consumer_consensus_address: Scalars['String'];
  consumer_operator_address: Scalars['String'];
  consumer_self_delegate_address: Scalars['String'];
  height: Scalars['bigint'];
  provider_consensus_address: Scalars['String'];
  provider_operator_address: Scalars['String'];
  provider_self_delegate_address: Scalars['String'];
  /** An object relationship */
  validator?: Maybe<Validator>;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
};

/** aggregated selection of "ccv_validator" */
export type Ccv_Validator_Aggregate = {
  __typename?: 'ccv_validator_aggregate';
  aggregate?: Maybe<Ccv_Validator_Aggregate_Fields>;
  nodes: Array<Ccv_Validator>;
};

/** aggregate fields of "ccv_validator" */
export type Ccv_Validator_Aggregate_Fields = {
  __typename?: 'ccv_validator_aggregate_fields';
  avg?: Maybe<Ccv_Validator_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ccv_Validator_Max_Fields>;
  min?: Maybe<Ccv_Validator_Min_Fields>;
  stddev?: Maybe<Ccv_Validator_Stddev_Fields>;
  stddev_pop?: Maybe<Ccv_Validator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ccv_Validator_Stddev_Samp_Fields>;
  sum?: Maybe<Ccv_Validator_Sum_Fields>;
  var_pop?: Maybe<Ccv_Validator_Var_Pop_Fields>;
  var_samp?: Maybe<Ccv_Validator_Var_Samp_Fields>;
  variance?: Maybe<Ccv_Validator_Variance_Fields>;
};


/** aggregate fields of "ccv_validator" */
export type Ccv_Validator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ccv_Validator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ccv_Validator_Avg_Fields = {
  __typename?: 'ccv_validator_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ccv_validator". All fields are combined with a logical 'AND'. */
export type Ccv_Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Ccv_Validator_Bool_Exp>>;
  _not?: InputMaybe<Ccv_Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Ccv_Validator_Bool_Exp>>;
  consumer_consensus_address?: InputMaybe<String_Comparison_Exp>;
  consumer_operator_address?: InputMaybe<String_Comparison_Exp>;
  consumer_self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  provider_consensus_address?: InputMaybe<String_Comparison_Exp>;
  provider_operator_address?: InputMaybe<String_Comparison_Exp>;
  provider_self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
};

/** aggregate max on columns */
export type Ccv_Validator_Max_Fields = {
  __typename?: 'ccv_validator_max_fields';
  consumer_consensus_address?: Maybe<Scalars['String']>;
  consumer_operator_address?: Maybe<Scalars['String']>;
  consumer_self_delegate_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  provider_consensus_address?: Maybe<Scalars['String']>;
  provider_operator_address?: Maybe<Scalars['String']>;
  provider_self_delegate_address?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ccv_Validator_Min_Fields = {
  __typename?: 'ccv_validator_min_fields';
  consumer_consensus_address?: Maybe<Scalars['String']>;
  consumer_operator_address?: Maybe<Scalars['String']>;
  consumer_self_delegate_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  provider_consensus_address?: Maybe<Scalars['String']>;
  provider_operator_address?: Maybe<Scalars['String']>;
  provider_self_delegate_address?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "ccv_validator". */
export type Ccv_Validator_Order_By = {
  consumer_consensus_address?: InputMaybe<Order_By>;
  consumer_operator_address?: InputMaybe<Order_By>;
  consumer_self_delegate_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  provider_consensus_address?: InputMaybe<Order_By>;
  provider_operator_address?: InputMaybe<Order_By>;
  provider_self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
};

/** select columns of table "ccv_validator" */
export enum Ccv_Validator_Select_Column {
  /** column name */
  ConsumerConsensusAddress = 'consumer_consensus_address',
  /** column name */
  ConsumerOperatorAddress = 'consumer_operator_address',
  /** column name */
  ConsumerSelfDelegateAddress = 'consumer_self_delegate_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProviderConsensusAddress = 'provider_consensus_address',
  /** column name */
  ProviderOperatorAddress = 'provider_operator_address',
  /** column name */
  ProviderSelfDelegateAddress = 'provider_self_delegate_address'
}

/** aggregate stddev on columns */
export type Ccv_Validator_Stddev_Fields = {
  __typename?: 'ccv_validator_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ccv_Validator_Stddev_Pop_Fields = {
  __typename?: 'ccv_validator_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ccv_Validator_Stddev_Samp_Fields = {
  __typename?: 'ccv_validator_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "ccv_validator" */
export type Ccv_Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ccv_Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ccv_Validator_Stream_Cursor_Value_Input = {
  consumer_consensus_address?: InputMaybe<Scalars['String']>;
  consumer_operator_address?: InputMaybe<Scalars['String']>;
  consumer_self_delegate_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  provider_consensus_address?: InputMaybe<Scalars['String']>;
  provider_operator_address?: InputMaybe<Scalars['String']>;
  provider_self_delegate_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Ccv_Validator_Sum_Fields = {
  __typename?: 'ccv_validator_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Ccv_Validator_Var_Pop_Fields = {
  __typename?: 'ccv_validator_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ccv_Validator_Var_Samp_Fields = {
  __typename?: 'ccv_validator_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ccv_Validator_Variance_Fields = {
  __typename?: 'ccv_validator_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "community_pool" */
export type Community_Pool = {
  __typename?: 'community_pool';
  coins: Scalars['_dec_coin'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "community_pool". All fields are combined with a logical 'AND'. */
export type Community_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  _not?: InputMaybe<Community_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Community_Pool_Bool_Exp>>;
  coins?: InputMaybe<_Dec_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "community_pool". */
export type Community_Pool_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "community_pool" */
export enum Community_Pool_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "community_pool" */
export type Community_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Community_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Community_Pool_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Scalars['_dec_coin']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "distribution_params" */
export type Distribution_Params = {
  __typename?: 'distribution_params';
  height: Scalars['bigint'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "distribution_params" */
export type Distribution_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "distribution_params". All fields are combined with a logical 'AND'. */
export type Distribution_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  _not?: InputMaybe<Distribution_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Distribution_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "distribution_params". */
export type Distribution_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "distribution_params" */
export enum Distribution_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "distribution_params" */
export type Distribution_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Distribution_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Distribution_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "double_sign_evidence" */
export type Double_Sign_Evidence = {
  __typename?: 'double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** order by aggregate values of table "double_sign_evidence" */
export type Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Evidence_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** order by stddev() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_evidence" */
export type Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Double_Sign_Vote = {
  __typename?: 'double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Double_Sign_Evidence>;
  /** An array relationship */
  double_sign_evidences: Array<Double_Sign_Evidence>;
  height: Scalars['bigint'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Double_Sign_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  round?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_index?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_vote" */
export enum Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** order by stddev() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_vote" */
export type Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Double_Sign_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  round?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_Allowance = {
  __typename?: 'fee_grant_allowance';
  allowance: Scalars['jsonb'];
  /** An object relationship */
  grantee: Account;
  grantee_address: Scalars['String'];
  /** An object relationship */
  granter: Account;
  granter_address: Scalars['String'];
  height: Scalars['bigint'];
};


/** columns and relationships of "fee_grant_allowance" */
export type Fee_Grant_AllowanceAllowanceArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Aggregate_Order_By = {
  avg?: InputMaybe<Fee_Grant_Allowance_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Fee_Grant_Allowance_Max_Order_By>;
  min?: InputMaybe<Fee_Grant_Allowance_Min_Order_By>;
  stddev?: InputMaybe<Fee_Grant_Allowance_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Fee_Grant_Allowance_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Fee_Grant_Allowance_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Fee_Grant_Allowance_Sum_Order_By>;
  var_pop?: InputMaybe<Fee_Grant_Allowance_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Fee_Grant_Allowance_Var_Samp_Order_By>;
  variance?: InputMaybe<Fee_Grant_Allowance_Variance_Order_By>;
};

/** order by avg() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "fee_grant_allowance". All fields are combined with a logical 'AND'. */
export type Fee_Grant_Allowance_Bool_Exp = {
  _and?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  _not?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
  _or?: InputMaybe<Array<Fee_Grant_Allowance_Bool_Exp>>;
  allowance?: InputMaybe<Jsonb_Comparison_Exp>;
  grantee?: InputMaybe<Account_Bool_Exp>;
  grantee_address?: InputMaybe<String_Comparison_Exp>;
  granter?: InputMaybe<Account_Bool_Exp>;
  granter_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Max_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Min_Order_By = {
  grantee_address?: InputMaybe<Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "fee_grant_allowance". */
export type Fee_Grant_Allowance_Order_By = {
  allowance?: InputMaybe<Order_By>;
  grantee?: InputMaybe<Account_Order_By>;
  grantee_address?: InputMaybe<Order_By>;
  granter?: InputMaybe<Account_Order_By>;
  granter_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "fee_grant_allowance" */
export enum Fee_Grant_Allowance_Select_Column {
  /** column name */
  Allowance = 'allowance',
  /** column name */
  GranteeAddress = 'grantee_address',
  /** column name */
  GranterAddress = 'granter_address',
  /** column name */
  Height = 'height'
}

/** order by stddev() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fee_Grant_Allowance_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fee_Grant_Allowance_Stream_Cursor_Value_Input = {
  allowance?: InputMaybe<Scalars['jsonb']>;
  grantee_address?: InputMaybe<Scalars['String']>;
  granter_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "fee_grant_allowance" */
export type Fee_Grant_Allowance_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "genesis" */
export type Genesis = {
  __typename?: 'genesis';
  chain_id: Scalars['String'];
  initial_height: Scalars['bigint'];
  time: Scalars['timestamp'];
};

/** Boolean expression to filter rows from the table "genesis". All fields are combined with a logical 'AND'. */
export type Genesis_Bool_Exp = {
  _and?: InputMaybe<Array<Genesis_Bool_Exp>>;
  _not?: InputMaybe<Genesis_Bool_Exp>;
  _or?: InputMaybe<Array<Genesis_Bool_Exp>>;
  chain_id?: InputMaybe<String_Comparison_Exp>;
  initial_height?: InputMaybe<Bigint_Comparison_Exp>;
  time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** Ordering options when selecting data from "genesis". */
export type Genesis_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  initial_height?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
};

/** select columns of table "genesis" */
export enum Genesis_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  InitialHeight = 'initial_height',
  /** column name */
  Time = 'time'
}

/** Streaming cursor of the table "genesis" */
export type Genesis_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genesis_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genesis_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['String']>;
  initial_height?: InputMaybe<Scalars['bigint']>;
  time?: InputMaybe<Scalars['timestamp']>;
};

/** columns and relationships of "gov_params" */
export type Gov_Params = {
  __typename?: 'gov_params';
  deposit_params: Scalars['jsonb'];
  height: Scalars['bigint'];
  tally_params: Scalars['jsonb'];
  voting_params: Scalars['jsonb'];
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsDeposit_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsTally_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "gov_params" */
export type Gov_ParamsVoting_ParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "gov_params". All fields are combined with a logical 'AND'. */
export type Gov_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  _not?: InputMaybe<Gov_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Gov_Params_Bool_Exp>>;
  deposit_params?: InputMaybe<Jsonb_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  tally_params?: InputMaybe<Jsonb_Comparison_Exp>;
  voting_params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "gov_params". */
export type Gov_Params_Order_By = {
  deposit_params?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  tally_params?: InputMaybe<Order_By>;
  voting_params?: InputMaybe<Order_By>;
};

/** select columns of table "gov_params" */
export enum Gov_Params_Select_Column {
  /** column name */
  DepositParams = 'deposit_params',
  /** column name */
  Height = 'height',
  /** column name */
  TallyParams = 'tally_params',
  /** column name */
  VotingParams = 'voting_params'
}

/** Streaming cursor of the table "gov_params" */
export type Gov_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gov_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gov_Params_Stream_Cursor_Value_Input = {
  deposit_params?: InputMaybe<Scalars['jsonb']>;
  height?: InputMaybe<Scalars['bigint']>;
  tally_params?: InputMaybe<Scalars['jsonb']>;
  voting_params?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "inflation" */
export type Inflation = {
  __typename?: 'inflation';
  height: Scalars['bigint'];
  one_row_id: Scalars['Boolean'];
  value: Scalars['numeric'];
};

/** aggregated selection of "inflation" */
export type Inflation_Aggregate = {
  __typename?: 'inflation_aggregate';
  aggregate?: Maybe<Inflation_Aggregate_Fields>;
  nodes: Array<Inflation>;
};

/** aggregate fields of "inflation" */
export type Inflation_Aggregate_Fields = {
  __typename?: 'inflation_aggregate_fields';
  avg?: Maybe<Inflation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Inflation_Max_Fields>;
  min?: Maybe<Inflation_Min_Fields>;
  stddev?: Maybe<Inflation_Stddev_Fields>;
  stddev_pop?: Maybe<Inflation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Inflation_Stddev_Samp_Fields>;
  sum?: Maybe<Inflation_Sum_Fields>;
  var_pop?: Maybe<Inflation_Var_Pop_Fields>;
  var_samp?: Maybe<Inflation_Var_Samp_Fields>;
  variance?: Maybe<Inflation_Variance_Fields>;
};


/** aggregate fields of "inflation" */
export type Inflation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Inflation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inflation_Avg_Fields = {
  __typename?: 'inflation_avg_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inflation". All fields are combined with a logical 'AND'. */
export type Inflation_Bool_Exp = {
  _and?: InputMaybe<Array<Inflation_Bool_Exp>>;
  _not?: InputMaybe<Inflation_Bool_Exp>;
  _or?: InputMaybe<Array<Inflation_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  one_row_id?: InputMaybe<Boolean_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Inflation_Max_Fields = {
  __typename?: 'inflation_max_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Inflation_Min_Fields = {
  __typename?: 'inflation_min_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "inflation". */
export type Inflation_Order_By = {
  height?: InputMaybe<Order_By>;
  one_row_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "inflation" */
export enum Inflation_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OneRowId = 'one_row_id',
  /** column name */
  Value = 'value'
}

/** aggregate stddev on columns */
export type Inflation_Stddev_Fields = {
  __typename?: 'inflation_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inflation_Stddev_Pop_Fields = {
  __typename?: 'inflation_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inflation_Stddev_Samp_Fields = {
  __typename?: 'inflation_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "inflation" */
export type Inflation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inflation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inflation_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  one_row_id?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type Inflation_Sum_Fields = {
  __typename?: 'inflation_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  value?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type Inflation_Var_Pop_Fields = {
  __typename?: 'inflation_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inflation_Var_Samp_Fields = {
  __typename?: 'inflation_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inflation_Variance_Fields = {
  __typename?: 'inflation_variance_fields';
  height?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  height: Scalars['bigint'];
  index: Scalars['bigint'];
  involved_accounts_addresses: Scalars['_text'];
  /** An object relationship */
  transaction?: Maybe<Transaction>;
  /** An object relationship */
  transactionByPartitionIdTransactionHash?: Maybe<Transaction>;
  transaction_hash: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "message" */
export type MessageValueArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index?: InputMaybe<Bigint_Comparison_Exp>;
  involved_accounts_addresses?: InputMaybe<_Text_Comparison_Exp>;
  transaction?: InputMaybe<Transaction_Bool_Exp>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Bool_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  involved_accounts_addresses?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Transaction_Order_By>;
  transactionByPartitionIdTransactionHash?: InputMaybe<Transaction_Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Index = 'index',
  /** column name */
  InvolvedAccountsAddresses = 'involved_accounts_addresses',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  Type = 'type',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index?: InputMaybe<Scalars['bigint']>;
  involved_accounts_addresses?: InputMaybe<Scalars['_text']>;
  transaction_hash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['jsonb']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

export type Messages_By_Address_Args = {
  addresses?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
};

export type Messages_By_Single_Address_Args = {
  address?: InputMaybe<Scalars['String']>;
  apikey?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Scalars['_text']>;
};

/** columns and relationships of "mint_params" */
export type Mint_Params = {
  __typename?: 'mint_params';
  height: Scalars['bigint'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "mint_params" */
export type Mint_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "mint_params". All fields are combined with a logical 'AND'. */
export type Mint_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  _not?: InputMaybe<Mint_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Mint_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "mint_params". */
export type Mint_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "mint_params" */
export enum Mint_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "mint_params" */
export type Mint_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mint_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mint_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "modules" */
export type Modules = {
  __typename?: 'modules';
  module_name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "modules". All fields are combined with a logical 'AND'. */
export type Modules_Bool_Exp = {
  _and?: InputMaybe<Array<Modules_Bool_Exp>>;
  _not?: InputMaybe<Modules_Bool_Exp>;
  _or?: InputMaybe<Array<Modules_Bool_Exp>>;
  module_name?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "modules". */
export type Modules_Order_By = {
  module_name?: InputMaybe<Order_By>;
};

/** select columns of table "modules" */
export enum Modules_Select_Column {
  /** column name */
  ModuleName = 'module_name'
}

/** Streaming cursor of the table "modules" */
export type Modules_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modules_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modules_Stream_Cursor_Value_Input = {
  module_name?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
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

/** columns and relationships of "pre_commit" */
export type Pre_Commit = {
  __typename?: 'pre_commit';
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Pre_Commit_Aggregate = {
  __typename?: 'pre_commit_aggregate';
  aggregate?: Maybe<Pre_Commit_Aggregate_Fields>;
  nodes: Array<Pre_Commit>;
};

export type Pre_Commit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp_Count>;
};

export type Pre_Commit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Pre_Commit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_Fields = {
  __typename?: 'pre_commit_aggregate_fields';
  avg?: Maybe<Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Pre_Commit_Max_Fields>;
  min?: Maybe<Pre_Commit_Min_Fields>;
  stddev?: Maybe<Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Pre_Commit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Pre_Commit_Avg_Fields = {
  __typename?: 'pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Pre_Commit_Max_Fields = {
  __typename?: 'pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Pre_Commit_Min_Fields = {
  __typename?: 'pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Pre_Commit_Stddev_Fields = {
  __typename?: 'pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pre_commit" */
export type Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Pre_Commit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Pre_Commit_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Pre_Commit_Sum_Fields = {
  __typename?: 'pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Pre_Commit_Var_Pop_Fields = {
  __typename?: 'pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Pre_Commit_Var_Samp_Fields = {
  __typename?: 'pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Pre_Commit_Variance_Fields = {
  __typename?: 'pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Proposal = {
  __typename?: 'proposal';
  content: Scalars['jsonb'];
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  proposal_deposits: Array<Proposal_Deposit>;
  proposal_route: Scalars['String'];
  /** An object relationship */
  proposal_tally_result?: Maybe<Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Proposal_Tally_Result>;
  proposal_type: Scalars['String'];
  /** An array relationship */
  proposal_votes: Array<Proposal_Vote>;
  /** An object relationship */
  proposer: Account;
  proposer_address: Scalars['String'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['timestamp'];
  title: Scalars['String'];
  /** An array relationship */
  validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "proposal" */
export type ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Proposal_Aggregate = {
  __typename?: 'proposal_aggregate';
  aggregate?: Maybe<Proposal_Aggregate_Fields>;
  nodes: Array<Proposal>;
};

export type Proposal_Aggregate_Bool_Exp = {
  count?: InputMaybe<Proposal_Aggregate_Bool_Exp_Count>;
};

export type Proposal_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Proposal_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "proposal" */
export type Proposal_Aggregate_Fields = {
  __typename?: 'proposal_aggregate_fields';
  avg?: Maybe<Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Proposal_Max_Fields>;
  min?: Maybe<Proposal_Min_Fields>;
  stddev?: Maybe<Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Proposal_Sum_Fields>;
  var_pop?: Maybe<Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Proposal_Var_Samp_Fields>;
  variance?: Maybe<Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal" */
export type Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Max_Order_By>;
  min?: InputMaybe<Proposal_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proposal_Avg_Fields = {
  __typename?: 'proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal" */
export type Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_votes?: InputMaybe<Proposal_Vote_Bool_Exp>;
  proposer?: InputMaybe<Account_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** columns and relationships of "proposal_deposit" */
export type Proposal_Deposit = {
  __typename?: 'proposal_deposit';
  amount?: Maybe<Scalars['_coin']>;
  /** An object relationship */
  block?: Maybe<Block>;
  /** An object relationship */
  depositor?: Maybe<Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Deposit_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  depositor?: InputMaybe<Account_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Block_Order_By>;
  depositor?: InputMaybe<Account_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']>;
  depositor_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Proposal_Max_Fields = {
  __typename?: 'proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "proposal" */
export type Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Proposal_Min_Fields = {
  __typename?: 'proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "proposal" */
export type Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal". */
export type Proposal_Order_By = {
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_tally_result?: InputMaybe<Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_votes_aggregate?: InputMaybe<Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Account_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staking_pool_snapshot?: InputMaybe<Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** select columns of table "proposal" */
export enum Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot = {
  __typename?: 'proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Proposal_Stddev_Fields = {
  __typename?: 'proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal" */
export type Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proposal_Stddev_Pop_Fields = {
  __typename?: 'proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proposal_Stddev_Samp_Fields = {
  __typename?: 'proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  proposal_route?: InputMaybe<Scalars['String']>;
  proposal_type?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  submit_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Proposal_Sum_Fields = {
  __typename?: 'proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal" */
export type Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Proposal_Tally_Result = {
  __typename?: 'proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

/** order by aggregate values of table "proposal_tally_result" */
export type Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Tally_Result_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_result" */
export enum Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** order by stddev() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  no?: InputMaybe<Scalars['String']>;
  no_with_veto?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  yes?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot = {
  __typename?: 'proposal_validator_status_snapshot';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proposal_Var_Pop_Fields = {
  __typename?: 'proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proposal_Var_Samp_Fields = {
  __typename?: 'proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Proposal_Variance_Fields = {
  __typename?: 'proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal" */
export type Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Proposal_Vote = {
  __typename?: 'proposal_vote';
  /** An object relationship */
  account: Account;
  /** An object relationship */
  block?: Maybe<Block>;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamptz']>;
  voter_address: Scalars['String'];
};

/** order by aggregate values of table "proposal_vote" */
export type Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Proposal_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_vote" */
export type Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_vote" */
export type Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Proposal_Vote_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address'
}

/** order by stddev() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  option?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  voter_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "account" */
export type Provider_Account = {
  __typename?: 'provider_account';
  address: Scalars['String'];
  /** An array relationship */
  proposal_deposits: Array<Provider_Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Provider_Proposal_Vote>;
  /** An array relationship */
  proposals: Array<Provider_Proposal>;
  /** An aggregate relationship */
  proposals_aggregate: Provider_Proposal_Aggregate;
  /** An array relationship */
  validator_infos: Array<Provider_Validator_Info>;
  /** An object relationship */
  vesting_account?: Maybe<Provider_Vesting_Account>;
  /** An array relationship */
  vesting_accounts: Array<Provider_Vesting_Account>;
};


/** columns and relationships of "account" */
export type Provider_AccountProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "account" */
export type Provider_AccountProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "account" */
export type Provider_AccountProposalsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type Provider_AccountProposals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


/** columns and relationships of "account" */
export type Provider_AccountValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
};


/** columns and relationships of "account" */
export type Provider_AccountVesting_AccountsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Provider_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Account_Bool_Exp>>;
  _not?: InputMaybe<Provider_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Account_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
  proposals?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposals_aggregate?: InputMaybe<Proposal_Aggregate_Bool_Exp>;
  validator_infos?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
  vesting_account?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
  vesting_accounts?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Provider_Account_Order_By = {
  address?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Provider_Proposal_Vote_Aggregate_Order_By>;
  proposals_aggregate?: InputMaybe<Provider_Proposal_Aggregate_Order_By>;
  validator_infos_aggregate?: InputMaybe<Provider_Validator_Info_Aggregate_Order_By>;
  vesting_account?: InputMaybe<Provider_Vesting_Account_Order_By>;
  vesting_accounts_aggregate?: InputMaybe<Provider_Vesting_Account_Aggregate_Order_By>;
};

/** select columns of table "account" */
export enum Provider_Account_Select_Column {
  /** column name */
  Address = 'address'
}

/** Streaming cursor of the table "account" */
export type Provider_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "block" */
export type Provider_Block = {
  __typename?: 'provider_block';
  hash: Scalars['String'];
  height: Scalars['bigint'];
  num_txs?: Maybe<Scalars['Int']>;
  /** An array relationship */
  pre_commits: Array<Provider_Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Provider_Pre_Commit_Aggregate;
  /** An array relationship */
  proposal_deposits: Array<Provider_Proposal_Deposit>;
  /** An array relationship */
  proposal_votes: Array<Provider_Proposal_Vote>;
  proposer_address?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamp'];
  total_gas?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  transactions: Array<Provider_Transaction>;
  /** An object relationship */
  validator?: Maybe<Provider_Validator>;
  /** An array relationship */
  validator_voting_powers: Array<Provider_Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Provider_Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "block" */
export type Provider_BlockPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Transaction_Order_By>>;
  where?: InputMaybe<Provider_Transaction_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "block" */
export type Provider_BlockValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};

/** order by aggregate values of table "block" */
export type Provider_Block_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Block_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Block_Max_Order_By>;
  min?: InputMaybe<Provider_Block_Min_Order_By>;
  stddev?: InputMaybe<Provider_Block_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Block_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Block_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Block_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Block_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Block_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Block_Variance_Order_By>;
};

/** order by avg() on columns of table "block" */
export type Provider_Block_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
export type Provider_Block_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Block_Bool_Exp>>;
  _not?: InputMaybe<Provider_Block_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Block_Bool_Exp>>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  num_txs?: InputMaybe<Int_Comparison_Exp>;
  pre_commits?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_deposits?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
  proposal_votes?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  total_gas?: InputMaybe<Bigint_Comparison_Exp>;
  transactions?: InputMaybe<Provider_Transaction_Bool_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** order by max() on columns of table "block" */
export type Provider_Block_Max_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "block" */
export type Provider_Block_Min_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "block". */
export type Provider_Block_Order_By = {
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  pre_commits_aggregate?: InputMaybe<Provider_Pre_Commit_Aggregate_Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_votes_aggregate?: InputMaybe<Provider_Proposal_Vote_Aggregate_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Provider_Transaction_Aggregate_Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Provider_Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "block" */
export enum Provider_Block_Select_Column {
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  NumTxs = 'num_txs',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalGas = 'total_gas'
}

/** order by stddev() on columns of table "block" */
export type Provider_Block_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "block" */
export type Provider_Block_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "block" */
export type Provider_Block_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "block" */
export type Provider_Block_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Block_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Block_Stream_Cursor_Value_Input = {
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  num_txs?: InputMaybe<Scalars['Int']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  total_gas?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "block" */
export type Provider_Block_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "block" */
export type Provider_Block_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "block" */
export type Provider_Block_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "block" */
export type Provider_Block_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  num_txs?: InputMaybe<Order_By>;
  total_gas?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Provider_Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "double_sign_evidence" */
export type Provider_Double_Sign_Evidence = {
  __typename?: 'provider_double_sign_evidence';
  /** An object relationship */
  doubleSignVoteByVoteAId: Provider_Double_Sign_Vote;
  /** An object relationship */
  double_sign_vote: Provider_Double_Sign_Vote;
  height: Scalars['bigint'];
  vote_a_id: Scalars['bigint'];
  vote_b_id: Scalars['bigint'];
};

/** order by aggregate values of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Double_Sign_Evidence_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Double_Sign_Evidence_Max_Order_By>;
  min?: InputMaybe<Provider_Double_Sign_Evidence_Min_Order_By>;
  stddev?: InputMaybe<Provider_Double_Sign_Evidence_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Double_Sign_Evidence_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Double_Sign_Evidence_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Double_Sign_Evidence_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Double_Sign_Evidence_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Double_Sign_Evidence_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Double_Sign_Evidence_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_evidence". All fields are combined with a logical 'AND'. */
export type Provider_Double_Sign_Evidence_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Double_Sign_Evidence_Bool_Exp>>;
  _not?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Double_Sign_Evidence_Bool_Exp>>;
  doubleSignVoteByVoteAId?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
  double_sign_vote?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  vote_a_id?: InputMaybe<Bigint_Comparison_Exp>;
  vote_b_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_evidence". */
export type Provider_Double_Sign_Evidence_Order_By = {
  doubleSignVoteByVoteAId?: InputMaybe<Provider_Double_Sign_Vote_Order_By>;
  double_sign_vote?: InputMaybe<Provider_Double_Sign_Vote_Order_By>;
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_evidence" */
export enum Provider_Double_Sign_Evidence_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  VoteAId = 'vote_a_id',
  /** column name */
  VoteBId = 'vote_b_id'
}

/** order by stddev() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Double_Sign_Evidence_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Double_Sign_Evidence_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  vote_a_id?: InputMaybe<Scalars['bigint']>;
  vote_b_id?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_evidence" */
export type Provider_Double_Sign_Evidence_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  vote_a_id?: InputMaybe<Order_By>;
  vote_b_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "double_sign_vote" */
export type Provider_Double_Sign_Vote = {
  __typename?: 'provider_double_sign_vote';
  block_id: Scalars['String'];
  /** An array relationship */
  doubleSignEvidencesByVoteBId: Array<Provider_Double_Sign_Evidence>;
  /** An array relationship */
  double_sign_evidences: Array<Provider_Double_Sign_Evidence>;
  height: Scalars['bigint'];
  round: Scalars['Int'];
  signature: Scalars['String'];
  type: Scalars['smallint'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
  validator_index: Scalars['Int'];
};


/** columns and relationships of "double_sign_vote" */
export type Provider_Double_Sign_VoteDoubleSignEvidencesByVoteBIdArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
};


/** columns and relationships of "double_sign_vote" */
export type Provider_Double_Sign_VoteDouble_Sign_EvidencesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
};

/** order by aggregate values of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Double_Sign_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Double_Sign_Vote_Max_Order_By>;
  min?: InputMaybe<Provider_Double_Sign_Vote_Min_Order_By>;
  stddev?: InputMaybe<Provider_Double_Sign_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Double_Sign_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Double_Sign_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Double_Sign_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Double_Sign_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Double_Sign_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Double_Sign_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "double_sign_vote". All fields are combined with a logical 'AND'. */
export type Provider_Double_Sign_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Double_Sign_Vote_Bool_Exp>>;
  _not?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Double_Sign_Vote_Bool_Exp>>;
  block_id?: InputMaybe<String_Comparison_Exp>;
  doubleSignEvidencesByVoteBId?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
  double_sign_evidences?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  round?: InputMaybe<Int_Comparison_Exp>;
  signature?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Smallint_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  validator_index?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Max_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Min_Order_By = {
  block_id?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "double_sign_vote". */
export type Provider_Double_Sign_Vote_Order_By = {
  block_id?: InputMaybe<Order_By>;
  doubleSignEvidencesByVoteBId_aggregate?: InputMaybe<Provider_Double_Sign_Evidence_Aggregate_Order_By>;
  double_sign_evidences_aggregate?: InputMaybe<Provider_Double_Sign_Evidence_Aggregate_Order_By>;
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  signature?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** select columns of table "double_sign_vote" */
export enum Provider_Double_Sign_Vote_Select_Column {
  /** column name */
  BlockId = 'block_id',
  /** column name */
  Height = 'height',
  /** column name */
  Round = 'round',
  /** column name */
  Signature = 'signature',
  /** column name */
  Type = 'type',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  ValidatorIndex = 'validator_index'
}

/** order by stddev() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Double_Sign_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Double_Sign_Vote_Stream_Cursor_Value_Input = {
  block_id?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  round?: InputMaybe<Scalars['Int']>;
  signature?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['smallint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  validator_index?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "double_sign_vote" */
export type Provider_Double_Sign_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  round?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  validator_index?: InputMaybe<Order_By>;
};

/** columns and relationships of "pre_commit" */
export type Provider_Pre_Commit = {
  __typename?: 'provider_pre_commit';
  height: Scalars['bigint'];
  proposer_priority: Scalars['bigint'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "pre_commit" */
export type Provider_Pre_Commit_Aggregate = {
  __typename?: 'provider_pre_commit_aggregate';
  aggregate?: Maybe<Provider_Pre_Commit_Aggregate_Fields>;
  nodes: Array<Provider_Pre_Commit>;
};

/** aggregate fields of "pre_commit" */
export type Provider_Pre_Commit_Aggregate_Fields = {
  __typename?: 'provider_pre_commit_aggregate_fields';
  avg?: Maybe<Provider_Pre_Commit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Provider_Pre_Commit_Max_Fields>;
  min?: Maybe<Provider_Pre_Commit_Min_Fields>;
  stddev?: Maybe<Provider_Pre_Commit_Stddev_Fields>;
  stddev_pop?: Maybe<Provider_Pre_Commit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Provider_Pre_Commit_Stddev_Samp_Fields>;
  sum?: Maybe<Provider_Pre_Commit_Sum_Fields>;
  var_pop?: Maybe<Provider_Pre_Commit_Var_Pop_Fields>;
  var_samp?: Maybe<Provider_Pre_Commit_Var_Samp_Fields>;
  variance?: Maybe<Provider_Pre_Commit_Variance_Fields>;
};


/** aggregate fields of "pre_commit" */
export type Provider_Pre_Commit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "pre_commit" */
export type Provider_Pre_Commit_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Pre_Commit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Pre_Commit_Max_Order_By>;
  min?: InputMaybe<Provider_Pre_Commit_Min_Order_By>;
  stddev?: InputMaybe<Provider_Pre_Commit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Pre_Commit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Pre_Commit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Pre_Commit_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Pre_Commit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Pre_Commit_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Pre_Commit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Provider_Pre_Commit_Avg_Fields = {
  __typename?: 'provider_pre_commit_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "pre_commit". All fields are combined with a logical 'AND'. */
export type Provider_Pre_Commit_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Pre_Commit_Bool_Exp>>;
  _not?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Pre_Commit_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposer_priority?: InputMaybe<Bigint_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Provider_Pre_Commit_Max_Fields = {
  __typename?: 'provider_pre_commit_max_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Provider_Pre_Commit_Min_Fields = {
  __typename?: 'provider_pre_commit_min_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "pre_commit". */
export type Provider_Pre_Commit_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "pre_commit" */
export enum Provider_Pre_Commit_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ProposerPriority = 'proposer_priority',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Provider_Pre_Commit_Stddev_Fields = {
  __typename?: 'provider_pre_commit_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Provider_Pre_Commit_Stddev_Pop_Fields = {
  __typename?: 'provider_pre_commit_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Provider_Pre_Commit_Stddev_Samp_Fields = {
  __typename?: 'provider_pre_commit_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "pre_commit" */
export type Provider_Pre_Commit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Pre_Commit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Pre_Commit_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  proposer_priority?: InputMaybe<Scalars['bigint']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Provider_Pre_Commit_Sum_Fields = {
  __typename?: 'provider_pre_commit_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposer_priority?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Provider_Pre_Commit_Var_Pop_Fields = {
  __typename?: 'provider_pre_commit_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Provider_Pre_Commit_Var_Samp_Fields = {
  __typename?: 'provider_pre_commit_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Provider_Pre_Commit_Variance_Fields = {
  __typename?: 'provider_pre_commit_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposer_priority?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "pre_commit" */
export type Provider_Pre_Commit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposer_priority?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal" */
export type Provider_Proposal = {
  __typename?: 'provider_proposal';
  content: Scalars['jsonb'];
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  proposal_deposits: Array<Provider_Proposal_Deposit>;
  proposal_route: Scalars['String'];
  /** An object relationship */
  proposal_tally_result?: Maybe<Provider_Proposal_Tally_Result>;
  /** An array relationship */
  proposal_tally_results: Array<Provider_Proposal_Tally_Result>;
  proposal_type: Scalars['String'];
  /** An array relationship */
  proposal_votes: Array<Provider_Proposal_Vote>;
  /** An object relationship */
  proposer: Provider_Account;
  proposer_address: Scalars['String'];
  /** An object relationship */
  staking_pool_snapshot?: Maybe<Provider_Proposal_Staking_Pool_Snapshot>;
  status?: Maybe<Scalars['String']>;
  submit_time: Scalars['timestamp'];
  title: Scalars['String'];
  /** An array relationship */
  validator_status_snapshots: Array<Provider_Proposal_Validator_Status_Snapshot>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "proposal" */
export type Provider_ProposalContentArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "proposal" */
export type Provider_ProposalProposal_DepositsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type Provider_ProposalProposal_Tally_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type Provider_ProposalProposal_VotesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


/** columns and relationships of "proposal" */
export type Provider_ProposalValidator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};

/** aggregated selection of "proposal" */
export type Provider_Proposal_Aggregate = {
  __typename?: 'provider_proposal_aggregate';
  aggregate?: Maybe<Provider_Proposal_Aggregate_Fields>;
  nodes: Array<Provider_Proposal>;
};

/** aggregate fields of "proposal" */
export type Provider_Proposal_Aggregate_Fields = {
  __typename?: 'provider_proposal_aggregate_fields';
  avg?: Maybe<Provider_Proposal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Provider_Proposal_Max_Fields>;
  min?: Maybe<Provider_Proposal_Min_Fields>;
  stddev?: Maybe<Provider_Proposal_Stddev_Fields>;
  stddev_pop?: Maybe<Provider_Proposal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Provider_Proposal_Stddev_Samp_Fields>;
  sum?: Maybe<Provider_Proposal_Sum_Fields>;
  var_pop?: Maybe<Provider_Proposal_Var_Pop_Fields>;
  var_samp?: Maybe<Provider_Proposal_Var_Samp_Fields>;
  variance?: Maybe<Provider_Proposal_Variance_Fields>;
};


/** aggregate fields of "proposal" */
export type Provider_Proposal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proposal" */
export type Provider_Proposal_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Proposal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Proposal_Max_Order_By>;
  min?: InputMaybe<Provider_Proposal_Min_Order_By>;
  stddev?: InputMaybe<Provider_Proposal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Proposal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Proposal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Proposal_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Proposal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Proposal_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Proposal_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Provider_Proposal_Avg_Fields = {
  __typename?: 'provider_proposal_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proposal" */
export type Provider_Proposal_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Bool_Exp>>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  deposit_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  proposal_deposits?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
  proposal_route?: InputMaybe<String_Comparison_Exp>;
  proposal_tally_result?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
  proposal_tally_results?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
  proposal_type?: InputMaybe<String_Comparison_Exp>;
  proposal_votes?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
  proposer?: InputMaybe<Provider_Account_Bool_Exp>;
  proposer_address?: InputMaybe<String_Comparison_Exp>;
  staking_pool_snapshot?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  submit_time?: InputMaybe<Timestamp_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  validator_status_snapshots?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  voting_end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  voting_start_time?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** columns and relationships of "proposal_deposit" */
export type Provider_Proposal_Deposit = {
  __typename?: 'provider_proposal_deposit';
  amount?: Maybe<Scalars['_coin']>;
  /** An object relationship */
  block?: Maybe<Provider_Block>;
  /** An object relationship */
  depositor?: Maybe<Provider_Account>;
  depositor_address?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  /** An object relationship */
  proposal: Provider_Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by aggregate values of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Proposal_Deposit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Proposal_Deposit_Max_Order_By>;
  min?: InputMaybe<Provider_Proposal_Deposit_Min_Order_By>;
  stddev?: InputMaybe<Provider_Proposal_Deposit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Proposal_Deposit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Proposal_Deposit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Proposal_Deposit_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Proposal_Deposit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Proposal_Deposit_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Proposal_Deposit_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_deposit". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Deposit_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Deposit_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Deposit_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  block?: InputMaybe<Provider_Block_Bool_Exp>;
  depositor?: InputMaybe<Provider_Account_Bool_Exp>;
  depositor_address?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  proposal?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Max_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Min_Order_By = {
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_deposit". */
export type Provider_Proposal_Deposit_Order_By = {
  amount?: InputMaybe<Order_By>;
  block?: InputMaybe<Provider_Block_Order_By>;
  depositor?: InputMaybe<Provider_Account_Order_By>;
  depositor_address?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_deposit" */
export enum Provider_Proposal_Deposit_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  DepositorAddress = 'depositor_address',
  /** column name */
  Height = 'height',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** order by stddev() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_deposit" */
export type Provider_Proposal_Deposit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Deposit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Deposit_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']>;
  depositor_address?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_deposit" */
export type Provider_Proposal_Deposit_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Provider_Proposal_Max_Fields = {
  __typename?: 'provider_proposal_max_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "proposal" */
export type Provider_Proposal_Max_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Provider_Proposal_Min_Fields = {
  __typename?: 'provider_proposal_min_fields';
  deposit_end_time?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  proposal_route?: Maybe<Scalars['String']>;
  proposal_type?: Maybe<Scalars['String']>;
  proposer_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  submit_time?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  voting_end_time?: Maybe<Scalars['timestamp']>;
  voting_start_time?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "proposal" */
export type Provider_Proposal_Min_Order_By = {
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal". */
export type Provider_Proposal_Order_By = {
  content?: InputMaybe<Order_By>;
  deposit_end_time?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  proposal_deposits_aggregate?: InputMaybe<Provider_Proposal_Deposit_Aggregate_Order_By>;
  proposal_route?: InputMaybe<Order_By>;
  proposal_tally_result?: InputMaybe<Provider_Proposal_Tally_Result_Order_By>;
  proposal_tally_results_aggregate?: InputMaybe<Provider_Proposal_Tally_Result_Aggregate_Order_By>;
  proposal_type?: InputMaybe<Order_By>;
  proposal_votes_aggregate?: InputMaybe<Provider_Proposal_Vote_Aggregate_Order_By>;
  proposer?: InputMaybe<Provider_Account_Order_By>;
  proposer_address?: InputMaybe<Order_By>;
  staking_pool_snapshot?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Order_By>;
  status?: InputMaybe<Order_By>;
  submit_time?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  validator_status_snapshots_aggregate?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  voting_end_time?: InputMaybe<Order_By>;
  voting_start_time?: InputMaybe<Order_By>;
};

/** select columns of table "proposal" */
export enum Provider_Proposal_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  DepositEndTime = 'deposit_end_time',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ProposalRoute = 'proposal_route',
  /** column name */
  ProposalType = 'proposal_type',
  /** column name */
  ProposerAddress = 'proposer_address',
  /** column name */
  Status = 'status',
  /** column name */
  SubmitTime = 'submit_time',
  /** column name */
  Title = 'title',
  /** column name */
  VotingEndTime = 'voting_end_time',
  /** column name */
  VotingStartTime = 'voting_start_time'
}

/** columns and relationships of "proposal_staking_pool_snapshot" */
export type Provider_Proposal_Staking_Pool_Snapshot = {
  __typename?: 'provider_proposal_staking_pool_snapshot';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  /** An object relationship */
  proposal: Provider_Proposal;
  proposal_id: Scalars['Int'];
};

/** Boolean expression to filter rows from the table "proposal_staking_pool_snapshot". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "proposal_staking_pool_snapshot". */
export type Provider_Proposal_Staking_Pool_Snapshot_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_staking_pool_snapshot" */
export enum Provider_Proposal_Staking_Pool_Snapshot_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  ProposalId = 'proposal_id'
}

/** Streaming cursor of the table "proposal_staking_pool_snapshot" */
export type Provider_Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Staking_Pool_Snapshot_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Provider_Proposal_Stddev_Fields = {
  __typename?: 'provider_proposal_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proposal" */
export type Provider_Proposal_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Provider_Proposal_Stddev_Pop_Fields = {
  __typename?: 'provider_proposal_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proposal" */
export type Provider_Proposal_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Provider_Proposal_Stddev_Samp_Fields = {
  __typename?: 'provider_proposal_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proposal" */
export type Provider_Proposal_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal" */
export type Provider_Proposal_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']>;
  deposit_end_time?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  proposal_route?: InputMaybe<Scalars['String']>;
  proposal_type?: InputMaybe<Scalars['String']>;
  proposer_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  submit_time?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  voting_end_time?: InputMaybe<Scalars['timestamp']>;
  voting_start_time?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Provider_Proposal_Sum_Fields = {
  __typename?: 'provider_proposal_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proposal" */
export type Provider_Proposal_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_tally_result" */
export type Provider_Proposal_Tally_Result = {
  __typename?: 'provider_proposal_tally_result';
  abstain: Scalars['String'];
  height: Scalars['bigint'];
  no: Scalars['String'];
  no_with_veto: Scalars['String'];
  /** An object relationship */
  proposal: Provider_Proposal;
  proposal_id: Scalars['Int'];
  yes: Scalars['String'];
};

/** order by aggregate values of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Proposal_Tally_Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Proposal_Tally_Result_Max_Order_By>;
  min?: InputMaybe<Provider_Proposal_Tally_Result_Min_Order_By>;
  stddev?: InputMaybe<Provider_Proposal_Tally_Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Proposal_Tally_Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Proposal_Tally_Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Proposal_Tally_Result_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Proposal_Tally_Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Proposal_Tally_Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Proposal_Tally_Result_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_tally_result". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Tally_Result_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Tally_Result_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Tally_Result_Bool_Exp>>;
  abstain?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  no?: InputMaybe<String_Comparison_Exp>;
  no_with_veto?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  yes?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Max_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Min_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_tally_result". */
export type Provider_Proposal_Tally_Result_Order_By = {
  abstain?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  no?: InputMaybe<Order_By>;
  no_with_veto?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  yes?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_tally_result" */
export enum Provider_Proposal_Tally_Result_Select_Column {
  /** column name */
  Abstain = 'abstain',
  /** column name */
  Height = 'height',
  /** column name */
  No = 'no',
  /** column name */
  NoWithVeto = 'no_with_veto',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Yes = 'yes'
}

/** order by stddev() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Tally_Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Tally_Result_Stream_Cursor_Value_Input = {
  abstain?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  no?: InputMaybe<Scalars['String']>;
  no_with_veto?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  yes?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_tally_result" */
export type Provider_Proposal_Tally_Result_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot = {
  __typename?: 'provider_proposal_validator_status_snapshot';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  /** An object relationship */
  proposal?: Maybe<Provider_Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  status: Scalars['Int'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** order by aggregate values of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Max_Order_By>;
  min?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Min_Order_By>;
  stddev?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_validator_status_snapshot". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Validator_Status_Snapshot_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  proposal?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_validator_status_snapshot". */
export type Provider_Proposal_Validator_Status_Snapshot_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_validator_status_snapshot" */
export enum Provider_Proposal_Validator_Status_Snapshot_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** order by stddev() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Validator_Status_Snapshot_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_validator_status_snapshot" */
export type Provider_Proposal_Validator_Status_Snapshot_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Provider_Proposal_Var_Pop_Fields = {
  __typename?: 'provider_proposal_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proposal" */
export type Provider_Proposal_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Provider_Proposal_Var_Samp_Fields = {
  __typename?: 'provider_proposal_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proposal" */
export type Provider_Proposal_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Provider_Proposal_Variance_Fields = {
  __typename?: 'provider_proposal_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proposal" */
export type Provider_Proposal_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "proposal_vote" */
export type Provider_Proposal_Vote = {
  __typename?: 'provider_proposal_vote';
  /** An object relationship */
  account: Provider_Account;
  /** An object relationship */
  block?: Maybe<Provider_Block>;
  height: Scalars['bigint'];
  option: Scalars['String'];
  /** An object relationship */
  proposal: Provider_Proposal;
  proposal_id: Scalars['Int'];
  timestamp?: Maybe<Scalars['timestamptz']>;
  voter_address: Scalars['String'];
};

/** order by aggregate values of table "proposal_vote" */
export type Provider_Proposal_Vote_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Proposal_Vote_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Proposal_Vote_Max_Order_By>;
  min?: InputMaybe<Provider_Proposal_Vote_Min_Order_By>;
  stddev?: InputMaybe<Provider_Proposal_Vote_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Proposal_Vote_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Proposal_Vote_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Proposal_Vote_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Proposal_Vote_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Proposal_Vote_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Proposal_Vote_Variance_Order_By>;
};

/** order by avg() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proposal_vote". All fields are combined with a logical 'AND'. */
export type Provider_Proposal_Vote_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Proposal_Vote_Bool_Exp>>;
  _not?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Proposal_Vote_Bool_Exp>>;
  account?: InputMaybe<Provider_Account_Bool_Exp>;
  block?: InputMaybe<Provider_Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  option?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Provider_Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  voter_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "proposal_vote". */
export type Provider_Proposal_Vote_Order_By = {
  account?: InputMaybe<Provider_Account_Order_By>;
  block?: InputMaybe<Provider_Block_Order_By>;
  height?: InputMaybe<Order_By>;
  option?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Provider_Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  voter_address?: InputMaybe<Order_By>;
};

/** select columns of table "proposal_vote" */
export enum Provider_Proposal_Vote_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Option = 'option',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  VoterAddress = 'voter_address'
}

/** order by stddev() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "proposal_vote" */
export type Provider_Proposal_Vote_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Proposal_Vote_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Proposal_Vote_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  option?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  voter_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "proposal_vote" */
export type Provider_Proposal_Vote_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  proposal_id?: InputMaybe<Order_By>;
};

export type Provider_Provider_Query = {
  __typename?: 'provider_provider_query';
  /** fetch data from the table: "account" */
  provider_account: Array<Provider_Account>;
  /** fetch data from the table: "account" using primary key columns */
  provider_account_by_pk?: Maybe<Provider_Account>;
  /** fetch data from the table: "block" */
  provider_block: Array<Provider_Block>;
  /** fetch data from the table: "block" using primary key columns */
  provider_block_by_pk?: Maybe<Provider_Block>;
  /** fetch data from the table: "double_sign_evidence" */
  provider_double_sign_evidence: Array<Provider_Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  provider_double_sign_vote: Array<Provider_Double_Sign_Vote>;
  /** fetch data from the table: "pre_commit" */
  provider_pre_commit: Array<Provider_Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  provider_pre_commit_aggregate: Provider_Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  provider_proposal: Array<Provider_Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  provider_proposal_aggregate: Provider_Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  provider_proposal_by_pk?: Maybe<Provider_Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  provider_proposal_deposit: Array<Provider_Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  provider_proposal_staking_pool_snapshot: Array<Provider_Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  provider_proposal_staking_pool_snapshot_by_pk?: Maybe<Provider_Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  provider_proposal_tally_result: Array<Provider_Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  provider_proposal_tally_result_by_pk?: Maybe<Provider_Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  provider_proposal_validator_status_snapshot: Array<Provider_Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  provider_proposal_vote: Array<Provider_Proposal_Vote>;
  /** fetch data from the table: "transaction" */
  provider_transaction: Array<Provider_Transaction>;
  /** fetch data from the table: "validator" */
  provider_validator: Array<Provider_Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  provider_validator_by_pk?: Maybe<Provider_Validator>;
  /** fetch data from the table: "validator_commission" */
  provider_validator_commission: Array<Provider_Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  provider_validator_commission_by_pk?: Maybe<Provider_Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  provider_validator_description: Array<Provider_Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  provider_validator_description_by_pk?: Maybe<Provider_Validator_Description>;
  /** fetch data from the table: "validator_info" */
  provider_validator_info: Array<Provider_Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  provider_validator_info_by_pk?: Maybe<Provider_Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  provider_validator_signing_info: Array<Provider_Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  provider_validator_signing_info_by_pk?: Maybe<Provider_Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  provider_validator_status: Array<Provider_Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  provider_validator_status_aggregate: Provider_Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  provider_validator_status_by_pk?: Maybe<Provider_Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  provider_validator_voting_power: Array<Provider_Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  provider_validator_voting_power_aggregate: Provider_Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  provider_validator_voting_power_by_pk?: Maybe<Provider_Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  provider_vesting_account: Array<Provider_Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  provider_vesting_period: Array<Provider_Vesting_Period>;
};


export type Provider_Provider_QueryProvider_AccountArgs = {
  distinct_on?: InputMaybe<Array<Provider_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Account_Order_By>>;
  where?: InputMaybe<Provider_Account_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_BlockArgs = {
  distinct_on?: InputMaybe<Array<Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Block_Order_By>>;
  where?: InputMaybe<Provider_Block_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Block_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Provider_Provider_QueryProvider_Double_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Double_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Pre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Pre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Provider_Provider_QueryProvider_Proposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Provider_Provider_QueryProvider_Proposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Provider_Provider_QueryProvider_Proposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Transaction_Order_By>>;
  where?: InputMaybe<Provider_Transaction_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_ValidatorArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Order_By>>;
  where?: InputMaybe<Provider_Validator_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Validator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Validator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_QueryProvider_Vesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};


export type Provider_Provider_QueryProvider_Vesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
};

export type Provider_Provider_Subscription = {
  __typename?: 'provider_provider_subscription';
  /** fetch data from the table: "account" */
  provider_account: Array<Provider_Account>;
  /** fetch data from the table: "account" using primary key columns */
  provider_account_by_pk?: Maybe<Provider_Account>;
  /** fetch data from the table in a streaming manner: "account" */
  provider_account_stream: Array<Provider_Account>;
  /** fetch data from the table: "block" */
  provider_block: Array<Provider_Block>;
  /** fetch data from the table: "block" using primary key columns */
  provider_block_by_pk?: Maybe<Provider_Block>;
  /** fetch data from the table in a streaming manner: "block" */
  provider_block_stream: Array<Provider_Block>;
  /** fetch data from the table: "double_sign_evidence" */
  provider_double_sign_evidence: Array<Provider_Double_Sign_Evidence>;
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  provider_double_sign_evidence_stream: Array<Provider_Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  provider_double_sign_vote: Array<Provider_Double_Sign_Vote>;
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  provider_double_sign_vote_stream: Array<Provider_Double_Sign_Vote>;
  /** fetch data from the table: "pre_commit" */
  provider_pre_commit: Array<Provider_Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  provider_pre_commit_aggregate: Provider_Pre_Commit_Aggregate;
  /** fetch data from the table in a streaming manner: "pre_commit" */
  provider_pre_commit_stream: Array<Provider_Pre_Commit>;
  /** fetch data from the table: "proposal" */
  provider_proposal: Array<Provider_Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  provider_proposal_aggregate: Provider_Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  provider_proposal_by_pk?: Maybe<Provider_Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  provider_proposal_deposit: Array<Provider_Proposal_Deposit>;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  provider_proposal_deposit_stream: Array<Provider_Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  provider_proposal_staking_pool_snapshot: Array<Provider_Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  provider_proposal_staking_pool_snapshot_by_pk?: Maybe<Provider_Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  provider_proposal_staking_pool_snapshot_stream: Array<Provider_Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  provider_proposal_stream: Array<Provider_Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  provider_proposal_tally_result: Array<Provider_Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  provider_proposal_tally_result_by_pk?: Maybe<Provider_Proposal_Tally_Result>;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  provider_proposal_tally_result_stream: Array<Provider_Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  provider_proposal_validator_status_snapshot: Array<Provider_Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  provider_proposal_validator_status_snapshot_stream: Array<Provider_Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  provider_proposal_vote: Array<Provider_Proposal_Vote>;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  provider_proposal_vote_stream: Array<Provider_Proposal_Vote>;
  /** fetch data from the table: "transaction" */
  provider_transaction: Array<Provider_Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  provider_transaction_stream: Array<Provider_Transaction>;
  /** fetch data from the table: "validator" */
  provider_validator: Array<Provider_Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  provider_validator_by_pk?: Maybe<Provider_Validator>;
  /** fetch data from the table: "validator_commission" */
  provider_validator_commission: Array<Provider_Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  provider_validator_commission_by_pk?: Maybe<Provider_Validator_Commission>;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  provider_validator_commission_stream: Array<Provider_Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  provider_validator_description: Array<Provider_Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  provider_validator_description_by_pk?: Maybe<Provider_Validator_Description>;
  /** fetch data from the table in a streaming manner: "validator_description" */
  provider_validator_description_stream: Array<Provider_Validator_Description>;
  /** fetch data from the table: "validator_info" */
  provider_validator_info: Array<Provider_Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  provider_validator_info_by_pk?: Maybe<Provider_Validator_Info>;
  /** fetch data from the table in a streaming manner: "validator_info" */
  provider_validator_info_stream: Array<Provider_Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  provider_validator_signing_info: Array<Provider_Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  provider_validator_signing_info_by_pk?: Maybe<Provider_Validator_Signing_Info>;
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  provider_validator_signing_info_stream: Array<Provider_Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  provider_validator_status: Array<Provider_Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  provider_validator_status_aggregate: Provider_Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  provider_validator_status_by_pk?: Maybe<Provider_Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  provider_validator_status_stream: Array<Provider_Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  provider_validator_stream: Array<Provider_Validator>;
  /** fetch data from the table: "validator_voting_power" */
  provider_validator_voting_power: Array<Provider_Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  provider_validator_voting_power_aggregate: Provider_Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  provider_validator_voting_power_by_pk?: Maybe<Provider_Validator_Voting_Power>;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  provider_validator_voting_power_stream: Array<Provider_Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  provider_vesting_account: Array<Provider_Vesting_Account>;
  /** fetch data from the table in a streaming manner: "vesting_account" */
  provider_vesting_account_stream: Array<Provider_Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  provider_vesting_period: Array<Provider_Vesting_Period>;
  /** fetch data from the table in a streaming manner: "vesting_period" */
  provider_vesting_period_stream: Array<Provider_Vesting_Period>;
};


export type Provider_Provider_SubscriptionProvider_AccountArgs = {
  distinct_on?: InputMaybe<Array<Provider_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Account_Order_By>>;
  where?: InputMaybe<Provider_Account_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Account_By_PkArgs = {
  address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Account_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Account_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_BlockArgs = {
  distinct_on?: InputMaybe<Array<Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Block_Order_By>>;
  where?: InputMaybe<Provider_Block_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Block_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Provider_Provider_SubscriptionProvider_Block_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Block_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Block_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Double_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Double_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Double_Sign_Evidence_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Double_Sign_Evidence_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Double_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Double_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Double_Sign_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Pre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Pre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Pre_Commit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Pre_Commit_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_ProposalArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Provider_Provider_SubscriptionProvider_Proposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Deposit_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Provider_Provider_SubscriptionProvider_Proposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Provider_Provider_SubscriptionProvider_Proposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Tally_Result_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Provider_Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Proposal_Vote_Order_By>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Proposal_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Proposal_Vote_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_TransactionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Transaction_Order_By>>;
  where?: InputMaybe<Provider_Transaction_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Transaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Transaction_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_ValidatorArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Order_By>>;
  where?: InputMaybe<Provider_Validator_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Commission_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Commission_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Description_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Signing_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Validator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Provider_Provider_SubscriptionProvider_Validator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Vesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Account_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Vesting_Account_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Vesting_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Vesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
};


export type Provider_Provider_SubscriptionProvider_Vesting_Period_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Provider_Vesting_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "transaction" */
export type Provider_Transaction = {
  __typename?: 'provider_transaction';
  /** An object relationship */
  block: Provider_Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['jsonb'];
  raw_log?: Maybe<Scalars['String']>;
  signatures: Scalars['_text'];
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type Provider_TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type Provider_TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type Provider_TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type Provider_TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "transaction" */
export type Provider_Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Transaction_Max_Order_By>;
  min?: InputMaybe<Provider_Transaction_Min_Order_By>;
  stddev?: InputMaybe<Provider_Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Transaction_Variance_Order_By>;
};

/** order by avg() on columns of table "transaction" */
export type Provider_Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Provider_Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Transaction_Bool_Exp>>;
  _not?: InputMaybe<Provider_Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Transaction_Bool_Exp>>;
  block?: InputMaybe<Provider_Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<_Text_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** order by max() on columns of table "transaction" */
export type Provider_Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "transaction" */
export type Provider_Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Provider_Transaction_Order_By = {
  block?: InputMaybe<Provider_Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Provider_Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** order by stddev() on columns of table "transaction" */
export type Provider_Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Provider_Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Provider_Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Provider_Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Transaction_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['jsonb']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Scalars['_text']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** order by sum() on columns of table "transaction" */
export type Provider_Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "transaction" */
export type Provider_Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "transaction" */
export type Provider_Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "transaction" */
export type Provider_Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Provider_Validator = {
  __typename?: 'provider_validator';
  /** An array relationship */
  blocks: Array<Provider_Block>;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Provider_Double_Sign_Vote>;
  /** An array relationship */
  pre_commits: Array<Provider_Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Provider_Pre_Commit_Aggregate;
  /** An array relationship */
  validator_commissions: Array<Provider_Validator_Commission>;
  /** An array relationship */
  validator_descriptions: Array<Provider_Validator_Description>;
  /** An object relationship */
  validator_info?: Maybe<Provider_Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Provider_Validator_Info>;
  /** An array relationship */
  validator_signing_infos: Array<Provider_Validator_Signing_Info>;
  /** An array relationship */
  validator_statuses: Array<Provider_Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Provider_Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Provider_Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Provider_Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Provider_Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Block_Order_By>>;
  where?: InputMaybe<Provider_Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Pre_Commit_Order_By>>;
  where?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Commission_Order_By>>;
  where?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Description_Order_By>>;
  where?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Status_Order_By>>;
  where?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type Provider_ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Bool_Exp>>;
  blocks?: InputMaybe<Provider_Block_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Provider_Double_Sign_Vote_Bool_Exp>;
  pre_commits?: InputMaybe<Provider_Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  validator_commissions?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
  validator_descriptions?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
  validator_info?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
  validator_statuses?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Provider_Validator_Commission = {
  __typename?: 'provider_validator_commission';
  commission: Scalars['numeric'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['bigint'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
};

/** order by aggregate values of table "validator_commission" */
export type Provider_Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Provider_Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Validator_Commission_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Provider_Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_commission" */
export enum Provider_Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Provider_Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_commission" */
export type Provider_Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_description" */
export type Provider_Validator_Description = {
  __typename?: 'provider_validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "validator_description" */
export type Provider_Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Description_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Provider_Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Validator_Description_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_description" */
export type Provider_Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_description" */
export type Provider_Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_description" */
export type Provider_Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_description". */
export type Provider_Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Provider_Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** order by stddev() on columns of table "validator_description" */
export type Provider_Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Provider_Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Provider_Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Provider_Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  identity?: InputMaybe<Scalars['String']>;
  moniker?: InputMaybe<Scalars['String']>;
  security_contact?: InputMaybe<Scalars['String']>;
  validator_address?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_description" */
export type Provider_Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Provider_Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Provider_Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_description" */
export type Provider_Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Provider_Validator_Info = {
  __typename?: 'provider_validator_info';
  /** An object relationship */
  account?: Maybe<Provider_Account>;
  consensus_address: Scalars['String'];
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Provider_Validator;
};

/** order by aggregate values of table "validator_info" */
export type Provider_Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Info_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Info_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Provider_Account_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
};

/** order by max() on columns of table "validator_info" */
export type Provider_Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_info" */
export type Provider_Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_info". */
export type Provider_Validator_Info_Order_By = {
  account?: InputMaybe<Provider_Account_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
};

/** select columns of table "validator_info" */
export enum Provider_Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** Streaming cursor of the table "validator_info" */
export type Provider_Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  max_change_rate?: InputMaybe<Scalars['String']>;
  max_rate?: InputMaybe<Scalars['String']>;
  operator_address?: InputMaybe<Scalars['String']>;
  self_delegate_address?: InputMaybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator". */
export type Provider_Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Provider_Block_Aggregate_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Provider_Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Provider_Pre_Commit_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Provider_Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Provider_Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Provider_Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Provider_Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Provider_Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Provider_Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Provider_Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator" */
export enum Provider_Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** columns and relationships of "validator_signing_info" */
export type Provider_Validator_Signing_Info = {
  __typename?: 'provider_validator_signing_info';
  height: Scalars['bigint'];
  index_offset: Scalars['bigint'];
  jailed_until: Scalars['timestamp'];
  missed_blocks_counter: Scalars['bigint'];
  start_height: Scalars['bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

/** order by aggregate values of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Provider_Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Validator_Signing_Info_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Provider_Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_signing_info" */
export enum Provider_Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Signing_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  jailed_until?: InputMaybe<Scalars['timestamp']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
  tombstoned?: InputMaybe<Scalars['Boolean']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Provider_Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Provider_Validator_Status = {
  __typename?: 'provider_validator_status';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Provider_Validator_Status_Aggregate = {
  __typename?: 'provider_validator_status_aggregate';
  aggregate?: Maybe<Provider_Validator_Status_Aggregate_Fields>;
  nodes: Array<Provider_Validator_Status>;
};

/** aggregate fields of "validator_status" */
export type Provider_Validator_Status_Aggregate_Fields = {
  __typename?: 'provider_validator_status_aggregate_fields';
  avg?: Maybe<Provider_Validator_Status_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Provider_Validator_Status_Max_Fields>;
  min?: Maybe<Provider_Validator_Status_Min_Fields>;
  stddev?: Maybe<Provider_Validator_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Provider_Validator_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Provider_Validator_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Provider_Validator_Status_Sum_Fields>;
  var_pop?: Maybe<Provider_Validator_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Provider_Validator_Status_Var_Samp_Fields>;
  variance?: Maybe<Provider_Validator_Status_Variance_Fields>;
};


/** aggregate fields of "validator_status" */
export type Provider_Validator_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Provider_Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Status_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Provider_Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Validator_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Provider_Validator_Status_Avg_Fields = {
  __typename?: 'provider_validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Provider_Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Provider_Validator_Status_Max_Fields = {
  __typename?: 'provider_validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_status" */
export type Provider_Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Provider_Validator_Status_Min_Fields = {
  __typename?: 'provider_validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_status" */
export type Provider_Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_status". */
export type Provider_Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Provider_Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** aggregate stddev on columns */
export type Provider_Validator_Status_Stddev_Fields = {
  __typename?: 'provider_validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Provider_Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Provider_Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'provider_validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Provider_Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Provider_Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'provider_validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Provider_Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Provider_Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Provider_Validator_Status_Sum_Fields = {
  __typename?: 'provider_validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator_status" */
export type Provider_Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Provider_Validator_Status_Var_Pop_Fields = {
  __typename?: 'provider_validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Provider_Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Provider_Validator_Status_Var_Samp_Fields = {
  __typename?: 'provider_validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Provider_Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Provider_Validator_Status_Variance_Fields = {
  __typename?: 'provider_validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Provider_Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Provider_Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  consensus_pubkey?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "validator_voting_power" */
export type Provider_Validator_Voting_Power = {
  __typename?: 'provider_validator_voting_power';
  /** An object relationship */
  block: Provider_Block;
  height: Scalars['bigint'];
  /** An object relationship */
  validator: Provider_Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Provider_Validator_Voting_Power_Aggregate = {
  __typename?: 'provider_validator_voting_power_aggregate';
  aggregate?: Maybe<Provider_Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Provider_Validator_Voting_Power>;
};

/** aggregate fields of "validator_voting_power" */
export type Provider_Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'provider_validator_voting_power_aggregate_fields';
  avg?: Maybe<Provider_Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Provider_Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Provider_Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Provider_Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Provider_Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Provider_Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Provider_Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Provider_Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Provider_Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Provider_Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Provider_Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Provider_Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Provider_Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Validator_Voting_Power_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Provider_Validator_Voting_Power_Avg_Fields = {
  __typename?: 'provider_validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Provider_Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Provider_Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Provider_Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Provider_Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Provider_Validator_Voting_Power_Max_Fields = {
  __typename?: 'provider_validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Provider_Validator_Voting_Power_Min_Fields = {
  __typename?: 'provider_validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Provider_Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Provider_Block_Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Provider_Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Provider_Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Provider_Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'provider_validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Provider_Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'provider_validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Provider_Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'provider_validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Provider_Validator_Voting_Power_Sum_Fields = {
  __typename?: 'provider_validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Provider_Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'provider_validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Provider_Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'provider_validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Provider_Validator_Voting_Power_Variance_Fields = {
  __typename?: 'provider_validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Provider_Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Provider_Vesting_Account = {
  __typename?: 'provider_vesting_account';
  /** An object relationship */
  account: Provider_Account;
  address: Scalars['String'];
  end_time: Scalars['timestamp'];
  original_vesting: Scalars['_coin'];
  start_time?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
  /** An array relationship */
  vesting_periods: Array<Provider_Vesting_Period>;
};


/** columns and relationships of "vesting_account" */
export type Provider_Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Provider_Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Provider_Vesting_Period_Order_By>>;
  where?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
};

/** order by aggregate values of table "vesting_account" */
export type Provider_Vesting_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Vesting_Account_Max_Order_By>;
  min?: InputMaybe<Provider_Vesting_Account_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Provider_Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Provider_Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  original_vesting?: InputMaybe<_Coin_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
};

/** order by max() on columns of table "vesting_account" */
export type Provider_Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_account" */
export type Provider_Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Provider_Vesting_Account_Order_By = {
  account?: InputMaybe<Provider_Account_Order_By>;
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vesting_periods_aggregate?: InputMaybe<Provider_Vesting_Period_Aggregate_Order_By>;
};

/** select columns of table "vesting_account" */
export enum Provider_Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "vesting_account" */
export type Provider_Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Vesting_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Vesting_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  original_vesting?: InputMaybe<Scalars['_coin']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  type?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "vesting_period" */
export type Provider_Vesting_Period = {
  __typename?: 'provider_vesting_period';
  amount: Scalars['_coin'];
  length: Scalars['bigint'];
  period_order: Scalars['bigint'];
  /** An object relationship */
  vesting_account: Provider_Vesting_Account;
};

/** order by aggregate values of table "vesting_period" */
export type Provider_Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Provider_Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Provider_Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Provider_Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Provider_Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Provider_Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Provider_Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Provider_Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Provider_Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Provider_Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Provider_Vesting_Period_Variance_Order_By>;
};

/** order by avg() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Provider_Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Provider_Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  length?: InputMaybe<Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Provider_Vesting_Account_Bool_Exp>;
};

/** order by max() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Provider_Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account?: InputMaybe<Provider_Vesting_Account_Order_By>;
};

/** select columns of table "vesting_period" */
export enum Provider_Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order'
}

/** order by stddev() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vesting_period" */
export type Provider_Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Vesting_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Provider_Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']>;
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "vesting_period" */
export type Provider_Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  action_account_balance?: Maybe<ActionBalance>;
  action_delegation?: Maybe<ActionDelegationResponse>;
  action_delegation_reward?: Maybe<Array<Maybe<ActionDelegationReward>>>;
  action_delegation_total?: Maybe<ActionBalance>;
  action_delegator_withdraw_address: ActionAddress;
  action_redelegation?: Maybe<ActionRedelegationResponse>;
  action_unbonding_delegation?: Maybe<ActionUnbondingDelegationResponse>;
  action_unbonding_delegation_total?: Maybe<ActionBalance>;
  action_validator_commission_amount?: Maybe<ActionValidatorCommissionAmount>;
  action_validator_delegations?: Maybe<ActionDelegationResponse>;
  action_validator_redelegations_from?: Maybe<ActionRedelegationResponse>;
  action_validator_unbonding_delegations?: Maybe<ActionUnbondingDelegationResponse>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  bdjuno_provider?: Maybe<Bdjuno_Providerquery_Root>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table: "ccv_validator" */
  ccv_validator: Array<Ccv_Validator>;
  /** fetch aggregated fields from the table: "ccv_validator" */
  ccv_validator_aggregate: Ccv_Validator_Aggregate;
  /** fetch data from the table: "ccv_validator" using primary key columns */
  ccv_validator_by_pk?: Maybe<Ccv_Validator>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_single_address" which returns "message" */
  messages_by_single_address: Array<Message>;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  provider?: Maybe<Provider_Provider_Query>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Account_BalanceArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_RewardArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Delegator_Withdraw_AddressArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_RedelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_DelegationArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Unbonding_Delegation_TotalArgs = {
  address: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Commission_AmountArgs = {
  address: Scalars['String'];
};


export type Query_RootAction_Validator_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Redelegations_FromArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAction_Validator_Unbonding_DelegationsArgs = {
  address: Scalars['String'];
  count_total?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type Query_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Query_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Query_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Query_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Query_RootCcv_ValidatorArgs = {
  distinct_on?: InputMaybe<Array<Ccv_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ccv_Validator_Order_By>>;
  where?: InputMaybe<Ccv_Validator_Bool_Exp>;
};


export type Query_RootCcv_Validator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ccv_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ccv_Validator_Order_By>>;
  where?: InputMaybe<Ccv_Validator_Bool_Exp>;
};


export type Query_RootCcv_Validator_By_PkArgs = {
  consumer_consensus_address: Scalars['String'];
};


export type Query_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Query_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Query_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Query_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Query_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Query_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Query_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Query_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Query_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessages_By_Single_AddressArgs = {
  args: Messages_By_Single_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Query_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Query_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Query_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Query_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Query_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Query_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Query_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Query_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Query_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Query_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Query_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Query_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Query_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Query_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Query_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Query_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Query_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Query_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Query_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Query_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Query_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Query_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Query_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Query_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Query_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Query_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Query_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "slashing_params" */
export type Slashing_Params = {
  __typename?: 'slashing_params';
  height: Scalars['bigint'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "slashing_params" */
export type Slashing_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "slashing_params". All fields are combined with a logical 'AND'. */
export type Slashing_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  _not?: InputMaybe<Slashing_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Slashing_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "slashing_params". */
export type Slashing_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "slashing_params" */
export enum Slashing_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "slashing_params" */
export type Slashing_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Slashing_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Slashing_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "software_upgrade_plan" */
export type Software_Upgrade_Plan = {
  __typename?: 'software_upgrade_plan';
  height: Scalars['bigint'];
  info: Scalars['String'];
  plan_name: Scalars['String'];
  /** An object relationship */
  proposal?: Maybe<Proposal>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height: Scalars['bigint'];
};

/** aggregated selection of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate = {
  __typename?: 'software_upgrade_plan_aggregate';
  aggregate?: Maybe<Software_Upgrade_Plan_Aggregate_Fields>;
  nodes: Array<Software_Upgrade_Plan>;
};

/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_Fields = {
  __typename?: 'software_upgrade_plan_aggregate_fields';
  avg?: Maybe<Software_Upgrade_Plan_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Software_Upgrade_Plan_Max_Fields>;
  min?: Maybe<Software_Upgrade_Plan_Min_Fields>;
  stddev?: Maybe<Software_Upgrade_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Software_Upgrade_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Software_Upgrade_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Software_Upgrade_Plan_Sum_Fields>;
  var_pop?: Maybe<Software_Upgrade_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Software_Upgrade_Plan_Var_Samp_Fields>;
  variance?: Maybe<Software_Upgrade_Plan_Variance_Fields>;
};


/** aggregate fields of "software_upgrade_plan" */
export type Software_Upgrade_Plan_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Software_Upgrade_Plan_Avg_Fields = {
  __typename?: 'software_upgrade_plan_avg_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "software_upgrade_plan". All fields are combined with a logical 'AND'. */
export type Software_Upgrade_Plan_Bool_Exp = {
  _and?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  _not?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
  _or?: InputMaybe<Array<Software_Upgrade_Plan_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  info?: InputMaybe<String_Comparison_Exp>;
  plan_name?: InputMaybe<String_Comparison_Exp>;
  proposal?: InputMaybe<Proposal_Bool_Exp>;
  proposal_id?: InputMaybe<Int_Comparison_Exp>;
  upgrade_height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Software_Upgrade_Plan_Max_Fields = {
  __typename?: 'software_upgrade_plan_max_fields';
  height?: Maybe<Scalars['bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Software_Upgrade_Plan_Min_Fields = {
  __typename?: 'software_upgrade_plan_min_fields';
  height?: Maybe<Scalars['bigint']>;
  info?: Maybe<Scalars['String']>;
  plan_name?: Maybe<Scalars['String']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "software_upgrade_plan". */
export type Software_Upgrade_Plan_Order_By = {
  height?: InputMaybe<Order_By>;
  info?: InputMaybe<Order_By>;
  plan_name?: InputMaybe<Order_By>;
  proposal?: InputMaybe<Proposal_Order_By>;
  proposal_id?: InputMaybe<Order_By>;
  upgrade_height?: InputMaybe<Order_By>;
};

/** select columns of table "software_upgrade_plan" */
export enum Software_Upgrade_Plan_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Info = 'info',
  /** column name */
  PlanName = 'plan_name',
  /** column name */
  ProposalId = 'proposal_id',
  /** column name */
  UpgradeHeight = 'upgrade_height'
}

/** aggregate stddev on columns */
export type Software_Upgrade_Plan_Stddev_Fields = {
  __typename?: 'software_upgrade_plan_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Software_Upgrade_Plan_Stddev_Pop_Fields = {
  __typename?: 'software_upgrade_plan_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Software_Upgrade_Plan_Stddev_Samp_Fields = {
  __typename?: 'software_upgrade_plan_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "software_upgrade_plan" */
export type Software_Upgrade_Plan_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Software_Upgrade_Plan_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Software_Upgrade_Plan_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  info?: InputMaybe<Scalars['String']>;
  plan_name?: InputMaybe<Scalars['String']>;
  proposal_id?: InputMaybe<Scalars['Int']>;
  upgrade_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Software_Upgrade_Plan_Sum_Fields = {
  __typename?: 'software_upgrade_plan_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  proposal_id?: Maybe<Scalars['Int']>;
  upgrade_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Software_Upgrade_Plan_Var_Pop_Fields = {
  __typename?: 'software_upgrade_plan_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Software_Upgrade_Plan_Var_Samp_Fields = {
  __typename?: 'software_upgrade_plan_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Software_Upgrade_Plan_Variance_Fields = {
  __typename?: 'software_upgrade_plan_variance_fields';
  height?: Maybe<Scalars['Float']>;
  proposal_id?: Maybe<Scalars['Float']>;
  upgrade_height?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "staking_params" */
export type Staking_Params = {
  __typename?: 'staking_params';
  height: Scalars['bigint'];
  params: Scalars['jsonb'];
};


/** columns and relationships of "staking_params" */
export type Staking_ParamsParamsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "staking_params". All fields are combined with a logical 'AND'. */
export type Staking_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  _not?: InputMaybe<Staking_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Params_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** Ordering options when selecting data from "staking_params". */
export type Staking_Params_Order_By = {
  height?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
};

/** select columns of table "staking_params" */
export enum Staking_Params_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Params = 'params'
}

/** Streaming cursor of the table "staking_params" */
export type Staking_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Params_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  params?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "staking_pool" */
export type Staking_Pool = {
  __typename?: 'staking_pool';
  bonded_tokens: Scalars['String'];
  height: Scalars['bigint'];
  not_bonded_tokens: Scalars['String'];
  staked_not_bonded_tokens: Scalars['String'];
  unbonding_tokens: Scalars['String'];
};

/** Boolean expression to filter rows from the table "staking_pool". All fields are combined with a logical 'AND'. */
export type Staking_Pool_Bool_Exp = {
  _and?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  _not?: InputMaybe<Staking_Pool_Bool_Exp>;
  _or?: InputMaybe<Array<Staking_Pool_Bool_Exp>>;
  bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  staked_not_bonded_tokens?: InputMaybe<String_Comparison_Exp>;
  unbonding_tokens?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "staking_pool". */
export type Staking_Pool_Order_By = {
  bonded_tokens?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  not_bonded_tokens?: InputMaybe<Order_By>;
  staked_not_bonded_tokens?: InputMaybe<Order_By>;
  unbonding_tokens?: InputMaybe<Order_By>;
};

/** select columns of table "staking_pool" */
export enum Staking_Pool_Select_Column {
  /** column name */
  BondedTokens = 'bonded_tokens',
  /** column name */
  Height = 'height',
  /** column name */
  NotBondedTokens = 'not_bonded_tokens',
  /** column name */
  StakedNotBondedTokens = 'staked_not_bonded_tokens',
  /** column name */
  UnbondingTokens = 'unbonding_tokens'
}

/** Streaming cursor of the table "staking_pool" */
export type Staking_Pool_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staking_Pool_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staking_Pool_Stream_Cursor_Value_Input = {
  bonded_tokens?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  not_bonded_tokens?: InputMaybe<Scalars['String']>;
  staked_not_bonded_tokens?: InputMaybe<Scalars['String']>;
  unbonding_tokens?: InputMaybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  account_stream: Array<Account>;
  /** fetch data from the table: "average_block_time_from_genesis" */
  average_block_time_from_genesis: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table in a streaming manner: "average_block_time_from_genesis" */
  average_block_time_from_genesis_stream: Array<Average_Block_Time_From_Genesis>;
  /** fetch data from the table: "average_block_time_per_day" */
  average_block_time_per_day: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_day" */
  average_block_time_per_day_stream: Array<Average_Block_Time_Per_Day>;
  /** fetch data from the table: "average_block_time_per_hour" */
  average_block_time_per_hour: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_hour" */
  average_block_time_per_hour_stream: Array<Average_Block_Time_Per_Hour>;
  /** fetch data from the table: "average_block_time_per_minute" */
  average_block_time_per_minute: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table in a streaming manner: "average_block_time_per_minute" */
  average_block_time_per_minute_stream: Array<Average_Block_Time_Per_Minute>;
  /** fetch data from the table: "block" */
  block: Array<Block>;
  /** fetch data from the table: "block" using primary key columns */
  block_by_pk?: Maybe<Block>;
  /** fetch data from the table in a streaming manner: "block" */
  block_stream: Array<Block>;
  /** fetch data from the table: "ccv_validator" */
  ccv_validator: Array<Ccv_Validator>;
  /** fetch aggregated fields from the table: "ccv_validator" */
  ccv_validator_aggregate: Ccv_Validator_Aggregate;
  /** fetch data from the table: "ccv_validator" using primary key columns */
  ccv_validator_by_pk?: Maybe<Ccv_Validator>;
  /** fetch data from the table in a streaming manner: "ccv_validator" */
  ccv_validator_stream: Array<Ccv_Validator>;
  /** fetch data from the table: "community_pool" */
  community_pool: Array<Community_Pool>;
  /** fetch data from the table in a streaming manner: "community_pool" */
  community_pool_stream: Array<Community_Pool>;
  /** fetch data from the table: "distribution_params" */
  distribution_params: Array<Distribution_Params>;
  /** fetch data from the table in a streaming manner: "distribution_params" */
  distribution_params_stream: Array<Distribution_Params>;
  /** fetch data from the table: "double_sign_evidence" */
  double_sign_evidence: Array<Double_Sign_Evidence>;
  /** fetch data from the table in a streaming manner: "double_sign_evidence" */
  double_sign_evidence_stream: Array<Double_Sign_Evidence>;
  /** fetch data from the table: "double_sign_vote" */
  double_sign_vote: Array<Double_Sign_Vote>;
  /** fetch data from the table in a streaming manner: "double_sign_vote" */
  double_sign_vote_stream: Array<Double_Sign_Vote>;
  /** fetch data from the table: "fee_grant_allowance" */
  fee_grant_allowance: Array<Fee_Grant_Allowance>;
  /** fetch data from the table in a streaming manner: "fee_grant_allowance" */
  fee_grant_allowance_stream: Array<Fee_Grant_Allowance>;
  /** fetch data from the table: "genesis" */
  genesis: Array<Genesis>;
  /** fetch data from the table in a streaming manner: "genesis" */
  genesis_stream: Array<Genesis>;
  /** fetch data from the table: "gov_params" */
  gov_params: Array<Gov_Params>;
  /** fetch data from the table in a streaming manner: "gov_params" */
  gov_params_stream: Array<Gov_Params>;
  /** fetch data from the table: "inflation" */
  inflation: Array<Inflation>;
  /** fetch aggregated fields from the table: "inflation" */
  inflation_aggregate: Inflation_Aggregate;
  /** fetch data from the table: "inflation" using primary key columns */
  inflation_by_pk?: Maybe<Inflation>;
  /** fetch data from the table in a streaming manner: "inflation" */
  inflation_stream: Array<Inflation>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** execute function "messages_by_address" which returns "message" */
  messages_by_address: Array<Message>;
  /** execute function "messages_by_single_address" which returns "message" */
  messages_by_single_address: Array<Message>;
  /** fetch data from the table: "mint_params" */
  mint_params: Array<Mint_Params>;
  /** fetch data from the table in a streaming manner: "mint_params" */
  mint_params_stream: Array<Mint_Params>;
  /** fetch data from the table: "modules" */
  modules: Array<Modules>;
  /** fetch data from the table: "modules" using primary key columns */
  modules_by_pk?: Maybe<Modules>;
  /** fetch data from the table in a streaming manner: "modules" */
  modules_stream: Array<Modules>;
  /** fetch data from the table: "pre_commit" */
  pre_commit: Array<Pre_Commit>;
  /** fetch aggregated fields from the table: "pre_commit" */
  pre_commit_aggregate: Pre_Commit_Aggregate;
  /** fetch data from the table in a streaming manner: "pre_commit" */
  pre_commit_stream: Array<Pre_Commit>;
  /** fetch data from the table: "proposal" */
  proposal: Array<Proposal>;
  /** fetch aggregated fields from the table: "proposal" */
  proposal_aggregate: Proposal_Aggregate;
  /** fetch data from the table: "proposal" using primary key columns */
  proposal_by_pk?: Maybe<Proposal>;
  /** fetch data from the table: "proposal_deposit" */
  proposal_deposit: Array<Proposal_Deposit>;
  /** fetch data from the table in a streaming manner: "proposal_deposit" */
  proposal_deposit_stream: Array<Proposal_Deposit>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table: "proposal_staking_pool_snapshot" using primary key columns */
  proposal_staking_pool_snapshot_by_pk?: Maybe<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_staking_pool_snapshot" */
  proposal_staking_pool_snapshot_stream: Array<Proposal_Staking_Pool_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal" */
  proposal_stream: Array<Proposal>;
  /** fetch data from the table: "proposal_tally_result" */
  proposal_tally_result: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_tally_result" using primary key columns */
  proposal_tally_result_by_pk?: Maybe<Proposal_Tally_Result>;
  /** fetch data from the table in a streaming manner: "proposal_tally_result" */
  proposal_tally_result_stream: Array<Proposal_Tally_Result>;
  /** fetch data from the table: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table in a streaming manner: "proposal_validator_status_snapshot" */
  proposal_validator_status_snapshot_stream: Array<Proposal_Validator_Status_Snapshot>;
  /** fetch data from the table: "proposal_vote" */
  proposal_vote: Array<Proposal_Vote>;
  /** fetch data from the table in a streaming manner: "proposal_vote" */
  proposal_vote_stream: Array<Proposal_Vote>;
  provider?: Maybe<Provider_Provider_Subscription>;
  /** fetch data from the table: "slashing_params" */
  slashing_params: Array<Slashing_Params>;
  /** fetch data from the table in a streaming manner: "slashing_params" */
  slashing_params_stream: Array<Slashing_Params>;
  /** fetch data from the table: "software_upgrade_plan" */
  software_upgrade_plan: Array<Software_Upgrade_Plan>;
  /** fetch aggregated fields from the table: "software_upgrade_plan" */
  software_upgrade_plan_aggregate: Software_Upgrade_Plan_Aggregate;
  /** fetch data from the table in a streaming manner: "software_upgrade_plan" */
  software_upgrade_plan_stream: Array<Software_Upgrade_Plan>;
  /** fetch data from the table: "staking_params" */
  staking_params: Array<Staking_Params>;
  /** fetch data from the table in a streaming manner: "staking_params" */
  staking_params_stream: Array<Staking_Params>;
  /** fetch data from the table: "staking_pool" */
  staking_pool: Array<Staking_Pool>;
  /** fetch data from the table in a streaming manner: "staking_pool" */
  staking_pool_stream: Array<Staking_Pool>;
  /** fetch data from the table: "supply" */
  supply: Array<Supply>;
  /** fetch data from the table in a streaming manner: "supply" */
  supply_stream: Array<Supply>;
  /** fetch data from the table: "token" */
  token: Array<Token>;
  /** fetch data from the table: "token_price" */
  token_price: Array<Token_Price>;
  /** fetch data from the table: "token_price_history" */
  token_price_history: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price_history" */
  token_price_history_stream: Array<Token_Price_History>;
  /** fetch data from the table in a streaming manner: "token_price" */
  token_price_stream: Array<Token_Price>;
  /** fetch data from the table in a streaming manner: "token" */
  token_stream: Array<Token>;
  /** fetch data from the table: "token_unit" */
  token_unit: Array<Token_Unit>;
  /** fetch data from the table in a streaming manner: "token_unit" */
  token_unit_stream: Array<Token_Unit>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "validator" */
  validator: Array<Validator>;
  /** fetch data from the table: "validator" using primary key columns */
  validator_by_pk?: Maybe<Validator>;
  /** fetch data from the table: "validator_commission" */
  validator_commission: Array<Validator_Commission>;
  /** fetch data from the table: "validator_commission" using primary key columns */
  validator_commission_by_pk?: Maybe<Validator_Commission>;
  /** fetch data from the table in a streaming manner: "validator_commission" */
  validator_commission_stream: Array<Validator_Commission>;
  /** fetch data from the table: "validator_description" */
  validator_description: Array<Validator_Description>;
  /** fetch data from the table: "validator_description" using primary key columns */
  validator_description_by_pk?: Maybe<Validator_Description>;
  /** fetch data from the table in a streaming manner: "validator_description" */
  validator_description_stream: Array<Validator_Description>;
  /** fetch data from the table: "validator_info" */
  validator_info: Array<Validator_Info>;
  /** fetch data from the table: "validator_info" using primary key columns */
  validator_info_by_pk?: Maybe<Validator_Info>;
  /** fetch data from the table in a streaming manner: "validator_info" */
  validator_info_stream: Array<Validator_Info>;
  /** fetch data from the table: "validator_signing_info" */
  validator_signing_info: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_signing_info" using primary key columns */
  validator_signing_info_by_pk?: Maybe<Validator_Signing_Info>;
  /** fetch data from the table in a streaming manner: "validator_signing_info" */
  validator_signing_info_stream: Array<Validator_Signing_Info>;
  /** fetch data from the table: "validator_status" */
  validator_status: Array<Validator_Status>;
  /** fetch aggregated fields from the table: "validator_status" */
  validator_status_aggregate: Validator_Status_Aggregate;
  /** fetch data from the table: "validator_status" using primary key columns */
  validator_status_by_pk?: Maybe<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator_status" */
  validator_status_stream: Array<Validator_Status>;
  /** fetch data from the table in a streaming manner: "validator" */
  validator_stream: Array<Validator>;
  /** fetch data from the table: "validator_voting_power" */
  validator_voting_power: Array<Validator_Voting_Power>;
  /** fetch aggregated fields from the table: "validator_voting_power" */
  validator_voting_power_aggregate: Validator_Voting_Power_Aggregate;
  /** fetch data from the table: "validator_voting_power" using primary key columns */
  validator_voting_power_by_pk?: Maybe<Validator_Voting_Power>;
  /** fetch data from the table in a streaming manner: "validator_voting_power" */
  validator_voting_power_stream: Array<Validator_Voting_Power>;
  /** fetch data from the table: "vesting_account" */
  vesting_account: Array<Vesting_Account>;
  /** fetch data from the table in a streaming manner: "vesting_account" */
  vesting_account_stream: Array<Vesting_Account>;
  /** fetch data from the table: "vesting_period" */
  vesting_period: Array<Vesting_Period>;
  /** fetch data from the table in a streaming manner: "vesting_period" */
  vesting_period_stream: Array<Vesting_Period>;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  address: Scalars['String'];
};


export type Subscription_RootAccount_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_GenesisArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_From_Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_From_Genesis_Order_By>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_From_Genesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_From_Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_From_Genesis_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_DayArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Day_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Day_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Day_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Day_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Day_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_HourArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Hour_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Hour_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Hour_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Hour_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Hour_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_MinuteArgs = {
  distinct_on?: InputMaybe<Array<Average_Block_Time_Per_Minute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Average_Block_Time_Per_Minute_Order_By>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootAverage_Block_Time_Per_Minute_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Average_Block_Time_Per_Minute_Stream_Cursor_Input>>;
  where?: InputMaybe<Average_Block_Time_Per_Minute_Bool_Exp>;
};


export type Subscription_RootBlockArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootBlock_By_PkArgs = {
  height: Scalars['bigint'];
};


export type Subscription_RootBlock_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Block_Stream_Cursor_Input>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


export type Subscription_RootCcv_ValidatorArgs = {
  distinct_on?: InputMaybe<Array<Ccv_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ccv_Validator_Order_By>>;
  where?: InputMaybe<Ccv_Validator_Bool_Exp>;
};


export type Subscription_RootCcv_Validator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ccv_Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ccv_Validator_Order_By>>;
  where?: InputMaybe<Ccv_Validator_Bool_Exp>;
};


export type Subscription_RootCcv_Validator_By_PkArgs = {
  consumer_consensus_address: Scalars['String'];
};


export type Subscription_RootCcv_Validator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ccv_Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Ccv_Validator_Bool_Exp>;
};


export type Subscription_RootCommunity_PoolArgs = {
  distinct_on?: InputMaybe<Array<Community_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Community_Pool_Order_By>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootCommunity_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Community_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Community_Pool_Bool_Exp>;
};


export type Subscription_RootDistribution_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Distribution_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Distribution_Params_Order_By>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDistribution_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Distribution_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Distribution_Params_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_EvidenceArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Evidence_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Evidence_Order_By>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Evidence_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Double_Sign_Evidence_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Evidence_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_VoteArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootDouble_Sign_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Double_Sign_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


export type Subscription_RootFee_Grant_AllowanceArgs = {
  distinct_on?: InputMaybe<Array<Fee_Grant_Allowance_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Fee_Grant_Allowance_Order_By>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootFee_Grant_Allowance_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Fee_Grant_Allowance_Stream_Cursor_Input>>;
  where?: InputMaybe<Fee_Grant_Allowance_Bool_Exp>;
};


export type Subscription_RootGenesisArgs = {
  distinct_on?: InputMaybe<Array<Genesis_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Genesis_Order_By>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGenesis_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Genesis_Stream_Cursor_Input>>;
  where?: InputMaybe<Genesis_Bool_Exp>;
};


export type Subscription_RootGov_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Gov_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Gov_Params_Order_By>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootGov_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Gov_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Gov_Params_Bool_Exp>;
};


export type Subscription_RootInflationArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Inflation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Inflation_Order_By>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootInflation_By_PkArgs = {
  one_row_id: Scalars['Boolean'];
};


export type Subscription_RootInflation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Inflation_Stream_Cursor_Input>>;
  where?: InputMaybe<Inflation_Bool_Exp>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_AddressArgs = {
  args: Messages_By_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessages_By_Single_AddressArgs = {
  args: Messages_By_Single_Address_Args;
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMint_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Mint_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Mint_Params_Order_By>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootMint_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Mint_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Mint_Params_Bool_Exp>;
};


export type Subscription_RootModulesArgs = {
  distinct_on?: InputMaybe<Array<Modules_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Modules_Order_By>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootModules_By_PkArgs = {
  module_name: Scalars['String'];
};


export type Subscription_RootModules_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Modules_Stream_Cursor_Input>>;
  where?: InputMaybe<Modules_Bool_Exp>;
};


export type Subscription_RootPre_CommitArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootPre_Commit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Pre_Commit_Stream_Cursor_Input>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


export type Subscription_RootProposalArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Order_By>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProposal_DepositArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Deposit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Deposit_Order_By>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Deposit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Deposit_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Deposit_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Staking_Pool_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Staking_Pool_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Staking_Pool_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Staking_Pool_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_ResultArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Tally_Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Tally_Result_Order_By>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Tally_Result_By_PkArgs = {
  proposal_id: Scalars['Int'];
};


export type Subscription_RootProposal_Tally_Result_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Tally_Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Tally_Result_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_SnapshotArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_Validator_Status_Snapshot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Validator_Status_Snapshot_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


export type Subscription_RootProposal_VoteArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Vote_Order_By>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootProposal_Vote_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Proposal_Vote_Stream_Cursor_Input>>;
  where?: InputMaybe<Proposal_Vote_Bool_Exp>;
};


export type Subscription_RootSlashing_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Slashing_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Slashing_Params_Order_By>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSlashing_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Slashing_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Slashing_Params_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_PlanArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Software_Upgrade_Plan_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Software_Upgrade_Plan_Order_By>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootSoftware_Upgrade_Plan_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Software_Upgrade_Plan_Stream_Cursor_Input>>;
  where?: InputMaybe<Software_Upgrade_Plan_Bool_Exp>;
};


export type Subscription_RootStaking_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Staking_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Params_Order_By>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_Params_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Staking_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Params_Bool_Exp>;
};


export type Subscription_RootStaking_PoolArgs = {
  distinct_on?: InputMaybe<Array<Staking_Pool_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staking_Pool_Order_By>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootStaking_Pool_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Staking_Pool_Stream_Cursor_Input>>;
  where?: InputMaybe<Staking_Pool_Bool_Exp>;
};


export type Subscription_RootSupplyArgs = {
  distinct_on?: InputMaybe<Array<Supply_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Supply_Order_By>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootSupply_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Supply_Stream_Cursor_Input>>;
  where?: InputMaybe<Supply_Bool_Exp>;
};


export type Subscription_RootTokenArgs = {
  distinct_on?: InputMaybe<Array<Token_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Order_By>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_PriceArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_Price_HistoryArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_History_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Price_History_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


export type Subscription_RootToken_Price_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Price_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};


export type Subscription_RootToken_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Bool_Exp>;
};


export type Subscription_RootToken_UnitArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootToken_Unit_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Token_Unit_Stream_Cursor_Input>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootValidatorArgs = {
  distinct_on?: InputMaybe<Array<Validator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Order_By>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_CommissionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_Commission_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Commission_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Commission_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


export type Subscription_RootValidator_DescriptionArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_Description_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Description_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Description_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


export type Subscription_RootValidator_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Info_By_PkArgs = {
  consensus_address: Scalars['String'];
};


export type Subscription_RootValidator_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_InfoArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_Signing_Info_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Signing_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Signing_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


export type Subscription_RootValidator_StatusArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_Status_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Status_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


export type Subscription_RootValidator_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_PowerArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootValidator_Voting_Power_By_PkArgs = {
  validator_address: Scalars['String'];
};


export type Subscription_RootValidator_Voting_Power_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Validator_Voting_Power_Stream_Cursor_Input>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


export type Subscription_RootVesting_AccountArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Account_Order_By>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_Account_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vesting_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Account_Bool_Exp>;
};


export type Subscription_RootVesting_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};


export type Subscription_RootVesting_Period_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Vesting_Period_Stream_Cursor_Input>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** columns and relationships of "supply" */
export type Supply = {
  __typename?: 'supply';
  coins: Scalars['_coin'];
  height: Scalars['bigint'];
};

/** Boolean expression to filter rows from the table "supply". All fields are combined with a logical 'AND'. */
export type Supply_Bool_Exp = {
  _and?: InputMaybe<Array<Supply_Bool_Exp>>;
  _not?: InputMaybe<Supply_Bool_Exp>;
  _or?: InputMaybe<Array<Supply_Bool_Exp>>;
  coins?: InputMaybe<_Coin_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
};

/** Ordering options when selecting data from "supply". */
export type Supply_Order_By = {
  coins?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** select columns of table "supply" */
export enum Supply_Select_Column {
  /** column name */
  Coins = 'coins',
  /** column name */
  Height = 'height'
}

/** Streaming cursor of the table "supply" */
export type Supply_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Supply_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supply_Stream_Cursor_Value_Input = {
  coins?: InputMaybe<Scalars['_coin']>;
  height?: InputMaybe<Scalars['bigint']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "token" */
export type Token = {
  __typename?: 'token';
  name: Scalars['String'];
  /** An array relationship */
  token_units: Array<Token_Unit>;
};


/** columns and relationships of "token" */
export type TokenToken_UnitsArgs = {
  distinct_on?: InputMaybe<Array<Token_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Unit_Order_By>>;
  where?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "token". All fields are combined with a logical 'AND'. */
export type Token_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Bool_Exp>>;
  _not?: InputMaybe<Token_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  token_units?: InputMaybe<Token_Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "token". */
export type Token_Order_By = {
  name?: InputMaybe<Order_By>;
  token_units_aggregate?: InputMaybe<Token_Unit_Aggregate_Order_By>;
};

/** columns and relationships of "token_price" */
export type Token_Price = {
  __typename?: 'token_price';
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** order by aggregate values of table "token_price" */
export type Token_Price_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_Max_Order_By>;
  min?: InputMaybe<Token_Price_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_Variance_Order_By>;
};

/** order by avg() on columns of table "token_price" */
export type Token_Price_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price". All fields are combined with a logical 'AND'. */
export type Token_Price_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_Bool_Exp>>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "token_price_history" */
export type Token_Price_History = {
  __typename?: 'token_price_history';
  market_cap: Scalars['bigint'];
  price: Scalars['numeric'];
  timestamp: Scalars['timestamp'];
  /** An object relationship */
  token_unit: Token_Unit;
  unit_name: Scalars['String'];
};

/** order by aggregate values of table "token_price_history" */
export type Token_Price_History_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Price_History_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Price_History_Max_Order_By>;
  min?: InputMaybe<Token_Price_History_Min_Order_By>;
  stddev?: InputMaybe<Token_Price_History_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Price_History_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Price_History_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Price_History_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Price_History_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Price_History_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Price_History_Variance_Order_By>;
};

/** order by avg() on columns of table "token_price_history" */
export type Token_Price_History_Avg_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_price_history". All fields are combined with a logical 'AND'. */
export type Token_Price_History_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  _not?: InputMaybe<Token_Price_History_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Price_History_Bool_Exp>>;
  market_cap?: InputMaybe<Bigint_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  token_unit?: InputMaybe<Token_Unit_Bool_Exp>;
  unit_name?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "token_price_history" */
export type Token_Price_History_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_price_history" */
export type Token_Price_History_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price_history". */
export type Token_Price_History_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price_history" */
export enum Token_Price_History_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** order by stddev() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_price_history" */
export type Token_Price_History_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price_history" */
export type Token_Price_History_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_History_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_History_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "token_price_history" */
export type Token_Price_History_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_price_history" */
export type Token_Price_History_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_price_history" */
export type Token_Price_History_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_price_history" */
export type Token_Price_History_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by max() on columns of table "token_price" */
export type Token_Price_Max_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_price" */
export type Token_Price_Min_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_price". */
export type Token_Price_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  token_unit?: InputMaybe<Token_Unit_Order_By>;
  unit_name?: InputMaybe<Order_By>;
};

/** select columns of table "token_price" */
export enum Token_Price_Select_Column {
  /** column name */
  MarketCap = 'market_cap',
  /** column name */
  Price = 'price',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UnitName = 'unit_name'
}

/** order by stddev() on columns of table "token_price" */
export type Token_Price_Stddev_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_price" */
export type Token_Price_Stddev_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_price" */
export type Token_Price_Stddev_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_price" */
export type Token_Price_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Price_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Price_Stream_Cursor_Value_Input = {
  market_cap?: InputMaybe<Scalars['bigint']>;
  price?: InputMaybe<Scalars['numeric']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  unit_name?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "token_price" */
export type Token_Price_Sum_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_price" */
export type Token_Price_Var_Pop_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_price" */
export type Token_Price_Var_Samp_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_price" */
export type Token_Price_Variance_Order_By = {
  market_cap?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** select columns of table "token" */
export enum Token_Select_Column {
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "token" */
export type Token_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Stream_Cursor_Value_Input = {
  name?: InputMaybe<Scalars['String']>;
};

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
  token_price?: Maybe<Token_Price>;
  /** An array relationship */
  token_price_histories: Array<Token_Price_History>;
  /** An array relationship */
  token_prices: Array<Token_Price>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_Price_HistoriesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_History_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_History_Order_By>>;
  where?: InputMaybe<Token_Price_History_Bool_Exp>;
};


/** columns and relationships of "token_unit" */
export type Token_UnitToken_PricesArgs = {
  distinct_on?: InputMaybe<Array<Token_Price_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Token_Price_Order_By>>;
  where?: InputMaybe<Token_Price_Bool_Exp>;
};

/** order by aggregate values of table "token_unit" */
export type Token_Unit_Aggregate_Order_By = {
  avg?: InputMaybe<Token_Unit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Token_Unit_Max_Order_By>;
  min?: InputMaybe<Token_Unit_Min_Order_By>;
  stddev?: InputMaybe<Token_Unit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Unit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Unit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Unit_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Unit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Unit_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Unit_Variance_Order_By>;
};

/** order by avg() on columns of table "token_unit" */
export type Token_Unit_Avg_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "token_unit". All fields are combined with a logical 'AND'. */
export type Token_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  _not?: InputMaybe<Token_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Token_Unit_Bool_Exp>>;
  aliases?: InputMaybe<_Text_Comparison_Exp>;
  denom?: InputMaybe<String_Comparison_Exp>;
  exponent?: InputMaybe<Int_Comparison_Exp>;
  price_id?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<Token_Bool_Exp>;
  token_name?: InputMaybe<String_Comparison_Exp>;
  token_price?: InputMaybe<Token_Price_Bool_Exp>;
  token_price_histories?: InputMaybe<Token_Price_History_Bool_Exp>;
  token_prices?: InputMaybe<Token_Price_Bool_Exp>;
};

/** order by max() on columns of table "token_unit" */
export type Token_Unit_Max_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "token_unit" */
export type Token_Unit_Min_Order_By = {
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token_name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "token_unit". */
export type Token_Unit_Order_By = {
  aliases?: InputMaybe<Order_By>;
  denom?: InputMaybe<Order_By>;
  exponent?: InputMaybe<Order_By>;
  price_id?: InputMaybe<Order_By>;
  token?: InputMaybe<Token_Order_By>;
  token_name?: InputMaybe<Order_By>;
  token_price?: InputMaybe<Token_Price_Order_By>;
  token_price_histories_aggregate?: InputMaybe<Token_Price_History_Aggregate_Order_By>;
  token_prices_aggregate?: InputMaybe<Token_Price_Aggregate_Order_By>;
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
  TokenName = 'token_name'
}

/** order by stddev() on columns of table "token_unit" */
export type Token_Unit_Stddev_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "token_unit" */
export type Token_Unit_Stddev_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "token_unit" */
export type Token_Unit_Stddev_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "token_unit" */
export type Token_Unit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Token_Unit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Token_Unit_Stream_Cursor_Value_Input = {
  aliases?: InputMaybe<Scalars['_text']>;
  denom?: InputMaybe<Scalars['String']>;
  exponent?: InputMaybe<Scalars['Int']>;
  price_id?: InputMaybe<Scalars['String']>;
  token_name?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "token_unit" */
export type Token_Unit_Sum_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "token_unit" */
export type Token_Unit_Var_Pop_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "token_unit" */
export type Token_Unit_Var_Samp_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "token_unit" */
export type Token_Unit_Variance_Order_By = {
  exponent?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  block: Block;
  fee: Scalars['jsonb'];
  gas_used?: Maybe<Scalars['bigint']>;
  gas_wanted?: Maybe<Scalars['bigint']>;
  hash: Scalars['String'];
  height: Scalars['bigint'];
  logs?: Maybe<Scalars['jsonb']>;
  memo?: Maybe<Scalars['String']>;
  messages: Scalars['jsonb'];
  /** An array relationship */
  messagesByTransactionHashPartitionId: Array<Message>;
  raw_log?: Maybe<Scalars['String']>;
  signatures: Scalars['_text'];
  signer_infos: Scalars['jsonb'];
  success: Scalars['Boolean'];
};


/** columns and relationships of "transaction" */
export type TransactionFeeArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionLogsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "transaction" */
export type TransactionMessagesByTransactionHashPartitionIdArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "transaction" */
export type TransactionSigner_InfosArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  fee?: InputMaybe<Jsonb_Comparison_Exp>;
  gas_used?: InputMaybe<Bigint_Comparison_Exp>;
  gas_wanted?: InputMaybe<Bigint_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  logs?: InputMaybe<Jsonb_Comparison_Exp>;
  memo?: InputMaybe<String_Comparison_Exp>;
  messages?: InputMaybe<Jsonb_Comparison_Exp>;
  messagesByTransactionHashPartitionId?: InputMaybe<Message_Bool_Exp>;
  raw_log?: InputMaybe<String_Comparison_Exp>;
  signatures?: InputMaybe<_Text_Comparison_Exp>;
  signer_infos?: InputMaybe<Jsonb_Comparison_Exp>;
  success?: InputMaybe<Boolean_Comparison_Exp>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  raw_log?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  fee?: InputMaybe<Order_By>;
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  memo?: InputMaybe<Order_By>;
  messages?: InputMaybe<Order_By>;
  messagesByTransactionHashPartitionId_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  raw_log?: InputMaybe<Order_By>;
  signatures?: InputMaybe<Order_By>;
  signer_infos?: InputMaybe<Order_By>;
  success?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Fee = 'fee',
  /** column name */
  GasUsed = 'gas_used',
  /** column name */
  GasWanted = 'gas_wanted',
  /** column name */
  Hash = 'hash',
  /** column name */
  Height = 'height',
  /** column name */
  Logs = 'logs',
  /** column name */
  Memo = 'memo',
  /** column name */
  Messages = 'messages',
  /** column name */
  RawLog = 'raw_log',
  /** column name */
  Signatures = 'signatures',
  /** column name */
  SignerInfos = 'signer_infos',
  /** column name */
  Success = 'success'
}

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  fee?: InputMaybe<Scalars['jsonb']>;
  gas_used?: InputMaybe<Scalars['bigint']>;
  gas_wanted?: InputMaybe<Scalars['bigint']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  logs?: InputMaybe<Scalars['jsonb']>;
  memo?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<Scalars['jsonb']>;
  raw_log?: InputMaybe<Scalars['String']>;
  signatures?: InputMaybe<Scalars['_text']>;
  signer_infos?: InputMaybe<Scalars['jsonb']>;
  success?: InputMaybe<Scalars['Boolean']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  gas_used?: InputMaybe<Order_By>;
  gas_wanted?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator" */
export type Validator = {
  __typename?: 'validator';
  /** An array relationship */
  blocks: Array<Block>;
  /** An object relationship */
  ccv_validator?: Maybe<Ccv_Validator>;
  consensus_address: Scalars['String'];
  consensus_pubkey: Scalars['String'];
  /** An array relationship */
  double_sign_votes: Array<Double_Sign_Vote>;
  /** An array relationship */
  pre_commits: Array<Pre_Commit>;
  /** An aggregate relationship */
  pre_commits_aggregate: Pre_Commit_Aggregate;
  /** An object relationship */
  proposal_validator_status_snapshot?: Maybe<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  proposal_validator_status_snapshots: Array<Proposal_Validator_Status_Snapshot>;
  /** An array relationship */
  validator_commissions: Array<Validator_Commission>;
  /** An array relationship */
  validator_descriptions: Array<Validator_Description>;
  /** An object relationship */
  validator_info?: Maybe<Validator_Info>;
  /** An array relationship */
  validator_infos: Array<Validator_Info>;
  /** An array relationship */
  validator_signing_infos: Array<Validator_Signing_Info>;
  /** An array relationship */
  validator_statuses: Array<Validator_Status>;
  /** An aggregate relationship */
  validator_statuses_aggregate: Validator_Status_Aggregate;
  /** An array relationship */
  validator_voting_powers: Array<Validator_Voting_Power>;
  /** An aggregate relationship */
  validator_voting_powers_aggregate: Validator_Voting_Power_Aggregate;
};


/** columns and relationships of "validator" */
export type ValidatorBlocksArgs = {
  distinct_on?: InputMaybe<Array<Block_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Block_Order_By>>;
  where?: InputMaybe<Block_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorDouble_Sign_VotesArgs = {
  distinct_on?: InputMaybe<Array<Double_Sign_Vote_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Double_Sign_Vote_Order_By>>;
  where?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_CommitsArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorPre_Commits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Pre_Commit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Pre_Commit_Order_By>>;
  where?: InputMaybe<Pre_Commit_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorProposal_Validator_Status_SnapshotsArgs = {
  distinct_on?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Proposal_Validator_Status_Snapshot_Order_By>>;
  where?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_CommissionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Commission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Commission_Order_By>>;
  where?: InputMaybe<Validator_Commission_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_DescriptionsArgs = {
  distinct_on?: InputMaybe<Array<Validator_Description_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Description_Order_By>>;
  where?: InputMaybe<Validator_Description_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Info_Order_By>>;
  where?: InputMaybe<Validator_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Signing_InfosArgs = {
  distinct_on?: InputMaybe<Array<Validator_Signing_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Signing_Info_Order_By>>;
  where?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Status_Order_By>>;
  where?: InputMaybe<Validator_Status_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_PowersArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};


/** columns and relationships of "validator" */
export type ValidatorValidator_Voting_Powers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Validator_Voting_Power_Order_By>>;
  where?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "validator". All fields are combined with a logical 'AND'. */
export type Validator_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Bool_Exp>>;
  _not?: InputMaybe<Validator_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Bool_Exp>>;
  blocks?: InputMaybe<Block_Bool_Exp>;
  ccv_validator?: InputMaybe<Ccv_Validator_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  consensus_pubkey?: InputMaybe<String_Comparison_Exp>;
  double_sign_votes?: InputMaybe<Double_Sign_Vote_Bool_Exp>;
  pre_commits?: InputMaybe<Pre_Commit_Bool_Exp>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Bool_Exp>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  proposal_validator_status_snapshots?: InputMaybe<Proposal_Validator_Status_Snapshot_Bool_Exp>;
  validator_commissions?: InputMaybe<Validator_Commission_Bool_Exp>;
  validator_descriptions?: InputMaybe<Validator_Description_Bool_Exp>;
  validator_info?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_infos?: InputMaybe<Validator_Info_Bool_Exp>;
  validator_signing_infos?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  validator_statuses?: InputMaybe<Validator_Status_Bool_Exp>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Bool_Exp>;
  validator_voting_powers?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp>;
};

/** columns and relationships of "validator_commission" */
export type Validator_Commission = {
  __typename?: 'validator_commission';
  commission: Scalars['numeric'];
  height: Scalars['bigint'];
  min_self_delegation: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** order by aggregate values of table "validator_commission" */
export type Validator_Commission_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Commission_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Commission_Max_Order_By>;
  min?: InputMaybe<Validator_Commission_Min_Order_By>;
  stddev?: InputMaybe<Validator_Commission_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Commission_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Commission_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Commission_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Commission_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Commission_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Commission_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_commission" */
export type Validator_Commission_Avg_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_commission". All fields are combined with a logical 'AND'. */
export type Validator_Commission_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  _not?: InputMaybe<Validator_Commission_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Commission_Bool_Exp>>;
  commission?: InputMaybe<Numeric_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  min_self_delegation?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_commission" */
export type Validator_Commission_Max_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_commission" */
export type Validator_Commission_Min_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_commission". */
export type Validator_Commission_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_commission" */
export enum Validator_Commission_Select_Column {
  /** column name */
  Commission = 'commission',
  /** column name */
  Height = 'height',
  /** column name */
  MinSelfDelegation = 'min_self_delegation',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_commission" */
export type Validator_Commission_Stddev_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_commission" */
export type Validator_Commission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Commission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Commission_Stream_Cursor_Value_Input = {
  commission?: InputMaybe<Scalars['numeric']>;
  height?: InputMaybe<Scalars['bigint']>;
  min_self_delegation?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_commission" */
export type Validator_Commission_Sum_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_commission" */
export type Validator_Commission_Var_Pop_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_commission" */
export type Validator_Commission_Var_Samp_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_commission" */
export type Validator_Commission_Variance_Order_By = {
  commission?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  min_self_delegation?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_description" */
export type Validator_Description = {
  __typename?: 'validator_description';
  avatar_url?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  height: Scalars['bigint'];
  identity?: Maybe<Scalars['String']>;
  moniker?: Maybe<Scalars['String']>;
  security_contact?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

/** order by aggregate values of table "validator_description" */
export type Validator_Description_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Description_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Description_Max_Order_By>;
  min?: InputMaybe<Validator_Description_Min_Order_By>;
  stddev?: InputMaybe<Validator_Description_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Description_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Description_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Description_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Description_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Description_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Description_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_description" */
export type Validator_Description_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_description". All fields are combined with a logical 'AND'. */
export type Validator_Description_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  _not?: InputMaybe<Validator_Description_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Description_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  identity?: InputMaybe<String_Comparison_Exp>;
  moniker?: InputMaybe<String_Comparison_Exp>;
  security_contact?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_description" */
export type Validator_Description_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_description" */
export type Validator_Description_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_description". */
export type Validator_Description_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  identity?: InputMaybe<Order_By>;
  moniker?: InputMaybe<Order_By>;
  security_contact?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** select columns of table "validator_description" */
export enum Validator_Description_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Details = 'details',
  /** column name */
  Height = 'height',
  /** column name */
  Identity = 'identity',
  /** column name */
  Moniker = 'moniker',
  /** column name */
  SecurityContact = 'security_contact',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  Website = 'website'
}

/** order by stddev() on columns of table "validator_description" */
export type Validator_Description_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_description" */
export type Validator_Description_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_description" */
export type Validator_Description_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_description" */
export type Validator_Description_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Description_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Description_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['bigint']>;
  identity?: InputMaybe<Scalars['String']>;
  moniker?: InputMaybe<Scalars['String']>;
  security_contact?: InputMaybe<Scalars['String']>;
  validator_address?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_description" */
export type Validator_Description_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_description" */
export type Validator_Description_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_description" */
export type Validator_Description_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_description" */
export type Validator_Description_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_info" */
export type Validator_Info = {
  __typename?: 'validator_info';
  /** An object relationship */
  account?: Maybe<Account>;
  consensus_address: Scalars['String'];
  max_change_rate: Scalars['String'];
  max_rate: Scalars['String'];
  operator_address: Scalars['String'];
  self_delegate_address?: Maybe<Scalars['String']>;
  /** An object relationship */
  validator: Validator;
};

/** order by aggregate values of table "validator_info" */
export type Validator_Info_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Info_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "validator_info". All fields are combined with a logical 'AND'. */
export type Validator_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Info_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  consensus_address?: InputMaybe<String_Comparison_Exp>;
  max_change_rate?: InputMaybe<String_Comparison_Exp>;
  max_rate?: InputMaybe<String_Comparison_Exp>;
  operator_address?: InputMaybe<String_Comparison_Exp>;
  self_delegate_address?: InputMaybe<String_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
};

/** order by max() on columns of table "validator_info" */
export type Validator_Info_Max_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_info" */
export type Validator_Info_Min_Order_By = {
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_info". */
export type Validator_Info_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  max_change_rate?: InputMaybe<Order_By>;
  max_rate?: InputMaybe<Order_By>;
  operator_address?: InputMaybe<Order_By>;
  self_delegate_address?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
};

/** select columns of table "validator_info" */
export enum Validator_Info_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  MaxChangeRate = 'max_change_rate',
  /** column name */
  MaxRate = 'max_rate',
  /** column name */
  OperatorAddress = 'operator_address',
  /** column name */
  SelfDelegateAddress = 'self_delegate_address'
}

/** Streaming cursor of the table "validator_info" */
export type Validator_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Info_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  max_change_rate?: InputMaybe<Scalars['String']>;
  max_rate?: InputMaybe<Scalars['String']>;
  operator_address?: InputMaybe<Scalars['String']>;
  self_delegate_address?: InputMaybe<Scalars['String']>;
};

/** Ordering options when selecting data from "validator". */
export type Validator_Order_By = {
  blocks_aggregate?: InputMaybe<Block_Aggregate_Order_By>;
  ccv_validator?: InputMaybe<Ccv_Validator_Order_By>;
  consensus_address?: InputMaybe<Order_By>;
  consensus_pubkey?: InputMaybe<Order_By>;
  double_sign_votes_aggregate?: InputMaybe<Double_Sign_Vote_Aggregate_Order_By>;
  pre_commits_aggregate?: InputMaybe<Pre_Commit_Aggregate_Order_By>;
  proposal_validator_status_snapshot?: InputMaybe<Proposal_Validator_Status_Snapshot_Order_By>;
  proposal_validator_status_snapshots_aggregate?: InputMaybe<Proposal_Validator_Status_Snapshot_Aggregate_Order_By>;
  validator_commissions_aggregate?: InputMaybe<Validator_Commission_Aggregate_Order_By>;
  validator_descriptions_aggregate?: InputMaybe<Validator_Description_Aggregate_Order_By>;
  validator_info?: InputMaybe<Validator_Info_Order_By>;
  validator_infos_aggregate?: InputMaybe<Validator_Info_Aggregate_Order_By>;
  validator_signing_infos_aggregate?: InputMaybe<Validator_Signing_Info_Aggregate_Order_By>;
  validator_statuses_aggregate?: InputMaybe<Validator_Status_Aggregate_Order_By>;
  validator_voting_powers_aggregate?: InputMaybe<Validator_Voting_Power_Aggregate_Order_By>;
};

/** select columns of table "validator" */
export enum Validator_Select_Column {
  /** column name */
  ConsensusAddress = 'consensus_address',
  /** column name */
  ConsensusPubkey = 'consensus_pubkey'
}

/** columns and relationships of "validator_signing_info" */
export type Validator_Signing_Info = {
  __typename?: 'validator_signing_info';
  height: Scalars['bigint'];
  index_offset: Scalars['bigint'];
  jailed_until: Scalars['timestamp'];
  missed_blocks_counter: Scalars['bigint'];
  start_height: Scalars['bigint'];
  tombstoned: Scalars['Boolean'];
  validator_address: Scalars['String'];
};

/** order by aggregate values of table "validator_signing_info" */
export type Validator_Signing_Info_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Signing_Info_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Signing_Info_Max_Order_By>;
  min?: InputMaybe<Validator_Signing_Info_Min_Order_By>;
  stddev?: InputMaybe<Validator_Signing_Info_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Signing_Info_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Signing_Info_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Signing_Info_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Signing_Info_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Signing_Info_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Signing_Info_Variance_Order_By>;
};

/** order by avg() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_signing_info". All fields are combined with a logical 'AND'. */
export type Validator_Signing_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  _not?: InputMaybe<Validator_Signing_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Signing_Info_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  index_offset?: InputMaybe<Bigint_Comparison_Exp>;
  jailed_until?: InputMaybe<Timestamp_Comparison_Exp>;
  missed_blocks_counter?: InputMaybe<Bigint_Comparison_Exp>;
  start_height?: InputMaybe<Bigint_Comparison_Exp>;
  tombstoned?: InputMaybe<Boolean_Comparison_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_signing_info". */
export type Validator_Signing_Info_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  jailed_until?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
  tombstoned?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_signing_info" */
export enum Validator_Signing_Info_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  IndexOffset = 'index_offset',
  /** column name */
  JailedUntil = 'jailed_until',
  /** column name */
  MissedBlocksCounter = 'missed_blocks_counter',
  /** column name */
  StartHeight = 'start_height',
  /** column name */
  Tombstoned = 'tombstoned',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** order by stddev() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_signing_info" */
export type Validator_Signing_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Signing_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Signing_Info_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  index_offset?: InputMaybe<Scalars['bigint']>;
  jailed_until?: InputMaybe<Scalars['timestamp']>;
  missed_blocks_counter?: InputMaybe<Scalars['bigint']>;
  start_height?: InputMaybe<Scalars['bigint']>;
  tombstoned?: InputMaybe<Scalars['Boolean']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "validator_signing_info" */
export type Validator_Signing_Info_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  index_offset?: InputMaybe<Order_By>;
  missed_blocks_counter?: InputMaybe<Order_By>;
  start_height?: InputMaybe<Order_By>;
};

/** columns and relationships of "validator_status" */
export type Validator_Status = {
  __typename?: 'validator_status';
  height: Scalars['bigint'];
  jailed: Scalars['Boolean'];
  status: Scalars['Int'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
};

/** aggregated selection of "validator_status" */
export type Validator_Status_Aggregate = {
  __typename?: 'validator_status_aggregate';
  aggregate?: Maybe<Validator_Status_Aggregate_Fields>;
  nodes: Array<Validator_Status>;
};

export type Validator_Status_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Validator_Status_Aggregate_Bool_Exp_Count>;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_And = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Validator_Status_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Status_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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
  columns?: InputMaybe<Array<Validator_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_status" */
export type Validator_Status_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Status_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Status_Max_Order_By>;
  min?: InputMaybe<Validator_Status_Min_Order_By>;
  stddev?: InputMaybe<Validator_Status_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Status_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Status_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Status_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Status_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Status_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Status_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Status_Avg_Fields = {
  __typename?: 'validator_status_avg_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_status" */
export type Validator_Status_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_status". All fields are combined with a logical 'AND'. */
export type Validator_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  _not?: InputMaybe<Validator_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Status_Bool_Exp>>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  jailed?: InputMaybe<Boolean_Comparison_Exp>;
  status?: InputMaybe<Int_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Status_Max_Fields = {
  __typename?: 'validator_status_max_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "validator_status" */
export type Validator_Status_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Status_Min_Fields = {
  __typename?: 'validator_status_min_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
  validator_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "validator_status" */
export type Validator_Status_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_status". */
export type Validator_Status_Order_By = {
  height?: InputMaybe<Order_By>;
  jailed?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
};

/** select columns of table "validator_status" */
export enum Validator_Status_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Jailed = 'jailed',
  /** column name */
  Status = 'status',
  /** column name */
  ValidatorAddress = 'validator_address'
}

/** select "validator_status_aggregate_bool_exp_bool_and_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** select "validator_status_aggregate_bool_exp_bool_or_arguments_columns" columns of table "validator_status" */
export enum Validator_Status_Select_Column_Validator_Status_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Jailed = 'jailed'
}

/** aggregate stddev on columns */
export type Validator_Status_Stddev_Fields = {
  __typename?: 'validator_status_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_status" */
export type Validator_Status_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Status_Stddev_Pop_Fields = {
  __typename?: 'validator_status_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_status" */
export type Validator_Status_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Status_Stddev_Samp_Fields = {
  __typename?: 'validator_status_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_status" */
export type Validator_Status_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_status" */
export type Validator_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Status_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  jailed?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['Int']>;
  validator_address?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Validator_Status_Sum_Fields = {
  __typename?: 'validator_status_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  status?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "validator_status" */
export type Validator_Status_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Status_Var_Pop_Fields = {
  __typename?: 'validator_status_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_status" */
export type Validator_Status_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Status_Var_Samp_Fields = {
  __typename?: 'validator_status_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_status" */
export type Validator_Status_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Status_Variance_Fields = {
  __typename?: 'validator_status_variance_fields';
  height?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_status" */
export type Validator_Status_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator" */
export type Validator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Stream_Cursor_Value_Input = {
  consensus_address?: InputMaybe<Scalars['String']>;
  consensus_pubkey?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "validator_voting_power" */
export type Validator_Voting_Power = {
  __typename?: 'validator_voting_power';
  /** An object relationship */
  block: Block;
  height: Scalars['bigint'];
  /** An object relationship */
  validator: Validator;
  validator_address: Scalars['String'];
  voting_power: Scalars['bigint'];
};

/** aggregated selection of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate = {
  __typename?: 'validator_voting_power_aggregate';
  aggregate?: Maybe<Validator_Voting_Power_Aggregate_Fields>;
  nodes: Array<Validator_Voting_Power>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp = {
  count?: InputMaybe<Validator_Voting_Power_Aggregate_Bool_Exp_Count>;
};

export type Validator_Voting_Power_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Fields = {
  __typename?: 'validator_voting_power_aggregate_fields';
  avg?: Maybe<Validator_Voting_Power_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Validator_Voting_Power_Max_Fields>;
  min?: Maybe<Validator_Voting_Power_Min_Fields>;
  stddev?: Maybe<Validator_Voting_Power_Stddev_Fields>;
  stddev_pop?: Maybe<Validator_Voting_Power_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Validator_Voting_Power_Stddev_Samp_Fields>;
  sum?: Maybe<Validator_Voting_Power_Sum_Fields>;
  var_pop?: Maybe<Validator_Voting_Power_Var_Pop_Fields>;
  var_samp?: Maybe<Validator_Voting_Power_Var_Samp_Fields>;
  variance?: Maybe<Validator_Voting_Power_Variance_Fields>;
};


/** aggregate fields of "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Validator_Voting_Power_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "validator_voting_power" */
export type Validator_Voting_Power_Aggregate_Order_By = {
  avg?: InputMaybe<Validator_Voting_Power_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Validator_Voting_Power_Max_Order_By>;
  min?: InputMaybe<Validator_Voting_Power_Min_Order_By>;
  stddev?: InputMaybe<Validator_Voting_Power_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Validator_Voting_Power_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Validator_Voting_Power_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Validator_Voting_Power_Sum_Order_By>;
  var_pop?: InputMaybe<Validator_Voting_Power_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Validator_Voting_Power_Var_Samp_Order_By>;
  variance?: InputMaybe<Validator_Voting_Power_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Validator_Voting_Power_Avg_Fields = {
  __typename?: 'validator_voting_power_avg_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "validator_voting_power". All fields are combined with a logical 'AND'. */
export type Validator_Voting_Power_Bool_Exp = {
  _and?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  _not?: InputMaybe<Validator_Voting_Power_Bool_Exp>;
  _or?: InputMaybe<Array<Validator_Voting_Power_Bool_Exp>>;
  block?: InputMaybe<Block_Bool_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  validator?: InputMaybe<Validator_Bool_Exp>;
  validator_address?: InputMaybe<String_Comparison_Exp>;
  voting_power?: InputMaybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Validator_Voting_Power_Max_Fields = {
  __typename?: 'validator_voting_power_max_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Max_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Validator_Voting_Power_Min_Fields = {
  __typename?: 'validator_voting_power_min_fields';
  height?: Maybe<Scalars['bigint']>;
  validator_address?: Maybe<Scalars['String']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Min_Order_By = {
  height?: InputMaybe<Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "validator_voting_power". */
export type Validator_Voting_Power_Order_By = {
  block?: InputMaybe<Block_Order_By>;
  height?: InputMaybe<Order_By>;
  validator?: InputMaybe<Validator_Order_By>;
  validator_address?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** select columns of table "validator_voting_power" */
export enum Validator_Voting_Power_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ValidatorAddress = 'validator_address',
  /** column name */
  VotingPower = 'voting_power'
}

/** aggregate stddev on columns */
export type Validator_Voting_Power_Stddev_Fields = {
  __typename?: 'validator_voting_power_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Validator_Voting_Power_Stddev_Pop_Fields = {
  __typename?: 'validator_voting_power_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Validator_Voting_Power_Stddev_Samp_Fields = {
  __typename?: 'validator_voting_power_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "validator_voting_power" */
export type Validator_Voting_Power_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Validator_Voting_Power_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Validator_Voting_Power_Stream_Cursor_Value_Input = {
  height?: InputMaybe<Scalars['bigint']>;
  validator_address?: InputMaybe<Scalars['String']>;
  voting_power?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Validator_Voting_Power_Sum_Fields = {
  __typename?: 'validator_voting_power_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  voting_power?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Validator_Voting_Power_Var_Pop_Fields = {
  __typename?: 'validator_voting_power_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Validator_Voting_Power_Var_Samp_Fields = {
  __typename?: 'validator_voting_power_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Validator_Voting_Power_Variance_Fields = {
  __typename?: 'validator_voting_power_variance_fields';
  height?: Maybe<Scalars['Float']>;
  voting_power?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "validator_voting_power" */
export type Validator_Voting_Power_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  voting_power?: InputMaybe<Order_By>;
};

/** columns and relationships of "vesting_account" */
export type Vesting_Account = {
  __typename?: 'vesting_account';
  /** An object relationship */
  account: Account;
  address: Scalars['String'];
  end_time: Scalars['timestamp'];
  original_vesting: Scalars['_coin'];
  start_time?: Maybe<Scalars['timestamp']>;
  type: Scalars['String'];
  /** An array relationship */
  vesting_periods: Array<Vesting_Period>;
};


/** columns and relationships of "vesting_account" */
export type Vesting_AccountVesting_PeriodsArgs = {
  distinct_on?: InputMaybe<Array<Vesting_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Vesting_Period_Order_By>>;
  where?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** order by aggregate values of table "vesting_account" */
export type Vesting_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Account_Max_Order_By>;
  min?: InputMaybe<Vesting_Account_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_account". All fields are combined with a logical 'AND'. */
export type Vesting_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Account_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  end_time?: InputMaybe<Timestamp_Comparison_Exp>;
  original_vesting?: InputMaybe<_Coin_Comparison_Exp>;
  start_time?: InputMaybe<Timestamp_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  vesting_periods?: InputMaybe<Vesting_Period_Bool_Exp>;
};

/** order by max() on columns of table "vesting_account" */
export type Vesting_Account_Max_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_account" */
export type Vesting_Account_Min_Order_By = {
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_account". */
export type Vesting_Account_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  address?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  original_vesting?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  vesting_periods_aggregate?: InputMaybe<Vesting_Period_Aggregate_Order_By>;
};

/** select columns of table "vesting_account" */
export enum Vesting_Account_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  OriginalVesting = 'original_vesting',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "vesting_account" */
export type Vesting_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Account_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  end_time?: InputMaybe<Scalars['timestamp']>;
  original_vesting?: InputMaybe<Scalars['_coin']>;
  start_time?: InputMaybe<Scalars['timestamp']>;
  type?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "vesting_period" */
export type Vesting_Period = {
  __typename?: 'vesting_period';
  amount: Scalars['_coin'];
  length: Scalars['bigint'];
  period_order: Scalars['bigint'];
  /** An object relationship */
  vesting_account: Vesting_Account;
};

/** order by aggregate values of table "vesting_period" */
export type Vesting_Period_Aggregate_Order_By = {
  avg?: InputMaybe<Vesting_Period_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vesting_Period_Max_Order_By>;
  min?: InputMaybe<Vesting_Period_Min_Order_By>;
  stddev?: InputMaybe<Vesting_Period_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vesting_Period_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vesting_Period_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vesting_Period_Sum_Order_By>;
  var_pop?: InputMaybe<Vesting_Period_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vesting_Period_Var_Samp_Order_By>;
  variance?: InputMaybe<Vesting_Period_Variance_Order_By>;
};

/** order by avg() on columns of table "vesting_period" */
export type Vesting_Period_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vesting_period". All fields are combined with a logical 'AND'. */
export type Vesting_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  _not?: InputMaybe<Vesting_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Vesting_Period_Bool_Exp>>;
  amount?: InputMaybe<_Coin_Comparison_Exp>;
  length?: InputMaybe<Bigint_Comparison_Exp>;
  period_order?: InputMaybe<Bigint_Comparison_Exp>;
  vesting_account?: InputMaybe<Vesting_Account_Bool_Exp>;
};

/** order by max() on columns of table "vesting_period" */
export type Vesting_Period_Max_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "vesting_period" */
export type Vesting_Period_Min_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "vesting_period". */
export type Vesting_Period_Order_By = {
  amount?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
  vesting_account?: InputMaybe<Vesting_Account_Order_By>;
};

/** select columns of table "vesting_period" */
export enum Vesting_Period_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Length = 'length',
  /** column name */
  PeriodOrder = 'period_order'
}

/** order by stddev() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "vesting_period" */
export type Vesting_Period_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vesting_period" */
export type Vesting_Period_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vesting_Period_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vesting_Period_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['_coin']>;
  length?: InputMaybe<Scalars['bigint']>;
  period_order?: InputMaybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vesting_period" */
export type Vesting_Period_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "vesting_period" */
export type Vesting_Period_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "vesting_period" */
export type Vesting_Period_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "vesting_period" */
export type Vesting_Period_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
  period_order?: InputMaybe<Order_By>;
};

export type AccountCommissionQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
}>;


export type AccountCommissionQuery = { commission?: { __typename?: 'ActionValidatorCommissionAmount', coins?: Array<any | null> | null } | null };

export type AccountWithdrawalAddressQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountWithdrawalAddressQuery = { withdrawalAddress: { __typename?: 'ActionAddress', address: string } };

export type AccountBalancesQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountBalancesQuery = { accountBalances?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationBalanceQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountDelegationBalanceQuery = { delegationBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountUnbondingBalanceQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountUnbondingBalanceQuery = { unbondingBalance?: { __typename?: 'ActionBalance', coins?: Array<any | null> | null } | null };

export type AccountDelegationRewardsQueryVariables = Exact<{
  address: Scalars['String'];
}>;


export type AccountDelegationRewardsQuery = { delegationRewards?: Array<{ __typename?: 'ActionDelegationReward', coins?: Array<any | null> | null, validatorAddress: string } | null> | null };

export type AccountDelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountDelegationsQuery = { delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountRedelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountRedelegationsQuery = { redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type AccountUndelegationsQueryVariables = Exact<{
  address: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type AccountUndelegationsQuery = { undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ActiveValidatorCountQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveValidatorCountQuery = { activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, inactiveTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, total: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null } };

export type BlockDetailsQueryVariables = Exact<{
  height?: InputMaybe<Scalars['bigint']>;
  signatureHeight?: InputMaybe<Scalars['bigint']>;
}>;


export type BlockDetailsQuery = { transaction: Array<{ __typename?: 'transaction', height: any, hash: string, messages: any, success: boolean, logs?: any | null }>, block: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null }>, preCommitsAggregate: { __typename?: 'pre_commit_aggregate', aggregate?: { __typename?: 'pre_commit_aggregate_fields', sum?: { __typename?: 'pre_commit_sum_fields', votingPower?: any | null } | null } | null }, preCommits: Array<{ __typename?: 'pre_commit', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } }> };

export type LatestBlockHeightListenerSubscriptionVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type LatestBlockHeightListenerSubscription = { height: Array<{ __typename?: 'block', height: any }> };

export type AverageBlockTimeQueryVariables = Exact<{ [key: string]: never; }>;


export type AverageBlockTimeQuery = { averageBlockTime: Array<{ __typename?: 'average_block_time_per_hour', averageTime: any }> };

export type LatestBlockTimestampQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type LatestBlockTimestampQuery = { block: Array<{ __typename?: 'block', timestamp: any }> };

export type BlocksListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type BlocksListenerSubscription = { blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, validator?: { __typename?: 'ccv_validator', consumerOperatorAddress: string, providerOperatorAddress: string } | null }> };

export type BlocksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type BlocksQuery = { blocks: Array<{ __typename?: 'block', height: any, hash: string, timestamp: any, txs?: number | null, ccv_validator?: { __typename?: 'ccv_validator', consumerOperatorAddress: string, providerOperatorAddress: string, consumerSelfDelegateAddress: string, providerSelfDelegateAddress: string, validator?: { __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, identity?: string | null }> } | null } | null }> };

export type ChainIdQueryVariables = Exact<{ [key: string]: never; }>;


export type ChainIdQuery = { genesis: Array<{ __typename?: 'genesis', time: any, chainId: string }> };

export type MarketDataQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
}>;


export type MarketDataQuery = { communityPool: Array<{ __typename?: 'community_pool', coins: any }>, tokenPrice: Array<{ __typename?: 'token_price', price: any, marketCap: any }>, supply: Array<{ __typename?: 'supply', coins: any }>, bondedTokens: Array<{ __typename?: 'staking_pool', bonded_tokens: string }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }> };

export type GetMessagesByAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars['_text']>;
  limit?: InputMaybe<Scalars['bigint']>;
  offset?: InputMaybe<Scalars['bigint']>;
  types?: InputMaybe<Scalars['_text']>;
}>;


export type GetMessagesByAddressQuery = { messagesByAddress: Array<{ __typename?: 'message', transaction?: { __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', height: any, timestamp: any } } | null }> };

export type OnlineVotingPowerQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineVotingPowerQuery = { activeTotal: { __typename?: 'validator_status_aggregate', aggregate?: { __typename?: 'validator_status_aggregate_fields', count: number } | null }, validatorVotingPowerAggregate: { __typename?: 'validator_voting_power_aggregate', aggregate?: { __typename?: 'validator_voting_power_aggregate_fields', sum?: { __typename?: 'validator_voting_power_sum_fields', votingPower?: any | null } | null } | null }, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string }>, stakingParams: Array<{ __typename?: 'staking_params', params: any }> };

export type ParamsQueryVariables = Exact<{ [key: string]: never; }>;


export type ParamsQuery = { stakingParams: Array<{ __typename?: 'staking_params', params: any }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }>, mintParams: Array<{ __typename?: 'mint_params', params: any }>, distributionParams: Array<{ __typename?: 'distribution_params', params: any }>, govParams: Array<{ __typename?: 'gov_params', depositParams: any, tallyParams: any, votingParams: any }> };

export type ProposalDetailsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsQuery = { proposal: Array<{ __typename?: 'proposal', title: string, description: string, status?: string | null, content: any, proposer: string, proposalId: number, submitTime: any, proposalType: string, depositEndTime?: any | null, votingStartTime?: any | null, votingEndTime?: any | null }> };

export type ProposalDetailsTallyQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsTallyQuery = { proposalTallyResult: Array<{ __typename?: 'proposal_tally_result', yes: string, no: string, abstain: string, noWithVeto: string }>, stakingPool: Array<{ __typename?: 'proposal_staking_pool_snapshot', bondedTokens: string }>, quorum: Array<{ __typename?: 'gov_params', tallyParams: any }> };

export type ProposalDetailsDepositsQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsDepositsQuery = { proposalDeposit: Array<{ __typename?: 'proposal_deposit', amount?: any | null, depositorAddress?: string | null, block?: { __typename?: 'block', timestamp: any } | null }> };

export type ProposalDetailsVotesQueryVariables = Exact<{
  proposalId?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalDetailsVotesQuery = { proposalVote: Array<{ __typename?: 'proposal_vote', option: string, voterAddress: string }>, validatorStatuses: Array<{ __typename?: 'proposal_validator_status_snapshot', validator: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', selfDelegateAddress?: string | null } | null } }> };

export type ProposalsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type ProposalsQuery = { proposals: Array<{ __typename?: 'proposal', title: string, status?: string | null, description: string, proposalId: number }>, total: { __typename?: 'proposal_aggregate', aggregate?: { __typename?: 'proposal_aggregate_fields', count: number } | null } };

export type TokenPriceListenerSubscriptionVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
}>;


export type TokenPriceListenerSubscription = { tokenPrice: Array<{ __typename?: 'token_price', price: any, timestamp: any, marketCap: any, unitName: string }> };

export type TokenPriceHistoryQueryVariables = Exact<{
  denom?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type TokenPriceHistoryQuery = { tokenPrice: Array<{ __typename?: 'token_price_history', price: any, timestamp: any }> };

export type TokenomicsQueryVariables = Exact<{ [key: string]: never; }>;


export type TokenomicsQuery = { stakingParams: Array<{ __typename?: 'staking_params', params: any }>, stakingPool: Array<{ __typename?: 'staking_pool', bonded: string, unbonded: string }>, supply: Array<{ __typename?: 'supply', coins: any }> };

export type TransactionDetailsQueryVariables = Exact<{
  hash?: InputMaybe<Scalars['String']>;
}>;


export type TransactionDetailsQuery = { transaction: Array<{ __typename?: 'transaction', logs?: any | null, hash: string, height: any, fee: any, gasUsed?: any | null, gasWanted?: any | null, success: boolean, memo?: string | null, messages: any, rawLog?: string | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsListenerSubscriptionVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TransactionsListenerSubscription = { transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type TransactionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type TransactionsQuery = { transactions: Array<{ __typename?: 'transaction', height: any, hash: string, success: boolean, messages: any, logs?: any | null, block: { __typename?: 'block', timestamp: any } }> };

export type LastHundredBlocksSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type LastHundredBlocksSubscription = { block: Array<{ __typename?: 'block', height: any, validator?: { __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string } | null } | null, transactions: Array<{ __typename?: 'transaction', hash: string }>, precommits: Array<{ __typename?: 'pre_commit', validatorAddress: string }> }> };

export type ValidatorLastSeenListenerSubscriptionVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorLastSeenListenerSubscription = { preCommit: Array<{ __typename?: 'pre_commit', height: any, timestamp: any }> };

export type ValidatorDetailsQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
}>;


export type ValidatorDetailsQuery = { stakingPool: Array<{ __typename?: 'staking_pool', height: any, bonded: string }>, validator: Array<{ __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', details?: string | null, website?: string | null }>, validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, maxRate: string } | null, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }>, validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', height: any, votingPower: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ValidatorDelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorDelegationsQuery = { delegations?: { __typename?: 'ActionDelegationResponse', delegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorRedelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorRedelegationsQuery = { redelegations?: { __typename?: 'ActionRedelegationResponse', redelegations?: Array<any | null> | null, pagination?: any | null } | null };

export type ValidatorUndelegationsQueryVariables = Exact<{
  validatorAddress: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  pagination?: Scalars['Boolean'];
}>;


export type ValidatorUndelegationsQuery = { undelegations?: { __typename?: 'ActionUnbondingDelegationResponse', pagination?: any | null, undelegations?: Array<any | null> | null } | null };

export type ValidatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsQuery = { stakingPool: Array<{ __typename?: 'staking_pool', bondedTokens: string }>, validator: Array<{ __typename?: 'validator', validatorStatuses: Array<{ __typename?: 'validator_status', status: number, jailed: boolean, height: any }>, validatorSigningInfos: Array<{ __typename?: 'validator_signing_info', tombstoned: boolean, missedBlocksCounter: any }>, ccv_validator?: { __typename?: 'ccv_validator', providerOperatorAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, avatar_url?: string | null, validator_address: string, website?: string | null, details?: string | null }>, validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null } | null, validatorVotingPowers: Array<{ __typename?: 'validator_voting_power', votingPower: any }>, validatorCommissions: Array<{ __typename?: 'validator_commission', commission: any }> }>, slashingParams: Array<{ __typename?: 'slashing_params', params: any }> };

export type ConsumerCustomValidatorQueryVariables = Exact<{
  consumerAddress?: InputMaybe<Scalars['String']>;
}>;


export type ConsumerCustomValidatorQuery = { validatorInfo: Array<{ __typename?: 'validator_info', validator: { __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, avatar_url?: string | null, validator_address: string, website?: string | null, details?: string | null }> } }> };

export type ProviderCustomValidatorQueryVariables = Exact<{
  providerAddress?: InputMaybe<Scalars['String']>;
}>;


export type ProviderCustomValidatorQuery = { ccv_validator: Array<{ __typename?: 'ccv_validator', ccv_validator_info?: { __typename?: 'provider_validator_info', operator_address: string, validator: { __typename?: 'provider_validator', validatorDescriptions: Array<{ __typename?: 'provider_validator_description', moniker?: string | null, avatar_url?: string | null, validator_address: string, website?: string | null, details?: string | null }> } } | null }> };

export type ValidatorsAddressListQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorsAddressListQuery = { validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, consensusAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, identity?: string | null, avatarUrl?: string | null }> }> };

export type ValidatorAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorAddressesQuery = { validator: Array<{ __typename?: 'validator', validatorInfo?: { __typename?: 'validator_info', operatorAddress: string, selfDelegateAddress?: string | null, consensusAddress: string } | null, validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, avatarUrl?: string | null }> }> };

export type ValidatorConsumerProviderAddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidatorConsumerProviderAddressesQuery = { ccv_validator: Array<{ __typename?: 'ccv_validator', consumerOperatorAddress: string, providerOperatorAddress: string, providerSelfDelegateAddress: string, validator?: { __typename?: 'validator', validatorDescriptions: Array<{ __typename?: 'validator_description', moniker?: string | null, details?: string | null, website?: string | null, avatarUrl?: string | null }> } | null }> };


export const AccountCommissionDocument = gql`
    query AccountCommission($validatorAddress: String!) {
  commission: action_validator_commission_amount(address: $validatorAddress) {
    coins
  }
}
    `;

/**
 * __useAccountCommissionQuery__
 *
 * To run a query within a React component, call `useAccountCommissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountCommissionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountCommissionQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *   },
 * });
 */
export function useAccountCommissionQuery(baseOptions: Apollo.QueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
      }
export function useAccountCommissionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountCommissionQuery, AccountCommissionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountCommissionQuery, AccountCommissionQueryVariables>(AccountCommissionDocument, options);
        }
export type AccountCommissionQueryHookResult = ReturnType<typeof useAccountCommissionQuery>;
export type AccountCommissionLazyQueryHookResult = ReturnType<typeof useAccountCommissionLazyQuery>;
export type AccountCommissionQueryResult = Apollo.QueryResult<AccountCommissionQuery, AccountCommissionQueryVariables>;
export const AccountWithdrawalAddressDocument = gql`
    query AccountWithdrawalAddress($address: String!) {
  withdrawalAddress: action_delegator_withdraw_address(address: $address) {
    address
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
export const AccountBalancesDocument = gql`
    query AccountBalances($address: String!) {
  accountBalances: action_account_balance(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountBalancesQuery__
 *
 * To run a query within a React component, call `useAccountBalancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountBalancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountBalancesQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountBalancesQuery(baseOptions: Apollo.QueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
      }
export function useAccountBalancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountBalancesQuery, AccountBalancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountBalancesQuery, AccountBalancesQueryVariables>(AccountBalancesDocument, options);
        }
export type AccountBalancesQueryHookResult = ReturnType<typeof useAccountBalancesQuery>;
export type AccountBalancesLazyQueryHookResult = ReturnType<typeof useAccountBalancesLazyQuery>;
export type AccountBalancesQueryResult = Apollo.QueryResult<AccountBalancesQuery, AccountBalancesQueryVariables>;
export const AccountDelegationBalanceDocument = gql`
    query AccountDelegationBalance($address: String!) {
  delegationBalance: action_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountDelegationBalanceQuery__
 *
 * To run a query within a React component, call `useAccountDelegationBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
      }
export function useAccountDelegationBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>(AccountDelegationBalanceDocument, options);
        }
export type AccountDelegationBalanceQueryHookResult = ReturnType<typeof useAccountDelegationBalanceQuery>;
export type AccountDelegationBalanceLazyQueryHookResult = ReturnType<typeof useAccountDelegationBalanceLazyQuery>;
export type AccountDelegationBalanceQueryResult = Apollo.QueryResult<AccountDelegationBalanceQuery, AccountDelegationBalanceQueryVariables>;
export const AccountUnbondingBalanceDocument = gql`
    query AccountUnbondingBalance($address: String!) {
  unbondingBalance: action_unbonding_delegation_total(address: $address) {
    coins
  }
}
    `;

/**
 * __useAccountUnbondingBalanceQuery__
 *
 * To run a query within a React component, call `useAccountUnbondingBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUnbondingBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUnbondingBalanceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountUnbondingBalanceQuery(baseOptions: Apollo.QueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
      }
export function useAccountUnbondingBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>(AccountUnbondingBalanceDocument, options);
        }
export type AccountUnbondingBalanceQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceQuery>;
export type AccountUnbondingBalanceLazyQueryHookResult = ReturnType<typeof useAccountUnbondingBalanceLazyQuery>;
export type AccountUnbondingBalanceQueryResult = Apollo.QueryResult<AccountUnbondingBalanceQuery, AccountUnbondingBalanceQueryVariables>;
export const AccountDelegationRewardsDocument = gql`
    query AccountDelegationRewards($address: String!) {
  delegationRewards: action_delegation_reward(address: $address) {
    validatorAddress: validator_address
    coins
  }
}
    `;

/**
 * __useAccountDelegationRewardsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationRewardsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAccountDelegationRewardsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
      }
export function useAccountDelegationRewardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>(AccountDelegationRewardsDocument, options);
        }
export type AccountDelegationRewardsQueryHookResult = ReturnType<typeof useAccountDelegationRewardsQuery>;
export type AccountDelegationRewardsLazyQueryHookResult = ReturnType<typeof useAccountDelegationRewardsLazyQuery>;
export type AccountDelegationRewardsQueryResult = Apollo.QueryResult<AccountDelegationRewardsQuery, AccountDelegationRewardsQueryVariables>;
export const AccountDelegationsDocument = gql`
    query AccountDelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useAccountDelegationsQuery__
 *
 * To run a query within a React component, call `useAccountDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountDelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
      }
export function useAccountDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDelegationsQuery, AccountDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDelegationsQuery, AccountDelegationsQueryVariables>(AccountDelegationsDocument, options);
        }
export type AccountDelegationsQueryHookResult = ReturnType<typeof useAccountDelegationsQuery>;
export type AccountDelegationsLazyQueryHookResult = ReturnType<typeof useAccountDelegationsLazyQuery>;
export type AccountDelegationsQueryResult = Apollo.QueryResult<AccountDelegationsQuery, AccountDelegationsQueryVariables>;
export const AccountRedelegationsDocument = gql`
    query AccountRedelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_redelegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useAccountRedelegationsQuery__
 *
 * To run a query within a React component, call `useAccountRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountRedelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
      }
export function useAccountRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>(AccountRedelegationsDocument, options);
        }
export type AccountRedelegationsQueryHookResult = ReturnType<typeof useAccountRedelegationsQuery>;
export type AccountRedelegationsLazyQueryHookResult = ReturnType<typeof useAccountRedelegationsLazyQuery>;
export type AccountRedelegationsQueryResult = Apollo.QueryResult<AccountRedelegationsQuery, AccountRedelegationsQueryVariables>;
export const AccountUndelegationsDocument = gql`
    query AccountUndelegations($address: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_unbonding_delegation(
    address: $address
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useAccountUndelegationsQuery__
 *
 * To run a query within a React component, call `useAccountUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountUndelegationsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useAccountUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
      }
export function useAccountUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>(AccountUndelegationsDocument, options);
        }
export type AccountUndelegationsQueryHookResult = ReturnType<typeof useAccountUndelegationsQuery>;
export type AccountUndelegationsLazyQueryHookResult = ReturnType<typeof useAccountUndelegationsLazyQuery>;
export type AccountUndelegationsQueryResult = Apollo.QueryResult<AccountUndelegationsQuery, AccountUndelegationsQueryVariables>;
export const ActiveValidatorCountDocument = gql`
    query ActiveValidatorCount {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  inactiveTotal: validator_status_aggregate(where: {status: {_neq: 3}}) {
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
    query BlockDetails($height: bigint, $signatureHeight: bigint) {
  transaction(where: {height: {_eq: $height}}) {
    height
    hash
    messages
    success
    logs
  }
  block(limit: 1, where: {height: {_eq: $height}}) {
    height
    hash
    timestamp
    txs: num_txs
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
  }
  preCommitsAggregate: pre_commit_aggregate(
    where: {height: {_eq: $signatureHeight}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  preCommits: pre_commit(where: {height: {_eq: $signatureHeight}}) {
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
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
  height: block(order_by: {height: desc}, limit: 1, offset: $offset) {
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
export function useLatestBlockHeightListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestBlockHeightListenerSubscription, LatestBlockHeightListenerSubscriptionVariables>(LatestBlockHeightListenerDocument, options);
      }
export type LatestBlockHeightListenerSubscriptionHookResult = ReturnType<typeof useLatestBlockHeightListenerSubscription>;
export type LatestBlockHeightListenerSubscriptionResult = Apollo.SubscriptionResult<LatestBlockHeightListenerSubscription>;
export const AverageBlockTimeDocument = gql`
    query AverageBlockTime {
  averageBlockTime: average_block_time_per_hour(
    limit: 1
    order_by: {height: desc}
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
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    validator: ccv_validator {
      consumerOperatorAddress: consumer_operator_address
      providerOperatorAddress: provider_operator_address
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
  blocks: block(limit: $limit, offset: $offset, order_by: {height: desc}) {
    height
    txs: num_txs
    hash
    timestamp
    ccv_validator {
      consumerOperatorAddress: consumer_operator_address
      providerOperatorAddress: provider_operator_address
      consumerSelfDelegateAddress: consumer_self_delegate_address
      providerSelfDelegateAddress: provider_self_delegate_address
      validator {
        validatorDescriptions: validator_descriptions(
          limit: 1
          order_by: {height: desc}
        ) {
          moniker
          identity
        }
      }
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
export const ChainIdDocument = gql`
    query ChainId {
  genesis(limit: 1, order_by: {time: desc}) {
    chainId: chain_id
    time
  }
}
    `;

/**
 * __useChainIdQuery__
 *
 * To run a query within a React component, call `useChainIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useChainIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChainIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useChainIdQuery(baseOptions?: Apollo.QueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
      }
export function useChainIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChainIdQuery, ChainIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChainIdQuery, ChainIdQueryVariables>(ChainIdDocument, options);
        }
export type ChainIdQueryHookResult = ReturnType<typeof useChainIdQuery>;
export type ChainIdLazyQueryHookResult = ReturnType<typeof useChainIdLazyQuery>;
export type ChainIdQueryResult = Apollo.QueryResult<ChainIdQuery, ChainIdQueryVariables>;
export const MarketDataDocument = gql`
    query MarketData($denom: String) {
  communityPool: community_pool(order_by: {height: desc}, limit: 1) {
    coins
  }
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
    marketCap: market_cap
    price
  }
  supply {
    coins
  }
  bondedTokens: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded_tokens
  }
  distributionParams: distribution_params {
    params
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
export const GetMessagesByAddressDocument = gql`
    query GetMessagesByAddress($address: _text, $limit: bigint = 50, $offset: bigint = 0, $types: _text = "{}") {
  messagesByAddress: messages_by_address(
    args: {addresses: $address, types: $types, limit: $limit, offset: $offset}
  ) {
    transaction {
      height
      hash
      success
      messages
      logs
      block {
        height
        timestamp
      }
    }
  }
}
    `;

/**
 * __useGetMessagesByAddressQuery__
 *
 * To run a query within a React component, call `useGetMessagesByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      types: // value for 'types'
 *   },
 * });
 */
export function useGetMessagesByAddressQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
      }
export function useGetMessagesByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>(GetMessagesByAddressDocument, options);
        }
export type GetMessagesByAddressQueryHookResult = ReturnType<typeof useGetMessagesByAddressQuery>;
export type GetMessagesByAddressLazyQueryHookResult = ReturnType<typeof useGetMessagesByAddressLazyQuery>;
export type GetMessagesByAddressQueryResult = Apollo.QueryResult<GetMessagesByAddressQuery, GetMessagesByAddressQueryVariables>;
export const OnlineVotingPowerDocument = gql`
    query OnlineVotingPower {
  activeTotal: validator_status_aggregate(where: {status: {_eq: 3}}) {
    aggregate {
      count
    }
  }
  validatorVotingPowerAggregate: validator_voting_power_aggregate(
    where: {validator: {validator_statuses: {status: {_eq: 3}}}}
  ) {
    aggregate {
      sum {
        votingPower: voting_power
      }
    }
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
  }
  stakingParams: staking_params(limit: 1) {
    params
  }
}
    `;

/**
 * __useOnlineVotingPowerQuery__
 *
 * To run a query within a React component, call `useOnlineVotingPowerQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineVotingPowerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineVotingPowerQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlineVotingPowerQuery(baseOptions?: Apollo.QueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
      }
export function useOnlineVotingPowerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>(OnlineVotingPowerDocument, options);
        }
export type OnlineVotingPowerQueryHookResult = ReturnType<typeof useOnlineVotingPowerQuery>;
export type OnlineVotingPowerLazyQueryHookResult = ReturnType<typeof useOnlineVotingPowerLazyQuery>;
export type OnlineVotingPowerQueryResult = Apollo.QueryResult<OnlineVotingPowerQuery, OnlineVotingPowerQueryVariables>;
export const ParamsDocument = gql`
    query Params {
  stakingParams: staking_params(limit: 1, order_by: {height: desc}) {
    params
  }
  slashingParams: slashing_params(limit: 1, order_by: {height: desc}) {
    params
  }
  mintParams: mint_params(limit: 1, order_by: {height: desc}) {
    params
  }
  distributionParams: distribution_params(limit: 1, order_by: {height: desc}) {
    params
  }
  govParams: gov_params(limit: 1, order_by: {height: desc}) {
    depositParams: deposit_params
    tallyParams: tally_params
    votingParams: voting_params
  }
}
    `;

/**
 * __useParamsQuery__
 *
 * To run a query within a React component, call `useParamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useParamsQuery(baseOptions?: Apollo.QueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
      }
export function useParamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParamsQuery, ParamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, options);
        }
export type ParamsQueryHookResult = ReturnType<typeof useParamsQuery>;
export type ParamsLazyQueryHookResult = ReturnType<typeof useParamsLazyQuery>;
export type ParamsQueryResult = Apollo.QueryResult<ParamsQuery, ParamsQueryVariables>;
export const ProposalDetailsDocument = gql`
    query ProposalDetails($proposalId: Int) {
  proposal(where: {id: {_eq: $proposalId}}) {
    proposer: proposer_address
    title
    description
    status
    content
    proposalId: id
    submitTime: submit_time
    proposalType: proposal_type
    depositEndTime: deposit_end_time
    votingStartTime: voting_start_time
    votingEndTime: voting_end_time
  }
}
    `;

/**
 * __useProposalDetailsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
      }
export function useProposalDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsQuery, ProposalDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsQuery, ProposalDetailsQueryVariables>(ProposalDetailsDocument, options);
        }
export type ProposalDetailsQueryHookResult = ReturnType<typeof useProposalDetailsQuery>;
export type ProposalDetailsLazyQueryHookResult = ReturnType<typeof useProposalDetailsLazyQuery>;
export type ProposalDetailsQueryResult = Apollo.QueryResult<ProposalDetailsQuery, ProposalDetailsQueryVariables>;
export const ProposalDetailsTallyDocument = gql`
    query ProposalDetailsTally($proposalId: Int) {
  proposalTallyResult: proposal_tally_result(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    yes
    no
    noWithVeto: no_with_veto
    abstain
  }
  stakingPool: proposal_staking_pool_snapshot(
    where: {proposal_id: {_eq: $proposalId}}
  ) {
    bondedTokens: bonded_tokens
  }
  quorum: gov_params(limit: 1, order_by: {height: desc}) {
    tallyParams: tally_params
  }
}
    `;

/**
 * __useProposalDetailsTallyQuery__
 *
 * To run a query within a React component, call `useProposalDetailsTallyQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsTallyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsTallyQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsTallyQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
      }
export function useProposalDetailsTallyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>(ProposalDetailsTallyDocument, options);
        }
export type ProposalDetailsTallyQueryHookResult = ReturnType<typeof useProposalDetailsTallyQuery>;
export type ProposalDetailsTallyLazyQueryHookResult = ReturnType<typeof useProposalDetailsTallyLazyQuery>;
export type ProposalDetailsTallyQueryResult = Apollo.QueryResult<ProposalDetailsTallyQuery, ProposalDetailsTallyQueryVariables>;
export const ProposalDetailsDepositsDocument = gql`
    query ProposalDetailsDeposits($proposalId: Int) {
  proposalDeposit: proposal_deposit(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    amount
    depositorAddress: depositor_address
    block {
      timestamp
    }
  }
}
    `;

/**
 * __useProposalDetailsDepositsQuery__
 *
 * To run a query within a React component, call `useProposalDetailsDepositsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsDepositsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsDepositsQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsDepositsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
      }
export function useProposalDetailsDepositsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>(ProposalDetailsDepositsDocument, options);
        }
export type ProposalDetailsDepositsQueryHookResult = ReturnType<typeof useProposalDetailsDepositsQuery>;
export type ProposalDetailsDepositsLazyQueryHookResult = ReturnType<typeof useProposalDetailsDepositsLazyQuery>;
export type ProposalDetailsDepositsQueryResult = Apollo.QueryResult<ProposalDetailsDepositsQuery, ProposalDetailsDepositsQueryVariables>;
export const ProposalDetailsVotesDocument = gql`
    query ProposalDetailsVotes($proposalId: Int) {
  proposalVote: proposal_vote(
    where: {proposal_id: {_eq: $proposalId}}
    order_by: {height: desc}
  ) {
    option
    voterAddress: voter_address
  }
  validatorStatuses: proposal_validator_status_snapshot(
    where: {proposal_id: {_eq: $proposalId}, status: {_eq: 3}}
  ) {
    validator {
      validatorInfo: validator_info {
        selfDelegateAddress: self_delegate_address
      }
    }
  }
}
    `;

/**
 * __useProposalDetailsVotesQuery__
 *
 * To run a query within a React component, call `useProposalDetailsVotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalDetailsVotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalDetailsVotesQuery({
 *   variables: {
 *      proposalId: // value for 'proposalId'
 *   },
 * });
 */
export function useProposalDetailsVotesQuery(baseOptions?: Apollo.QueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
      }
export function useProposalDetailsVotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>(ProposalDetailsVotesDocument, options);
        }
export type ProposalDetailsVotesQueryHookResult = ReturnType<typeof useProposalDetailsVotesQuery>;
export type ProposalDetailsVotesLazyQueryHookResult = ReturnType<typeof useProposalDetailsVotesLazyQuery>;
export type ProposalDetailsVotesQueryResult = Apollo.QueryResult<ProposalDetailsVotesQuery, ProposalDetailsVotesQueryVariables>;
export const ProposalsDocument = gql`
    query Proposals($limit: Int = 7, $offset: Int = 0) {
  proposals: proposal(limit: $limit, offset: $offset, order_by: {id: desc}) {
    title
    proposalId: id
    status
    description
  }
  total: proposal_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useProposalsQuery__
 *
 * To run a query within a React component, call `useProposalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProposalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProposalsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useProposalsQuery(baseOptions?: Apollo.QueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
      }
export function useProposalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProposalsQuery, ProposalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, options);
        }
export type ProposalsQueryHookResult = ReturnType<typeof useProposalsQuery>;
export type ProposalsLazyQueryHookResult = ReturnType<typeof useProposalsLazyQuery>;
export type ProposalsQueryResult = Apollo.QueryResult<ProposalsQuery, ProposalsQueryVariables>;
export const TokenPriceListenerDocument = gql`
    subscription TokenPriceListener($denom: String) {
  tokenPrice: token_price(where: {unit_name: {_eq: $denom}}) {
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
export function useTokenPriceListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TokenPriceListenerSubscription, TokenPriceListenerSubscriptionVariables>(TokenPriceListenerDocument, options);
      }
export type TokenPriceListenerSubscriptionHookResult = ReturnType<typeof useTokenPriceListenerSubscription>;
export type TokenPriceListenerSubscriptionResult = Apollo.SubscriptionResult<TokenPriceListenerSubscription>;
export const TokenPriceHistoryDocument = gql`
    query TokenPriceHistory($denom: String, $limit: Int = 10) {
  tokenPrice: token_price_history(
    where: {unit_name: {_eq: $denom}}
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
export const TokenomicsDocument = gql`
    query Tokenomics {
  stakingParams: staking_params(limit: 1) {
    params
  }
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1) {
    bonded: bonded_tokens
    unbonded: not_bonded_tokens
  }
  supply: supply(order_by: {height: desc}, limit: 1) {
    coins
  }
}
    `;

/**
 * __useTokenomicsQuery__
 *
 * To run a query within a React component, call `useTokenomicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenomicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenomicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTokenomicsQuery(baseOptions?: Apollo.QueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
      }
export function useTokenomicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TokenomicsQuery, TokenomicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TokenomicsQuery, TokenomicsQueryVariables>(TokenomicsDocument, options);
        }
export type TokenomicsQueryHookResult = ReturnType<typeof useTokenomicsQuery>;
export type TokenomicsLazyQueryHookResult = ReturnType<typeof useTokenomicsLazyQuery>;
export type TokenomicsQueryResult = Apollo.QueryResult<TokenomicsQuery, TokenomicsQueryVariables>;
export const TransactionDetailsDocument = gql`
    query TransactionDetails($hash: String) {
  transaction(where: {hash: {_eq: $hash}}, limit: 1) {
    hash: hash
    height: height
    block: block {
      timestamp: timestamp
    }
    fee: fee
    gasUsed: gas_used
    gasWanted: gas_wanted
    success: success
    memo: memo
    messages: messages
    logs
    rawLog: raw_log
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
 *      hash: // value for 'hash'
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
export const TransactionsListenerDocument = gql`
    subscription TransactionsListener($limit: Int = 7, $offset: Int = 0) {
  transactions: transaction(
    limit: $limit
    offset: $offset
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
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
    order_by: {height: desc}
  ) {
    height
    hash
    success
    block {
      timestamp
    }
    messages
    logs
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
export const LastHundredBlocksDocument = gql`
    subscription LastHundredBlocks($address: String) {
  block(offset: 1, order_by: {height: desc}, limit: 100) {
    height
    validator {
      validatorInfo: validator_info {
        operatorAddress: operator_address
      }
    }
    transactions {
      hash
    }
    precommits: pre_commits(
      where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    ) {
      validatorAddress: validator_address
    }
  }
}
    `;

/**
 * __useLastHundredBlocksSubscription__
 *
 * To run a query within a React component, call `useLastHundredBlocksSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLastHundredBlocksSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastHundredBlocksSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useLastHundredBlocksSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LastHundredBlocksSubscription, LastHundredBlocksSubscriptionVariables>(LastHundredBlocksDocument, options);
      }
export type LastHundredBlocksSubscriptionHookResult = ReturnType<typeof useLastHundredBlocksSubscription>;
export type LastHundredBlocksSubscriptionResult = Apollo.SubscriptionResult<LastHundredBlocksSubscription>;
export const ValidatorLastSeenListenerDocument = gql`
    subscription ValidatorLastSeenListener($address: String) {
  preCommit: pre_commit(
    limit: 1
    where: {validator: {validator_info: {operator_address: {_eq: $address}}}}
    order_by: {height: desc}
  ) {
    height
    timestamp
  }
}
    `;

/**
 * __useValidatorLastSeenListenerSubscription__
 *
 * To run a query within a React component, call `useValidatorLastSeenListenerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useValidatorLastSeenListenerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorLastSeenListenerSubscription({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorLastSeenListenerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ValidatorLastSeenListenerSubscription, ValidatorLastSeenListenerSubscriptionVariables>(ValidatorLastSeenListenerDocument, options);
      }
export type ValidatorLastSeenListenerSubscriptionHookResult = ReturnType<typeof useValidatorLastSeenListenerSubscription>;
export type ValidatorLastSeenListenerSubscriptionResult = Apollo.SubscriptionResult<ValidatorLastSeenListenerSubscription>;
export const ValidatorDetailsDocument = gql`
    query ValidatorDetails($address: String) {
  stakingPool: staking_pool(order_by: {height: desc}, limit: 1, offset: 0) {
    height
    bonded: bonded_tokens
  }
  validator(where: {validator_info: {operator_address: {_eq: $address}}}) {
    validatorDescriptions: validator_descriptions(
      order_by: {height: desc}
      limit: 1
    ) {
      details
      website
    }
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      maxRate: max_rate
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      height
      votingPower: voting_power
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
  }
}
    `;

/**
 * __useValidatorDetailsQuery__
 *
 * To run a query within a React component, call `useValidatorDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDetailsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useValidatorDetailsQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>(ValidatorDetailsDocument, options);
      }
export function useValidatorDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>(ValidatorDetailsDocument, options);
        }
export type ValidatorDetailsQueryHookResult = ReturnType<typeof useValidatorDetailsQuery>;
export type ValidatorDetailsLazyQueryHookResult = ReturnType<typeof useValidatorDetailsLazyQuery>;
export type ValidatorDetailsQueryResult = Apollo.QueryResult<ValidatorDetailsQuery, ValidatorDetailsQueryVariables>;
export const ValidatorDelegationsDocument = gql`
    query ValidatorDelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  delegations: action_validator_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    delegations
    pagination
  }
}
    `;

/**
 * __useValidatorDelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorDelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorDelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorDelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorDelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
      }
export function useValidatorDelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>(ValidatorDelegationsDocument, options);
        }
export type ValidatorDelegationsQueryHookResult = ReturnType<typeof useValidatorDelegationsQuery>;
export type ValidatorDelegationsLazyQueryHookResult = ReturnType<typeof useValidatorDelegationsLazyQuery>;
export type ValidatorDelegationsQueryResult = Apollo.QueryResult<ValidatorDelegationsQuery, ValidatorDelegationsQueryVariables>;
export const ValidatorRedelegationsDocument = gql`
    query ValidatorRedelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  redelegations: action_validator_redelegations_from(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    redelegations
    pagination
  }
}
    `;

/**
 * __useValidatorRedelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorRedelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorRedelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorRedelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorRedelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
      }
export function useValidatorRedelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>(ValidatorRedelegationsDocument, options);
        }
export type ValidatorRedelegationsQueryHookResult = ReturnType<typeof useValidatorRedelegationsQuery>;
export type ValidatorRedelegationsLazyQueryHookResult = ReturnType<typeof useValidatorRedelegationsLazyQuery>;
export type ValidatorRedelegationsQueryResult = Apollo.QueryResult<ValidatorRedelegationsQuery, ValidatorRedelegationsQueryVariables>;
export const ValidatorUndelegationsDocument = gql`
    query ValidatorUndelegations($validatorAddress: String!, $offset: Int = 0, $limit: Int = 10, $pagination: Boolean! = true) {
  undelegations: action_validator_unbonding_delegations(
    address: $validatorAddress
    limit: $limit
    offset: $offset
    count_total: $pagination
  ) {
    undelegations: unbonding_delegations
    pagination
  }
}
    `;

/**
 * __useValidatorUndelegationsQuery__
 *
 * To run a query within a React component, call `useValidatorUndelegationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorUndelegationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorUndelegationsQuery({
 *   variables: {
 *      validatorAddress: // value for 'validatorAddress'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useValidatorUndelegationsQuery(baseOptions: Apollo.QueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
      }
export function useValidatorUndelegationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>(ValidatorUndelegationsDocument, options);
        }
export type ValidatorUndelegationsQueryHookResult = ReturnType<typeof useValidatorUndelegationsQuery>;
export type ValidatorUndelegationsLazyQueryHookResult = ReturnType<typeof useValidatorUndelegationsLazyQuery>;
export type ValidatorUndelegationsQueryResult = Apollo.QueryResult<ValidatorUndelegationsQuery, ValidatorUndelegationsQueryVariables>;
export const ValidatorsDocument = gql`
    query Validators {
  stakingPool: staking_pool(limit: 1, order_by: {height: desc}) {
    bondedTokens: bonded_tokens
  }
  validator {
    validatorStatuses: validator_statuses(order_by: {height: desc}, limit: 1) {
      status
      jailed
      height
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
      tombstoned
    }
    ccv_validator {
      providerOperatorAddress: provider_operator_address
    }
    validatorDescriptions: validator_descriptions {
      moniker
      avatar_url
      validator_address
      website
      details
    }
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
    }
    validatorVotingPowers: validator_voting_powers(
      offset: 0
      limit: 1
      order_by: {height: desc}
    ) {
      votingPower: voting_power
    }
    validatorCommissions: validator_commissions(order_by: {height: desc}, limit: 1) {
      commission
    }
    validatorSigningInfos: validator_signing_infos(
      order_by: {height: desc}
      limit: 1
    ) {
      missedBlocksCounter: missed_blocks_counter
    }
  }
  slashingParams: slashing_params(order_by: {height: desc}, limit: 1) {
    params
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
export const ConsumerCustomValidatorDocument = gql`
    query ConsumerCustomValidator($consumerAddress: String) {
  validatorInfo: validator_info(
    where: {operator_address: {_eq: $consumerAddress}}
  ) {
    validator {
      validatorDescriptions: validator_descriptions {
        moniker
        avatar_url
        validator_address
        website
        details
      }
    }
  }
}
    `;

/**
 * __useConsumerCustomValidatorQuery__
 *
 * To run a query within a React component, call `useConsumerCustomValidatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useConsumerCustomValidatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConsumerCustomValidatorQuery({
 *   variables: {
 *      consumerAddress: // value for 'consumerAddress'
 *   },
 * });
 */
export function useConsumerCustomValidatorQuery(baseOptions?: Apollo.QueryHookOptions<ConsumerCustomValidatorQuery, ConsumerCustomValidatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConsumerCustomValidatorQuery, ConsumerCustomValidatorQueryVariables>(ConsumerCustomValidatorDocument, options);
      }
export function useConsumerCustomValidatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConsumerCustomValidatorQuery, ConsumerCustomValidatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConsumerCustomValidatorQuery, ConsumerCustomValidatorQueryVariables>(ConsumerCustomValidatorDocument, options);
        }
export type ConsumerCustomValidatorQueryHookResult = ReturnType<typeof useConsumerCustomValidatorQuery>;
export type ConsumerCustomValidatorLazyQueryHookResult = ReturnType<typeof useConsumerCustomValidatorLazyQuery>;
export type ConsumerCustomValidatorQueryResult = Apollo.QueryResult<ConsumerCustomValidatorQuery, ConsumerCustomValidatorQueryVariables>;
export const ProviderCustomValidatorDocument = gql`
    query ProviderCustomValidator($providerAddress: String) {
  ccv_validator(where: {provider_operator_address: {_eq: $providerAddress}}) {
    ccv_validator_info {
      operator_address
      validator {
        validatorDescriptions: validator_descriptions {
          moniker
          avatar_url
          validator_address
          website
          details
        }
      }
    }
  }
}
    `;

/**
 * __useProviderCustomValidatorQuery__
 *
 * To run a query within a React component, call `useProviderCustomValidatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useProviderCustomValidatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProviderCustomValidatorQuery({
 *   variables: {
 *      providerAddress: // value for 'providerAddress'
 *   },
 * });
 */
export function useProviderCustomValidatorQuery(baseOptions?: Apollo.QueryHookOptions<ProviderCustomValidatorQuery, ProviderCustomValidatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProviderCustomValidatorQuery, ProviderCustomValidatorQueryVariables>(ProviderCustomValidatorDocument, options);
      }
export function useProviderCustomValidatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProviderCustomValidatorQuery, ProviderCustomValidatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProviderCustomValidatorQuery, ProviderCustomValidatorQueryVariables>(ProviderCustomValidatorDocument, options);
        }
export type ProviderCustomValidatorQueryHookResult = ReturnType<typeof useProviderCustomValidatorQuery>;
export type ProviderCustomValidatorLazyQueryHookResult = ReturnType<typeof useProviderCustomValidatorLazyQuery>;
export type ProviderCustomValidatorQueryResult = Apollo.QueryResult<ProviderCustomValidatorQuery, ProviderCustomValidatorQueryVariables>;
export const ValidatorsAddressListDocument = gql`
    query ValidatorsAddressList {
  validator {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      consensusAddress: consensus_address
    }
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
      identity
      avatarUrl: avatar_url
    }
  }
}
    `;

/**
 * __useValidatorsAddressListQuery__
 *
 * To run a query within a React component, call `useValidatorsAddressListQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorsAddressListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorsAddressListQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorsAddressListQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>(ValidatorsAddressListDocument, options);
      }
export function useValidatorsAddressListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>(ValidatorsAddressListDocument, options);
        }
export type ValidatorsAddressListQueryHookResult = ReturnType<typeof useValidatorsAddressListQuery>;
export type ValidatorsAddressListLazyQueryHookResult = ReturnType<typeof useValidatorsAddressListLazyQuery>;
export type ValidatorsAddressListQueryResult = Apollo.QueryResult<ValidatorsAddressListQuery, ValidatorsAddressListQueryVariables>;
export const ValidatorAddressesDocument = gql`
    query ValidatorAddresses {
  validator(
    where: {validator_info: {operator_address: {_is_null: false}, consensus_address: {_is_null: false}, self_delegate_address: {_is_null: false}}}
  ) {
    validatorInfo: validator_info {
      operatorAddress: operator_address
      selfDelegateAddress: self_delegate_address
      consensusAddress: consensus_address
    }
    validatorDescriptions: validator_descriptions(
      limit: 1
      order_by: {height: desc}
    ) {
      moniker
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
export const ValidatorConsumerProviderAddressesDocument = gql`
    query ValidatorConsumerProviderAddresses {
  ccv_validator(
    where: {consumer_consensus_address: {_is_null: false}, provider_consensus_address: {_is_null: false}}
  ) {
    consumerOperatorAddress: consumer_operator_address
    providerOperatorAddress: provider_operator_address
    providerSelfDelegateAddress: provider_self_delegate_address
    validator {
      validatorDescriptions: validator_descriptions(
        limit: 1
        order_by: {height: desc}
      ) {
        moniker
        avatarUrl: avatar_url
        details
        website
      }
    }
  }
}
    `;

/**
 * __useValidatorConsumerProviderAddressesQuery__
 *
 * To run a query within a React component, call `useValidatorConsumerProviderAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidatorConsumerProviderAddressesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidatorConsumerProviderAddressesQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidatorConsumerProviderAddressesQuery(baseOptions?: Apollo.QueryHookOptions<ValidatorConsumerProviderAddressesQuery, ValidatorConsumerProviderAddressesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidatorConsumerProviderAddressesQuery, ValidatorConsumerProviderAddressesQueryVariables>(ValidatorConsumerProviderAddressesDocument, options);
      }
export function useValidatorConsumerProviderAddressesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidatorConsumerProviderAddressesQuery, ValidatorConsumerProviderAddressesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidatorConsumerProviderAddressesQuery, ValidatorConsumerProviderAddressesQueryVariables>(ValidatorConsumerProviderAddressesDocument, options);
        }
export type ValidatorConsumerProviderAddressesQueryHookResult = ReturnType<typeof useValidatorConsumerProviderAddressesQuery>;
export type ValidatorConsumerProviderAddressesLazyQueryHookResult = ReturnType<typeof useValidatorConsumerProviderAddressesLazyQuery>;
export type ValidatorConsumerProviderAddressesQueryResult = Apollo.QueryResult<ValidatorConsumerProviderAddressesQuery, ValidatorConsumerProviderAddressesQueryVariables>;