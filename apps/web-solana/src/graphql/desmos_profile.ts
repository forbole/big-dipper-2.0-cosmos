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
  ScriptId = 'script_id'
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
  Username = 'username'
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
  Name = 'name'
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
  Signature = 'signature'
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
  UserAddress = 'user_address'
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
  SenderAddress = 'sender_address'
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
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  address: Scalars['String'];
  /** An array relationship */
  application_links: Array<Application_Link>;
  /** An aggregate relationship */
  application_links_aggregate: Application_Link_Aggregate;
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
  application_links?: Maybe<Application_Link_Bool_Exp>;
  bio?: Maybe<String_Comparison_Exp>;
  chain_links?: Maybe<Chain_Link_Bool_Exp>;
  cover_pic?: Maybe<String_Comparison_Exp>;
  creation_time?: Maybe<Timestamp_Comparison_Exp>;
  dtag?: Maybe<String_Comparison_Exp>;
  dtagTransferRequestsBySenderAddress?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
  dtag_transfer_requests?: Maybe<Dtag_Transfer_Requests_Bool_Exp>;
  height?: Maybe<Bigint_Comparison_Exp>;
  nickname?: Maybe<String_Comparison_Exp>;
  profileRelationshipsBySenderAddress?: Maybe<Profile_Relationship_Bool_Exp>;
  profile_pic?: Maybe<String_Comparison_Exp>;
  profile_relationships?: Maybe<Profile_Relationship_Bool_Exp>;
  registered_reactions?: Maybe<Registered_Reactions_Bool_Exp>;
  userBlocksByBlockerAddress?: Maybe<User_Block_Bool_Exp>;
  user_blocks?: Maybe<User_Block_Bool_Exp>;
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
  application_links_aggregate?: Maybe<Application_Link_Aggregate_Order_By>;
  bio?: Maybe<Order_By>;
  chain_links_aggregate?: Maybe<Chain_Link_Aggregate_Order_By>;
  cover_pic?: Maybe<Order_By>;
  creation_time?: Maybe<Order_By>;
  dtag?: Maybe<Order_By>;
  dtagTransferRequestsBySenderAddress_aggregate?: Maybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  dtag_transfer_requests_aggregate?: Maybe<Dtag_Transfer_Requests_Aggregate_Order_By>;
  height?: Maybe<Order_By>;
  nickname?: Maybe<Order_By>;
  profileRelationshipsBySenderAddress_aggregate?: Maybe<Profile_Relationship_Aggregate_Order_By>;
  profile_pic?: Maybe<Order_By>;
  profile_relationships_aggregate?: Maybe<Profile_Relationship_Aggregate_Order_By>;
  registered_reactions_aggregate?: Maybe<Registered_Reactions_Aggregate_Order_By>;
  userBlocksByBlockerAddress_aggregate?: Maybe<User_Block_Aggregate_Order_By>;
  user_blocks_aggregate?: Maybe<User_Block_Aggregate_Order_By>;
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
  Subspace = 'subspace'
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
  ProfilePic = 'profile_pic'
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
  Value = 'value'
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
  Subspace = 'subspace'
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

export type DesmosProfileQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type DesmosProfileQuery = { profile: Array<(
    { __typename?: 'profile' }
    & Pick<Profile, 'address' | 'bio' | 'dtag' | 'nickname'>
    & { profilePic: Profile['profile_pic'], coverPic: Profile['cover_pic'], creationTime: Profile['creation_time'] }
    & { chainLinks: Array<(
      { __typename?: 'chain_link' }
      & { creationTime: Chain_Link['creation_time'], externalAddress: Chain_Link['external_address'] }
      & { chainConfig: (
        { __typename?: 'chain_link_chain_config' }
        & Pick<Chain_Link_Chain_Config, 'name' | 'id'>
      ) }
    )>, applicationLinks: Array<(
      { __typename?: 'application_link' }
      & Pick<Application_Link, 'username' | 'application'>
      & { creationTime: Application_Link['creation_time'] }
    )> }
  )> };

export type DesmosProfileLinkQueryVariables = Exact<{
  address?: Maybe<Scalars['String']>;
}>;


export type DesmosProfileLinkQuery = { profile: Array<(
    { __typename?: 'profile' }
    & Pick<Profile, 'address' | 'bio' | 'dtag' | 'nickname'>
    & { profilePic: Profile['profile_pic'], coverPic: Profile['cover_pic'], creationTime: Profile['creation_time'] }
    & { chainLinks: Array<(
      { __typename?: 'chain_link' }
      & { creationTime: Chain_Link['creation_time'], externalAddress: Chain_Link['external_address'] }
      & { chainConfig: (
        { __typename?: 'chain_link_chain_config' }
        & Pick<Chain_Link_Chain_Config, 'name' | 'id'>
      ) }
    )>, applicationLinks: Array<(
      { __typename?: 'application_link' }
      & Pick<Application_Link, 'username' | 'application'>
      & { creationTime: Application_Link['creation_time'] }
    )> }
  )> };
