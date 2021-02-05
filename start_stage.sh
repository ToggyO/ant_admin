#/bin/bash
export $(cat .env.staging | xargs)
docker-compose -f docker-compose.stage.yml up -d --build
export $(cat clean.env | xargs)
