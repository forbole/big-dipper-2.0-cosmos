/* ---- TOKENS ---- */

CREATE TABLE token
(
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE token_unit
(
    token_name TEXT NOT NULL REFERENCES token (name),
    denom      TEXT NOT NULL UNIQUE,
    exponent   INT  NOT NULL,
    aliases    TEXT[],
    price_id   TEXT
);


/* ---- TOKEN PRICES ---- */

CREATE TABLE token_price
(
    /* Needed for the below token_price function to work properly */
    id         SERIAL                      NOT NULL PRIMARY KEY,

    unit_name  TEXT                        NOT NULL REFERENCES token_unit (denom) UNIQUE,
    price      DECIMAL                     NOT NULL,
    market_cap BIGINT                      NOT NULL,
    timestamp  TIMESTAMP WITHOUT TIME ZONE NOT NULL
);
CREATE INDEX token_price_timestamp_index ON token_price (timestamp);

/**
  * This function is used to have a Hasura compute field (https://hasura.io/docs/1.0/graphql/core/schema/computed-fields.html)
  * inside the account_balance table, so that it's easy to determine the token price that is associated with that balance.
 */
CREATE FUNCTION account_balance_tokens_prices(account_balance_row account_balance) RETURNS SETOF token_price AS
$$
SELECT id, unit_name, price, market_cap, timestamp
FROM (
         SELECT DISTINCT ON (unit_name) unit_name, id, price, market_cap, timestamp
         FROM (
                  SELECT *
                  FROM token_price
                  ORDER BY timestamp DESC
              ) AS prices
     ) as prices
$$ LANGUAGE sql STABLE;

CREATE TABLE token_price_history
(
    id         SERIAL                      NOT NULL PRIMARY KEY,
    unit_name  TEXT                        NOT NULL REFERENCES token_unit (denom),
    price      DECIMAL                     NOT NULL,
    market_cap BIGINT                      NOT NULL,
    timestamp  TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    CONSTRAINT unique_price_for_timestamp UNIQUE (unit_name, timestamp)
);
CREATE INDEX token_price_history_timestamp_index ON token_price_history (timestamp);
