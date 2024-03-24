

docker-compose  -f app/docker-compose.yml   down



docker-compose  -f db/docker-compose.yml --env-file db/docker.env down

docker ps -a