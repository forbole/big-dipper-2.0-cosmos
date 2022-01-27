/* ---- PARAMS ---- */

CREATE TABLE mint_params
(
    one_row_id BOOLEAN NOT NULL DEFAULT TRUE PRIMARY KEY,
    params     JSONB   NOT NULL,
    height     BIGINT  NOT NULL,
    CHECK (one_row_id)
);

/* ---- INFLATION ---- */

CREATE TABLE inflation
(
    one_row_id bool PRIMARY KEY DEFAULT TRUE,
    value      DECIMAL NOT NULL,
    height     BIGINT  NOT NULL,
    CONSTRAINT one_row_uni CHECK (one_row_id)
);
CREATE INDEX inflation_height_index ON inflation (height);