CREATE TABLE validator_signing_info
(
    validator_address     TEXT                        NOT NULL PRIMARY KEY,
    start_height          BIGINT                      NOT NULL,
    index_offset          BIGINT                      NOT NULL,
    jailed_until          TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    tombstoned            BOOLEAN                     NOT NULL,
    missed_blocks_counter BIGINT                      NOT NULL,
    height                BIGINT                      NOT NULL
);
CREATE INDEX validator_signing_info_height_index ON validator_signing_info (height);

CREATE TABLE slashing_params
(
    one_row_id BOOLEAN NOT NULL DEFAULT TRUE PRIMARY KEY,
    params     JSONB   NOT NULL,
    height     BIGINT  NOT NULL,
    CHECK (one_row_id)
);
CREATE INDEX slashing_params_height_index ON slashing_params (height);