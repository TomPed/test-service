FROM node:alpine

RUN npm install request

COPY exec.js /exec.js
COPY sever.js /server.js
