#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "usage: $0 <yaml_file_path> NewModuleName"
	exit 1
fi

rm -rf output
java -jar ./openapi-generator-cli-3.3.4.jar generate -i $1 -c options.json -g typescript-angular -o ./output/sources 

echo Patching generated files
cp output/sources/index.ts output/sources/index.ts.bak
echo "export * from './lib/index';" > output/sources/index.ts
sed -i.bak "s/ApiModule/$2/g" output/sources/api.module.ts

for service in output/sources/api/*.service.ts
do
	sed -i.bak 's/Inject(BASE_PATH)/Inject(WC_API_BASE_PATH)/g' $service
	sed -i.bak "s/import { BASE_PATH, COLLECTION_FORMATS } *from '\.\.\/variables';/import { WC_API_BASE_PATH } from 'web-console-core';/g" $service
done

echo Done
