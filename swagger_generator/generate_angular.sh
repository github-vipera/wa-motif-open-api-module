#!/bin/bash

java -jar ./swagger-codegen-cli.jar generate -i $1 -l typescript-angular -o ./output/sources 
