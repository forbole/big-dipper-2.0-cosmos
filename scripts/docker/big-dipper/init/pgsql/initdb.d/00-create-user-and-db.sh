#!/bin/bash
set -e

user=$SERVICE_DB_USER
db=$SERVICE_DB
dbPassword=$SERVICE_DB_PASSWORD
echo "user: $user; db: $db; pwd: $dbPassword"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "CREATE USER $user ENCRYPTED PASSWORD '$dbPassword';"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "CREATE DATABASE $db;"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" -c "GRANT ALL PRIVILEGES ON DATABASE $db TO $user;"

#sudo -u postgres psql -c 'alter user $user with createdb' postgres
#createdb -p 5432 -U $user $db
