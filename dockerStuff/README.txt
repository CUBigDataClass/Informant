Directory for Docker-compose files
Each directory contains the compose file for their respective names
There will be a single docker-compose.yml file later that configs all of these technologies together

*Make sure you run these commands in the directory where the docker-compose.yml file is located

To start a docker using the docker-compose config file, type the command:
docker-compose up -d

The -d flag means to run the container in the background, you can take it out if you want to run the container in the foreground.

To see the docker containers, type the command:
docker ps -a

To stop the containers from running:
docker-compose stop

To remove a specific container:
docker rm [NAME OF CONTAINER]

To delete all docker containers:
docker-compose down

To go into a container:
docker exec -it [NAME OF CONTAINER] bash

Docker documentation for further commands:
https://docs.docker.com/

