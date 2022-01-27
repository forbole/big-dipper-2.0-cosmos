#!/bin/bash

#(cd ../../planet/planet && docker run -ti -w /app -v $NET_WORKSPACE_ROOT/sdh:/home/tendermint -v $NET_WORKSPACE_ROOT/planet/planet:/app -p 1317:1317 -p 26659:26659 starport/cli chain serve)
(cd ../../planet/planet && ../../sdh/starport chain build --home $NET_WORKSPACE_ROOT/sdh -o $NET_WORKSPACE_ROOT/sdh/build/planetd -v)
$NET_WORKSPACE_ROOT/sdh/build/planetd --help
#(cd ../../planet/planet && ../../sdh/build/planet/planetd --home $NET_WORKSPACE_ROOT/sdh --log_level info start > out.log 2>&1 &)
docker-compose up -d postgres
admin_secret=ZEhCekxYUmxjM1E9
#docker-compose run 3-1-hasura-cli-docker init big-dipper-app  --endpoint http://172.19.0.3:8081 --admin-secret $admin_secret
docker-compose run -d 3-hasura
exit 0
#docker-compose run 3-1-hasura-cli-docker apply metadata big-dipper-app  --endpoint http://172.19.0.3:8081
docker-compose stop 3-hasura && docker-compose run -d 3-hasura
args=""; for kv in $(grep -o "^[^#;]*" ../../big-dipper/.env); do args+="--build-arg $kv "; done
docker-compose build $args 4-big-dipper-app
docker-compose up -d 4-big-dipper-app

exit 0

docker build --build-arg NEXT_PUBLIC_GRAPHQL_URL="https://gql.morpheus.desmos.network/v1/graphql" \
	--build-arg NEXT_PUBLIC_GRAPHQL_WS="wss://gql.morpheus.desmos.network/v1/graphql" \
	--build-arg NEXT_PUBLIC_URL="https://morpheus.desmos.network" \
	--build-arg NEXT_PUBLIC_WS_CHAIN_URL="wss://rpc.morpheus.desmos.network/websocket" \
	--build-arg NEXT_PUBLIC_CHAIN_STATUS="testnet" \
	--build-arg NODE_ENV="production" \
	--build-arg PORT=3000 \
	--tag big-dipper-2.0-cosmos:latest .

docker container run --name big-dipper-ui --rm -p 3000:3000 big-dipper-2.0-cosmos:latest
