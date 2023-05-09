#!/bin/sh
docker build -t nicosala/El-Proyecte-Grande -f Dockerfile .
docker run --name El-proyecte-grande-app --rm -dp 8080:8080 nicosala/El-proyecte-grande