# Make your own image

## Prerequisites

1. Clone this repository `git clone https://github.com/bossan/docker-workshop`
2. Go to the folder **docker-workshop/examples/dockerfile**.

## Build an image from the Dockerfile

Run the following command to build an image:

```bash
docker build -t workshop-app .
```

- `build`: because we want to build the image
- `-t workshop-app`: 'tags' the image, so it has a readable name
- `.` means we select the Dockerfile in the current directory

## Run the container

Run the following command to start the container:

```bash
docker run -d -p 3000:3000 workshop-app
```

- `run`: because we want to run a container
- `-d`: to run it in 'detached' mode (runs in the background)
- `-p 3000:3000`: means we enable port-forwarding from port `3000` on our local computer to `3000` in the container
- `workshop-app`: the tag of the image we created earlier

## Check running containers

Run the following command:

```bash
docker ps
```

## Open the app

Go to [http://localhost:3000](http://localhost:3000) to see what the app does.

> Using play-with-docker? Instead of opening localhost:3000 you should click on the "OPEN PORT" button and fill in `3000`. This should open a new page with the application.

## Run even more containers

It is possible to run multiple containers based on the same image. You can use the following command to start another container:

```bash
docker run -d -p 3001:3000 --name second-container workshop-app
```

- `run`: because we want to run a container
- `-d`: to run it in 'detached' mode (runs in the background)
- `-p 3001:3000`: means we enable port-forwarding from port `3001` on our local computer to `3000` in the container. (Port `3000` is already in use by the other container).
- `--name second-container`: we can give the container a nice name instead of Docker automatically generating a name for us.
- `workshop-app`: the name of the image we created earlier

## Stop the running containers

Before we continue to the next step, you should stop all running containers.

First check which containers are running with:

```bash
docker ps
```

This should look something like:

```text
CONTAINER ID   IMAGE            COMMAND                  CREATED          STATUS          PORTS                    NAMES
9123b9d77e25   workshop-app     "docker-entrypoint.s…"   3 seconds ago    Up 2 seconds    0.0.0.0:3001->3000/tcp   second-container
c529fce32424   workshop-app     "docker-entrypoint.s…"   14 seconds ago   Up 13 seconds   0.0.0.0:3000->3000/tcp   dreamy_swirles
```

Now you can stop each container by specifying the ID:

```bash
docker stop c529fce32424
```

- `stop`: because we want to stop the container
- `c529fce32424`: because it is the ID of the container (this is different on your machine)

Or

```bash
docker stop second-container
```

- `stop`: because we want to stop the container
- `second-container`: because it is the name of the container we created

## Starting containers again

After stopping a container it is not gone. You can restart the container. For example:

```bash
docker start second-container
```

- `start`: because we want to start the container
- `second-container`: because we want to start this container again.

## Deleting containers

If you want to delete a container, you can do so with the following command:

```bash
docker rm second-container
```

- `rm`: because we want to delete a container
- `second-container`: because we want to delete this specific container.

> Note: You cannot delete a running container.
