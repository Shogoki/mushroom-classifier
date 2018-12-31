#!/bin/bash
#docker run -it -v $PWD:/swag --rm swaggerapi/swagger-codegen-cli generate -i /swag/swagger.yaml -l python-flask -o /swag/backend

docker run -it -v $PWD:/swag --rm openapitools/openapi-generator-cli generate -i /swag/swagger.yaml -g python-flask -o /swag/backend/api

#docker run -it -v $PWD:/swag --rm openapitools/openapi-generator-cli generate -i /swag/swagger.yaml -g typescript-angular -o /swag/frontend/ApiClient -c /swag/client-options.json