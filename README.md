# Deployment node application using docker

## Install docker to your system.

You can download [Docker][1] here.

[1]: https://www.docker.com/get-started 'Docker'

## Create Dockerfile

Docker run on instruction written in dockerfile. you can create a dockerfile (**Dockerfile**) at root of your project and add instruction in it. Instruction must start with 'FORM'. The 'FORM' instruction specify the base Image from which you are building.

```
From node:8

#Create app directory
RUN mkdir -p /app

#Define working directory
WORKDIR /app

#Copy package.json to working directory from your root folder. If you have package.lock.json you can use wild card to copy both files.
#Copy package*.json /app/
COPY package.json /app/

#Install your packages
RUN npm install

#Copy all the application code to your working directory
COPY . /app/

#Run your build once container is launched

CMD ["npm", "run", "build"]
```

## Docker ignore file

Docker images should contains only files which required to run the build so that image size should be small and clean. We can do stop copying extra files in docker image by creating dockerignore file. Its similar to gitignore.

Before the docker CLI sends the context to the docker daemon, it looks for a file named .dockerignore in the root directory of the context. If this file exists, the CLI modifies the context to exclude files and directories that match patterns in it. This helps to avoid unnecessarily sending large or sensitive files and directories to the daemon and potentially adding them to images using ADD or COPY.

Simpy create a **.dockerignore** file at your application root and all the list of files or folder which you don't want to be part of your docker images.

```
#Ignore these files or folders
node_modules
docs
logs
```

## Docker commands

### Build/Create docker image

```
$ docker build -t <imageName>:TagName .

Example
$ docker build -t fb1:v1 .
```

### List/View docker images

```
$ docker images ls
```

### Delete docker images

```
$ docker rmi <imageId>
or
$ docker rmi <imageId>  --force

Example
$ docker rmi fbcd23f
```

### List/View files/folder inside docker images

```
$ docker run -it <imageName>:<tagName> sh

Example
$docker run -it fb1:v1 sh
ls
cd <folderName>
exit
```

### Launch Docker container

```
$ docker run -p <public port no>:<app running port no> imageId:tagName

Example
$ docker run -p 9090:3000 fb1:v1
```

### List all the running containers

```
$ docker container ls
```

### Stop/Kill running container

```
$ docker container stop <containerId>

Example
$ docker container stop ffccdd33w

$docker container kill <containerId>

Example
$ docker container kill ffccdd33w
```
