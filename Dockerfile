FROM node:alpine

RUN npm install request

COPY exec.js /exec.js
COPY server.js /server.js
