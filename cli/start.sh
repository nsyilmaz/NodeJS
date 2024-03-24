

docker-compose  -f db/docker-compose.yml --env-file db/docker.env  up -d

docker-compose  -f app/docker-compose.yml   up -d

docker ps -a