# APPLICATION CARTEL

## Grade related things :

If there is any need about translation please retched us by Discord or by mail.
As asked in your post there is 3 working features, a complex CI (Database related actions), somme unit test, a dockerfile, a docker-compose (Database) and a ReadMe. 

## Warning
 Only dev & release branches should be evaluate.
 The other branches aren't part of evaluation.
 
## Description

This is a simple application to manage a multi sport school event. It's made by EMA'IT an shall not be used only in an
open source project !!!

Volunteers can manage (create, edit, delete) volunteers, schools, places, events and scores of an event.

The goal is to provide a mobile app for all competitors to see the results of the events.

## Features

This webapp expose the feature to create and manage the resources used for school sport events, you can find :
- Places management [localhost:8080/place.html](http://localhost:8080/place.html)
- School management [localhost:8080/school.html](http://localhost:8080/school.html)
- Weather indications [localhost:8080/weather.html](http://localhost:8080/weather.html)

## EXTERNAL WHEATHER API

### ACCESS

You can access and try the weather API at [localhost:8080/weather.html](http://localhost:8080/weather.html)

## CI/CD Description

### Github Actions

Our CI is based on tree actions

- Push on a branch

Can be triggered by a push or manually, this actions will create a postgres database docker, based on a volume, the
database will be created and configured by prisma. After what Jest is gone a run tests and keep coverage data.

- Merge requests

Can be triggered by a PR or manually, this actions will create a postgres database docker, based on a volume, the
database will be created and configured by prisma. After what Jest is gone a run tests and keep coverage data.

- Tag for release

Can be triggered by a tag push with name matching [v|V]* or manually, this actions will create a postgres database
docker, based on a volume, the database will be created and configured by prisma. After what Jest is gone a run tests
and keep coverage data. If tests are successful a Docker image will be built and push on dockerHub. A new branch named
by the TAG will be created and a release will be pushed on GitHub.

Our CI is running each time there is a push, a pull request or a release

### Merge Condition

To be able to merge, the distant branch needs to pass all checks of the CI
(The merge requests isn't really block, due to gitHub policies abouts organization. The repo is hosted on EMA'IT organization account some features are disabled due to new pricing policies)

### Unit Tests

Unit tests are part of the CI checks

## How to run it

You can run it by yourself with docker or without.
First clone this repository in a local folder.
Then open a terminal in this folder.

### Without docker

```shell
npm install 
npx prisma generate
npx prisma db push
npm run dev 
```

 *note: be sure to have npm installed on your computer*
 *and be sure to have a postgres DB running on your system, should be accessible on 5432*


### With docker

```shell
docker-compose up 
```

### Project Setup

With a running db on 5432

```shell
npm install
npx prisma generate
run: npx prisma db push
```


#### Run Unit Tests with Jest

```shell
npm run test
```
