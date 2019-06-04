#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "usage: $0 <yaml_file_path>"
	exit 1
fi

yaml=$1
service=$(basename -- $1)
serviceFolder="${service%.*}"
module="${serviceFolder}Module"

echo Module: $module

rm -rf output
java -jar ./openapi-generator-cli-*.jar generate -i $yaml -c options.json -g typescript-angular -o ./output/sources 

echo Patching generated files
cp output/sources/index.ts output/sources/index.ts.bak
echo "export * from './lib/index';" > output/sources/index.ts
sed -i.bak "s/ApiModule/$module/g" output/sources/api.module.ts

for service in output/sources/api/*.service.ts
do
	sed -i.bak 's/Inject(BASE_PATH)/Inject(WC_API_BASE_PATH)/g' $service
	sed -i.bak "s/import { BASE_PATH, COLLECTION_FORMATS } *from '\.\.\/variables';/import { WC_API_BASE_PATH } from 'web-console-core';/g" $service
done

read -p 'Update apis and models of existing service? ' update
if [ "$update" == "y" ] || [ "$update" == "Y" ]; then
	if [[ $serviceFolder =~ [^[:alpha:]] ]]; then
		PS3='Choose service to update: '
		select sf in ../projects/wa-motif-open-api/*-service; do
			serviceFolder=$sf
			break
		done
	else
		serviceFolder=$(echo $serviceFolder | sed 's/\(.\)\([A-Z]\)/\1-\2/g' | tr '[:upper:]' '[:lower:]')
		serviceFolder="../projects/wa-motif-open-api/${serviceFolder}"
		echo Guessed service folder: $serviceFolder
	fi		

	rm -rf $serviceFolder/src/lib/model
	cp -R output/sources/model $serviceFolder/src/lib/model
	cp -R output/sources/api $serviceFolder/src/lib/apinew
	cp $serviceFolder/src/lib/api/*.spec.ts $serviceFolder/src/lib/apinew
	rm -rf $serviceFolder/src/lib/api
	mv $serviceFolder/src/lib/apinew $serviceFolder/src/lib/api
	rm -rf $serviceFolder/src/lib/api/*.bak
fi

echo Done
