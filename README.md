# MyDiary Microservices Application

A full-stack microservices diary application built using Spring Boot, JWT authentication, API Gateway, Docker, and MySQL.

## Architecture

Frontend → API Gateway → User Service / Diary Service → MySQL

## Technologies Used

- Java 17
- Spring Boot
- Spring Security
- JWT
- Spring Cloud Gateway
- MySQL
- Docker
- Docker Compose
- HTML/CSS/JavaScript

## Features

- User Registration
- User Login
- JWT Authentication
- Add Diary
- View Diaries
- Edit Diary
- Delete Diary
- Dockerized Microservices

## Services

### User Service
Handles:
- registration
- login
- JWT generation

### Diary Service
Handles:
- diary CRUD operations

### API Gateway
Handles:
- routing
- JWT validation

## Run Using Docker

```bash
docker compose up
```

Frontend:

```text
http://localhost:3000/pages/login.html
```
