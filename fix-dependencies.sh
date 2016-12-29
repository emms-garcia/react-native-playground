#!/usr/bin/env bash

# To fix https://github.com/facebook/react-native/issues/4968

if [ -d "$1" ]; then
  echo "Fixing dependencies for $1."
  cd $1
  watchman watch-del-all
  rm -rf node_modules
  npm install
  rm -rf $TMPDIR/react-*
else
  echo "Directory $1 not found."
fi
