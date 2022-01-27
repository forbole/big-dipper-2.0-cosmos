#!/bin/bash
set -e


echo "initializing '$SERVICE_DB' db schema:"
schema_path=/docker-entrypoint-initdb.d/schema

for f in $schema_path/*.sql; do
	psql -v ON_ERROR_STOP=1 --username "$SERVICE_DB_USER" --dbname "$SERVICE_DB" -a -f $f
done
