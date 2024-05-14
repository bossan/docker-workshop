# Docker Compose

## Prerequisites

1. Clone this repository `git clone https://github.com/bossan/docker-workshop`
2. Go to the folder **docker-workshop/examples/docker_compose**.

## The docker-compose file

Look at the [docker-compose.yml](/examples/docker_compose/docker-compose.yml) file.

It contains the following information:

### `version`

The version of the docker-compose file format we want to use. There are different versions so it is wise to specify which version you want to use in case there is an update.

### `services`

The services (containers) we want to run. In this case it is:

- mongodb: the database using an existing image
- web: our web app that we created with our own Dockerfile

### `volumes`

Volumes are a place to store data. We use it to store the data from our database. This way we can keep the data even if the container with the database is deleted or upgraded.

## Start the environment

Run the following command to start the services:

```bash
docker compose up -d
```

- `compose` because we want to use a docker-compose file
- `up` to start the services
- `-d` to run it in 'detached' mode (runs in the background)

## Check running containers

Run the following command to see which containers are currently running:

```bash
docker ps
```

## Open the app

Go to [http://localhost:3000](http://localhost:3000) to use the app. You can use the Swagger UI to interact with the API.

> Using play-with-docker? Instead of opening localhost:3000 you should click on the "OPEN PORT" button and fill in `3000`. This should open a new page with the application.

## Stop the running containers

You can **stop** and **REMOVE** all containers with:

```bash
docker compose down
```

Or you can just **stop** them (without removing) using:

```bash
docker compose stop
```
