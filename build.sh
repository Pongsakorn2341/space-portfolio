#!/bin/sh

# # docker build . -t pongsakorn2341/pongsakorn-portfolio
# docker build . -t pongsakorn2341/pongsakorn-portfolio --platform linux/amd64


# docker tag pongsakorn2341/pongsakorn-portfolio pongsakorn2341/pongsakorn-portfolio:latest
# docker push pongsakorn2341/pongsakorn-portfolio

# Ensure the script exits if any command fails
# set -e

# # Define the image name
IMAGE_NAME="pongsakorn2341/pongsakorn-portfolio"

# docker build --platform linux/amd/64 -t $IMAGE_NAME --push .
docker build -t $IMAGE_NAME .


docker tag $IMAGE_NAME $IMAGE_NAME:latest

docker push $IMAGE_NAME

# # Create and use a new builder instance
# docker buildx create --use --name mybuilder
# docker buildx inspect mybuilder --bootstrap

# # Build and push the multi-architecture image
# docker buildx build --platform linux/amd64,linux/arm64 -t $IMAGE_NAME --push .

# # Remove the builder instance
# docker buildx rm mybuilder
