# Distributed Job Engine

## Overview

A scalable NestJS microservices job engine using GraphQL, gRPC, and Apache Pulsar. Designed for distributed job processing with JWT authentication and Kubernetes deployment, enabling efficient and reliable workload management.

## Features

- Distributed job processing
- GraphQL and gRPC communication
- JWT authentication
- Kubernetes-ready deployment
- Horizontal scaling
- Apache Pulsar message queue

## Prerequisites

- Node.js 18+
- Docker
- K8
- Nx CLI
- Pulsar

## Quickstart

```bash
# Clone the repository
git clone {repo}

# Install dependencies
npm install

# Run development server
nx serve jobber-auth
nx serve jobber-jobs

```

## Architecture

- Monorepo: Nx Workspace
- Backend: NestJS
- API: GraphQL & gRPC
- Message Queue: Apache Pulsar
- Authentication: JWT
- ORM: Prisma
- Deployment: Docker, Kubernetes
