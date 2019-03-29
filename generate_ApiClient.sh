#!/bin/bash

docker run -it -v $PWD:/swag --rm openapitools/openapi-generator-cli generate -i /swag/swagger.yaml -g typescript-angular -o /swag/frontend/ApiClient -c /swag/client-options.json
