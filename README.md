# cicd-pipeline
# Lab 3 — Continuous Integration and Delivery using Jenkins

This repository contains my practical DevOps lab for building a CI/CD pipeline with Jenkins and Docker.

The main goal of this task was to configure a Jenkins pipeline that builds, tests and deploys a containerized React application.

---

## Project Overview

The application is a React-based project that can be installed, tested, built and started using npm scripts.

The project includes:

- React application source code
- Dockerfile for containerization
- Jenkinsfile for CI/CD automation
- Branch-based deployment logic for `main` and `dev`
- Docker container deployment on different local ports

---

## Technologies Used

- Jenkins
- Jenkins Pipeline
- Docker
- Node.js
- React
- Git / GitHub
- Windows-based Jenkins environment
- Docker CLI

---

## What I Implemented

In this lab I configured a Jenkins Pipeline that performs the following steps:

1. Checks out the source code from GitHub.
2. Builds a Docker image from the application source code.
3. Runs tests inside a Docker container.
4. Creates a final Docker image depending on the branch.
5. Deploys the application as a running Docker container.
6. Uses different container names and ports for different branches.

---

## Branch-based Deployment Logic

The Jenkins pipeline uses different deployment settings depending on the Git branch:

| Branch | Docker Image | Container Name | Host Port |
|---|---|---|---|
| `main` | `nodemain:latest` | `nodemain` | `3000` |
| `dev` | `nodedev:latest` | `nodedev` | `3001` |

This allowed me to practice a simple environment separation between main and development deployments.

---

## Dockerfile

The application is containerized using a Dockerfile based on Node.js.

The Dockerfile:

- sets a working directory;
- copies `package.json`;
- installs npm dependencies;
- copies the project files;
- exposes port `3000`;
- starts the application with `npm run start`.

---

## Jenkins Pipeline Stages

The pipeline contains the following stages:

### 1. Checkout

Pulls the source code from the GitHub repository.

### 2. Build

Builds an initial Docker image for the current branch.

### 3. Test

Runs application tests inside a temporary Docker container.

### 4. Build Docker Image

Creates the final branch-specific Docker image.

### 5. Deploy

Stops and removes the previous container if it exists, then starts a new container with the correct name and port.

---

## How to Run Locally

Build the Docker image manually:

```bash
docker build -t react-jenkins-app .
```

Run the container:

```bash
docker run -d --name react-jenkins-app -p 3000:3000 react-jenkins-app
```

Open in browser:

```text
http://localhost:3000
```

---

## What I Practiced

- Jenkins Pipeline syntax
- Jenkinsfile structure
- Docker image build process
- Running tests inside containers
- Branch-based deployment logic
- Container replacement during deployment
- Troubleshooting Jenkins on Windows
- Working with GitHub repository as Pipeline source

---

## Result

The final result is a working Jenkins CI/CD pipeline that builds, tests and deploys a React application inside Docker containers.

This project demonstrates practical CI/CD experience with Jenkins, Docker, GitHub and branch-based deployment logic.
