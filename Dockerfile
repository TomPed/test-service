FROM node:alpine

RUN npm install request

COPY exec.js /exec.js
COPY http.js /http.js
COPY event.js /event.js
