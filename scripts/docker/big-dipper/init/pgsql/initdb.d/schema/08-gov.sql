CREATE TABLE gov_params
(
    one_row_id     BOOLEAN NOT NULL DEFAULT TRUE PRIMARY KEY,
    deposit_params JSONB   NOT NULL,
    voting_params  JSONB   NOT NULL,
    tally_params   JSONB   NOT NULL,
    height         BIGINT  NOT NULL,
    CHECK (one_row_id)
);

CREATE TABLE proposal
(
    id                INTEGER   NOT NULL PRIMARY KEY,
    title             TEXT      NOT NULL,
    description       TEXT      NOT NULL,
    content           JSONB     NOT NULL,
    proposal_route    TEXT      NOT NULL,
    proposal_type     TEXT      NOT NULL,
    submit_time       TIMESTAMP NOT NULL,
    deposit_end_time  TIMESTAMP,
    voting_start_time TIMESTAMP,
    voting_end_time   TIMESTAMP,
    proposer_address  TEXT      NOT NULL REFERENCES account (address),
    status            TEXT
);
CREATE INDEX proposal_proposer_address_index ON proposal (proposer_address);

CREATE TABLE proposal_deposit
(
    proposal_id       INTEGER REFERENCES proposal (id) NOT NULL,
    depositor_address TEXT REFERENCES account (address),
    amount            COIN[],
    height            BIGINT,
    CONSTRAINT unique_deposit UNIQUE (proposal_id, depositor_address)
);
CREATE INDEX proposal_deposit_proposal_id_index ON proposal_deposit (proposal_id);
CREATE INDEX proposal_deposit_depositor_address_index ON proposal_deposit (depositor_address);
CREATE INDEX proposal_deposit_depositor_height_index ON proposal_deposit (height);

CREATE TABLE proposal_vote
(
    proposal_id   INTEGER NOT NULL REFERENCES proposal (id),
    voter_address TEXT    NOT NULL REFERENCES account (address),
    option        TEXT    NOT NULL,
    height        BIGINT  NOT NULL,
    CONSTRAINT unique_vote UNIQUE (proposal_id, voter_address)
);
CREATE INDEX proposal_vote_proposal_id_index ON proposal_vote (proposal_id);
CREATE INDEX proposal_vote_voter_address_index ON proposal_vote (voter_address);
CREATE INDEX proposal_vote_height_index ON proposal_vote (height);

CREATE TABLE proposal_tally_result
(
    proposal_id  INTEGER REFERENCES proposal (id) PRIMARY KEY,
    yes          TEXT NOT NULL,
    abstain      TEXT NOT NULL,
    no           TEXT NOT NULL,
    no_with_veto TEXT NOT NULL,
    height       BIGINT NOT NULL,
    CONSTRAINT unique_tally_result UNIQUE (proposal_id)
);
CREATE INDEX proposal_tally_result_proposal_id_index ON proposal_tally_result (proposal_id);
CREATE INDEX proposal_tally_result_height_index ON proposal_tally_result (height);

CREATE TABLE proposal_staking_pool_snapshot
(
    proposal_id       INTEGER REFERENCES proposal (id) PRIMARY KEY,
    bonded_tokens     BIGINT NOT NULL,
    not_bonded_tokens BIGINT NOT NULL,
    height            BIGINT NOT NULL,
    CONSTRAINT unique_staking_pool_snapshot UNIQUE (proposal_id)
);
CREATE INDEX proposal_staking_pool_snapshot_proposal_id_index ON proposal_staking_pool_snapshot (proposal_id);

CREATE TABLE proposal_validator_status_snapshot
(
    id                SERIAL PRIMARY KEY NOT NULL,
    proposal_id       INTEGER REFERENCES proposal (id),
    validator_address TEXT               NOT NULL REFERENCES validator (consensus_address),
    voting_power      BIGINT             NOT NULL,
    status            INT                NOT NULL,
    jailed            BOOLEAN            NOT NULL,
    height            BIGINT             NOT NULL,
    CONSTRAINT unique_validator_status_snapshot UNIQUE (proposal_id, validator_address)
);
CREATE INDEX proposal_validator_status_snapshot_proposal_id_index ON proposal_validator_status_snapshot (proposal_id);
CREATE INDEX proposal_validator_status_snapshot_validator_address_index ON proposal_validator_status_snapshot (validator_address);