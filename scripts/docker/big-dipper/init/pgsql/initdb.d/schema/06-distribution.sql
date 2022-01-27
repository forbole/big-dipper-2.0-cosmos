CREATE TYPE DEC_COIN AS
(
    denom  TEXT,
    amount TEXT
);

/* ---- PARAMS ---- */

CREATE TABLE distribution_params
(
    one_row_id BOOLEAN NOT NULL DEFAULT TRUE PRIMARY KEY,
    params     JSONB   NOT NULL,
    height     BIGINT  NOT NULL,
    CHECK (one_row_id)
);
CREATE INDEX distribution_params_height_index ON distribution_params (height);


/* ---- COMMUNITY POOL ---- */

CREATE TABLE community_pool
(
    one_row_id bool PRIMARY KEY DEFAULT TRUE,
    coins      DEC_COIN[] NOT NULL,
    height     BIGINT     NOT NULL,
    CONSTRAINT one_row_uni CHECK (one_row_id)
);
CREATE INDEX community_pool_height_index ON community_pool (height);

/* ---- VALIDATOR COMMISSION AMOUNTS ---- */

CREATE TABLE validator_commission_amount
(
    validator_address TEXT       NOT NULL REFERENCES validator (consensus_address) PRIMARY KEY,
    amount            DEC_COIN[] NOT NULL,
    height            BIGINT     NOT NULL
);
CREATE INDEX validator_commission_amount_height_index ON validator_commission_amount (height);

/* ---- DELEGATOR REWARDS AMOUNTS ---- */

CREATE TABLE delegation_reward
(
    validator_address TEXT       NOT NULL REFERENCES validator (consensus_address),
    delegator_address TEXT       NOT NULL REFERENCES account (address),
    withdraw_address  TEXT       NOT NULL,
    amount            DEC_COIN[] NOT NULL,
    height            BIGINT     NOT NULL,
    CONSTRAINT delegation_reward_validator_delegator_unique UNIQUE (validator_address, delegator_address)
);
CREATE INDEX delegation_reward_delegator_address_index ON delegation_reward (delegator_address);
CREATE INDEX delegation_reward_height_index ON delegation_reward (height);