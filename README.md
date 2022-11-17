# Big Dipper 2.0 ✨ (Cosmos Based Chains)

Big Dipper is an open-source block explorer and token management tool serving over 10 proof-of-stake blockchains. It has been forked more than 100 times on GitHub and has served audiences from 140 countries and regions.

This repo contains the **UI of Big Dipper 2.0** only. Read our official documentation at [http://docs.bigdipper.live/](http://docs.bigdipper.live/)

## Developer Guide

### Build and start using Docker

To build and run the application, you can use the [existing Docker Compose specification file](docker-compose.yml) or modify it to your needs:

```bash
docker compose up --detach
```

If you don't want to use Docker Compose for the build, you can also invoke this using just the Docker CLI:

```bash
docker build . --target runner -t bigdipper:local
```

To start the service, without doing a local build (for example, if you're already built an image previously), you can use:

```bash
docker compose up --detach --no-build
```

### Build and start using Yarn

This app can only be built and run using Yarn. Trying to use NPM doesn't work since dependency resolution works differently in NPM.

```bash
yarn install
yarn build
```

To start, you would need to provide environment variables. This would be easier to do in Docker instead.

```bash
yarn start
```

## Issue Reporting

For UI related issues please report it here [https://github.com/forbole/big-dipper-2.0-cosmos/issues](https://github.com/forbole/big-dipper-2.0-cosmos/issues).

For Hasura and BdJuno issues please report it here [https://github.com/forbole/bdjuno/issues](https://github.com/forbole/bdjuno/issues)

## License

Read our license at [https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE](https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE)

## Ledger and Transaction Support

While Big Dipper 2.0 no longer supports ledger or any kind of transactions in favor of [Forbole X](https://github.com/forbole/forbole-x), the original [Big Dipper](https://github.com/forbole/big-dipper) will continue have this feature.
