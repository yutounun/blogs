---
external: false
draft: false
title: Deploying a Full-Stack Monorepo Application with Express and React on AWS App Runner
description: This post is a draft and won't be built.
date: 2023-02-25
categories:
  - web development
---

## Introduction

AWS App Runner provides an easy and efficient way to deploy containerized applications quickly. In this tutorial, you will learn how to deploy a full-stack monorepo application with Express as the backend and React as the frontend using AWS App Runner.

## Prerequisites

Before you begin, make sure you have:

1. An AWS account. If you don't have one, sign up at https://aws.amazon.com/.
2. Pushed your monorepo to a Git repository (GitHub, GitLab, or Bitbucket).

## Step 1: Prepare the backend (Express)

In your Express backend directory, create a `Dockerfile` with the following content:

```
# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
```

Replace `3001` with the port your Express app is using, if different.

## Step 2: Prepare the frontend (React)

In your React frontend directory, create a `Dockerfile` with the following content:

```
# Build stage
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:1.21.0

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

This Dockerfile uses a multi-stage build. The first stage builds the React app, and the second stage serves the static files using the Nginx web server.

## Step 3: Create AWS App Runner services

1. Sign in to the AWS Management Console.
2. Open the AWS App Runner console at https://console.aws.amazon.com/apprunner.
3. Click "Create service" to start the service creation wizard.
4. In the "Source" section, choose "Repository" and connect your Git repository (GitHub, GitLab, or Bitbucket).
5. Select the branch you want to deploy.
6. In the "Build settings" section, choose "Custom" and provide the build command and output path. For the backend, the build command should be `docker build -t backend -f backend/Dockerfile .`, and the output path should be `backend`. For the frontend, the build command should be `docker build -t frontend -f frontend/Dockerfile .`, and the output path should be `frontend`. Create two services with their respective build settings.
7. Configure the rest of the settings, such as the service name, instance size, and auto-scaling settings.
8. Click "Create & deploy" to create and deploy the service.

Once the services are created and deployed, AWS App Runner will provide a default URL for each service. Update your frontend app's API calls to point to the backend service's URL.

Your full-stack app should now be deployed on AWS App Runner, with the frontend and backend running as separate services. Enjoy the simplicity and scalability of your new cloud-based application!
