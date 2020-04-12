#!/bin/bash

# we gzip up all files so that they are smaller
cd ./web-client/
rm -Rf dist_gzip/
rsync -a --progress dist/ dist_gzip/
gzip -9fr dist_gzip/
FILES=`find dist_gzip`
for FILE in $FILES; do
    NEW_FILE=${FILE/.gz/}
    if [ "${FILE}" != "${NEW_FILE}" ]; then
        mv ${FILE} ${NEW_FILE}
    fi;
done;
