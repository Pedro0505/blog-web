#!/bin/bash
services=("blog-web-test" "blog-api-test" "blog-mongodb-test")

all_running=true

for service in "${services[@]}"; do
    if docker ps --filter "name=$service" --format "{{.Names}}" | grep -q "$service"; then
        echo "$service está em execução"
    else
        echo "$service não está em execução"
        all_running=false
    fi
done

if [ "$all_running" = true ]; then
    docker-compose -f docker-compose.test.yml exec -T blog-web-test npx cypress run
else
    docker-compose -f docker-compose.test.yml down --rmi all --volumes --remove-orphans
    docker-compose -f docker-compose.test.yml up --build -d
    docker-compose -f docker-compose.test.yml exec -T blog-web-test npx cypress run
fi
