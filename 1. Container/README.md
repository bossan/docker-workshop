# Running an existing image

## Pull an image from Docker hub

Run the following command:

```bash
docker pull hello-world:latest
```

- `pull` because we want to download (pull) the image from Docker Hub.
- `hello-world`: the name of the image
- `latest`: the tag/version of the image (we want the newest version)

## List your local images

Run the following command:

```bash
docker images
```

## Run the image

Run the following command:

```bash
docker run hello-world
```

- `run`: because we want to run a container
- `hello-world`: is the name of the image we downloaded earlier

## Watch it run

The output should look something like:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## Delete an image

Images take up some space on your drive. It is wise to clean up unused images. You can do this with the following command:

```bash
docker rmi hello-world
```

- `rmi`: because we want to remove an image
- `hello-world`: this is the name of the image we want to remove.
