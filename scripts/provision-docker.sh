#!/bin/sh

#TODO: ./env.vue: fixme? VUE_APP_ADDRESS_PREFIX=cosmos

set -e

echo "not finished"
exit 1


OUT_PATH=~/demo #TODO: Setup ./{docker,volumes,...} folders?
BIG_DIPPER_TAG=base-v1.10.1
BDJUNO_TAG=origin/v2/cosmos/stargate
ssh_key="~/.ssh/id_rsa_multivm"
[ -n "$3" ] && ssh_key="$3"
CONFIG_BDJUNO_SYNC_ENV_FROM=$4 #CONFIG_BDJUNO_CONFIG_PATH=
#CONFIG_HASURA_CONFIG_PATH=$5
CONFIG_BIG_DIPPER_ENV_PATH=$1
CONFIG_BIG_DIPPER_CHAIN_PATH=$2

if [ ! -d "$OUT_PATH" ]; then
	mkdir -p $OUT_PATH
else
	rm -rf $OUT_PATH
fi

git clone https://github.com/forbole/big-dipper-2.0-cosmos.git $OUT_PATH && cd $OUT_PATH && git checkout tags/$BIG_DIPPER_TAG -b base

#mv .env.sample .env
cat $CONFIG_BIG_DIPPER_ENV_PATH > .env
CONFIG_BIG_DIPPER_CHAIN_PATH_PATH=`./src/configs/chain_config.$(awk -F'=' '/^NEXT_PUBLIC_CHAIN_STATUS/ { print $2}' $CONFIG_BIG_DIPPER_ENV_PATH).json`
echo "chain: $CONFIG_BIG_DIPPER_CHAIN_PATH_PATH"
cat $CONFIG_BIG_DIPPER_CHAIN_PATH > $CONFIG_BIG_DIPPER_CHAIN_PATH_PATH
echo "configured"

args=""; for kv in $(grep -o "^[^#;]*" .env); do args+="--build-arg $kv "; done
docker build -t big-dipper-2.0 $args .
docker run --name big-dipper-app --rm -p 3000:3000 -d big-dipper-2.0
echo "dockerized"
