#!/bin/sh
docker login
docker build -t el-proyecte-grande -f Dockerfile .
docker run --name el-proyecte-grande-app --rm -dp 8080:8080 el-proyecte-grande
docker run -itd -e POSTGRES_USER=b-fit-db -e POSTGRES_PASSWORD=password -p 5000:5000 -v /data:/var/lib/postgresql/data --name b-fit-db postgres