#!/bin/sh
cd $(dirname $0)

kill -9 `lsof -i TCP:49323 | awk '/LISTEN/ {print $2}'`

#..\..\TtwPlatform-Binary--Linux-Ubuntu/Binary/NodeJS/exes100 --expose-gc ./HTTPServer_WebPage.js 49323
exes100 /data/data/com.termux/files/home/Application/Development-Components-UI/HTTPServer_WebPage/HTTPServer_WebPage.js 49323