#!/bin/bash

docker run -it -v $PWD:/swag --rm openapitools/openapi-generator-cli generate -i /swag/swagger.yaml -g python-flask -o /swag/backend/api

