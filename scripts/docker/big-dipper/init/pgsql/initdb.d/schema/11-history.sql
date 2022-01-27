CREATE TABLE account_balance_history
(
    address      TEXT       NOT NULL REFERENCES account (address),
    balance      COIN[]     NOT NULL DEFAULT '{}',
    delegated    COIN[]     NOT NULL DEFAULT '{}',
    unbonding    COIN[]     NOT NULL DEFAULT '{}',
    redelegating COIN[]     NOT NULL DEFAULT '{}',
    commission   DEC_COIN[] NOT NULL DEFAULT '{}',
    reward       DEC_COIN[] NOT NULL DEFAULT '{}',
    timestamp    TIMESTAMP WITHOUT TIME ZONE,
    CONSTRAINT unique_balance_for_height UNIQUE (address, timestamp)
);
CREATE INDEX account_balance_history_timestamp_index ON account_balance_history (timestamp);

/**
  * This function is used to have a Hasura compute field (https://hasura.io/docs/1.0/graphql/core/schema/computed-fields.html)
  * inside the account_balance table, so that it's easy to determine the token price that is associated with that balance.
 */
CREATE FUNCTION account_balance_history_tokens_prices(balance_row account_balance_history) RETURNS SETOF token_price_history AS
$$
SELECT id, unit_name, price, market_cap, timestamp
FROM (
         SELECT DISTINCT ON (unit_name) unit_name, id, price, market_cap, timestamp
         FROM (
                  SELECT *
                  FROM token_price_history
                  WHERE timestamp <= balance_row.timestamp
                  ORDER BY timestamp DESC
              ) AS prices
     ) as prices
$$ LANGUAGE sql STABLE;