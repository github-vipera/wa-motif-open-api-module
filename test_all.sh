#!/bin/bash

for projectfile in ./projects/wa-motif-open-api/*/
do
	PROJECT="@wa-motif-open-api/`basename $projectfile`"
	echo ""
	echo "*** Testing project $PROJECT ***"
	echo ""
	ng test --watch=false $PROJECT
done
