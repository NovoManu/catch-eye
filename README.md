# Catch Eye Game

Simple fun game made with VueJS 3, TypeScript and Composition API

The project is using vue-automatic-router package created by the author which replace vue router.
https://www.npmjs.com/package/vue-automatic-router

It's also using advanced layout system.
The additional information about vue-automatic-router and layouts could be found here:
https://manuustenko.medium.com/

The project doesn't have backend part and store user scores in localStorage.

## Prerequisites

- Docker (optional)
- Docker-compose (optional)
- NodeJS 12+
- Pre commit (optional)

### Docker installation

https://docs.docker.com/get-docker/

### Docker-compose installation

https://docs.docker.com/compose/install/

### Node js installation

https://nodejs.org/en/download/

### Pre-commit installation

- Install pre-commit package to local machine following the next instructions https://pre-commit.com/#installation
- Execute `pre-commit install`
- Now, once you commit your changes to git it will watch for lint rules

## Project setup

### NodeJS modules installation

It needs to install nodeJS modules for your project

```
npm install
```

### Start project with Docker

- Build the project

`$ docker-compose build .`

- Start the project

`$ docker-compose up`

- It will start your project on http//:localhost:8080

### Start project localy

```
npm run serve
```

- It will start your project on http//:localhost:8080

### Run your unit tests

```
npm run test
```
