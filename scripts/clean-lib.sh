#!/usr/bin/env bash
# filename: clean-lib.sh

current="$(pwd)/lib"
echo $current

if [ -d "$current" ]
then
    echo "Directory exists!"
    rm -rf "$current"
    echo "Directory is gone now!"
else
    echo "Directory doesn't exist!"
fi

index="$(pwd)/index.js"
echo $index

if [ -f "$index" ]
then
    echo "Index file exists!"
    rm -f "$index"
    echo "Index file is gone now!"
else
    echo "Index file doesn't exist!"
fi

index="$(pwd)/index.d.ts"
echo $index

if [ -f "$index" ]
then
    echo "Declarations file exists!"
    rm -f "$index"
    echo "Declarations file is gone now!"
else
    echo "Declarations file doesn't exist!"
fi