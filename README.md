# Nest JS - Open Search application

## Description

Nest JS example application with Open Search connectivity.

## Data Setup

Run below commands in Open Search Dashboard to setup the data:

```bash
PUT /characters

PUT /characters/_doc/1
{
  "id": 1,
  "name": "Rhaenyra Targaryen",
  "quote": "First Queen."
}

PUT /characters/_doc/2
{
  "id": 2,
  "name": "Daemon Targaryen",
  "quote": "You cannot live your life in fear, or you will forsake the best parts of it."
}

PUT /characters/_doc/3
{
  "id": 3,
  "name": "Corlys Velaryon",
  "quote": "Our worth is not given. it must be made."
}
```

## Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Test

```bash
curl --location 'http://localhost:3000'
```

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## Useful commands

Used following commands to bootstrap this project:

```bash
npm install --global yarn

nest new nestjs-os

cd nestjs-os

yarn add @opensearch-project/opensearch
yarn add @nestjs/config

nest generate library opensearch
```
