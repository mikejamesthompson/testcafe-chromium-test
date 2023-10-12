FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add chromium

COPY package.json package-lock.json ./
RUN npm install

COPY index.html test.js test.sh ./