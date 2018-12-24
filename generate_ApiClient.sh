#!/bin/bash
docker run -it -v $PWD:/swag --rm swaggerapi/swagger-codegen-cli generate -i /swag/swagger.yaml -l typescript-angular -o /swag/frontend/ApiClient -c /swag/client-options.json
