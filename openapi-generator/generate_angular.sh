#!/bin/bash

java -jar ./openapi-generator-cli.jar generate -i $1 -c options.json -g typescript-angular -o ./output/sources 
