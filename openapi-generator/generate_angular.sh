#!/bin/bash

rm -rf output
java -jar ./openapi-generator-cli-3.3.4.jar generate -i $1 -c options.json -g typescript-angular -o ./output/sources 
