---
external: false
draft: false
title: How to run AWS App Runner
description: This post is a draft and won't be built.
date: 2022-11-22
categories:
  - web-development
---

## Create Registry on ECR

Just click some buttons as ECR explains.

## Run docker container locally

To make sure the Dockerfile works as you expect.

### Write Dockerfile

In the backend folder:

```docker
FROM node:16

## Create app directory
WORKDIR /usr/src/app

## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied
## where available (npm@5+)
COPY package*.json ./

RUN npm install
## If you are building your code for production
## RUN npm ci --omit=dev

## Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
```

### Build Docker image using the Dockerfile above

```jsx
docker build . -t yuto/express-docker
```

### Run container

```jsx
docker run -p 8080:8080 -d yuto/express-docker
```

This command can specify the port number, so it is a better way than doing it on the Docker App.

```jsx
docker run -p 8080:8080 -v $(pwd):/app yuto/express-docker3
```

The above command lets you mount your current code dynamically. This is better.

### Access on Chrome

[http://localhost:8080/](http://localhost:8080/)

## Setup AWS CLI

### Install AWS CLI

[https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)

```jsx
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```

### Configure AWS CLI

```jsx
aws configure
```

### Get keys on IAM Users page

In the "User details" page, you can see the existing access keys under the "Security credentials" tab. If there are no access keys, you can create a new access key pair by clicking on the "Create access key" button.

## Push local docker image to ECR

1. Obtain an authentication token and authenticate your Docker client to your registry. Use the AWS CLI:

   ```
   aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 544914028607.dkr.ecr.ap-northeast-1.amazonaws.com
   ```

   Note: If you encounter an error while using the AWS CLI, make sure you have the latest versions of AWS CLI and Docker installed.

2. Use the following command to build a Docker image. For instructions on how to build a Docker file from scratch, refer to the "[click here](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)" guide. If you already have an image built, skip this step.

   ```
   docker build -t bookstore .
   ```

3. Once the build is complete, tag the image so it can be pushed to this repository.

   ```
   docker tag bookstore:latest 544914028607.dkr.ecr.ap-northeast-1.amazonaws.com/bookstore:latest
   ```

4. Run the following command to push the newly created AWS repository image:

   ```
   docker push 544914028607.dkr.ecr.ap-northeast-1.amazonaws.com/bookstore:latest
   ```

If the last process gives you an error that "no basic auth credentials", you need to log in using the first step again.

## App Runner

Just select the Docker image pushed on ECR as mentioned
