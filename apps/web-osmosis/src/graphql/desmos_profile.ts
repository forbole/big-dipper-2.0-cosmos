export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  jsonb: any;
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

/** columns and relationships of "application_link" */
export type Application_Link = {
  __typename?: 'application_link';
  application: Scalars['String'];
  /** An array relationship */
  application_link_oracle_requests: Array<Application_Link_Oracle_Request>;
  /** An aggregate relationship */
  application_link_oracle_requests_aggregate: Application_Link_Oracle_Request_Aggregate;
  creation_time: Scalars['timestamp'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profile;
  result?: Maybe<Scalars['jsonb']>;
  state: Scalars['String'];
  user_address: Scalars['String'];
  username: Scalars['String'];
};

/** columns and relationships of "application_link" */
export type Application_LinkApplication_Link_Oracle_RequestsArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

/** columns and relationships of "application_link" */
export type Application_LinkApplication_Link_Oracle_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

/** columns and relationships of "application_link" */
export type Application_LinkResultArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "application_link" */
export type Application_Link_Aggregate = {
  __typename?: 'application_link_aggregate';
  aggregate?: Maybe<Application_Link_Aggregate_Fields>;
  nodes: Array<Application_Link>;
};

/** aggregate fields of "application_link" */
export type Application_Link_Aggregate_Fields = {
  __typename?: 'application_link_aggregate_fields';
  avg?: Maybe<Application_Link_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Application_Link_Max_Fields>;
  min?: Maybe<Application_Link_Min_Fields>;
  stddev?: Maybe<Application_Link_Stddev_Fields>;
  stddev_pop?: Maybe<Application_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Application_Link_Stddev_Samp_Fields>;
  sum?: Maybe<Application_Link_Sum_Fields>;
  var_pop?: Maybe<Application_Link_Var_Pop_Fields>;
  var_samp?: Maybe<Application_Link_Var_Samp_Fields>;
  variance?: Maybe<Application_Link_Variance_Fields>;
};

/** aggregate fields of "application_link" */
export type Application_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Application_Link_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "application_link" */
export type Application_Link_Aggregate_Order_By = {
  avg?: Maybe<Application_Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Application_Link_Max_Order_By>;
  min?: Maybe<Application_Link_Min_Order_By>;
  stddev?: Maybe<Application_Link_Stddev_Order_By>;
  stddev_pop?: Maybe<Application_Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Application_Link_Stddev_Samp_Order_By>;
  sum?: Maybe<Application_Link_Sum_Order_By>;
  var_pop?: Maybe<Application_Link_Var_Pop_Order_By>;
  var_samp?: Maybe<Application_Link_Var_Samp_Order_By>;
  variance?: Maybe<Application_Link_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Application_Link_Avg_Fields = {
  __typename?: 'application_link_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "application_link" */
export type Application_Link_Avg_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "application_link". All fields are combined with a logical 'AND'. */
export type Application_Link_Bool_Exp = {
  _and?: Maybe<Array<Application_Link_Bool_Exp>>;
  _not?: Maybe<Application_Link_Bool_Exp>;
  _or?: Maybe<Array<Application_Link_Bool_Exp>>;
  application?: Maybe<String_Comparison_Exp>;
  application_link_oracle_requests?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
  creation_time?: Maybe<Timestamp_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  result?: Maybe<Jsonb_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  user_address?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Application_Link_Max_Fields = {
  __typename?: 'application_link_max_fields';
  application?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  user_address?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "application_link" */
export type Application_Link_Max_Order_By = {
  application?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  user_address?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Application_Link_Min_Fields = {
  __typename?: 'application_link_min_fields';
  application?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  user_address?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "application_link" */
export type Application_Link_Min_Order_By = {
  application?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  user_address?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** columns and relationships of "application_link_oracle_request" */
export type Application_Link_Oracle_Request = {
  __typename?: 'application_link_oracle_request';
  /** An object relationship */
  application_link: Application_Link;
  application_link_id: Scalars['bigint'];
  call_data: Scalars['jsonb'];
  client_id: Scalars['String'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
  request_id: Scalars['bigint'];
  script_id: Scalars['bigint'];
};

/** columns and relationships of "application_link_oracle_request" */
export type Application_Link_Oracle_RequestCall_DataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Aggregate = {
  __typename?: 'application_link_oracle_request_aggregate';
  aggregate?: Maybe<Application_Link_Oracle_Request_Aggregate_Fields>;
  nodes: Array<Application_Link_Oracle_Request>;
};

/** aggregate fields of "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Aggregate_Fields = {
  __typename?: 'application_link_oracle_request_aggregate_fields';
  avg?: Maybe<Application_Link_Oracle_Request_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Application_Link_Oracle_Request_Max_Fields>;
  min?: Maybe<Application_Link_Oracle_Request_Min_Fields>;
  stddev?: Maybe<Application_Link_Oracle_Request_Stddev_Fields>;
  stddev_pop?: Maybe<Application_Link_Oracle_Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Application_Link_Oracle_Request_Stddev_Samp_Fields>;
  sum?: Maybe<Application_Link_Oracle_Request_Sum_Fields>;
  var_pop?: Maybe<Application_Link_Oracle_Request_Var_Pop_Fields>;
  var_samp?: Maybe<Application_Link_Oracle_Request_Var_Samp_Fields>;
  variance?: Maybe<Application_Link_Oracle_Request_Variance_Fields>;
};

/** aggregate fields of "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Aggregate_Order_By = {
  avg?: Maybe<Application_Link_Oracle_Request_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Application_Link_Oracle_Request_Max_Order_By>;
  min?: Maybe<Application_Link_Oracle_Request_Min_Order_By>;
  stddev?: Maybe<Application_Link_Oracle_Request_Stddev_Order_By>;
  stddev_pop?: Maybe<Application_Link_Oracle_Request_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Application_Link_Oracle_Request_Stddev_Samp_Order_By>;
  sum?: Maybe<Application_Link_Oracle_Request_Sum_Order_By>;
  var_pop?: Maybe<Application_Link_Oracle_Request_Var_Pop_Order_By>;
  var_samp?: Maybe<Application_Link_Oracle_Request_Var_Samp_Order_By>;
  variance?: Maybe<Application_Link_Oracle_Request_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Application_Link_Oracle_Request_Avg_Fields = {
  __typename?: 'application_link_oracle_request_avg_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Avg_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "application_link_oracle_request". All fields are combined with a logical 'AND'. */
export type Application_Link_Oracle_Request_Bool_Exp = {
  _and?: Maybe<Array<Application_Link_Oracle_Request_Bool_Exp>>;
  _not?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
  _or?: Maybe<Array<Application_Link_Oracle_Request_Bool_Exp>>;
  application_link?: Maybe<Application_Link_Bool_Exp>;
  application_link_id?: Maybe<Bigint_Comparison_Exp>;
  call_data?: Maybe<Jsonb_Comparison_Exp>;
  client_id?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  request_id?: Maybe<Bigint_Comparison_Exp>;
  script_id?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Application_Link_Oracle_Request_Max_Fields = {
  __typename?: 'application_link_oracle_request_max_fields';
  application_link_id?: Maybe<Scalars['bigint']>;
  client_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  request_id?: Maybe<Scalars['bigint']>;
  script_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Max_Order_By = {
  application_link_id?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Application_Link_Oracle_Request_Min_Fields = {
  __typename?: 'application_link_oracle_request_min_fields';
  application_link_id?: Maybe<Scalars['bigint']>;
  client_id?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  request_id?: Maybe<Scalars['bigint']>;
  script_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Min_Order_By = {
  application_link_id?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "application_link_oracle_request". */
export type Application_Link_Oracle_Request_Order_By = {
  application_link?: Maybe<Application_Link_Order_By>;
  application_link_id?: Maybe<Order_By>;
  call_data?: Maybe<Order_By>;
  client_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** select columns of table "application_link_oracle_request" */
export enum Application_Link_Oracle_Request_Select_Column {
  /** column name */
  ApplicationLinkId = 'application_link_id',
  /** column name */
  CallData = 'call_data',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  RequestId = 'request_id',
  /** column name */
  ScriptId = 'script_id',
}

/** aggregate stddev on columns */
export type Application_Link_Oracle_Request_Stddev_Fields = {
  __typename?: 'application_link_oracle_request_stddev_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Stddev_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Application_Link_Oracle_Request_Stddev_Pop_Fields = {
  __typename?: 'application_link_oracle_request_stddev_pop_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Stddev_Pop_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Application_Link_Oracle_Request_Stddev_Samp_Fields = {
  __typename?: 'application_link_oracle_request_stddev_samp_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Stddev_Samp_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Application_Link_Oracle_Request_Sum_Fields = {
  __typename?: 'application_link_oracle_request_sum_fields';
  application_link_id?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  request_id?: Maybe<Scalars['bigint']>;
  script_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Sum_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Application_Link_Oracle_Request_Var_Pop_Fields = {
  __typename?: 'application_link_oracle_request_var_pop_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Var_Pop_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Application_Link_Oracle_Request_Var_Samp_Fields = {
  __typename?: 'application_link_oracle_request_var_samp_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Var_Samp_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Application_Link_Oracle_Request_Variance_Fields = {
  __typename?: 'application_link_oracle_request_variance_fields';
  application_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  request_id?: Maybe<Scalars['Float']>;
  script_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "application_link_oracle_request" */
export type Application_Link_Oracle_Request_Variance_Order_By = {
  application_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  script_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "application_link". */
export type Application_Link_Order_By = {
  application?: Maybe<Order_By>;
  application_link_oracle_requests_aggregate?: Maybe<Application_Link_Oracle_Request_Aggregate_Order_By>;
  creation_time?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  result?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  user_address?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "application_link" */
export enum Application_Link_Select_Column {
  /** column name */
  Application = 'application',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Result = 'result',
  /** column name */
  State = 'state',
  /** column name */
  UserAddress = 'user_address',
  /** column name */
  Username = 'username',
}

/** aggregate stddev on columns */
export type Application_Link_Stddev_Fields = {
  __typename?: 'application_link_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "application_link" */
export type Application_Link_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Application_Link_Stddev_Pop_Fields = {
  __typename?: 'application_link_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "application_link" */
export type Application_Link_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Application_Link_Stddev_Samp_Fields = {
  __typename?: 'application_link_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "application_link" */
export type Application_Link_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Application_Link_Sum_Fields = {
  __typename?: 'application_link_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "application_link" */
export type Application_Link_Sum_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Application_Link_Var_Pop_Fields = {
  __typename?: 'application_link_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "application_link" */
export type Application_Link_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Application_Link_Var_Samp_Fields = {
  __typename?: 'application_link_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "application_link" */
export type Application_Link_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Application_Link_Variance_Fields = {
  __typename?: 'application_link_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "application_link" */
export type Application_Link_Variance_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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

/** columns and relationships of "chain_link" */
export type Chain_Link = {
  __typename?: 'chain_link';
  /** An object relationship */
  chain_config: Chain_Link_Chain_Config;
  chain_config_id: Scalars['bigint'];
  /** An array relationship */
  chain_link_proofs: Array<Chain_Link_Proof>;
  /** An aggregate relationship */
  chain_link_proofs_aggregate: Chain_Link_Proof_Aggregate;
  creation_time: Scalars['timestamp'];
  external_address: Scalars['String'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  proof?: Maybe<Chain_Link_Proof>;
  user_address: Scalars['String'];
};

/** columns and relationships of "chain_link" */
export type Chain_LinkChain_Link_ProofsArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

/** columns and relationships of "chain_link" */
export type Chain_LinkChain_Link_Proofs_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

/** aggregated selection of "chain_link" */
export type Chain_Link_Aggregate = {
  __typename?: 'chain_link_aggregate';
  aggregate?: Maybe<Chain_Link_Aggregate_Fields>;
  nodes: Array<Chain_Link>;
};

/** aggregate fields of "chain_link" */
export type Chain_Link_Aggregate_Fields = {
  __typename?: 'chain_link_aggregate_fields';
  avg?: Maybe<Chain_Link_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chain_Link_Max_Fields>;
  min?: Maybe<Chain_Link_Min_Fields>;
  stddev?: Maybe<Chain_Link_Stddev_Fields>;
  stddev_pop?: Maybe<Chain_Link_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chain_Link_Stddev_Samp_Fields>;
  sum?: Maybe<Chain_Link_Sum_Fields>;
  var_pop?: Maybe<Chain_Link_Var_Pop_Fields>;
  var_samp?: Maybe<Chain_Link_Var_Samp_Fields>;
  variance?: Maybe<Chain_Link_Variance_Fields>;
};

/** aggregate fields of "chain_link" */
export type Chain_Link_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chain_Link_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chain_link" */
export type Chain_Link_Aggregate_Order_By = {
  avg?: Maybe<Chain_Link_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chain_Link_Max_Order_By>;
  min?: Maybe<Chain_Link_Min_Order_By>;
  stddev?: Maybe<Chain_Link_Stddev_Order_By>;
  stddev_pop?: Maybe<Chain_Link_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chain_Link_Stddev_Samp_Order_By>;
  sum?: Maybe<Chain_Link_Sum_Order_By>;
  var_pop?: Maybe<Chain_Link_Var_Pop_Order_By>;
  var_samp?: Maybe<Chain_Link_Var_Samp_Order_By>;
  variance?: Maybe<Chain_Link_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Chain_Link_Avg_Fields = {
  __typename?: 'chain_link_avg_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chain_link" */
export type Chain_Link_Avg_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chain_link". All fields are combined with a logical 'AND'. */
export type Chain_Link_Bool_Exp = {
  _and?: Maybe<Array<Chain_Link_Bool_Exp>>;
  _not?: Maybe<Chain_Link_Bool_Exp>;
  _or?: Maybe<Array<Chain_Link_Bool_Exp>>;
  chain_config?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
  chain_config_id?: Maybe<Bigint_Comparison_Exp>;
  chain_link_proofs?: Maybe<Chain_Link_Proof_Bool_Exp>;
  creation_time?: Maybe<Timestamp_Comparison_Exp>;
  external_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  proof?: Maybe<Chain_Link_Proof_Bool_Exp>;
  user_address?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "chain_link_chain_config" */
export type Chain_Link_Chain_Config = {
  __typename?: 'chain_link_chain_config';
  /** An array relationship */
  chain_links: Array<Chain_Link>;
  /** An aggregate relationship */
  chain_links_aggregate: Chain_Link_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "chain_link_chain_config" */
export type Chain_Link_Chain_ConfigChain_LinksArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

/** columns and relationships of "chain_link_chain_config" */
export type Chain_Link_Chain_ConfigChain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

/** aggregated selection of "chain_link_chain_config" */
export type Chain_Link_Chain_Config_Aggregate = {
  __typename?: 'chain_link_chain_config_aggregate';
  aggregate?: Maybe<Chain_Link_Chain_Config_Aggregate_Fields>;
  nodes: Array<Chain_Link_Chain_Config>;
};

/** aggregate fields of "chain_link_chain_config" */
export type Chain_Link_Chain_Config_Aggregate_Fields = {
  __typename?: 'chain_link_chain_config_aggregate_fields';
  avg?: Maybe<Chain_Link_Chain_Config_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chain_Link_Chain_Config_Max_Fields>;
  min?: Maybe<Chain_Link_Chain_Config_Min_Fields>;
  stddev?: Maybe<Chain_Link_Chain_Config_Stddev_Fields>;
  stddev_pop?: Maybe<Chain_Link_Chain_Config_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chain_Link_Chain_Config_Stddev_Samp_Fields>;
  sum?: Maybe<Chain_Link_Chain_Config_Sum_Fields>;
  var_pop?: Maybe<Chain_Link_Chain_Config_Var_Pop_Fields>;
  var_samp?: Maybe<Chain_Link_Chain_Config_Var_Samp_Fields>;
  variance?: Maybe<Chain_Link_Chain_Config_Variance_Fields>;
};

/** aggregate fields of "chain_link_chain_config" */
export type Chain_Link_Chain_Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Chain_Link_Chain_Config_Avg_Fields = {
  __typename?: 'chain_link_chain_config_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "chain_link_chain_config". All fields are combined with a logical 'AND'. */
export type Chain_Link_Chain_Config_Bool_Exp = {
  _and?: Maybe<Array<Chain_Link_Chain_Config_Bool_Exp>>;
  _not?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
  _or?: Maybe<Array<Chain_Link_Chain_Config_Bool_Exp>>;
  chain_links?: Maybe<Chain_Link_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Chain_Link_Chain_Config_Max_Fields = {
  __typename?: 'chain_link_chain_config_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chain_Link_Chain_Config_Min_Fields = {
  __typename?: 'chain_link_chain_config_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "chain_link_chain_config". */
export type Chain_Link_Chain_Config_Order_By = {
  chain_links_aggregate?: Maybe<Chain_Link_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "chain_link_chain_config" */
export enum Chain_Link_Chain_Config_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate stddev on columns */
export type Chain_Link_Chain_Config_Stddev_Fields = {
  __typename?: 'chain_link_chain_config_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Chain_Link_Chain_Config_Stddev_Pop_Fields = {
  __typename?: 'chain_link_chain_config_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Chain_Link_Chain_Config_Stddev_Samp_Fields = {
  __typename?: 'chain_link_chain_config_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Chain_Link_Chain_Config_Sum_Fields = {
  __typename?: 'chain_link_chain_config_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Chain_Link_Chain_Config_Var_Pop_Fields = {
  __typename?: 'chain_link_chain_config_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Chain_Link_Chain_Config_Var_Samp_Fields = {
  __typename?: 'chain_link_chain_config_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Chain_Link_Chain_Config_Variance_Fields = {
  __typename?: 'chain_link_chain_config_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate max on columns */
export type Chain_Link_Max_Fields = {
  __typename?: 'chain_link_max_fields';
  chain_config_id?: Maybe<Scalars['bigint']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  external_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  user_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chain_link" */
export type Chain_Link_Max_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  external_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chain_Link_Min_Fields = {
  __typename?: 'chain_link_min_fields';
  chain_config_id?: Maybe<Scalars['bigint']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  external_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  user_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chain_link" */
export type Chain_Link_Min_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  external_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_address?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "chain_link". */
export type Chain_Link_Order_By = {
  chain_config?: Maybe<Chain_Link_Chain_Config_Order_By>;
  chain_config_id?: Maybe<Order_By>;
  chain_link_proofs_aggregate?: Maybe<Chain_Link_Proof_Aggregate_Order_By>;
  creation_time?: Maybe<Order_By>;
  external_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  proof?: Maybe<Chain_Link_Proof_Order_By>;
  user_address?: Maybe<Order_By>;
};

/** columns and relationships of "chain_link_proof" */
export type Chain_Link_Proof = {
  __typename?: 'chain_link_proof';
  /** An object relationship */
  chain_link: Chain_Link;
  chain_link_id: Scalars['bigint'];
  height: Scalars['bigint'];
  id: Scalars['Int'];
  plain_text: Scalars['String'];
  public_key: Scalars['jsonb'];
  signature: Scalars['String'];
};

/** columns and relationships of "chain_link_proof" */
export type Chain_Link_ProofPublic_KeyArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "chain_link_proof" */
export type Chain_Link_Proof_Aggregate = {
  __typename?: 'chain_link_proof_aggregate';
  aggregate?: Maybe<Chain_Link_Proof_Aggregate_Fields>;
  nodes: Array<Chain_Link_Proof>;
};

/** aggregate fields of "chain_link_proof" */
export type Chain_Link_Proof_Aggregate_Fields = {
  __typename?: 'chain_link_proof_aggregate_fields';
  avg?: Maybe<Chain_Link_Proof_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chain_Link_Proof_Max_Fields>;
  min?: Maybe<Chain_Link_Proof_Min_Fields>;
  stddev?: Maybe<Chain_Link_Proof_Stddev_Fields>;
  stddev_pop?: Maybe<Chain_Link_Proof_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chain_Link_Proof_Stddev_Samp_Fields>;
  sum?: Maybe<Chain_Link_Proof_Sum_Fields>;
  var_pop?: Maybe<Chain_Link_Proof_Var_Pop_Fields>;
  var_samp?: Maybe<Chain_Link_Proof_Var_Samp_Fields>;
  variance?: Maybe<Chain_Link_Proof_Variance_Fields>;
};

/** aggregate fields of "chain_link_proof" */
export type Chain_Link_Proof_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chain_link_proof" */
export type Chain_Link_Proof_Aggregate_Order_By = {
  avg?: Maybe<Chain_Link_Proof_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chain_Link_Proof_Max_Order_By>;
  min?: Maybe<Chain_Link_Proof_Min_Order_By>;
  stddev?: Maybe<Chain_Link_Proof_Stddev_Order_By>;
  stddev_pop?: Maybe<Chain_Link_Proof_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chain_Link_Proof_Stddev_Samp_Order_By>;
  sum?: Maybe<Chain_Link_Proof_Sum_Order_By>;
  var_pop?: Maybe<Chain_Link_Proof_Var_Pop_Order_By>;
  var_samp?: Maybe<Chain_Link_Proof_Var_Samp_Order_By>;
  variance?: Maybe<Chain_Link_Proof_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Chain_Link_Proof_Avg_Fields = {
  __typename?: 'chain_link_proof_avg_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Avg_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chain_link_proof". All fields are combined with a logical 'AND'. */
export type Chain_Link_Proof_Bool_Exp = {
  _and?: Maybe<Array<Chain_Link_Proof_Bool_Exp>>;
  _not?: Maybe<Chain_Link_Proof_Bool_Exp>;
  _or?: Maybe<Array<Chain_Link_Proof_Bool_Exp>>;
  chain_link?: Maybe<Chain_Link_Bool_Exp>;
  chain_link_id?: Maybe<Bigint_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  plain_text?: Maybe<String_Comparison_Exp>;
  public_key?: Maybe<Jsonb_Comparison_Exp>;
  signature?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Chain_Link_Proof_Max_Fields = {
  __typename?: 'chain_link_proof_max_fields';
  chain_link_id?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  plain_text?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Max_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plain_text?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chain_Link_Proof_Min_Fields = {
  __typename?: 'chain_link_proof_min_fields';
  chain_link_id?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  plain_text?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Min_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plain_text?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "chain_link_proof". */
export type Chain_Link_Proof_Order_By = {
  chain_link?: Maybe<Chain_Link_Order_By>;
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plain_text?: Maybe<Order_By>;
  public_key?: Maybe<Order_By>;
  signature?: Maybe<Order_By>;
};

/** select columns of table "chain_link_proof" */
export enum Chain_Link_Proof_Select_Column {
  /** column name */
  ChainLinkId = 'chain_link_id',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  PlainText = 'plain_text',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Signature = 'signature',
}

/** aggregate stddev on columns */
export type Chain_Link_Proof_Stddev_Fields = {
  __typename?: 'chain_link_proof_stddev_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Stddev_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chain_Link_Proof_Stddev_Pop_Fields = {
  __typename?: 'chain_link_proof_stddev_pop_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Stddev_Pop_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chain_Link_Proof_Stddev_Samp_Fields = {
  __typename?: 'chain_link_proof_stddev_samp_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Stddev_Samp_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chain_Link_Proof_Sum_Fields = {
  __typename?: 'chain_link_proof_sum_fields';
  chain_link_id?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Sum_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Chain_Link_Proof_Var_Pop_Fields = {
  __typename?: 'chain_link_proof_var_pop_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Var_Pop_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chain_Link_Proof_Var_Samp_Fields = {
  __typename?: 'chain_link_proof_var_samp_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Var_Samp_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chain_Link_Proof_Variance_Fields = {
  __typename?: 'chain_link_proof_variance_fields';
  chain_link_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chain_link_proof" */
export type Chain_Link_Proof_Variance_Order_By = {
  chain_link_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "chain_link" */
export enum Chain_Link_Select_Column {
  /** column name */
  ChainConfigId = 'chain_config_id',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  ExternalAddress = 'external_address',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  UserAddress = 'user_address',
}

/** aggregate stddev on columns */
export type Chain_Link_Stddev_Fields = {
  __typename?: 'chain_link_stddev_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chain_link" */
export type Chain_Link_Stddev_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chain_Link_Stddev_Pop_Fields = {
  __typename?: 'chain_link_stddev_pop_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chain_link" */
export type Chain_Link_Stddev_Pop_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chain_Link_Stddev_Samp_Fields = {
  __typename?: 'chain_link_stddev_samp_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chain_link" */
export type Chain_Link_Stddev_Samp_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chain_Link_Sum_Fields = {
  __typename?: 'chain_link_sum_fields';
  chain_config_id?: Maybe<Scalars['bigint']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chain_link" */
export type Chain_Link_Sum_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Chain_Link_Var_Pop_Fields = {
  __typename?: 'chain_link_var_pop_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chain_link" */
export type Chain_Link_Var_Pop_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chain_Link_Var_Samp_Fields = {
  __typename?: 'chain_link_var_samp_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chain_link" */
export type Chain_Link_Var_Samp_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chain_Link_Variance_Fields = {
  __typename?: 'chain_link_variance_fields';
  chain_config_id?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chain_link" */
export type Chain_Link_Variance_Order_By = {
  chain_config_id?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "dtag_transfer_requests" */
export type Dtag_Transfer_Requests = {
  __typename?: 'dtag_transfer_requests';
  height: Scalars['bigint'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileBySenderAddress: Profile;
  receiver_address: Scalars['String'];
  sender_address: Scalars['String'];
};

/** aggregated selection of "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Aggregate = {
  __typename?: 'dtag_transfer_requests_aggregate';
  aggregate?: Maybe<Dtag_Transfer_Requests_Aggregate_Fields>;
  nodes: Array<Dtag_Transfer_Requests>;
};

/** aggregate fields of "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Aggregate_Fields = {
  __typename?: 'dtag_transfer_requests_aggregate_fields';
  avg?: Maybe<Dtag_Transfer_Requests_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Dtag_Transfer_Requests_Max_Fields>;
  min?: Maybe<Dtag_Transfer_Requests_Min_Fields>;
  stddev?: Maybe<Dtag_Transfer_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Dtag_Transfer_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dtag_Transfer_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Dtag_Transfer_Requests_Sum_Fields>;
  var_pop?: Maybe<Dtag_Transfer_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Dtag_Transfer_Requests_Var_Samp_Fields>;
  variance?: Maybe<Dtag_Transfer_Requests_Variance_Fields>;
};

/** aggregate fields of "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Aggregate_Order_By = {
  avg?: Maybe<Dtag_Transfer_Requests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dtag_Transfer_Requests_Max_Order_By>;
  min?: Maybe<Dtag_Transfer_Requests_Min_Order_By>;
  stddev?: Maybe<Dtag_Transfer_Requests_Stddev_Order_By>;
  stddev_pop?: Maybe<Dtag_Transfer_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dtag_Transfer_Requests_Stddev_Samp_Order_By>;
  sum?: Maybe<Dtag_Transfer_Requests_Sum_Order_By>;
  var_pop?: Maybe<Dtag_Transfer_Requests_Var_Pop_Order_By>;
  var_samp?: Maybe<Dtag_Transfer_Requests_Var_Samp_Order_By>;
  variance?: Maybe<Dtag_Transfer_Requests_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Dtag_Transfer_Requests_Avg_Fields = {
  __typename?: 'dtag_transfer_requests_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dtag_transfer_requests". All fields are combined with a logical 'AND'. */
export type Dtag_Transfer_Requests_Bool_Exp = {
  _and?: Maybe<Array<Dtag_Transfer_Requests_Bool_Exp>>;
  _not?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
  _or?: Maybe<Array<Dtag_Transfer_Requests_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  profileBySenderAddress?: Maybe<Profile_Bool_Exp>;
  receiver_address?: Maybe<String_Comparison_Exp>;
  sender_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Dtag_Transfer_Requests_Max_Fields = {
  __typename?: 'dtag_transfer_requests_max_fields';
  height?: Maybe<Scalars['bigint']>;
  receiver_address?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Max_Order_By = {
  height?: Maybe<Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dtag_Transfer_Requests_Min_Fields = {
  __typename?: 'dtag_transfer_requests_min_fields';
  height?: Maybe<Scalars['bigint']>;
  receiver_address?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Min_Order_By = {
  height?: Maybe<Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "dtag_transfer_requests". */
export type Dtag_Transfer_Requests_Order_By = {
  height?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  profileBySenderAddress?: Maybe<Profile_Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
};

/** select columns of table "dtag_transfer_requests" */
export enum Dtag_Transfer_Requests_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  SenderAddress = 'sender_address',
}

/** aggregate stddev on columns */
export type Dtag_Transfer_Requests_Stddev_Fields = {
  __typename?: 'dtag_transfer_requests_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dtag_Transfer_Requests_Stddev_Pop_Fields = {
  __typename?: 'dtag_transfer_requests_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dtag_Transfer_Requests_Stddev_Samp_Fields = {
  __typename?: 'dtag_transfer_requests_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dtag_Transfer_Requests_Sum_Fields = {
  __typename?: 'dtag_transfer_requests_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Dtag_Transfer_Requests_Var_Pop_Fields = {
  __typename?: 'dtag_transfer_requests_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dtag_Transfer_Requests_Var_Samp_Fields = {
  __typename?: 'dtag_transfer_requests_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dtag_Transfer_Requests_Variance_Fields = {
  __typename?: 'dtag_transfer_requests_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dtag_transfer_requests" */
export type Dtag_Transfer_Requests_Variance_Order_By = {
  height?: Maybe<Order_By>;
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

/** columns and relationships of "poll" */
export type Poll = {
  __typename?: 'poll';
  allows_answer_edits: Scalars['Boolean'];
  allows_multiple_answers: Scalars['Boolean'];
  end_date: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  poll_answers: Array<Poll_Answer>;
  /** An aggregate relationship */
  poll_answers_aggregate: Poll_Answer_Aggregate;
  /** An object relationship */
  post: Post;
  post_id: Scalars['String'];
  question: Scalars['String'];
  /** An array relationship */
  user_poll_answers: Array<User_Poll_Answer>;
  /** An aggregate relationship */
  user_poll_answers_aggregate: User_Poll_Answer_Aggregate;
};

/** columns and relationships of "poll" */
export type PollPoll_AnswersArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

/** columns and relationships of "poll" */
export type PollPoll_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

/** columns and relationships of "poll" */
export type PollUser_Poll_AnswersArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** columns and relationships of "poll" */
export type PollUser_Poll_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** aggregated selection of "poll" */
export type Poll_Aggregate = {
  __typename?: 'poll_aggregate';
  aggregate?: Maybe<Poll_Aggregate_Fields>;
  nodes: Array<Poll>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_Fields = {
  __typename?: 'poll_aggregate_fields';
  avg?: Maybe<Poll_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Poll_Max_Fields>;
  min?: Maybe<Poll_Min_Fields>;
  stddev?: Maybe<Poll_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Sum_Fields>;
  var_pop?: Maybe<Poll_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Var_Samp_Fields>;
  variance?: Maybe<Poll_Variance_Fields>;
};

/** aggregate fields of "poll" */
export type Poll_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** columns and relationships of "poll_answer" */
export type Poll_Answer = {
  __typename?: 'poll_answer';
  answer_id: Scalars['String'];
  answer_text: Scalars['String'];
  /** An object relationship */
  poll: Poll;
  poll_id: Scalars['Int'];
};

/** aggregated selection of "poll_answer" */
export type Poll_Answer_Aggregate = {
  __typename?: 'poll_answer_aggregate';
  aggregate?: Maybe<Poll_Answer_Aggregate_Fields>;
  nodes: Array<Poll_Answer>;
};

/** aggregate fields of "poll_answer" */
export type Poll_Answer_Aggregate_Fields = {
  __typename?: 'poll_answer_aggregate_fields';
  avg?: Maybe<Poll_Answer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Poll_Answer_Max_Fields>;
  min?: Maybe<Poll_Answer_Min_Fields>;
  stddev?: Maybe<Poll_Answer_Stddev_Fields>;
  stddev_pop?: Maybe<Poll_Answer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poll_Answer_Stddev_Samp_Fields>;
  sum?: Maybe<Poll_Answer_Sum_Fields>;
  var_pop?: Maybe<Poll_Answer_Var_Pop_Fields>;
  var_samp?: Maybe<Poll_Answer_Var_Samp_Fields>;
  variance?: Maybe<Poll_Answer_Variance_Fields>;
};

/** aggregate fields of "poll_answer" */
export type Poll_Answer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Poll_Answer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "poll_answer" */
export type Poll_Answer_Aggregate_Order_By = {
  avg?: Maybe<Poll_Answer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Poll_Answer_Max_Order_By>;
  min?: Maybe<Poll_Answer_Min_Order_By>;
  stddev?: Maybe<Poll_Answer_Stddev_Order_By>;
  stddev_pop?: Maybe<Poll_Answer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Poll_Answer_Stddev_Samp_Order_By>;
  sum?: Maybe<Poll_Answer_Sum_Order_By>;
  var_pop?: Maybe<Poll_Answer_Var_Pop_Order_By>;
  var_samp?: Maybe<Poll_Answer_Var_Samp_Order_By>;
  variance?: Maybe<Poll_Answer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Poll_Answer_Avg_Fields = {
  __typename?: 'poll_answer_avg_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "poll_answer" */
export type Poll_Answer_Avg_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poll_answer". All fields are combined with a logical 'AND'. */
export type Poll_Answer_Bool_Exp = {
  _and?: Maybe<Array<Poll_Answer_Bool_Exp>>;
  _not?: Maybe<Poll_Answer_Bool_Exp>;
  _or?: Maybe<Array<Poll_Answer_Bool_Exp>>;
  answer_id?: Maybe<String_Comparison_Exp>;
  answer_text?: Maybe<String_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Poll_Answer_Max_Fields = {
  __typename?: 'poll_answer_max_fields';
  answer_id?: Maybe<Scalars['String']>;
  answer_text?: Maybe<Scalars['String']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "poll_answer" */
export type Poll_Answer_Max_Order_By = {
  answer_id?: Maybe<Order_By>;
  answer_text?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Poll_Answer_Min_Fields = {
  __typename?: 'poll_answer_min_fields';
  answer_id?: Maybe<Scalars['String']>;
  answer_text?: Maybe<Scalars['String']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "poll_answer" */
export type Poll_Answer_Min_Order_By = {
  answer_id?: Maybe<Order_By>;
  answer_text?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "poll_answer". */
export type Poll_Answer_Order_By = {
  answer_id?: Maybe<Order_By>;
  answer_text?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** select columns of table "poll_answer" */
export enum Poll_Answer_Select_Column {
  /** column name */
  AnswerId = 'answer_id',
  /** column name */
  AnswerText = 'answer_text',
  /** column name */
  PollId = 'poll_id',
}

/** aggregate stddev on columns */
export type Poll_Answer_Stddev_Fields = {
  __typename?: 'poll_answer_stddev_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "poll_answer" */
export type Poll_Answer_Stddev_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poll_Answer_Stddev_Pop_Fields = {
  __typename?: 'poll_answer_stddev_pop_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "poll_answer" */
export type Poll_Answer_Stddev_Pop_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poll_Answer_Stddev_Samp_Fields = {
  __typename?: 'poll_answer_stddev_samp_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "poll_answer" */
export type Poll_Answer_Stddev_Samp_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Poll_Answer_Sum_Fields = {
  __typename?: 'poll_answer_sum_fields';
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "poll_answer" */
export type Poll_Answer_Sum_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Poll_Answer_Var_Pop_Fields = {
  __typename?: 'poll_answer_var_pop_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "poll_answer" */
export type Poll_Answer_Var_Pop_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poll_Answer_Var_Samp_Fields = {
  __typename?: 'poll_answer_var_samp_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "poll_answer" */
export type Poll_Answer_Var_Samp_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Poll_Answer_Variance_Fields = {
  __typename?: 'poll_answer_variance_fields';
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "poll_answer" */
export type Poll_Answer_Variance_Order_By = {
  poll_id?: Maybe<Order_By>;
};

/** aggregate avg on columns */
export type Poll_Avg_Fields = {
  __typename?: 'poll_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export type Poll_Bool_Exp = {
  _and?: Maybe<Array<Poll_Bool_Exp>>;
  _not?: Maybe<Poll_Bool_Exp>;
  _or?: Maybe<Array<Poll_Bool_Exp>>;
  allows_answer_edits?: Maybe<Boolean_Comparison_Exp>;
  allows_multiple_answers?: Maybe<Boolean_Comparison_Exp>;
  end_date?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  poll_answers?: Maybe<Poll_Answer_Bool_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<String_Comparison_Exp>;
  question?: Maybe<String_Comparison_Exp>;
  user_poll_answers?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** aggregate max on columns */
export type Poll_Max_Fields = {
  __typename?: 'poll_max_fields';
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Poll_Min_Fields = {
  __typename?: 'poll_min_fields';
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['String']>;
  question?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "poll". */
export type Poll_Order_By = {
  allows_answer_edits?: Maybe<Order_By>;
  allows_multiple_answers?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  poll_answers_aggregate?: Maybe<Poll_Answer_Aggregate_Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  question?: Maybe<Order_By>;
  user_poll_answers_aggregate?: Maybe<User_Poll_Answer_Aggregate_Order_By>;
};

/** select columns of table "poll" */
export enum Poll_Select_Column {
  /** column name */
  AllowsAnswerEdits = 'allows_answer_edits',
  /** column name */
  AllowsMultipleAnswers = 'allows_multiple_answers',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Question = 'question',
}

/** aggregate stddev on columns */
export type Poll_Stddev_Fields = {
  __typename?: 'poll_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Poll_Stddev_Pop_Fields = {
  __typename?: 'poll_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Poll_Stddev_Samp_Fields = {
  __typename?: 'poll_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Poll_Sum_Fields = {
  __typename?: 'poll_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Poll_Var_Pop_Fields = {
  __typename?: 'poll_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Poll_Var_Samp_Fields = {
  __typename?: 'poll_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Poll_Variance_Fields = {
  __typename?: 'poll_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "post" */
export type Post = {
  __typename?: 'post';
  comments_state: Scalars['String'];
  created: Scalars['timestamp'];
  creator_address: Scalars['String'];
  height: Scalars['bigint'];
  hidden: Scalars['Boolean'];
  id: Scalars['String'];
  last_edited: Scalars['timestamp'];
  message: Scalars['String'];
  parent_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  poll: Poll;
  /** An object relationship */
  post?: Maybe<Post>;
  /** An array relationship */
  post_attachments: Array<Post_Attachment>;
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachment_Aggregate;
  /** An array relationship */
  post_attributes: Array<Post_Attribute>;
  /** An aggregate relationship */
  post_attributes_aggregate: Post_Attribute_Aggregate;
  /** An array relationship */
  post_reactions: Array<Post_Reaction>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reaction_Aggregate;
  /** An array relationship */
  post_reports: Array<Post_Report>;
  /** An aggregate relationship */
  post_reports_aggregate: Post_Report_Aggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  /** An object relationship */
  profile: Profile;
  subspace: Scalars['String'];
};

/** columns and relationships of "post" */
export type PostPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_ReportsArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPost_Reports_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPostsArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** columns and relationships of "post" */
export type PostPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: 'post_aggregate';
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: 'post_aggregate_fields';
  avg?: Maybe<Post_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
  stddev?: Maybe<Post_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Sum_Fields>;
  var_pop?: Maybe<Post_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Var_Samp_Fields>;
  variance?: Maybe<Post_Variance_Fields>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  avg?: Maybe<Post_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Max_Order_By>;
  min?: Maybe<Post_Min_Order_By>;
  stddev?: Maybe<Post_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Sum_Order_By>;
  var_pop?: Maybe<Post_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Var_Samp_Order_By>;
  variance?: Maybe<Post_Variance_Order_By>;
};

/** columns and relationships of "post_attachment" */
export type Post_Attachment = {
  __typename?: 'post_attachment';
  id: Scalars['Int'];
  mime_type: Scalars['String'];
  /** An object relationship */
  post: Post;
  /** An array relationship */
  post_attachment_tags: Array<Post_Attachment_Tag>;
  /** An aggregate relationship */
  post_attachment_tags_aggregate: Post_Attachment_Tag_Aggregate;
  post_id: Scalars['String'];
  uri: Scalars['String'];
};

/** columns and relationships of "post_attachment" */
export type Post_AttachmentPost_Attachment_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

/** columns and relationships of "post_attachment" */
export type Post_AttachmentPost_Attachment_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

/** aggregated selection of "post_attachment" */
export type Post_Attachment_Aggregate = {
  __typename?: 'post_attachment_aggregate';
  aggregate?: Maybe<Post_Attachment_Aggregate_Fields>;
  nodes: Array<Post_Attachment>;
};

/** aggregate fields of "post_attachment" */
export type Post_Attachment_Aggregate_Fields = {
  __typename?: 'post_attachment_aggregate_fields';
  avg?: Maybe<Post_Attachment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Attachment_Max_Fields>;
  min?: Maybe<Post_Attachment_Min_Fields>;
  stddev?: Maybe<Post_Attachment_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Attachment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Attachment_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Attachment_Sum_Fields>;
  var_pop?: Maybe<Post_Attachment_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Attachment_Var_Samp_Fields>;
  variance?: Maybe<Post_Attachment_Variance_Fields>;
};

/** aggregate fields of "post_attachment" */
export type Post_Attachment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attachment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_attachment" */
export type Post_Attachment_Aggregate_Order_By = {
  avg?: Maybe<Post_Attachment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Attachment_Max_Order_By>;
  min?: Maybe<Post_Attachment_Min_Order_By>;
  stddev?: Maybe<Post_Attachment_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Attachment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Attachment_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Attachment_Sum_Order_By>;
  var_pop?: Maybe<Post_Attachment_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Attachment_Var_Samp_Order_By>;
  variance?: Maybe<Post_Attachment_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Attachment_Avg_Fields = {
  __typename?: 'post_attachment_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_attachment" */
export type Post_Attachment_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_attachment". All fields are combined with a logical 'AND'. */
export type Post_Attachment_Bool_Exp = {
  _and?: Maybe<Array<Post_Attachment_Bool_Exp>>;
  _not?: Maybe<Post_Attachment_Bool_Exp>;
  _or?: Maybe<Array<Post_Attachment_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  mime_type?: Maybe<String_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_attachment_tags?: Maybe<Post_Attachment_Tag_Bool_Exp>;
  post_id?: Maybe<String_Comparison_Exp>;
  uri?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Attachment_Max_Fields = {
  __typename?: 'post_attachment_max_fields';
  id?: Maybe<Scalars['Int']>;
  mime_type?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_attachment" */
export type Post_Attachment_Max_Order_By = {
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Attachment_Min_Fields = {
  __typename?: 'post_attachment_min_fields';
  id?: Maybe<Scalars['Int']>;
  mime_type?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_attachment" */
export type Post_Attachment_Min_Order_By = {
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post_attachment". */
export type Post_Attachment_Order_By = {
  id?: Maybe<Order_By>;
  mime_type?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_attachment_tags_aggregate?: Maybe<Post_Attachment_Tag_Aggregate_Order_By>;
  post_id?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
};

/** select columns of table "post_attachment" */
export enum Post_Attachment_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Uri = 'uri',
}

/** aggregate stddev on columns */
export type Post_Attachment_Stddev_Fields = {
  __typename?: 'post_attachment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_attachment" */
export type Post_Attachment_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Attachment_Stddev_Pop_Fields = {
  __typename?: 'post_attachment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_attachment" */
export type Post_Attachment_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Attachment_Stddev_Samp_Fields = {
  __typename?: 'post_attachment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_attachment" */
export type Post_Attachment_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Attachment_Sum_Fields = {
  __typename?: 'post_attachment_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_attachment" */
export type Post_Attachment_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "post_attachment_tag" */
export type Post_Attachment_Tag = {
  __typename?: 'post_attachment_tag';
  attachment_id: Scalars['Int'];
  /** An object relationship */
  post_attachment: Post_Attachment;
  /** An object relationship */
  profile: Profile;
  tag_address: Scalars['String'];
};

/** aggregated selection of "post_attachment_tag" */
export type Post_Attachment_Tag_Aggregate = {
  __typename?: 'post_attachment_tag_aggregate';
  aggregate?: Maybe<Post_Attachment_Tag_Aggregate_Fields>;
  nodes: Array<Post_Attachment_Tag>;
};

/** aggregate fields of "post_attachment_tag" */
export type Post_Attachment_Tag_Aggregate_Fields = {
  __typename?: 'post_attachment_tag_aggregate_fields';
  avg?: Maybe<Post_Attachment_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Attachment_Tag_Max_Fields>;
  min?: Maybe<Post_Attachment_Tag_Min_Fields>;
  stddev?: Maybe<Post_Attachment_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Attachment_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Attachment_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Attachment_Tag_Sum_Fields>;
  var_pop?: Maybe<Post_Attachment_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Attachment_Tag_Var_Samp_Fields>;
  variance?: Maybe<Post_Attachment_Tag_Variance_Fields>;
};

/** aggregate fields of "post_attachment_tag" */
export type Post_Attachment_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_attachment_tag" */
export type Post_Attachment_Tag_Aggregate_Order_By = {
  avg?: Maybe<Post_Attachment_Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Attachment_Tag_Max_Order_By>;
  min?: Maybe<Post_Attachment_Tag_Min_Order_By>;
  stddev?: Maybe<Post_Attachment_Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Attachment_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Attachment_Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Attachment_Tag_Sum_Order_By>;
  var_pop?: Maybe<Post_Attachment_Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Attachment_Tag_Var_Samp_Order_By>;
  variance?: Maybe<Post_Attachment_Tag_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Attachment_Tag_Avg_Fields = {
  __typename?: 'post_attachment_tag_avg_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Avg_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_attachment_tag". All fields are combined with a logical 'AND'. */
export type Post_Attachment_Tag_Bool_Exp = {
  _and?: Maybe<Array<Post_Attachment_Tag_Bool_Exp>>;
  _not?: Maybe<Post_Attachment_Tag_Bool_Exp>;
  _or?: Maybe<Array<Post_Attachment_Tag_Bool_Exp>>;
  attachment_id?: Maybe<Int_Comparison_Exp>;
  post_attachment?: Maybe<Post_Attachment_Bool_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  tag_address?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Attachment_Tag_Max_Fields = {
  __typename?: 'post_attachment_tag_max_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  tag_address?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Max_Order_By = {
  attachment_id?: Maybe<Order_By>;
  tag_address?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Attachment_Tag_Min_Fields = {
  __typename?: 'post_attachment_tag_min_fields';
  attachment_id?: Maybe<Scalars['Int']>;
  tag_address?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Min_Order_By = {
  attachment_id?: Maybe<Order_By>;
  tag_address?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post_attachment_tag". */
export type Post_Attachment_Tag_Order_By = {
  attachment_id?: Maybe<Order_By>;
  post_attachment?: Maybe<Post_Attachment_Order_By>;
  profile?: Maybe<Profile_Order_By>;
  tag_address?: Maybe<Order_By>;
};

/** select columns of table "post_attachment_tag" */
export enum Post_Attachment_Tag_Select_Column {
  /** column name */
  AttachmentId = 'attachment_id',
  /** column name */
  TagAddress = 'tag_address',
}

/** aggregate stddev on columns */
export type Post_Attachment_Tag_Stddev_Fields = {
  __typename?: 'post_attachment_tag_stddev_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Stddev_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Attachment_Tag_Stddev_Pop_Fields = {
  __typename?: 'post_attachment_tag_stddev_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Stddev_Pop_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Attachment_Tag_Stddev_Samp_Fields = {
  __typename?: 'post_attachment_tag_stddev_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Stddev_Samp_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Attachment_Tag_Sum_Fields = {
  __typename?: 'post_attachment_tag_sum_fields';
  attachment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Sum_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Attachment_Tag_Var_Pop_Fields = {
  __typename?: 'post_attachment_tag_var_pop_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Var_Pop_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Attachment_Tag_Var_Samp_Fields = {
  __typename?: 'post_attachment_tag_var_samp_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Var_Samp_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Attachment_Tag_Variance_Fields = {
  __typename?: 'post_attachment_tag_variance_fields';
  attachment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_attachment_tag" */
export type Post_Attachment_Tag_Variance_Order_By = {
  attachment_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Attachment_Var_Pop_Fields = {
  __typename?: 'post_attachment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_attachment" */
export type Post_Attachment_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Attachment_Var_Samp_Fields = {
  __typename?: 'post_attachment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_attachment" */
export type Post_Attachment_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Attachment_Variance_Fields = {
  __typename?: 'post_attachment_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_attachment" */
export type Post_Attachment_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "post_attribute" */
export type Post_Attribute = {
  __typename?: 'post_attribute';
  key: Scalars['String'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "post_attribute" */
export type Post_Attribute_Aggregate = {
  __typename?: 'post_attribute_aggregate';
  aggregate?: Maybe<Post_Attribute_Aggregate_Fields>;
  nodes: Array<Post_Attribute>;
};

/** aggregate fields of "post_attribute" */
export type Post_Attribute_Aggregate_Fields = {
  __typename?: 'post_attribute_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Post_Attribute_Max_Fields>;
  min?: Maybe<Post_Attribute_Min_Fields>;
};

/** aggregate fields of "post_attribute" */
export type Post_Attribute_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attribute_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_attribute" */
export type Post_Attribute_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Attribute_Max_Order_By>;
  min?: Maybe<Post_Attribute_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "post_attribute". All fields are combined with a logical 'AND'. */
export type Post_Attribute_Bool_Exp = {
  _and?: Maybe<Array<Post_Attribute_Bool_Exp>>;
  _not?: Maybe<Post_Attribute_Bool_Exp>;
  _or?: Maybe<Array<Post_Attribute_Bool_Exp>>;
  key?: Maybe<String_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Attribute_Max_Fields = {
  __typename?: 'post_attribute_max_fields';
  key?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_attribute" */
export type Post_Attribute_Max_Order_By = {
  key?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Attribute_Min_Fields = {
  __typename?: 'post_attribute_min_fields';
  key?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_attribute" */
export type Post_Attribute_Min_Order_By = {
  key?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post_attribute". */
export type Post_Attribute_Order_By = {
  key?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "post_attribute" */
export enum Post_Attribute_Select_Column {
  /** column name */
  Key = 'key',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Value = 'value',
}

/** aggregate avg on columns */
export type Post_Avg_Fields = {
  __typename?: 'post_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post" */
export type Post_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: Maybe<Array<Post_Bool_Exp>>;
  _not?: Maybe<Post_Bool_Exp>;
  _or?: Maybe<Array<Post_Bool_Exp>>;
  comments_state?: Maybe<String_Comparison_Exp>;
  created?: Maybe<Timestamp_Comparison_Exp>;
  creator_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  hidden?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_edited?: Maybe<Timestamp_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  parent_id?: Maybe<String_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_attachments?: Maybe<Post_Attachment_Bool_Exp>;
  post_attributes?: Maybe<Post_Attribute_Bool_Exp>;
  post_reactions?: Maybe<Post_Reaction_Bool_Exp>;
  post_reports?: Maybe<Post_Report_Bool_Exp>;
  posts?: Maybe<Post_Bool_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  subspace?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: 'post_max_fields';
  comments_state?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['timestamp']>;
  creator_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['timestamp']>;
  message?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  comments_state?: Maybe<Order_By>;
  created?: Maybe<Order_By>;
  creator_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_edited?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: 'post_min_fields';
  comments_state?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['timestamp']>;
  creator_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['String']>;
  last_edited?: Maybe<Scalars['timestamp']>;
  message?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  comments_state?: Maybe<Order_By>;
  created?: Maybe<Order_By>;
  creator_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_edited?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  comments_state?: Maybe<Order_By>;
  created?: Maybe<Order_By>;
  creator_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_edited?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  post?: Maybe<Post_Order_By>;
  post_attachments_aggregate?: Maybe<Post_Attachment_Aggregate_Order_By>;
  post_attributes_aggregate?: Maybe<Post_Attribute_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Post_Reaction_Aggregate_Order_By>;
  post_reports_aggregate?: Maybe<Post_Report_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Post_Aggregate_Order_By>;
  profile?: Maybe<Profile_Order_By>;
  subspace?: Maybe<Order_By>;
};

/** columns and relationships of "post_reaction" */
export type Post_Reaction = {
  __typename?: 'post_reaction';
  height: Scalars['bigint'];
  owner_address: Scalars['String'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['String'];
  /** An object relationship */
  profile: Profile;
  short_code: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "post_reaction" */
export type Post_Reaction_Aggregate = {
  __typename?: 'post_reaction_aggregate';
  aggregate?: Maybe<Post_Reaction_Aggregate_Fields>;
  nodes: Array<Post_Reaction>;
};

/** aggregate fields of "post_reaction" */
export type Post_Reaction_Aggregate_Fields = {
  __typename?: 'post_reaction_aggregate_fields';
  avg?: Maybe<Post_Reaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Reaction_Max_Fields>;
  min?: Maybe<Post_Reaction_Min_Fields>;
  stddev?: Maybe<Post_Reaction_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Reaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Reaction_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Reaction_Sum_Fields>;
  var_pop?: Maybe<Post_Reaction_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Reaction_Var_Samp_Fields>;
  variance?: Maybe<Post_Reaction_Variance_Fields>;
};

/** aggregate fields of "post_reaction" */
export type Post_Reaction_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Reaction_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_reaction" */
export type Post_Reaction_Aggregate_Order_By = {
  avg?: Maybe<Post_Reaction_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Reaction_Max_Order_By>;
  min?: Maybe<Post_Reaction_Min_Order_By>;
  stddev?: Maybe<Post_Reaction_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Reaction_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Reaction_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Reaction_Sum_Order_By>;
  var_pop?: Maybe<Post_Reaction_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Reaction_Var_Samp_Order_By>;
  variance?: Maybe<Post_Reaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Reaction_Avg_Fields = {
  __typename?: 'post_reaction_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_reaction" */
export type Post_Reaction_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_reaction". All fields are combined with a logical 'AND'. */
export type Post_Reaction_Bool_Exp = {
  _and?: Maybe<Array<Post_Reaction_Bool_Exp>>;
  _not?: Maybe<Post_Reaction_Bool_Exp>;
  _or?: Maybe<Array<Post_Reaction_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  owner_address?: Maybe<String_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  short_code?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Reaction_Max_Fields = {
  __typename?: 'post_reaction_max_fields';
  height?: Maybe<Scalars['bigint']>;
  owner_address?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_reaction" */
export type Post_Reaction_Max_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Reaction_Min_Fields = {
  __typename?: 'post_reaction_min_fields';
  height?: Maybe<Scalars['bigint']>;
  owner_address?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_reaction" */
export type Post_Reaction_Min_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post_reaction". */
export type Post_Reaction_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  short_code?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "post_reaction" */
export enum Post_Reaction_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Post_Reaction_Stddev_Fields = {
  __typename?: 'post_reaction_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_reaction" */
export type Post_Reaction_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Reaction_Stddev_Pop_Fields = {
  __typename?: 'post_reaction_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_reaction" */
export type Post_Reaction_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Reaction_Stddev_Samp_Fields = {
  __typename?: 'post_reaction_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_reaction" */
export type Post_Reaction_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Reaction_Sum_Fields = {
  __typename?: 'post_reaction_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "post_reaction" */
export type Post_Reaction_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Reaction_Var_Pop_Fields = {
  __typename?: 'post_reaction_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_reaction" */
export type Post_Reaction_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Reaction_Var_Samp_Fields = {
  __typename?: 'post_reaction_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_reaction" */
export type Post_Reaction_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Reaction_Variance_Fields = {
  __typename?: 'post_reaction_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_reaction" */
export type Post_Reaction_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "post_report" */
export type Post_Report = {
  __typename?: 'post_report';
  height: Scalars['bigint'];
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  /** An object relationship */
  post: Post;
  post_id: Scalars['String'];
  /** An object relationship */
  profile: Profile;
  reporter_address: Scalars['String'];
  type: Scalars['String'];
};

/** aggregated selection of "post_report" */
export type Post_Report_Aggregate = {
  __typename?: 'post_report_aggregate';
  aggregate?: Maybe<Post_Report_Aggregate_Fields>;
  nodes: Array<Post_Report>;
};

/** aggregate fields of "post_report" */
export type Post_Report_Aggregate_Fields = {
  __typename?: 'post_report_aggregate_fields';
  avg?: Maybe<Post_Report_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Post_Report_Max_Fields>;
  min?: Maybe<Post_Report_Min_Fields>;
  stddev?: Maybe<Post_Report_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Report_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Report_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Report_Sum_Fields>;
  var_pop?: Maybe<Post_Report_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Report_Var_Samp_Fields>;
  variance?: Maybe<Post_Report_Variance_Fields>;
};

/** aggregate fields of "post_report" */
export type Post_Report_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Report_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_report" */
export type Post_Report_Aggregate_Order_By = {
  avg?: Maybe<Post_Report_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Report_Max_Order_By>;
  min?: Maybe<Post_Report_Min_Order_By>;
  stddev?: Maybe<Post_Report_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Report_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Report_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Report_Sum_Order_By>;
  var_pop?: Maybe<Post_Report_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Report_Var_Samp_Order_By>;
  variance?: Maybe<Post_Report_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Post_Report_Avg_Fields = {
  __typename?: 'post_report_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_report" */
export type Post_Report_Avg_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_report". All fields are combined with a logical 'AND'. */
export type Post_Report_Bool_Exp = {
  _and?: Maybe<Array<Post_Report_Bool_Exp>>;
  _not?: Maybe<Post_Report_Bool_Exp>;
  _or?: Maybe<Array<Post_Report_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  post?: Maybe<Post_Bool_Exp>;
  post_id?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  reporter_address?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Post_Report_Max_Fields = {
  __typename?: 'post_report_max_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  reporter_address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_report" */
export type Post_Report_Max_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reporter_address?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Report_Min_Fields = {
  __typename?: 'post_report_min_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  reporter_address?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_report" */
export type Post_Report_Min_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  reporter_address?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "post_report". */
export type Post_Report_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  post?: Maybe<Post_Order_By>;
  post_id?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  reporter_address?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** select columns of table "post_report" */
export enum Post_Report_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  PostId = 'post_id',
  /** column name */
  ReporterAddress = 'reporter_address',
  /** column name */
  Type = 'type',
}

/** aggregate stddev on columns */
export type Post_Report_Stddev_Fields = {
  __typename?: 'post_report_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_report" */
export type Post_Report_Stddev_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Report_Stddev_Pop_Fields = {
  __typename?: 'post_report_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_report" */
export type Post_Report_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Report_Stddev_Samp_Fields = {
  __typename?: 'post_report_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_report" */
export type Post_Report_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Report_Sum_Fields = {
  __typename?: 'post_report_sum_fields';
  height?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_report" */
export type Post_Report_Sum_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Report_Var_Pop_Fields = {
  __typename?: 'post_report_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_report" */
export type Post_Report_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Report_Var_Samp_Fields = {
  __typename?: 'post_report_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_report" */
export type Post_Report_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Report_Variance_Fields = {
  __typename?: 'post_report_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_report" */
export type Post_Report_Variance_Order_By = {
  height?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  CommentsState = 'comments_state',
  /** column name */
  Created = 'created',
  /** column name */
  CreatorAddress = 'creator_address',
  /** column name */
  Height = 'height',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  LastEdited = 'last_edited',
  /** column name */
  Message = 'message',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Subspace = 'subspace',
}

/** aggregate stddev on columns */
export type Post_Stddev_Fields = {
  __typename?: 'post_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post" */
export type Post_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Stddev_Pop_Fields = {
  __typename?: 'post_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post" */
export type Post_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Stddev_Samp_Fields = {
  __typename?: 'post_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post" */
export type Post_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Sum_Fields = {
  __typename?: 'post_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "post" */
export type Post_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Post_Var_Pop_Fields = {
  __typename?: 'post_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post" */
export type Post_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Var_Samp_Fields = {
  __typename?: 'post_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post" */
export type Post_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Variance_Fields = {
  __typename?: 'post_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post" */
export type Post_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  address: Scalars['String'];
  /** An array relationship */
  applications_links: Array<Application_Link>;
  /** An aggregate relationship */
  applications_links_aggregate: Application_Link_Aggregate;
  bio: Scalars['String'];
  /** An array relationship */
  chain_links: Array<Chain_Link>;
  /** An aggregate relationship */
  chain_links_aggregate: Chain_Link_Aggregate;
  cover_pic: Scalars['String'];
  creation_time: Scalars['timestamp'];
  dtag: Scalars['String'];
  /** An array relationship */
  dtagTransferRequestsBySenderAddress: Array<Dtag_Transfer_Requests>;
  /** An aggregate relationship */
  dtagTransferRequestsBySenderAddress_aggregate: Dtag_Transfer_Requests_Aggregate;
  /** An array relationship */
  dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** An aggregate relationship */
  dtag_transfer_requests_aggregate: Dtag_Transfer_Requests_Aggregate;
  height: Scalars['bigint'];
  nickname: Scalars['String'];
  /** An array relationship */
  post_attachment_tags: Array<Post_Attachment_Tag>;
  /** An aggregate relationship */
  post_attachment_tags_aggregate: Post_Attachment_Tag_Aggregate;
  /** An array relationship */
  post_reactions: Array<Post_Reaction>;
  /** An aggregate relationship */
  post_reactions_aggregate: Post_Reaction_Aggregate;
  /** An array relationship */
  post_reports: Array<Post_Report>;
  /** An aggregate relationship */
  post_reports_aggregate: Post_Report_Aggregate;
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: Post_Aggregate;
  /** An array relationship */
  profileRelationshipsBySenderAddress: Array<Profile_Relationship>;
  /** An aggregate relationship */
  profileRelationshipsBySenderAddress_aggregate: Profile_Relationship_Aggregate;
  profile_pic: Scalars['String'];
  /** An array relationship */
  profile_relationships: Array<Profile_Relationship>;
  /** An aggregate relationship */
  profile_relationships_aggregate: Profile_Relationship_Aggregate;
  /** An array relationship */
  registered_reactions: Array<Registered_Reactions>;
  /** An aggregate relationship */
  registered_reactions_aggregate: Registered_Reactions_Aggregate;
  /** An array relationship */
  userBlocksByBlockerAddress: Array<User_Block>;
  /** An aggregate relationship */
  userBlocksByBlockerAddress_aggregate: User_Block_Aggregate;
  /** An array relationship */
  user_blocks: Array<User_Block>;
  /** An aggregate relationship */
  user_blocks_aggregate: User_Block_Aggregate;
  /** An array relationship */
  user_poll_answers: Array<User_Poll_Answer>;
  /** An aggregate relationship */
  user_poll_answers_aggregate: User_Poll_Answer_Aggregate;
};

/** columns and relationships of "profile" */
export type ProfileApplication_LinksArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileApplication_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileChain_LinksArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileChain_Links_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileDtagTransferRequestsBySenderAddressArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileDtagTransferRequestsBySenderAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileDtag_Transfer_RequestsArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileDtag_Transfer_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_Attachment_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_Attachment_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_ReactionsArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_ReportsArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePost_Reports_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePostsArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfilePosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileProfileRelationshipsBySenderAddressArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileProfileRelationshipsBySenderAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileProfile_RelationshipsArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileProfile_Relationships_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileRegistered_ReactionsArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileRegistered_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUserBlocksByBlockerAddressArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUserBlocksByBlockerAddress_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUser_BlocksArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUser_Blocks_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUser_Poll_AnswersArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** columns and relationships of "profile" */
export type ProfileUser_Poll_Answers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  avg?: Maybe<Profile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
  stddev?: Maybe<Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Sum_Fields>;
  var_pop?: Maybe<Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Var_Samp_Fields>;
  variance?: Maybe<Profile_Variance_Fields>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Profile_Avg_Fields = {
  __typename?: 'profile_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: Maybe<Array<Profile_Bool_Exp>>;
  _not?: Maybe<Profile_Bool_Exp>;
  _or?: Maybe<Array<Profile_Bool_Exp>>;
  address?: Maybe<String_Comparison_Exp>;
  applications_links?: Maybe<Application_Link_Bool_Exp>;
  bio?: Maybe<String_Comparison_Exp>;
  chain_links?: Maybe<Chain_Link_Bool_Exp>;
  cover_pic?: Maybe<String_Comparison_Exp>;
  creation_time?: Maybe<Timestamp_Comparison_Exp>;
  dtag?: Maybe<String_Comparison_Exp>;
  dtagTransferRequestsBySenderAddress?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
  dtag_transfer_requests?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  nickname?: Maybe<String_Comparison_Exp>;
  post_attachment_tags?: Maybe<Post_Attachment_Tag_Bool_Exp>;
  post_reactions?: Maybe<Post_Reaction_Bool_Exp>;
  post_reports?: Maybe<Post_Report_Bool_Exp>;
  posts?: Maybe<Post_Bool_Exp>;
  profileRelationshipsBySenderAddress?: Maybe<Profile_Relationship_Bool_Exp>;
  profile_pic?: Maybe<String_Comparison_Exp>;
  profile_relationships?: Maybe<Profile_Relationship_Bool_Exp>;
  registered_reactions?: Maybe<Registered_Reactions_Bool_Exp>;
  userBlocksByBlockerAddress?: Maybe<User_Block_Bool_Exp>;
  user_blocks?: Maybe<User_Block_Bool_Exp>;
  user_poll_answers?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  cover_pic?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  dtag?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  nickname?: Maybe<Scalars['String']>;
  profile_pic?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  address?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  cover_pic?: Maybe<Scalars['String']>;
  creation_time?: Maybe<Scalars['timestamp']>;
  dtag?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  nickname?: Maybe<Scalars['String']>;
  profile_pic?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  address?: Maybe<Order_By>;
  applications_links_aggregate?: Maybe<Application_Link_Aggregate_Order_By>;
  bio?: Maybe<Order_By>;
  chain_links_aggregate?: Maybe<Chain_Link_Aggregate_Order_By>;
  cover_pic?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  dtag?: Maybe<Order_By>;
  dtagTransferRequestsBySenderAddress_aggregate?: Maybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  dtag_transfer_requests_aggregate?: Maybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  post_attachment_tags_aggregate?: Maybe<Post_Attachment_Tag_Aggregate_Order_By>;
  post_reactions_aggregate?: Maybe<Post_Reaction_Aggregate_Order_By>;
  post_reports_aggregate?: Maybe<Post_Report_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Post_Aggregate_Order_By>;
  profileRelationshipsBySenderAddress_aggregate?: Maybe<Profile_Relationship_Aggregate_Order_By>;
  profile_pic?: Maybe<Order_By>;
  profile_relationships_aggregate?: Maybe<Profile_Relationship_Aggregate_Order_By>;
  registered_reactions_aggregate?: Maybe<Registered_Reactions_Aggregate_Order_By>;
  userBlocksByBlockerAddress_aggregate?: Maybe<User_Block_Aggregate_Order_By>;
  user_blocks_aggregate?: Maybe<User_Block_Aggregate_Order_By>;
  user_poll_answers_aggregate?: Maybe<User_Poll_Answer_Aggregate_Order_By>;
};

/** columns and relationships of "profile_relationship" */
export type Profile_Relationship = {
  __typename?: 'profile_relationship';
  height: Scalars['bigint'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileBySenderAddress: Profile;
  receiver_address: Scalars['String'];
  sender_address: Scalars['String'];
  subspace: Scalars['String'];
};

/** aggregated selection of "profile_relationship" */
export type Profile_Relationship_Aggregate = {
  __typename?: 'profile_relationship_aggregate';
  aggregate?: Maybe<Profile_Relationship_Aggregate_Fields>;
  nodes: Array<Profile_Relationship>;
};

/** aggregate fields of "profile_relationship" */
export type Profile_Relationship_Aggregate_Fields = {
  __typename?: 'profile_relationship_aggregate_fields';
  avg?: Maybe<Profile_Relationship_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profile_Relationship_Max_Fields>;
  min?: Maybe<Profile_Relationship_Min_Fields>;
  stddev?: Maybe<Profile_Relationship_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Relationship_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Relationship_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Relationship_Sum_Fields>;
  var_pop?: Maybe<Profile_Relationship_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Relationship_Var_Samp_Fields>;
  variance?: Maybe<Profile_Relationship_Variance_Fields>;
};

/** aggregate fields of "profile_relationship" */
export type Profile_Relationship_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Profile_Relationship_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile_relationship" */
export type Profile_Relationship_Aggregate_Order_By = {
  avg?: Maybe<Profile_Relationship_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Profile_Relationship_Max_Order_By>;
  min?: Maybe<Profile_Relationship_Min_Order_By>;
  stddev?: Maybe<Profile_Relationship_Stddev_Order_By>;
  stddev_pop?: Maybe<Profile_Relationship_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Profile_Relationship_Stddev_Samp_Order_By>;
  sum?: Maybe<Profile_Relationship_Sum_Order_By>;
  var_pop?: Maybe<Profile_Relationship_Var_Pop_Order_By>;
  var_samp?: Maybe<Profile_Relationship_Var_Samp_Order_By>;
  variance?: Maybe<Profile_Relationship_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Profile_Relationship_Avg_Fields = {
  __typename?: 'profile_relationship_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "profile_relationship" */
export type Profile_Relationship_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profile_relationship". All fields are combined with a logical 'AND'. */
export type Profile_Relationship_Bool_Exp = {
  _and?: Maybe<Array<Profile_Relationship_Bool_Exp>>;
  _not?: Maybe<Profile_Relationship_Bool_Exp>;
  _or?: Maybe<Array<Profile_Relationship_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  profileBySenderAddress?: Maybe<Profile_Bool_Exp>;
  receiver_address?: Maybe<String_Comparison_Exp>;
  sender_address?: Maybe<String_Comparison_Exp>;
  subspace?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Profile_Relationship_Max_Fields = {
  __typename?: 'profile_relationship_max_fields';
  height?: Maybe<Scalars['bigint']>;
  receiver_address?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "profile_relationship" */
export type Profile_Relationship_Max_Order_By = {
  height?: Maybe<Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Relationship_Min_Fields = {
  __typename?: 'profile_relationship_min_fields';
  height?: Maybe<Scalars['bigint']>;
  receiver_address?: Maybe<Scalars['String']>;
  sender_address?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "profile_relationship" */
export type Profile_Relationship_Min_Order_By = {
  height?: Maybe<Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "profile_relationship". */
export type Profile_Relationship_Order_By = {
  height?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  profileBySenderAddress?: Maybe<Profile_Order_By>;
  receiver_address?: Maybe<Order_By>;
  sender_address?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** select columns of table "profile_relationship" */
export enum Profile_Relationship_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  ReceiverAddress = 'receiver_address',
  /** column name */
  SenderAddress = 'sender_address',
  /** column name */
  Subspace = 'subspace',
}

/** aggregate stddev on columns */
export type Profile_Relationship_Stddev_Fields = {
  __typename?: 'profile_relationship_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "profile_relationship" */
export type Profile_Relationship_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profile_Relationship_Stddev_Pop_Fields = {
  __typename?: 'profile_relationship_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "profile_relationship" */
export type Profile_Relationship_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profile_Relationship_Stddev_Samp_Fields = {
  __typename?: 'profile_relationship_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "profile_relationship" */
export type Profile_Relationship_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Profile_Relationship_Sum_Fields = {
  __typename?: 'profile_relationship_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "profile_relationship" */
export type Profile_Relationship_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Profile_Relationship_Var_Pop_Fields = {
  __typename?: 'profile_relationship_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "profile_relationship" */
export type Profile_Relationship_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profile_Relationship_Var_Samp_Fields = {
  __typename?: 'profile_relationship_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "profile_relationship" */
export type Profile_Relationship_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Profile_Relationship_Variance_Fields = {
  __typename?: 'profile_relationship_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "profile_relationship" */
export type Profile_Relationship_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Bio = 'bio',
  /** column name */
  CoverPic = 'cover_pic',
  /** column name */
  CreationTime = 'creation_time',
  /** column name */
  Dtag = 'dtag',
  /** column name */
  Height = 'height',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  ProfilePic = 'profile_pic',
}

/** aggregate stddev on columns */
export type Profile_Stddev_Fields = {
  __typename?: 'profile_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Profile_Stddev_Pop_Fields = {
  __typename?: 'profile_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Profile_Stddev_Samp_Fields = {
  __typename?: 'profile_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Profile_Sum_Fields = {
  __typename?: 'profile_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Profile_Var_Pop_Fields = {
  __typename?: 'profile_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Profile_Var_Samp_Fields = {
  __typename?: 'profile_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Profile_Variance_Fields = {
  __typename?: 'profile_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "application_link" */
  application_link: Array<Application_Link>;
  /** fetch aggregated fields from the table: "application_link" */
  application_link_aggregate: Application_Link_Aggregate;
  /** fetch data from the table: "application_link" using primary key columns */
  application_link_by_pk?: Maybe<Application_Link>;
  /** fetch data from the table: "application_link_oracle_request" */
  application_link_oracle_request: Array<Application_Link_Oracle_Request>;
  /** fetch aggregated fields from the table: "application_link_oracle_request" */
  application_link_oracle_request_aggregate: Application_Link_Oracle_Request_Aggregate;
  /** fetch data from the table: "application_link_oracle_request" using primary key columns */
  application_link_oracle_request_by_pk?: Maybe<Application_Link_Oracle_Request>;
  /** fetch data from the table: "chain_link" */
  chain_link: Array<Chain_Link>;
  /** fetch aggregated fields from the table: "chain_link" */
  chain_link_aggregate: Chain_Link_Aggregate;
  /** fetch data from the table: "chain_link" using primary key columns */
  chain_link_by_pk?: Maybe<Chain_Link>;
  /** fetch data from the table: "chain_link_chain_config" */
  chain_link_chain_config: Array<Chain_Link_Chain_Config>;
  /** fetch aggregated fields from the table: "chain_link_chain_config" */
  chain_link_chain_config_aggregate: Chain_Link_Chain_Config_Aggregate;
  /** fetch data from the table: "chain_link_chain_config" using primary key columns */
  chain_link_chain_config_by_pk?: Maybe<Chain_Link_Chain_Config>;
  /** fetch data from the table: "chain_link_proof" */
  chain_link_proof: Array<Chain_Link_Proof>;
  /** fetch aggregated fields from the table: "chain_link_proof" */
  chain_link_proof_aggregate: Chain_Link_Proof_Aggregate;
  /** An array relationship */
  dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** An aggregate relationship */
  dtag_transfer_requests_aggregate: Dtag_Transfer_Requests_Aggregate;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll_answer" */
  poll_answer: Array<Poll_Answer>;
  /** fetch aggregated fields from the table: "poll_answer" */
  poll_answer_aggregate: Poll_Answer_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post_attachment" */
  post_attachment: Array<Post_Attachment>;
  /** fetch aggregated fields from the table: "post_attachment" */
  post_attachment_aggregate: Post_Attachment_Aggregate;
  /** fetch data from the table: "post_attachment" using primary key columns */
  post_attachment_by_pk?: Maybe<Post_Attachment>;
  /** fetch data from the table: "post_attachment_tag" */
  post_attachment_tag: Array<Post_Attachment_Tag>;
  /** fetch aggregated fields from the table: "post_attachment_tag" */
  post_attachment_tag_aggregate: Post_Attachment_Tag_Aggregate;
  /** fetch data from the table: "post_attribute" */
  post_attribute: Array<Post_Attribute>;
  /** fetch aggregated fields from the table: "post_attribute" */
  post_attribute_aggregate: Post_Attribute_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_reaction" */
  post_reaction: Array<Post_Reaction>;
  /** fetch aggregated fields from the table: "post_reaction" */
  post_reaction_aggregate: Post_Reaction_Aggregate;
  /** fetch data from the table: "post_report" */
  post_report: Array<Post_Report>;
  /** fetch aggregated fields from the table: "post_report" */
  post_report_aggregate: Post_Report_Aggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "profile_relationship" */
  profile_relationship: Array<Profile_Relationship>;
  /** fetch aggregated fields from the table: "profile_relationship" */
  profile_relationship_aggregate: Profile_Relationship_Aggregate;
  /** An array relationship */
  registered_reactions: Array<Registered_Reactions>;
  /** An aggregate relationship */
  registered_reactions_aggregate: Registered_Reactions_Aggregate;
  /** fetch data from the table: "user_block" */
  user_block: Array<User_Block>;
  /** fetch aggregated fields from the table: "user_block" */
  user_block_aggregate: User_Block_Aggregate;
  /** fetch data from the table: "user_poll_answer" */
  user_poll_answer: Array<User_Poll_Answer>;
  /** fetch aggregated fields from the table: "user_poll_answer" */
  user_poll_answer_aggregate: User_Poll_Answer_Aggregate;
};

export type Query_RootApplication_LinkArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

export type Query_RootApplication_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

export type Query_RootApplication_Link_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootApplication_Link_Oracle_RequestArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

export type Query_RootApplication_Link_Oracle_Request_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

export type Query_RootApplication_Link_Oracle_Request_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootChain_LinkArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

export type Query_RootChain_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

export type Query_RootChain_Link_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootChain_Link_Chain_ConfigArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
};

export type Query_RootChain_Link_Chain_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
};

export type Query_RootChain_Link_Chain_Config_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootChain_Link_ProofArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

export type Query_RootChain_Link_Proof_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

export type Query_RootDtag_Transfer_RequestsArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

export type Query_RootDtag_Transfer_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

export type Query_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};

export type Query_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};

export type Query_RootPoll_AnswerArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

export type Query_RootPoll_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

export type Query_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

export type Query_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

export type Query_RootPost_AttachmentArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

export type Query_RootPost_Attachment_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

export type Query_RootPost_Attachment_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootPost_Attachment_TagArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

export type Query_RootPost_Attachment_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

export type Query_RootPost_AttributeArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

export type Query_RootPost_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

export type Query_RootPost_By_PkArgs = {
  id: Scalars['String'];
};

export type Query_RootPost_ReactionArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

export type Query_RootPost_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

export type Query_RootPost_ReportArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

export type Query_RootPost_Report_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

export type Query_RootProfileArgs = {
  distinct_on?: Maybe<Array<Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Order_By>>;
  where?: Maybe<Profile_Bool_Exp>;
};

export type Query_RootProfile_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Order_By>>;
  where?: Maybe<Profile_Bool_Exp>;
};

export type Query_RootProfile_By_PkArgs = {
  address: Scalars['String'];
};

export type Query_RootProfile_RelationshipArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

export type Query_RootProfile_Relationship_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

export type Query_RootRegistered_ReactionsArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

export type Query_RootRegistered_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

export type Query_RootUser_BlockArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

export type Query_RootUser_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

export type Query_RootUser_Poll_AnswerArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

export type Query_RootUser_Poll_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

/** columns and relationships of "registered_reactions" */
export type Registered_Reactions = {
  __typename?: 'registered_reactions';
  height: Scalars['bigint'];
  owner_address: Scalars['String'];
  /** An object relationship */
  profile: Profile;
  short_code: Scalars['String'];
  subspace: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "registered_reactions" */
export type Registered_Reactions_Aggregate = {
  __typename?: 'registered_reactions_aggregate';
  aggregate?: Maybe<Registered_Reactions_Aggregate_Fields>;
  nodes: Array<Registered_Reactions>;
};

/** aggregate fields of "registered_reactions" */
export type Registered_Reactions_Aggregate_Fields = {
  __typename?: 'registered_reactions_aggregate_fields';
  avg?: Maybe<Registered_Reactions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Registered_Reactions_Max_Fields>;
  min?: Maybe<Registered_Reactions_Min_Fields>;
  stddev?: Maybe<Registered_Reactions_Stddev_Fields>;
  stddev_pop?: Maybe<Registered_Reactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Registered_Reactions_Stddev_Samp_Fields>;
  sum?: Maybe<Registered_Reactions_Sum_Fields>;
  var_pop?: Maybe<Registered_Reactions_Var_Pop_Fields>;
  var_samp?: Maybe<Registered_Reactions_Var_Samp_Fields>;
  variance?: Maybe<Registered_Reactions_Variance_Fields>;
};

/** aggregate fields of "registered_reactions" */
export type Registered_Reactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Registered_Reactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "registered_reactions" */
export type Registered_Reactions_Aggregate_Order_By = {
  avg?: Maybe<Registered_Reactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Registered_Reactions_Max_Order_By>;
  min?: Maybe<Registered_Reactions_Min_Order_By>;
  stddev?: Maybe<Registered_Reactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Registered_Reactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Registered_Reactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Registered_Reactions_Sum_Order_By>;
  var_pop?: Maybe<Registered_Reactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Registered_Reactions_Var_Samp_Order_By>;
  variance?: Maybe<Registered_Reactions_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Registered_Reactions_Avg_Fields = {
  __typename?: 'registered_reactions_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "registered_reactions" */
export type Registered_Reactions_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "registered_reactions". All fields are combined with a logical 'AND'. */
export type Registered_Reactions_Bool_Exp = {
  _and?: Maybe<Array<Registered_Reactions_Bool_Exp>>;
  _not?: Maybe<Registered_Reactions_Bool_Exp>;
  _or?: Maybe<Array<Registered_Reactions_Bool_Exp>>;
  height?: Maybe<Bigint_Comparison_Exp>;
  owner_address?: Maybe<String_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  short_code?: Maybe<String_Comparison_Exp>;
  subspace?: Maybe<String_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Registered_Reactions_Max_Fields = {
  __typename?: 'registered_reactions_max_fields';
  height?: Maybe<Scalars['bigint']>;
  owner_address?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "registered_reactions" */
export type Registered_Reactions_Max_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Registered_Reactions_Min_Fields = {
  __typename?: 'registered_reactions_min_fields';
  height?: Maybe<Scalars['bigint']>;
  owner_address?: Maybe<Scalars['String']>;
  short_code?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "registered_reactions" */
export type Registered_Reactions_Min_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  short_code?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "registered_reactions". */
export type Registered_Reactions_Order_By = {
  height?: Maybe<Order_By>;
  owner_address?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  short_code?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "registered_reactions" */
export enum Registered_Reactions_Select_Column {
  /** column name */
  Height = 'height',
  /** column name */
  OwnerAddress = 'owner_address',
  /** column name */
  ShortCode = 'short_code',
  /** column name */
  Subspace = 'subspace',
  /** column name */
  Value = 'value',
}

/** aggregate stddev on columns */
export type Registered_Reactions_Stddev_Fields = {
  __typename?: 'registered_reactions_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "registered_reactions" */
export type Registered_Reactions_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Registered_Reactions_Stddev_Pop_Fields = {
  __typename?: 'registered_reactions_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "registered_reactions" */
export type Registered_Reactions_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Registered_Reactions_Stddev_Samp_Fields = {
  __typename?: 'registered_reactions_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "registered_reactions" */
export type Registered_Reactions_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Registered_Reactions_Sum_Fields = {
  __typename?: 'registered_reactions_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "registered_reactions" */
export type Registered_Reactions_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Registered_Reactions_Var_Pop_Fields = {
  __typename?: 'registered_reactions_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "registered_reactions" */
export type Registered_Reactions_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Registered_Reactions_Var_Samp_Fields = {
  __typename?: 'registered_reactions_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "registered_reactions" */
export type Registered_Reactions_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Registered_Reactions_Variance_Fields = {
  __typename?: 'registered_reactions_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "registered_reactions" */
export type Registered_Reactions_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "application_link" */
  application_link: Array<Application_Link>;
  /** fetch aggregated fields from the table: "application_link" */
  application_link_aggregate: Application_Link_Aggregate;
  /** fetch data from the table: "application_link" using primary key columns */
  application_link_by_pk?: Maybe<Application_Link>;
  /** fetch data from the table: "application_link_oracle_request" */
  application_link_oracle_request: Array<Application_Link_Oracle_Request>;
  /** fetch aggregated fields from the table: "application_link_oracle_request" */
  application_link_oracle_request_aggregate: Application_Link_Oracle_Request_Aggregate;
  /** fetch data from the table: "application_link_oracle_request" using primary key columns */
  application_link_oracle_request_by_pk?: Maybe<Application_Link_Oracle_Request>;
  /** fetch data from the table: "chain_link" */
  chain_link: Array<Chain_Link>;
  /** fetch aggregated fields from the table: "chain_link" */
  chain_link_aggregate: Chain_Link_Aggregate;
  /** fetch data from the table: "chain_link" using primary key columns */
  chain_link_by_pk?: Maybe<Chain_Link>;
  /** fetch data from the table: "chain_link_chain_config" */
  chain_link_chain_config: Array<Chain_Link_Chain_Config>;
  /** fetch aggregated fields from the table: "chain_link_chain_config" */
  chain_link_chain_config_aggregate: Chain_Link_Chain_Config_Aggregate;
  /** fetch data from the table: "chain_link_chain_config" using primary key columns */
  chain_link_chain_config_by_pk?: Maybe<Chain_Link_Chain_Config>;
  /** fetch data from the table: "chain_link_proof" */
  chain_link_proof: Array<Chain_Link_Proof>;
  /** fetch aggregated fields from the table: "chain_link_proof" */
  chain_link_proof_aggregate: Chain_Link_Proof_Aggregate;
  /** An array relationship */
  dtag_transfer_requests: Array<Dtag_Transfer_Requests>;
  /** An aggregate relationship */
  dtag_transfer_requests_aggregate: Dtag_Transfer_Requests_Aggregate;
  /** fetch data from the table: "poll" */
  poll: Array<Poll>;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: Poll_Aggregate;
  /** fetch data from the table: "poll_answer" */
  poll_answer: Array<Poll_Answer>;
  /** fetch aggregated fields from the table: "poll_answer" */
  poll_answer_aggregate: Poll_Answer_Aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: Maybe<Poll>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post_attachment" */
  post_attachment: Array<Post_Attachment>;
  /** fetch aggregated fields from the table: "post_attachment" */
  post_attachment_aggregate: Post_Attachment_Aggregate;
  /** fetch data from the table: "post_attachment" using primary key columns */
  post_attachment_by_pk?: Maybe<Post_Attachment>;
  /** fetch data from the table: "post_attachment_tag" */
  post_attachment_tag: Array<Post_Attachment_Tag>;
  /** fetch aggregated fields from the table: "post_attachment_tag" */
  post_attachment_tag_aggregate: Post_Attachment_Tag_Aggregate;
  /** fetch data from the table: "post_attribute" */
  post_attribute: Array<Post_Attribute>;
  /** fetch aggregated fields from the table: "post_attribute" */
  post_attribute_aggregate: Post_Attribute_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_reaction" */
  post_reaction: Array<Post_Reaction>;
  /** fetch aggregated fields from the table: "post_reaction" */
  post_reaction_aggregate: Post_Reaction_Aggregate;
  /** fetch data from the table: "post_report" */
  post_report: Array<Post_Report>;
  /** fetch aggregated fields from the table: "post_report" */
  post_report_aggregate: Post_Report_Aggregate;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "profile_relationship" */
  profile_relationship: Array<Profile_Relationship>;
  /** fetch aggregated fields from the table: "profile_relationship" */
  profile_relationship_aggregate: Profile_Relationship_Aggregate;
  /** An array relationship */
  registered_reactions: Array<Registered_Reactions>;
  /** An aggregate relationship */
  registered_reactions_aggregate: Registered_Reactions_Aggregate;
  /** fetch data from the table: "user_block" */
  user_block: Array<User_Block>;
  /** fetch aggregated fields from the table: "user_block" */
  user_block_aggregate: User_Block_Aggregate;
  /** fetch data from the table: "user_poll_answer" */
  user_poll_answer: Array<User_Poll_Answer>;
  /** fetch aggregated fields from the table: "user_poll_answer" */
  user_poll_answer_aggregate: User_Poll_Answer_Aggregate;
};

export type Subscription_RootApplication_LinkArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

export type Subscription_RootApplication_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Order_By>>;
  where?: Maybe<Application_Link_Bool_Exp>;
};

export type Subscription_RootApplication_Link_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootApplication_Link_Oracle_RequestArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

export type Subscription_RootApplication_Link_Oracle_Request_AggregateArgs = {
  distinct_on?: Maybe<Array<Application_Link_Oracle_Request_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Application_Link_Oracle_Request_Order_By>>;
  where?: Maybe<Application_Link_Oracle_Request_Bool_Exp>;
};

export type Subscription_RootApplication_Link_Oracle_Request_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootChain_LinkArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

export type Subscription_RootChain_Link_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Order_By>>;
  where?: Maybe<Chain_Link_Bool_Exp>;
};

export type Subscription_RootChain_Link_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootChain_Link_Chain_ConfigArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
};

export type Subscription_RootChain_Link_Chain_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Chain_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Chain_Config_Order_By>>;
  where?: Maybe<Chain_Link_Chain_Config_Bool_Exp>;
};

export type Subscription_RootChain_Link_Chain_Config_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootChain_Link_ProofArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

export type Subscription_RootChain_Link_Proof_AggregateArgs = {
  distinct_on?: Maybe<Array<Chain_Link_Proof_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chain_Link_Proof_Order_By>>;
  where?: Maybe<Chain_Link_Proof_Bool_Exp>;
};

export type Subscription_RootDtag_Transfer_RequestsArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

export type Subscription_RootDtag_Transfer_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Dtag_Transfer_Requests_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dtag_Transfer_Requests_Order_By>>;
  where?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
};

export type Subscription_RootPollArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};

export type Subscription_RootPoll_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Order_By>>;
  where?: Maybe<Poll_Bool_Exp>;
};

export type Subscription_RootPoll_AnswerArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

export type Subscription_RootPoll_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Poll_Answer_Order_By>>;
  where?: Maybe<Poll_Answer_Bool_Exp>;
};

export type Subscription_RootPoll_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootPostArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Order_By>>;
  where?: Maybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_AttachmentArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

export type Subscription_RootPost_Attachment_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Order_By>>;
  where?: Maybe<Post_Attachment_Bool_Exp>;
};

export type Subscription_RootPost_Attachment_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootPost_Attachment_TagArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

export type Subscription_RootPost_Attachment_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachment_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attachment_Tag_Order_By>>;
  where?: Maybe<Post_Attachment_Tag_Bool_Exp>;
};

export type Subscription_RootPost_AttributeArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

export type Subscription_RootPost_Attribute_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attribute_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Attribute_Order_By>>;
  where?: Maybe<Post_Attribute_Bool_Exp>;
};

export type Subscription_RootPost_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_RootPost_ReactionArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

export type Subscription_RootPost_Reaction_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Reaction_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Reaction_Order_By>>;
  where?: Maybe<Post_Reaction_Bool_Exp>;
};

export type Subscription_RootPost_ReportArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

export type Subscription_RootPost_Report_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Report_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Report_Order_By>>;
  where?: Maybe<Post_Report_Bool_Exp>;
};

export type Subscription_RootProfileArgs = {
  distinct_on?: Maybe<Array<Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Order_By>>;
  where?: Maybe<Profile_Bool_Exp>;
};

export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Order_By>>;
  where?: Maybe<Profile_Bool_Exp>;
};

export type Subscription_RootProfile_By_PkArgs = {
  address: Scalars['String'];
};

export type Subscription_RootProfile_RelationshipArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

export type Subscription_RootProfile_Relationship_AggregateArgs = {
  distinct_on?: Maybe<Array<Profile_Relationship_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Profile_Relationship_Order_By>>;
  where?: Maybe<Profile_Relationship_Bool_Exp>;
};

export type Subscription_RootRegistered_ReactionsArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

export type Subscription_RootRegistered_Reactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Registered_Reactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Registered_Reactions_Order_By>>;
  where?: Maybe<Registered_Reactions_Bool_Exp>;
};

export type Subscription_RootUser_BlockArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

export type Subscription_RootUser_Block_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Block_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Block_Order_By>>;
  where?: Maybe<User_Block_Bool_Exp>;
};

export type Subscription_RootUser_Poll_AnswerArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
};

export type Subscription_RootUser_Poll_Answer_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Poll_Answer_Order_By>>;
  where?: Maybe<User_Poll_Answer_Bool_Exp>;
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

/** columns and relationships of "user_block" */
export type User_Block = {
  __typename?: 'user_block';
  blocked_user_address: Scalars['String'];
  blocker_address: Scalars['String'];
  height: Scalars['bigint'];
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileByBlockerAddress: Profile;
  reason?: Maybe<Scalars['String']>;
  subspace: Scalars['String'];
};

/** aggregated selection of "user_block" */
export type User_Block_Aggregate = {
  __typename?: 'user_block_aggregate';
  aggregate?: Maybe<User_Block_Aggregate_Fields>;
  nodes: Array<User_Block>;
};

/** aggregate fields of "user_block" */
export type User_Block_Aggregate_Fields = {
  __typename?: 'user_block_aggregate_fields';
  avg?: Maybe<User_Block_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Block_Max_Fields>;
  min?: Maybe<User_Block_Min_Fields>;
  stddev?: Maybe<User_Block_Stddev_Fields>;
  stddev_pop?: Maybe<User_Block_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Block_Stddev_Samp_Fields>;
  sum?: Maybe<User_Block_Sum_Fields>;
  var_pop?: Maybe<User_Block_Var_Pop_Fields>;
  var_samp?: Maybe<User_Block_Var_Samp_Fields>;
  variance?: Maybe<User_Block_Variance_Fields>;
};

/** aggregate fields of "user_block" */
export type User_Block_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Block_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_block" */
export type User_Block_Aggregate_Order_By = {
  avg?: Maybe<User_Block_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Block_Max_Order_By>;
  min?: Maybe<User_Block_Min_Order_By>;
  stddev?: Maybe<User_Block_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Block_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Block_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Block_Sum_Order_By>;
  var_pop?: Maybe<User_Block_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Block_Var_Samp_Order_By>;
  variance?: Maybe<User_Block_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Block_Avg_Fields = {
  __typename?: 'user_block_avg_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_block" */
export type User_Block_Avg_Order_By = {
  height?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_block". All fields are combined with a logical 'AND'. */
export type User_Block_Bool_Exp = {
  _and?: Maybe<Array<User_Block_Bool_Exp>>;
  _not?: Maybe<User_Block_Bool_Exp>;
  _or?: Maybe<Array<User_Block_Bool_Exp>>;
  blocked_user_address?: Maybe<String_Comparison_Exp>;
  blocker_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
  profileByBlockerAddress?: Maybe<Profile_Bool_Exp>;
  reason?: Maybe<String_Comparison_Exp>;
  subspace?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Block_Max_Fields = {
  __typename?: 'user_block_max_fields';
  blocked_user_address?: Maybe<Scalars['String']>;
  blocker_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  reason?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_block" */
export type User_Block_Max_Order_By = {
  blocked_user_address?: Maybe<Order_By>;
  blocker_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Block_Min_Fields = {
  __typename?: 'user_block_min_fields';
  blocked_user_address?: Maybe<Scalars['String']>;
  blocker_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  reason?: Maybe<Scalars['String']>;
  subspace?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_block" */
export type User_Block_Min_Order_By = {
  blocked_user_address?: Maybe<Order_By>;
  blocker_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  reason?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "user_block". */
export type User_Block_Order_By = {
  blocked_user_address?: Maybe<Order_By>;
  blocker_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
  profileByBlockerAddress?: Maybe<Profile_Order_By>;
  reason?: Maybe<Order_By>;
  subspace?: Maybe<Order_By>;
};

/** select columns of table "user_block" */
export enum User_Block_Select_Column {
  /** column name */
  BlockedUserAddress = 'blocked_user_address',
  /** column name */
  BlockerAddress = 'blocker_address',
  /** column name */
  Height = 'height',
  /** column name */
  Reason = 'reason',
  /** column name */
  Subspace = 'subspace',
}

/** aggregate stddev on columns */
export type User_Block_Stddev_Fields = {
  __typename?: 'user_block_stddev_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_block" */
export type User_Block_Stddev_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Block_Stddev_Pop_Fields = {
  __typename?: 'user_block_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_block" */
export type User_Block_Stddev_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Block_Stddev_Samp_Fields = {
  __typename?: 'user_block_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_block" */
export type User_Block_Stddev_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Block_Sum_Fields = {
  __typename?: 'user_block_sum_fields';
  height?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "user_block" */
export type User_Block_Sum_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Block_Var_Pop_Fields = {
  __typename?: 'user_block_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_block" */
export type User_Block_Var_Pop_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Block_Var_Samp_Fields = {
  __typename?: 'user_block_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_block" */
export type User_Block_Var_Samp_Order_By = {
  height?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Block_Variance_Fields = {
  __typename?: 'user_block_variance_fields';
  height?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_block" */
export type User_Block_Variance_Order_By = {
  height?: Maybe<Order_By>;
};

/** columns and relationships of "user_poll_answer" */
export type User_Poll_Answer = {
  __typename?: 'user_poll_answer';
  answer: Scalars['Int'];
  answerer_address: Scalars['String'];
  height: Scalars['bigint'];
  /** An object relationship */
  poll: Poll;
  poll_id: Scalars['Int'];
  /** An object relationship */
  profile: Profile;
};

/** aggregated selection of "user_poll_answer" */
export type User_Poll_Answer_Aggregate = {
  __typename?: 'user_poll_answer_aggregate';
  aggregate?: Maybe<User_Poll_Answer_Aggregate_Fields>;
  nodes: Array<User_Poll_Answer>;
};

/** aggregate fields of "user_poll_answer" */
export type User_Poll_Answer_Aggregate_Fields = {
  __typename?: 'user_poll_answer_aggregate_fields';
  avg?: Maybe<User_Poll_Answer_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Poll_Answer_Max_Fields>;
  min?: Maybe<User_Poll_Answer_Min_Fields>;
  stddev?: Maybe<User_Poll_Answer_Stddev_Fields>;
  stddev_pop?: Maybe<User_Poll_Answer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Poll_Answer_Stddev_Samp_Fields>;
  sum?: Maybe<User_Poll_Answer_Sum_Fields>;
  var_pop?: Maybe<User_Poll_Answer_Var_Pop_Fields>;
  var_samp?: Maybe<User_Poll_Answer_Var_Samp_Fields>;
  variance?: Maybe<User_Poll_Answer_Variance_Fields>;
};

/** aggregate fields of "user_poll_answer" */
export type User_Poll_Answer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Poll_Answer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_poll_answer" */
export type User_Poll_Answer_Aggregate_Order_By = {
  avg?: Maybe<User_Poll_Answer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Poll_Answer_Max_Order_By>;
  min?: Maybe<User_Poll_Answer_Min_Order_By>;
  stddev?: Maybe<User_Poll_Answer_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Poll_Answer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Poll_Answer_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Poll_Answer_Sum_Order_By>;
  var_pop?: Maybe<User_Poll_Answer_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Poll_Answer_Var_Samp_Order_By>;
  variance?: Maybe<User_Poll_Answer_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Poll_Answer_Avg_Fields = {
  __typename?: 'user_poll_answer_avg_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Avg_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_poll_answer". All fields are combined with a logical 'AND'. */
export type User_Poll_Answer_Bool_Exp = {
  _and?: Maybe<Array<User_Poll_Answer_Bool_Exp>>;
  _not?: Maybe<User_Poll_Answer_Bool_Exp>;
  _or?: Maybe<Array<User_Poll_Answer_Bool_Exp>>;
  answer?: Maybe<Int_Comparison_Exp>;
  answerer_address?: Maybe<String_Comparison_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  poll?: Maybe<Poll_Bool_Exp>;
  poll_id?: Maybe<Int_Comparison_Exp>;
  profile?: Maybe<Profile_Bool_Exp>;
};

/** aggregate max on columns */
export type User_Poll_Answer_Max_Fields = {
  __typename?: 'user_poll_answer_max_fields';
  answer?: Maybe<Scalars['Int']>;
  answerer_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Max_Order_By = {
  answer?: Maybe<Order_By>;
  answerer_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Poll_Answer_Min_Fields = {
  __typename?: 'user_poll_answer_min_fields';
  answer?: Maybe<Scalars['Int']>;
  answerer_address?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['bigint']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Min_Order_By = {
  answer?: Maybe<Order_By>;
  answerer_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "user_poll_answer". */
export type User_Poll_Answer_Order_By = {
  answer?: Maybe<Order_By>;
  answerer_address?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll?: Maybe<Poll_Order_By>;
  poll_id?: Maybe<Order_By>;
  profile?: Maybe<Profile_Order_By>;
};

/** select columns of table "user_poll_answer" */
export enum User_Poll_Answer_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  AnswererAddress = 'answerer_address',
  /** column name */
  Height = 'height',
  /** column name */
  PollId = 'poll_id',
}

/** aggregate stddev on columns */
export type User_Poll_Answer_Stddev_Fields = {
  __typename?: 'user_poll_answer_stddev_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Stddev_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Poll_Answer_Stddev_Pop_Fields = {
  __typename?: 'user_poll_answer_stddev_pop_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Stddev_Pop_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Poll_Answer_Stddev_Samp_Fields = {
  __typename?: 'user_poll_answer_stddev_samp_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Stddev_Samp_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Poll_Answer_Sum_Fields = {
  __typename?: 'user_poll_answer_sum_fields';
  answer?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['bigint']>;
  poll_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Sum_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Poll_Answer_Var_Pop_Fields = {
  __typename?: 'user_poll_answer_var_pop_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Var_Pop_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Poll_Answer_Var_Samp_Fields = {
  __typename?: 'user_poll_answer_var_samp_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Var_Samp_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Poll_Answer_Variance_Fields = {
  __typename?: 'user_poll_answer_variance_fields';
  answer?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  poll_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_poll_answer" */
export type User_Poll_Answer_Variance_Order_By = {
  answer?: Maybe<Order_By>;
  height?: Maybe<Order_By>;
  poll_id?: Maybe<Order_By>;
};

export type DesmosProfileQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;

export type DesmosProfileQuery = {
  profile: Array<
    { __typename?: 'profile' } & Pick<Profile, 'address' | 'bio' | 'dtag' | 'nickname'> & {
        profilePic: Profile['profile_pic'];
        coverPic: Profile['cover_pic'];
        creationTime: Profile['creation_time'];
      } & {
        chainLinks: Array<
          { __typename?: 'chain_link' } & {
            creationTime: Chain_Link['creation_time'];
            externalAddress: Chain_Link['external_address'];
          } & {
            chainConfig: { __typename?: 'chain_link_chain_config' } & Pick<
              Chain_Link_Chain_Config,
              'name'
            >;
          }
        >;
        applicationLinks: Array<
          { __typename?: 'application_link' } & Pick<
            Application_Link,
            'username' | 'application'
          > & { creationTime: Application_Link['creation_time'] }
        >;
      }
  >;
};

export type DesmosProfileLinkQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;

export type DesmosProfileLinkQuery = {
  profile: Array<
    { __typename?: 'profile' } & Pick<Profile, 'address' | 'bio' | 'dtag' | 'nickname'> & {
        profilePic: Profile['profile_pic'];
        coverPic: Profile['cover_pic'];
        creationTime: Profile['creation_time'];
      } & {
        chainLinks: Array<
          { __typename?: 'chain_link' } & {
            creationTime: Chain_Link['creation_time'];
            externalAddress: Chain_Link['external_address'];
          } & {
            chainConfig: { __typename?: 'chain_link_chain_config' } & Pick<
              Chain_Link_Chain_Config,
              'name'
            >;
          }
        >;
        applicationLinks: Array<
          { __typename?: 'application_link' } & Pick<
            Application_Link,
            'username' | 'application'
          > & { creationTime: Application_Link['creation_time'] }
        >;
      }
  >;
};

export type DesmosProfileDtagQueryVariables = Exact<{
  dtag?: Maybe<Scalars['String']>;
}>;

export type DesmosProfileDtagQuery = {
  profile: Array<
    { __typename?: 'profile' } & Pick<Profile, 'address' | 'bio' | 'dtag' | 'nickname'> & {
        profilePic: Profile['profile_pic'];
        coverPic: Profile['cover_pic'];
        creationTime: Profile['creation_time'];
      } & {
        chainLinks: Array<
          { __typename?: 'chain_link' } & {
            creationTime: Chain_Link['creation_time'];
            externalAddress: Chain_Link['external_address'];
          } & {
            chainConfig: { __typename?: 'chain_link_chain_config' } & Pick<
              Chain_Link_Chain_Config,
              'name'
            >;
          }
        >;
        applicationLinks: Array<
          { __typename?: 'application_link' } & Pick<
            Application_Link,
            'username' | 'application'
          > & { creationTime: Application_Link['creation_time'] }
        >;
      }
  >;
};
