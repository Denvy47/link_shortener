#!/bin/sh

npm i
cd client && npm i && cd ..
npm run client:build