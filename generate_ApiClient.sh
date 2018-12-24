#!/bin/bash
#docker run -it -v $PWD:/swag --rm swaggerapi/swagger-codegen-cli generate -i /swag/swagger.yaml -l typescript-angular -o /swag/frontend/ApiClient -c /swag/client-options.json

docker run -it -v $PWD:/swag --rm openapitools/openapi-generator-cli generate -i /swag/swagger.yaml -g typescript-angular -o /swag/frontend/ApiClient -c /swag/client-options.json
